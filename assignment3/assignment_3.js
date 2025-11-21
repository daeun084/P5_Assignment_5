const palette = {
    skin: '#daa582',
    skinHighlight: '#e0a680',
    skinShadow: '#b97a54',
    hair: '#553c28',
    white: '#ffffff',
    eyeIris: '#323232',
    lipBlush: '#b47864',
    blinkBlushColor: '#e56e56',
    outline: '#323232',
    silver: '#969696',
    cardigan: '#a8a892',
    top: '#f0f0f0',
    backgroundColor: '#ddeef0',
    blinkBackgroundColor: '#f8f0d0',
    heartColor: '#ff9999'
};

let isBlinking = false;
let blinkStartTime = 0;
const blinkDuration = 250;

let heart1_active = false, heart1_x, heart1_y, heart1_alpha;
let heart2_active = false, heart2_x, heart2_y, heart2_alpha;
let heart3_active = false, heart3_x, heart3_y, heart3_alpha;


function setup() {
    createCanvas(600, 400);
}

function drawHeart(x, y, size, alpha) {
    let heartColor = color(palette.heartColor);
    heartColor.setAlpha(alpha);
    fill(heartColor);
    noStroke();
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
}

function draw() {
    if (isBlinking) {
        background(palette.blinkBackgroundColor);
    } else {
        background(palette.backgroundColor);
    }

    if (isBlinking && millis() - blinkStartTime > blinkDuration) {
        isBlinking = false;
    }

    // --- 머리카락 (뒷머리) ---
    fill(palette.hair);
    noStroke();
    ellipse(width / 2, height / 2 - 10, 220, 240);
    rect(width / 2 - 95, height / 2 + 50, 190, 400);

    // --- 몸통 & 옷 ---
    noStroke();
    fill(palette.cardigan);
    rect(width / 2 - 120, height / 2 + 120, 240, 200, 10);
    fill(palette.top);
    rect(width / 2 - 60, height / 2 + 120, 120, 120);

    // --- 목 ---
    fill(palette.skin);
    noStroke();
    rect(width / 2 - 30, height / 2 + 90, 60, 40);

    // --- 얼굴 ---
    fill(palette.skin);
    stroke(palette.outline);
    strokeWeight(1);
    ellipse(width / 2, height / 2 + 10, 165, 180);

    // 앞머리
    fill(palette.hair)
    noStroke()
    arc(width / 2, height / 2 - 100, 50, 160, 0, PI + QUARTER_PI, CHORD);
    arc(width / 2 - 30, height / 2 - 80, 50, 120, 0, PI + QUARTER_PI, CHORD);
    arc(width / 2 + 30, height / 2 - 80, 50, 120, 0, PI + QUARTER_PI, CHORD);
    arc(width / 2 + 60, height / 2 - 60, 50, 80, 0, PI + QUARTER_PI, CHORD);
    arc(width / 2 - 60, height / 2 - 60, 50, 80, 0, PI + QUARTER_PI, CHORD);

    // --- 귀 & 피어싱 ---
    fill(palette.skin);
    stroke(palette.outline);
    strokeWeight(1);
    ellipse(width / 2 - 90, height / 2 + 10, 25, 40);
    ellipse(width / 2 + 90, height / 2 + 10, 25, 40);
    noFill();
    stroke(palette.silver);
    strokeWeight(2);
    ellipse(width / 2 - 90, height / 2 + 30, 10, 10);
    ellipse(width / 2 - 100, height / 2 + 30, 8, 8);
    ellipse(width / 2 + 90, height / 2 + 30, 10, 10);

    // --- 눈 ---
    let eyeYOffset = 15;

    if (isBlinking) {
        stroke(palette.outline);
        strokeWeight(2);
        noFill();
        arc(width / 2 - 42.5, height / 2 - 15 + eyeYOffset, 35, 20, 0, PI);
        arc(width / 2 + 42.5, height / 2 - 15 + eyeYOffset, 35, 20, 0, PI);
    } else {
        fill(palette.white);
        stroke(palette.outline);
        strokeWeight(1.5);
        beginShape();
        vertex(width / 2 - 60, height / 2 - 15 + eyeYOffset);
        bezierVertex(width / 2 - 50, height / 2 - 30 + eyeYOffset, width / 2 - 30, height / 2 - 30 + eyeYOffset, width / 2 - 25, height / 2 - 15 + eyeYOffset);
        bezierVertex(width / 2 - 30, height / 2 - 5 + eyeYOffset, width / 2 - 50, height / 2 - 5 + eyeYOffset, width / 2 - 60, height / 2 - 15 + eyeYOffset);
        endShape(CLOSE);
        beginShape();
        vertex(width / 2 + 60, height / 2 - 15 + eyeYOffset);
        bezierVertex(width / 2 + 50, height / 2 - 30 + eyeYOffset, width / 2 + 30, height / 2 - 30 + eyeYOffset, width / 2 + 25, height / 2 - 15 + eyeYOffset);
        bezierVertex(width / 2 + 30, height / 2 - 5 + eyeYOffset, width / 2 + 50, height / 2 - 5 + eyeYOffset, width / 2 + 60, height / 2 - 15 + eyeYOffset);
        endShape(CLOSE);

        // 쌍꺼풀
        stroke(palette.outline);
        strokeWeight(1);
        noFill();
        bezier(width / 2 - 60, height / 2 - 25 + eyeYOffset, width / 2 - 50, height / 2 - 35 + eyeYOffset, width / 2 - 30, height / 2 - 35 + eyeYOffset, width / 2 - 20, height / 2 - 25 + eyeYOffset);
        bezier(width / 2 + 60, height / 2 - 25 + eyeYOffset, width / 2 + 50, height / 2 - 35 + eyeYOffset, width / 2 + 30, height / 2 - 35 + eyeYOffset, width / 2 + 20, height / 2 - 25 + eyeYOffset);

        let pupilLeftX = map(mouseX, 0, width, -5, 5, true);
        let pupilRightX = map(mouseX, 0, width, -5, 5, true);
        let pupilY = map(mouseY, 0, height, -4, 4, true);
        
        // 눈동자
        fill(palette.eyeIris);
        noStroke();
        ellipse(width / 2 - 40 + pupilLeftX, height / 2 - 17 + eyeYOffset + pupilY, 18, 18);
        ellipse(width / 2 + 40 + pupilRightX, height / 2 - 17 + eyeYOffset + pupilY, 18, 18);

        // 눈 반짝이
        fill(palette.white);
        ellipse(width / 2 - 45 + pupilLeftX, height / 2 - 23 + eyeYOffset + pupilY, 6, 6);
        ellipse(width / 2 + 35 + pupilRightX, height / 2 - 23 + eyeYOffset + pupilY, 6, 6);
    }

    // --- 블러셔와 입술 ---
    noStroke();
    let blushColor;
    if (isBlinking) {
        blushColor = color(palette.blinkBlushColor); // 깜빡일 때
        blushColor.setAlpha(120);
    } else {
        blushColor = color(palette.lipBlush);
        blushColor.setAlpha(80);
    }
    fill(blushColor);
    ellipse(width / 2 - 45, height / 2 + 25, 40, 20);
    ellipse(width / 2 + 45, height / 2 + 25, 40, 20);

    fill(palette.lipBlush);
    if (isBlinking) {
        arc(width / 2, height / 2 + 50, 50, 30, 0, PI);
    } else {
        arc(width / 2, height / 2 + 55, 40, 20, 0, PI);
    }

    // --- 코 ---
    noStroke();
    fill(palette.skinShadow);
    beginShape();
    vertex(width / 2 - 5, height / 2 + 30);
    bezierVertex(width / 2, height / 2 + 45, width / 2, height / 2 + 45, width / 2 + 5, height / 2 + 30);
    endShape(CLOSE);

    // --- 하트 효과 그리기 ---
    if (heart1_active) {
        heart1_y -= 1;
        heart1_alpha -= 3;
        if (heart1_alpha <= 0) {
            heart1_active = false;
        } else {
            drawHeart(heart1_x, heart1_y, 15, heart1_alpha);
        }
    }
    if (heart2_active) {
        heart2_y -= 1.2;
        heart2_alpha -= 3;
        if (heart2_alpha <= 0) {
            heart2_active = false;
        } else {
            drawHeart(heart2_x, heart2_y, 15, heart2_alpha);
        }
    }
    if (heart3_active) {
        heart3_y -= 0.8;
        heart3_alpha -= 3;
        if (heart3_alpha <= 0) {
            heart3_active = false;
        } else {
            drawHeart(heart3_x, heart3_y, 15, heart3_alpha);
        }
    }
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveGif('20221826_김다은_과제3', 10);
    }

    if (key === 'e' || key === 'E') {
        if (!isBlinking) {
            isBlinking = true;
            blinkStartTime = millis();

            if (!heart1_active) {
                heart1_active = true;
                heart1_x = width / 2 - 60;
                heart1_y = height / 2 - 20;
                heart1_alpha = 255;
            }
            if (!heart2_active) {
                heart2_active = true;
                heart2_x = width / 2 + 60;
                heart2_y = height / 2 - 30;
                heart2_alpha = 255;
            }
            if (!heart3_active) {
                heart3_active = true;
                heart3_x = width / 2;
                heart3_y = height / 2 - 50;
                heart3_alpha = 255;
            }
        }
    }
}