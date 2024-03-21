const database=[{username: "kartik",
                 password: "kartik"},

                {username: "kush",
                 password: "kush"},

                {username: "mangalya",
                 password: "mangalya"},

                {username: "lekhan",
                 password: "lekhan"},

                {username: "mihir",
                 password: "mihir"},

                {username: "dhurv",
                 password: "dhruv"},

                {username: "yaawar",
                 password: "yaawar"},

                {username: "divya",
                 password: "divya"},

                {username: "aditya",
                 password: "aditya"},

                {username: "neeraj",
                 password: "neeraj"}
];

const userNameElement = document.getElementById('username');
const passwordElement = document.getElementById('password');

function check(){
    const username = userNameElement.value;
    const password = passwordElement.value;
    if (database.some(person => (person.username === username))){
        if (database.some(person => (person.password === password))){
            alert('Credentials are valid!');
            window.open("loggedin.html");
        }
    }
    else {
        alert('Invalid Username or Password.')
    }
}