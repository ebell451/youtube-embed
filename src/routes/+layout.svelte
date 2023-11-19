<script lang="ts">
    import "../app.postcss";

    import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
    import { browser } from '$app/environment'
	import GoogleAnalytics from "./GoogleAnalytics.svelte";
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                enabled: browser,
            },
        },
    })

</script>


<QueryClientProvider client={queryClient}>
    <slot></slot>
</QueryClientProvider>

<GoogleAnalytics />