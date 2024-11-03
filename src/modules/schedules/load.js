import {hoursLoad} from "../form/hours-load.js"
import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import{schedulesShow} from "../schedules/show.js"

const selectedDate = document.getElementById("date")
export async function schedulesDay (){
  //data from input:
  const date = selectedDate.value
  
  //search the appointments:
  const dailySchedules = await scheduleFetchByDay({date})
  
  //render the appointments:
  schedulesShow({dailySchedules})
  
  //render the available slots:
  hoursLoad({date})
}