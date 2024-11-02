
const from = document.querySelector("form")

from.onsubmit = (event) => {
    //prevent default page reload
    event.preventDeafult()

    console.log("enviado!")
}