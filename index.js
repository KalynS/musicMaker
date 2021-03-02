window.addEventListener('load',() => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#90EE90",
        "#20B2AA",
        "#ffb6c1",
        "#ffa07a",
        "#E6E6FA",
        "#87cefa"
    ];
    //sounds go here
    pads.forEach((pad,index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            //bubble function into the sounds
            createBubbles(index);
        });
    });
    // create bubble function
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        // removes the bubbles ones they are off the screen so the app doesn't crash
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
});















