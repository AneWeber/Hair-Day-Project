
import { apiConfig } from "./api-config.js";

export async function scheduleNew({id, name, when}){
try {
    await fetch (`${apiConfig.baseURL}/schedules`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({id, name, when}),
    })
    alert("Your booking is schedule.")
} catch (error) {
    console.log(error)
    alert("Not possible to proceed with booking, try again later.")
}
}