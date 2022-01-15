let speech;
let finalText;
 
speech = new p5.Speech(voiceReady); //callback, speech synthesis object
speech.setVoice('SpeechSynthesisVoice');

function voiceReady() {
  console.log(speech.voices);
}

function setup() {
  noCanvas();

  speechRec = new p5.SpeechRec('en-US', gotSpeech);

  let continuous = true;

  let interimResults = false;

  speechRec.start(continuous, interimResults);

  


  function gotSpeech() {

    console.log(speechRec);
    if (speechRec.resultValue) {
      let said = speechRec.resultString;
 
       finalText = said.toLowerCase();
           console.log(finalText)
    }
    if(finalText){
      if(finalText.indexOf("google")!=(-1)){
        console.log("Working")
              var firstIndex = finalText.indexOf("google")
        console.log(firstIndex)
        var sub = finalText.substring(firstIndex+7,finalText.length)
        console.log(sub)
        if(sub.indexOf("time")!=(-1)){
            var h = hour();
            console.log(h)
            var m = minute();
            console.log(m)
            var d = day();
            console.log(d)

            var test = "Today is "+d+" and the time is "+h+" "+m
            console.log(test)
            speech.speak(test); // say something
        }




        if(sub.indexOf('play')!=(-1)){
          console.log("Music Wanted");
              var firstIndex = sub.indexOf("play");
          console.log(firstIndex)
          var songNeeded = sub.substring(firstIndex+5, sub.length);
          console.log(songNeeded)
        }


      }
    }




  }



}
