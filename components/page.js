
var foyer_sound = new Audio('audio/foyer.wav');
var explode_sound = new Audio('audio/explode.wav');

// cog wheel variables
function updateBodyWidth() {
    document.body.style.setProperty('--panel-width', Math.min(Math.max(window.innerWidth * 0.8, 640), 950) + 'px');
}

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset);
}, false);

window.addEventListener('resize', () => { updateBodyWidth(); }, false);
window.addEventListener('load', () => {
    updateBodyWidth();
}, false);


// sound stuff
function playFoyer() {
    foyer_sound.play();
}

function playNav() {
    var audio = document.getElementById('blip')
    var href = event.target.href;

    if (audio.canPlayType('audio/wav') != "") {
        audio.addEventListener('ended', function () {
            window.location.href = href;
        })

        audio.addEventListener('error', function () {
            window.location.href = href;
        })

        event.preventDefault();
        audio.play();
    } else {
        // just skip it
        window.location.href = href;
    }
}

function mnstrClick(ele) {
    explode_sound.play();
    ele.src = 'assets/explode.gif';
    window.setTimeout(mnstrEnd, 700, ele);
}

function mnstrEnd(ele) {
    ele.style.display = 'none';
}