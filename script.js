/**
 * @author Ben Siebert
 * @copyright 2018-2021 Ben Siebert. All rights reserved.
 */
// create the network
let network = new brain.recurrent.LSTM(); // LSTM -> Long Short Term Memory

// download the trained data
let trainingDataDownloadRequest = new XMLHttpRequest();
trainingDataDownloadRequest.open("GET", "learned.json", false);
trainingDataDownloadRequest.send(null);

if(trainingDataDownloadRequest.status === 200){
    // everything worked fine
    // load trained data
    network.fromJSON(JSON.parse(trainingDataDownloadRequest.responseText));
}else {

}

function train(){
    alert("This will take a few minutes")
    // download dataset
    let dataSetDownloadRequest = new XMLHttpRequest();
    dataSetDownloadRequest.open("GET", "dataset.json", false);
    dataSetDownloadRequest.send(null);
    // train
    network.train(JSON.parse(dataSetDownloadRequest.response), {
        iterations: 10000, // the maximum times to iterate the training data
        log: true,
        logPeriod: 10,
    });
    alert("The AI was successfully trained!");
}