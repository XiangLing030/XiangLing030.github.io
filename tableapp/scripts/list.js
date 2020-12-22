function GetBookings() {
    let url = 'https://api.sheety.co/b064d12af8aa83176c9e735b8ead7e47/bookingApp/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            //console.log(json.bookings);
            let bookingList = document.getElementById("booking-list");
            let bookingIds = [];

            for (let i = 0; i < json.bookings.length; i++) {
                let gName = json.bookings[i].name;
                let gEmail = json.bookings[i].email;
                let gPax = json.bookings[i].pax;
                let gId = json.bookings[i].id;
                let gRemarks = json.bookings[i].remarks;
                let buttonId = "delete" + gId;

                bookingList.innerHTML += gId + "-" + gName + ", " + gEmail + ", pax: " + gPax + "<br>";
            }
        });
}