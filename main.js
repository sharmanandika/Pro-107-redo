function startclassification(){
navigator.mediaDevices.getDisplayMedia({audio:true})
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/x7jHlpsTq/model.json",modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
}