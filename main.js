var SpeechRecognition = window.webkitSpeechRecognition;
 /* Explicação: a variável SpeechRecognition contém a API
  webkitSpeechRecognition (API Web Speech) que é usado para 
  reconhecer o que estamos falando e converter o que foi dito
  em texto. */
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");

function start()
{
    Textbox.innerHTML = ""; /* Explicação: sempre que o botão iniciar 
    é pressionado, queremos que a área de texto fique vazia. */
    recognition.start();
}  

recognition.onresult = function(event)
{
   console.log(event); 
   var Content = event.results[0][0].transcript; /* Explicação: 
   event.results[0][0].transcript é o local no console que tem nossa saída de voz
   para texto, portanto, vamos armazená-la dentro de uma variável e daremos 
   o nome de Content */
   Textbox.innerHTML = Content;
   console.log(Content);
   if(Content == "tire minha selfie")
   {
       console.log("tirando sua selfie --- ");
       speak();
   }

}

function speak()
{
    var synth = window.speechSynthesis;
    speakData = "tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);     
    setTimeout
    (
      function()
        {
          takeSelfie();
          save();
        }, 5000
    );
}

camera = document.getElementById("camera");
Webcam.set
(
  {
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90
  }
);
function takeSelfie()
{
   Webcam.snap
   (
    function(data_uri)
     {
       document.getElementById("result").innerHTML= '<img id="selfie_image" src="'+data_uri+'">';
     }
   );
}

function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfieImage").src;
  link.href = image;
  link.click();
}
































