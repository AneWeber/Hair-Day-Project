import {apiConfig} from "./api-config.js"
import dayjs from "dayjs"

export async function scheduleFetchByDay({date}) {
  try {
    //do the request
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    //convert to json
    const data = await response.json()
    //filter by day
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    )
    return dailySchedules

  } catch (error) {
    console.log(error)
    alert("Not possible to load the schedule for the day")
  }
}