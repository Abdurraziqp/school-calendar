window.onload = function(){ 
    new QRCode(document.getElementById("qrcode"),{
        text:"http://github.com/Abdurraziqp",
        width: 100,
        height: 100
    });
};