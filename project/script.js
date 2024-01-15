var start = new Date().getTime();
var totalGameTime = 0;
var gameRunning = true;

function makeShapeAppear() {
    var pageSize = document.getElementById("pagesize");
    var shape = document.getElementById("shape");

    var maxWidth = pageSize.clientWidth - shape.clientWidth;
    var maxHeight = pageSize.clientHeight - shape.clientHeight;

    var top = Math.random() * maxHeight;
    var left = Math.random() * maxWidth;
    var width = (Math.random() * 100) + 50;

    if (Math.random() > 0.5) {
        shape.style.borderRadius = "50%";
    } else {
        shape.style.borderRadius = "0";
    }

    shape.style.backgroundColor = getRandomColor();
    shape.style.height = width + "px";
    shape.style.width = width + "px";
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.display = "block";
    start = new Date().getTime();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();

// Event listener to adjust shape position on window resize
window.addEventListener('resize', function () {
    if (gameRunning) {
        makeShapeAppear();
    }
});

document.getElementById("shape").onclick = function () {
    if (gameRunning) {
        var shape = document.getElementById("shape");
        var pageSize = document.getElementById("pagesize");

        shape.style.display = "none";
        var end = new Date().getTime();
        var timeTaken = (end - start) / 1000;
        document.getElementById("Timetaken").innerHTML = timeTaken + "s";
        totalGameTime += timeTaken;
        appearAfterDelay();
    }
}

document.getElementById("exit").onclick = function () {
    if (gameRunning) {
        gameRunning = false;
        document.getElementById("shape").style.display = "none";
        document.getElementById("Timetaken").innerHTML = "Total Time Played: " + totalGameTime.toFixed(2) + "s";
    }
}
