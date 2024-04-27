


<!-- TODO: EU compliance / asking if user wants to be tracked -->

<script lang="ts">
	import { onMount } from "svelte";


    export let redactData = true

    // copied from mdn docs
    async function hashMessage(message:string) {
        const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8); // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
        const hashHex = hashArray
            .map((b) => b.toString(16).padStart(2, "0"))
            .join(""); // convert bytes to hex string
        return hashHex;
    }

    // redacts url past #, hashes query params, hashes page title
    async function trackRedacted() {
        //hash page title
        const pageTitle = document.title
        const redactedPageTitle = "hashed-" + await hashMessage(pageTitle)

        // hash query params  + redact past #
        async function redactSearchParams(searchParams:URLSearchParams) {
            for (const [key, value] of searchParams.entries()) {
                searchParams.set(key, await hashMessage(value))
            }
            return searchParams.toString()
        }
        const pageUrl = window.location.pathname
        const pageQueryParamsString = window.location.search
        const redactedPageUrl = (pageUrl + "?" + await redactSearchParams(new URLSearchParams(pageQueryParamsString))).split("#")[0]

        // hash referer's query params
        const referer = document.referrer
        const redactedRefererQueryParams = await redactSearchParams(new URLSearchParams(referer))


        umami.track(props => {
            props.title = redactedPageTitle;
            props.url = redactedPageUrl;

            console.log("props", props)
            return props
        });
    }


    // track with umami but hash the page title and query params as to preserve user privacy of what videos they are watching
    onMount(() => {
        if (redactData){
            trackRedacted();
        }
        else {
            umami.track();
        }
    })
    
</script>

<svelte:head>
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T3Z0XJ1ZPH"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-T3Z0XJ1ZPH');
    </script>

    <!-- umami -->
    <script defer 
        src="https://umami.ttools.io/script.js" 
        data-website-id="aedf3dd2-7ab5-451d-8af1-7a68a11261af"
        data-auto-track="false"
    ></script>

    <script defer>

    </script>

</svelte:head>


