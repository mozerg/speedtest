class speedTester {
constructor (){
  this.fileToDownload = "download/garbage";
  this.req = new XMLHttpRequest();
}
// Event Listeners
  updatePercentage (target){
    req.addEventListener("progress", function(event) {
      if (event.lengthComputable) {
          target = event.loaded / event.total;
          // ...
      } else {
          console.log("Error: Cannot fetch file size.");
      }
  }, false);
}
  get percentage(){
      if (req.lengthComputable) {
        return req.loaded / req.total;
      }else{
        return -1;
      }
    }
  // Function to start SpeedTester
  start(){
      req.open("GET", fileToDownload+"?"+Math.random());
      req.start();
  }
}
