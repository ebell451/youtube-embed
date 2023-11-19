<script lang="ts">
	import { createQuery } from "@tanstack/svelte-query";

    export let videoId: string;

    const query = createQuery({
		queryKey: ['rytdl', videoId],
		queryFn: () => {
			return fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${videoId}`)
				.then((r) => r.json())
                .then((r) => {
                    console.log("Return Youtube Dislikes API Result", r)
                    return r;
                })
		},
        staleTime: 1000 * 60* 15, //might change this
	});

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
    });
    $: views = formatter.format($query.data?.viewCount);
    $: likes = formatter.format($query.data?.likes);
    $: dislikes = formatter.format($query.data?.dislikes);
</script>

{#if $query.isSuccess}
    <div class="flex ">
        <p>Views: {views}</p>
        <p class="ml-auto mr-3">Likes: {likes}</p>
        <p>Dislikes: {dislikes}</p>
    </div>
{:else if $query.isError}
    <p>{$query.error.message}</p>
{:else}
    <!-- <p>Loading...</p> -->
    <div></div>
{/if}