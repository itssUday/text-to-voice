function textToAudio() {
    let msg = document.querySelector('.text').value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = msg;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    // Get all available voices
    let voices = window.speechSynthesis.getVoices();

    // Example: Set to a female English voice if available
    let selectedVoice = voices.find(voice => voice.lang === "en-US" && voice.name.toLowerCase().includes("female"));
    if (selectedVoice) {
        speech.voice = selectedVoice;
    } else if (voices.length > 0) {
        speech.voice = voices[0]; // fallback to first available
    }

    speechSynthesis.speak(speech);
}

// To ensure voices are loaded before use
window.speechSynthesis.onvoiceschanged = () => {};