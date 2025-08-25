// Home Page - Search
function searchTrip() {
  let dest = document.getElementById("destination").value;
  let date = document.getElementById("date").value;
  let people = document.getElementById("travelers").value;

  if(dest === "" || date === "" || people === "") {
    alert("Please fill all fields before searching!");
  } else {
    alert(`Searching trips for ${dest} on ${date} for ${people} people`);
  }
}

// Destinations Page - Filter
function filterDestinations() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let cards = document.getElementById("destList").getElementsByClassName("card-item");

  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].getElementsByTagName("h5")[0].innerText.toLowerCase();
    cards[i].style.display = title.includes(input) ? "" : "none";
  }
}

// Booking Page - Validation
function validateBooking() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let place = document.getElementById("place").value;
  let date = document.getElementById("date").value;
  let people = document.getElementById("people").value;

  if(name === "" || email === "" || place === "" || date === "" || people === "") {
    alert("All fields are required!");
    return false;
  }
  alert(`Booking confirmed for ${name} to ${place} on ${date}`);
  return true;
}

// Contact Page - Validation
function validateContact() {
  let name = document.getElementById("cname").value;
  let email = document.getElementById("cemail").value;
  let msg = document.getElementById("message").value;

  if(name === "" || email === "" || msg === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}
