import { apiConfig } from "./api-config.js"

export async function scheduleCancel({id}) {
  try {
    await fetch (`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    })
    alert("Appointment canceled with success")
  } catch (error) {
    console.log(error)
    alert("Not possible to proceed with canceling the appointment, try again later.")
  }
}