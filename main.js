Webcam.set
({
    height:300,
    width:350,
    image_type:"png",
    png_quality:90,
});
      camera = document.getElementById("camera_in_sicily_italy")

      Webcam.attach(camera)

function captured_stalingrad()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("normandy_france").innerHTML="<img id='captured_moscow' src='"+data_uri+"'/>";
    });
    document.getElementById("itter_castle").innerHTML="";
    document.getElementById("St_fromond").innerHTML="";
}
console.log('ml5 version:',ml5.version);
CLASSIFIER = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qP4A53clX/model.json',modelloded);

function modelloded()
{
    console.log("MODEL IS LOOOaaaDED I AM A ROBOOOOT")
}

function leningrad()
{
    img = document.getElementById("captured_moscow")
    CLASSIFIER.classify(img,gotresult)
}
function gotresult(error,result)
{
 if (error)
 {
     console.log(error);
 }else
 {
     console.log(result)
    document.getElementById("itter_castle").innerHTML=result[0].label;
    document.getElementById("St_fromond").innerHTML=result[0].confidence.toFixed(3);
 }
}




