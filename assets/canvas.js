var loadcount = 0;
var loadtotal = 0;
var preloaded = false;

 

function loadImages(imagefiles) {
    loadcount = 0;
    loadtotal = imagefiles.length;
    preloaded = false;

    var loadedimages = [];
    for (var i=0; i<imagefiles.length; i++) {
        var image = new Image();

        image.onload = function () {
            loadcount++;
            if (loadcount == loadtotal) {
                preloaded = true;
            }
        };

        image.src = imagefiles[i];
        loadedimages[i] = image;
    }

    return loadedimages;
}

function draw() {
    var canvas = document.getElementById('myCanvas');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    var circle = {'x': 10, 'y': 10, 'xVel': 5, 'yVel': 5, 'diameter': 150};
    var ains_2 = {'x': 10, 'y': 10, 'xVel': 2, 'yVel': 2, 'diameter': 150};

    var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
            return setTimeout(callback, 1);
        };

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var images = loadImages(["cool.jpg", "wallpaper.jpg", "images.jpg","Kha.jpg"]);
        var woodPattern;
        animate();
    } else {
        console.log("Canvas-unsupported code here");
    }

    function animate() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        woodPattern = ctx.createPattern(images[1], "repeat");
        ctx.fillStyle = woodPattern;
        ctx.fillRect(20, 20, 2000, 2000);
        
        
        ctx.drawImage(images[0], circle.x, circle.y, circle.diameter, circle.diameter);
        circle.x += circle.xVel;
        ctx.drawImage(images[2], ains_2.x, ains_2.y, ains_2.diameter, ains_2.diameter);
        ains_2.x += ains_2.xVel;

        if (circle.x > canvasWidth - circle.diameter|| circle.x < 0) {
            circle.xVel *= -1
        }
        if (ains_2.x > canvasWidth - ains_2.diameter|| ains_2.x < 0) {
            ains_2.xVel *= -1
        }

        requestAnimationFrame(animate);

       
    }
}
