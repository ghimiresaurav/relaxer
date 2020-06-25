const text = document.getElementById('text');
const container = document.querySelector('.container');
const totalTime = 8000;
const breatheTime = (2/5)*totalTime; 
const holdTime = totalTime - (2*breatheTime);

function work(){
    text.innerText = "Inhale!";
    container.className = "container larger";

    setTimeout( ()=> {
        text.innerText = "Hold";

        setTimeout( ()=> {
            text.innerText = "Exhale!";
            container.className = "container smaller";
        }, holdTime);
    }, breatheTime);
}
work()
setInterval(work, totalTime);