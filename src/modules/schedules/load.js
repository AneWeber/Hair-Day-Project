import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")
export function schedulesDay (){
    //search inside the API the schedules to load on the right side
    const date = selectedDate.value
    hoursLoad({date})
    //and the available slots (future and available) on the left side (form)
}