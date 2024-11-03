import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

//load current date for the date input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = async(event) => {
//prevent default page reload
  event.preventDefault()
  try{
    const name = clientName.value.trim()

    if(!clientName) {
      return alert("Inform Client name")
    }

    const hourSelected = document.querySelector(".hour-selected")

    if (!hourSelected) {
      return alert("Inform a time")
    }

    const [hour] = hourSelected.innerText.split(":")
    const when = dayjs(selectedDate.value).add(hour, "hour")
        
    const id = new Date().getTime()
    
    await scheduleNew({
      id,
      name,
      when,
    })

  } catch (error) {
      alert("Not possible to proceed with booking")
      console.log(error)
    }
}