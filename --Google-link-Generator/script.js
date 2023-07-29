const pasteBtn = document.querySelector('.options-paste');
const audioBtn = document.querySelector('.options-audio');
const videoBtn = document.querySelector('.options-video');
const pasteSection = document.querySelector('.paste-section');
const audioSection = document.querySelector('.audio-section');
const videoSection = document.querySelector('.video-doc-section');

function displayPasteSections() {


    pasteSection.style.display = "flex";
    audioSection.style.display = "none";
    videoSection.style.display = "none";
}


function displayAudioSections() {


    pasteSection.style.display = "none";
    audioSection.style.display = "flex";
    videoSection.style.display = "none";
}



function displayVideoSections() {


    pasteSection.style.display = "none";
    audioSection.style.display = "none";
    videoSection.style.display = "flex";
}

pasteBtn.addEventListener('click', displayPasteSections);
audioBtn.addEventListener('click', displayAudioSections);
videoBtn.addEventListener('click', displayVideoSections);


// Generator functions Starts from here........


const g_link = document.querySelector('.paste-link')
const gen_Btn = document.querySelector('.generator-btn')
const text_area_paste = document.querySelector('.text-area-paste')
const text_area_audio = document.querySelector('.text-area-audio')
const copy_btn = document.querySelector('.copy-btn')

gen_Btn.addEventListener('click', generateLink)

function generateLink() {
    const glink_value = g_link.value
    const confirm_link = glink_value.includes("https://drive.google.com/drive/")
    if (confirm_link == true) {

        const pasteOutputLink = glink_value
            .replace("https://drive.google.com/drive", "https://drive.google.com/uc?export=download&id=")
            .replace("?usp=sharing", "")
        text_area_paste.innerHTML = pasteOutputLink;

        //embed Audio

        const code1 = `<audio width='300' height='32' controls='controls' src="`
        const code2 = `" type='audio/mp3'></audio>`


        text_area_audio.innerHTML = code1 + pasteOutputLink + code2












        copy_btn.addEventListener('click', copyText)
        function copyText() {
            navigator.clipboard.writeText(text_area_paste.value)
            alert("Link is Copied to your Clipboard")

        }

    }
    else {
        alert("Please give the drive link only")
    }
}


