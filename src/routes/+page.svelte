<script lang="ts">
	// import SearchBar from "./SearchBar.svelte";

</script>



<main class="max-w-5xl mx-auto p-2 mt-16">

    
    <h1 class="text-4xl font-bold underline decoration-4">
        Youtube Embed Viewer
    </h1>

    <p class="mt-4">
        To use, simply add 
        "<span class="bg-stone-700 rounded-md px-0.5 py-0">.ttools.io</span>"
        to the end of your youtube url
    </p>
    <p class="bg-black rounded-md px-3 py-1 w-fit mt-1">
        <span class="text-neutral-400">https://www.youtube.com</span><span class="text-green-400 font-bold">.ttools.io</span><span class="text-neutral-400">/watch?v=dQw4w9WgXcQ</span>
    </p>

    <!-- <p class="mt-4">Or paste the url here:</p>
    <SearchBar />
    TODO
    -->

    <br>
    <br>
    


    
    <p class="mt-4">
        This website is for whenever you need to view a youtube video as an embedded frame,
    </p>
    <p>
        For instance if the official youtube website is not working, or it is asking you to turn off your adblocker. 
    </p>
    <p>As an added bonus you can also see the estimated dislike count of each video thanks to the  Return Youtube Dislike API. Maybe I will add more features too if I think of them.</p>

    <br>
    <br>

    <a href="/recommendations" class="text-emerald-300 underline block">
        Here are some recommendations to optimize your youtube embed experience
    </a>
        
    <!-- <a href="tba" class="text-emerald-300 underline block mt-14">
        Here is my youtube channel
    </a> -->
    
</main>

<br class="mb-[100vh]">

<svelte:head>
    <title>Youtube Embed Viewer</title>
</svelte:head>

<style>
    main {
        font-size: 1.5rem;
    }
</style>