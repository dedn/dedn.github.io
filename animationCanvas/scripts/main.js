(function () {
    var ctx = canvas.getContext('2d'),
        requestAnimation;

    canvas.width = 1924;
    canvas.height = 1080;

    var coords = {
        x: 700,
        y: 30,
        w: 70,
        h: 30
    };

    var coords2 = {
        x: 1490,
        y: 670,
        w: 130,
        h: 30
    };

    var coords3 = {
        x: 1440,
        y: 740,
        w: 121,
        h: 51
    };

    var coords4 = {
        x: 0,
        y: 0,
        w: 2820,
        h: 1242
    };

    var blimp = new Image();
    blimp.src = 'images/blimp1.png';
    blimp.onload = function () {
        ctx.drawImage(blimp, coords.x, coords.y, coords.w, coords.h);
    };

    var boatFirst = new Image();
    boatFirst.src = 'images/boat_1_1.png';
    boatFirst.onload = function () {
        ctx.drawImage(boatFirst, coords2.x, coords2.y, coords2.w, coords2.h);
    };

    var boatSecond = new Image();
    boatSecond.src = 'images/boat_2_2.png';
    boatSecond.onload = function () {
        ctx.drawImage(boatSecond, coords3.x, coords3.y, coords3.w, coords3.h);
    };

    var clouds = new Image();
    clouds.src = 'images/Clouds-Only.png';
    clouds.onload = function () {
        ctx.drawImage(clouds, coords4.x, coords4.y, coords4.w, coords4.h);
    };

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(blimp, coords.x, coords.y, coords.w, coords.h);
        ctx.drawImage(boatFirst, coords2.x, coords2.y, coords2.w, coords2.h);
        ctx.drawImage(boatSecond, coords3.x, coords3.y, coords3.w, coords3.h);
        ctx.drawImage(clouds, coords4.x, coords4.y, coords4.w, coords4.h);
        coords.x += .3;
        coords.y += .01;
        coords2.x += .1;
        coords2.y += .02;
        coords3.x += .1;
        coords3.y += .04;
        coords4.x += -.2;
        coords4.y += 0;
        requestAnimation = requestAnimationFrame(draw);
        checkBorder();

    }

    requestAnimationFrame(draw);

    function checkBorder() {
        if (coords.x + coords.w - 150 > canvas.width) {
            cancelAnimationFrame(requestAnimation);
        }
    }

})();



