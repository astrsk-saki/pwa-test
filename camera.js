/*
var p = navigator.mediaDevices.getUserMedia({ audio: true, video: true });

p.then(function(stream) {
   var video = document.querySelector('video');
   video.src = window.URL.createObjectURL(mediaStream);
   video.onloadedmetadata = function(e) {
      // Do something with the video here.
   };
};

p.catch(function(e) { console.log(e.name); }); // always check for errors at the end.
*/

const medias = {audio : false, video : true},
      video  = document.getElementById("video");

navigator.getUserMedia(medias, successCallback, errorCallback);

function successCallback(stream) {
  video.srcObject = stream;
};

function errorCallback(err) {
  alert(err);
};
