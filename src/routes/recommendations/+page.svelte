<script lang="ts">
</script>



<main class="max-w-5xl mx-auto p-2 mt-16">
    
    <h1 class="text-4xl font-bold underline decoration-4">
        Reccomendations
    </h1>
    <p class="mt-4">
        Reccomendations for tools to use alongside this site:
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
    
</main>

<br class="mb-[100vh]">

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