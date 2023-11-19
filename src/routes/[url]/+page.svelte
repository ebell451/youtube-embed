<script>
	import { page } from '$app/stores';
	import { createQuery } from '@tanstack/svelte-query';
	import { onMount } from 'svelte';

	let videoId = $page.url.searchParams.toString().substring(2);

	const query = createQuery({
		queryKey: ['snippet', videoId],
		queryFn: () => {
			return fetch(`https://yt.lemnoslife.com/noKey/videos?part=snippet&id=${videoId}`)
				.then((r) => r.json())
				.then((r) => {
					console.log(r);
					console.log('HII', r.items[0].snippet);
					return r.items[0].snippet;
				});
		}
	});

    $: title = $query.data?.title
</script>

<main class="max-w-5xl mx-auto p-2">
    <br>
	<div class="youtube-embed-wrapper">
		<iframe
            class="outline-none"
			width="100%"
			height="100%"
			src="https://www.youtube.com/embed/{videoId}"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		></iframe>
	</div>
    <h1 class="text-xl font-bold">
        {#if $query.isLoading}
		    Loading Title...
        {:else if $query.isError}
            Error fetching title: {$query.error.message}
        {:else if $query.isSuccess}
            {title}
        {/if}
    </h1>
</main>

<svelte:head>
    {#if $query.isSuccess}
        <title>{title} - YT</title>
    {:else}
        <title>{videoId}</title>
    {/if}
</svelte:head>

<style>
	.youtube-embed-wrapper {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
	}
	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
