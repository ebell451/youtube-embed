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
        gcTime: Infinity,
	});
</script>

{#if $query.isSuccess}
    <div class="flex ">
        <p>Views: {$query.data?.viewCount}</p>
        <p class="ml-auto mr-3">Likes: {$query.data?.likes}</p>
        <p>Dislikes: {$query.data?.dislikes}</p>
    </div>
{:else if $query.isError}
    <p>{$query.error.message}</p>
{:else}
    <!-- <p>Loading...</p> -->
    <div></div>
{/if}