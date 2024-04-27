//Home spun analytics

import { browser} from '$app/environment';



function getClientId(){
    if (!browser) {
        return;
    }

    let cachedClientId = localStorage.getItem('analyticsClientId');
    if (!cachedClientId) {
        cachedClientId = crypto.randomUUID();
        localStorage.setItem('analyticsClientId', cachedClientId);
    }

    console.log("clientId: ", cachedClientId)

    return cachedClientId
}

const clientId = getClientId();


const ANALYTICS_URL = 'https://analytics.cloudflare-473.workers.dev';

export async function sendAnalyticsEvent(eventName: string, details?: string) {
	const url = details
		? `${ANALYTICS_URL}?clientId="${clientId}"&eventName="${eventName}"&details="${details}"`
		: `${ANALYTICS_URL}?clientId="${clientId}"&eventName="${eventName}"`;

	await fetch(url);
}


/*
Generates a random clientID for localstorage ("anonymized")
then sends to my analytics server with eventName and details. 
Will send an event when:
    - user loads embedded video   (wont send the exact vid for now for privacy)
    - user stays on embedded video for 1,5,10 minutes
    - user loads homepage
    - user loads recommendations page
*/