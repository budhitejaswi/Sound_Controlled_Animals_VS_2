function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vYm8aLPJW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("Model Loaded! :)")
}

function gotResults(error,results)
{
    console.log("got results")
}