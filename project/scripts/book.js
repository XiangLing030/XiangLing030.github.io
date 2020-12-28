function BookNow(guestName, guestEmail, guestPhone, guestDate, guestTime, guestRemarks) {
    let url = 'https://api.sheety.co/b064d12af8aa83176c9e735b8ead7e47/appointmentBookingApp/appointments/';
    let body = {
        appointment: {
            name: guestName,
            email: guestEmail,
            phoneNumber: guestPhone,
            date: guestDate,
            time: guestTime,
            remarks: guestRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            alert(json.appointment.name + " added!")
        });
}

window.addEventListener("load", function () {
    document.getElementById("bookNow").addEventListener("click", function () {
        let userName = document.getElementById("userName").value;
        let userEmail = document.getElementById("userEmail").value;
        let userPhone = document.getElementById("userPhone").value;
        let userDate = document.getElementById("userDate").value;
        let userTime = document.getElementById("userTime").value;
        let userRemarks = document.getElementById("userRemarks").value;

        BookNow(userName, userEmail, userPhone, userDate, userTime, userRemarks);
    });
});