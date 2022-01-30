function startVideo(src) {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            let video = document.getElementById(src);
            if ("srcObject" in video) {
                video.srcObject = stream;
            } else {
                video.src = window.URL.createObjectURL(stream);
            }
            video.onloadedmetadata = function (e) {
                video.play();
            };
            //mirror image
           // video.style.transform = "scaleX(-1)";
        });
    }
}

function getFrame(src, dest, dotNetHelper) {
    let video = document.getElementById(src);
    let canvas = document.getElementById(dest);
    canvas.getContext('2d').drawImage(video, 0, 0, 400, 400);

    let dataUrl = canvas.toDataURL("image/jpeg");
    return dataUrl;
    //return BINDING.js_string_to_mono_string(dataUrl);
    //dotNetHelper.invokeMethodAsync('ProcessImage', dataUrl);
}