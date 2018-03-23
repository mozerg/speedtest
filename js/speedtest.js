class SpeedTester {
   constructor (){
  this.fileToDownload = "download/garbage";
  this.req = new XMLHttpRequest();
}
// Event Listeners
  get onProgress(){
    return req.progress;
  }
  get onLoad(){
    return req.load;
  }
  get totalSize(){
    if (req.lengthComputable) {
      return req.total;
    }else{
      return -1;
    }
  }
  get downloadedSize(){
    if (req.lengthComputable) {
      return req.loaded;
    }else{
      return -1;
    }
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
