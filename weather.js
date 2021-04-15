var arrayOrg = [
    { title: "Friday", date: "March 1st,1.00 pm", image: "pic1.png", temp: "35", status: "clear sky" },
    { title: "Saturday", date: "March 2nd,1.00 pm", image: "pic2.png", temp: "36", status: "light rain" },
    { title: "Sunday", date: "March 3rd,1.00pm", image: "pic3.png", temp: "36", status: "broken clouds" },
    { title: "Monday", date: "March 4th,1.00 pm", image: "pic1.png", temp: "34", status: "clear sky" },
    { title: "Tuesday", date: "March 5th,1.00 pm", image: "pic4.png", temp: "26", status: "scattered clouds" },
]
let cardnew = document.getElementById("cardValue")
function printArray() {
    arrayOrg.map(element => {
        cardnew.innerHTML +=
            `<div class="col-2">
                <div class="card-deck">
                <div class="card-columns  ">
                <div class="card">
                <div class="card-body text-center ">
                <p class="card-text">${element.title}</p>
                <p class="card-text">${element.date}</p>
                <img src="${element.image}"width="45px" height="45px">
                <b><p class="card-text">${element.temp}<span>&#176;</span> F</p></b>
                <p class="card-text" style="color:rgb(117, 113, 113);">${element.status}</p>
                </div>
                </div>
                </div>
                </div>
                </div> `
    });
}
printArray()
