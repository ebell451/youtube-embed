

import { eq, sql } from "drizzle-orm";
import { events } from "../schema";
// import { db } from "./db";
import { db } from "./db_prod";

// const x = await db.select({count: sql`*`}).from(events).where(eq(events.eventName, "testEvent"))


async function getEventCount(eventName: string):Promise<number> {
    const y = await db.execute(sql`
        SELECT COUNT(*)
        FROM ${events}
        WHERE ${events.datetime} >= NOW() - INTERVAL 1 HOUR
        AND ${events.eventName} = ${eventName};
    `)
    const countY = y.rows[0]["count(*)"]
    return countY
}




console.log("Last X Hours", {
    "loadedHomePage" : await getEventCount("loadedHomePage"),
    "loadedRecommendationsPage" : await getEventCount("loadedRecommendationsPage"),
    "loadedVideoPage" : await getEventCount("loadedVideoPage"),
    "stayedOnVideoPageFor1Min" : await getEventCount("stayedOnVideoPageFor1Min"),
    "stayedOnVideoPageFor5Min" : await getEventCount("stayedOnVideoPageFor5Min"),
    "stayedOnVideoPageFor10Min" : await getEventCount("stayedOnVideoPageFor10Min"),
})