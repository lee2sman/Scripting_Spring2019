$(document).ready(function () {

    //this var is added in step 9
    // Let's set the AM and PM meridiem for 12 hour format instead of 24 hour time
    var meridiem = "AM"; // Default is AM
    var firstcount = 0;

    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        firstcount++;

        // If the seconds digit is less than ten  (this code from step 8)
        if (seconds < 10) {
            // Add the "0" digit to the front
            // so 9 becomes "09"
            seconds = "0" + seconds;
        }
        // If the minutes digit is less than ten
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // If the hours digit is less than ten
        if (hours < 10) {
            hours = "0" + hours;
        }

        //added in Step 9
        // Convert from 24 hour to 12 hour format and keep track of the meridiem.
        if (hours > 12) {
            hours = hours - 12;
            meridiem = "PM";
        }
        // 0 AM and 0 PM should read as 12
        if (hours == 0) {
            hours = 12;
        }


        // This gets a "handle" to the clock div in our HTML
        var clockDiv = document.getElementById('clock');

        // Then we set the text inside the clock div
        // to the hours, minutes, and seconds of the current time
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;

        clockPos(seconds);
        if (firstcount < 60) {
            chooseImage(seconds);
        }
        if (firstcount >= 600) {
            firstcount = 0;
        }
    }




    function clockPos(seconds) {
        var clockHeight = (seconds * 1.333333333) + "vh";
        $("#clock").animate({
            paddingTop: clockHeight
        });
    }

    function chooseImage(seconds) {
        console.log(seconds);
        switch (seconds) {
            case '01':
                getfirstsubreddit('OnePiece');
                break;
            case '04':
                getfirstsubreddit('StardustCrusaders');
                break;
            case 10:
                getfirstsubreddit('the_donald');
                break;
            case 15:
                getfirstsubreddit('ar15');
                break;
            case 21:
                getfirstsubreddit('21savage');
                break;
            case 33:
                getfirstsubreddit('Disneyland');
                break;
            case 42:
                getfirstsubreddit('DontPanic');
                break;
            case 45:
                getfirstsubreddit('SmithAndWesson');
                break;
            case 55:
                getfirstsubreddit('pics');
                break;

            default:
                // code block
        }

    }


    function getfirstsubreddit(subredditvar) {
        var srcUrl = 'https://www.reddit.com/r/' + subredditvar + '.json'
        fetch(srcUrl)
            .then(res => res.json())
            .then(res => res.data.children)
            .then(res => res.map(post => ({
                author: post.data.author,
                link: post.data.url,
                img: post.data.thumbnail,
                title: post.data.title
            })))
            .then(res => res.map(render))
            .then(res => console.log(res))

        const app = document.querySelector('body');


        const render = post => {

            const node = document.createElement('div');
            node.innerHTML = `
                    <a href="${post.img}">
                        <img src="${post.link}"/>
                    </a>`;
            app.appendChild(node);
        }
    }

    function pageScroll() {
        window.scrollBy(0, 1);
        scrolldelay = setTimeout(pageScroll, 135);
    }

    

    setInterval(displayTime, 1000);

    setInterval(pageScroll,1000);

});
