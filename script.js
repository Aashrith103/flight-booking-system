function searchFlights(){

let from=document.getElementById("from").value
let to=document.getElementById("to").value
let date=document.getElementById("date").value

let results=document.getElementById("results")

results.innerHTML=`

<h2>Available Flights</h2>

<div class="box">
<p>Air India - ₹5200</p>
<button onclick="book()">Book</button>
</div>

<div class="box">
<p>Indigo - ₹4800</p>
<button onclick="book()">Book</button>
</div>

<div class="box">
<p>SpiceJet - ₹4500</p>
<button onclick="book()">Book</button>
</div>

`

}

function book(){
alert("✅ Flight booked successfully!")
}
