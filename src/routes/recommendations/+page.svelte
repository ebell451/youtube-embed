<script lang="ts">
	import { sendAnalyticsEvent } from "$lib/analytics";
	import { onMount } from "svelte";


    onMount(() => {
        sendAnalyticsEvent("loadedRecommendationsPage");
    })
</script>



<main class="max-w-5xl mx-auto p-2 pt-16">
    
    <h1 class="text-4xl font-bold underline decoration-4">
        Recommendations
    </h1>
    <p class="mt-4">
        Recommendations for tools to use alongside this site:
    </p>

    <ul class="mt-8 list-disc pl-5">
        <li>
            <p>
                <a href="https://github.com/gorhill/uBlock" target="_blank" rel="noreferrer noopener">
                    Ublock Origin
                </a> 
                to block ads, trackers, and onscreen elements</p>
        </li>
        <li class="md:ml-20 ml-8">
            <p>
                Filter to block "related videos" popup when you pause: <br>
                <span class="quote">www.youtube.com##.ytp-pause-overlay</span> 
            </p>
        </li>

        <li class="mt-4">
            <p>
                <a href="https://sponsor.ajay.app/" target="_blank" rel="noreferrer noopener">
                    SponsorBlock
                </a>
                to skip over sponsors
            </p>
        </li>
    </ul>

    <br>
    <br>
    
    <h1 class="text-4xl font-bold underline decoration-4 mb-4">
        Information
    </h1>

    <p>
        To check if you are signed in while on this site (and therefore influencing your youtube algorithm if you have watch history on), 
        right click on the video and click account. My testing shows this works in chrome but not brave or firefox due to cookie isolation.
    </p>
    <p>
        The embed has "privacy enhanced mode" set to disabled.
    </p>

    <br>

    
    <p>
        This site includes google analytics (but it will be blocked by ublock origin or many other adblockers). 
        Also includes Cloudflare Web Analytics.
    </p>
    <p>
        I've also included my own analytics that ublock won't block by default. It sends a randomly generated clientId (saved in localstorage) to my servers about what you do: namely what pages you visit and if you stay on a video page for 1, 5, or 10 minutes. I don't include what specific videos you watch, just that you're watching something.
        I just want an idea if anyone is using my app yk, tracking this stuff is actually standard practice on the web as far as I can tell.
    </p>
    <p>
        You can opt out of this by adding analytics.cloudflare-473.workers.dev to your blocklist. Check back here in case the url changes haha.
    </p>
    <br>
    <p>
        This site is currently free for me to host at any scale (due to the core functionality being run as an SPA / client side only, and cloudflare pages offering a free cdn), so I will keep it running as long as I can.
    </p>
    
    <br>
    <br>
</main>

<!-- <br class="mb-[100vh]"> -->

<svelte:head>
    <title>Recommendations - Youtube Embed Viewer</title>
    <meta name="description" content="Recommended tools / extensions to use along side youtube or Youtube Embed Viewer">
</svelte:head>

<style>
    main {
        font-size: 1.5rem;
    }
    a {
        @apply text-emerald-400 underline;
    }
    .quote {
        @apply rounded-md px-1 py-0 w-fit;
        background-color: rgb(48, 48, 48);
    }
</style>