

import { eq, sql } from "drizzle-orm";
import { events } from "../schema";
import { db } from "./db";

// const x = await db.select({count: sql`*`}).from(events).where(eq(events.eventName, "testEvent"))


async function getEventCount(eventName: string):Promise<number> {
    const y = await db.execute(sql`
        SELECT COUNT(*)
        FROM ${events}
        WHERE ${events.eventName} = ${eventName};
    `)
    const countY = y.rows[0]["count(*)"]
    return countY
}




console.log(await getEventCount("testEvent"))
console.log(await getEventCount("nonexistantEvent"))