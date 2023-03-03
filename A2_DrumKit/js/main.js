// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!
console.log('music player script file');

//get a referance to all of the audio tages on the page
let audioEls = document.querySelectorAll('audio')

window.addEventListener('keyup', findMatchingAudio);

function findMatchingAudio(event) {
    //event is what gets generated every time the user does something in the browser.
    //in this case, the event is thekeyup event - it has lots of information about that even, including which key code / key was pressed. We can get that info and use it to find the matching audio element via the data-key custom data attributes on each audio element in our HTML filee
    //debugger;
    //squar brackets are an attribute selector -> element[Attribute]
    //ex. input[type='text']
    let audioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`),
        targetDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);
    //rewind the audio clip and THEN play it (over and over and over again)

    //the ! operator tests for a negative condition(not true)
    //In this case, if there is not a matching audio clip (audiolip will be null) an error will not appear.

    //this will catch errors
    if(!audioClip) {return}

    audioClip.currentTime = 0;
    //play the matching audio clip
    audioClip.play();


    //animate the matching div element - add the playing class
    //it already has a transition deffined in CSS, so the will trigger the flash of UI that we want
    targetDiv.classList.add('playing');
}

function resetDivs() {
    let currentDiv = document.querySelector(`div[data-key="${this.dataset.key}"]`);

    currentDiv.classList.remove('playing');
}
    
audioEls.forEach(audio => audio.addEventListener('ended', resetDivs));
