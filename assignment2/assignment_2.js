const palette = {
    skin: '#DAA582',
    skinHighlight: '#e0a680',
    skinShadow: '#b97a54',
    hair: '#553c28',
    white: '#FFFFFF',
    eyeIris: '#323232',
    lipBlush: '#b47864',
    outline: '#323232',
    silver: '#969696',
    cardigan: '#a8a892',
    top: '#F0F0F0',
    backgroundColor: '#DDEEF0'
  };
  
  function setup() {
    createCanvas(600, 400);
    noLoop();
  }
  
  function draw() {
    background(palette.backgroundColor);
  
  
    // --- 머리카락 (뒷머리) ---
    fill(palette.hair);
    noStroke();
    ellipse(width / 2, height / 2 - 10, 220, 240);
    rect(width / 2 - 95, height / 2  + 50, 190, 400);
    
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
  
    fill(palette.white);
    stroke(palette.outline);
    strokeWeight(1.5);
    // 왼쪽 눈
    beginShape();
    vertex(width/2 - 60, height / 2 - 15 + eyeYOffset);
    bezierVertex(width / 2 - 50, height / 2 - 30 + eyeYOffset, width / 2 - 30, height / 2 - 30 + eyeYOffset, width / 2 - 25, height / 2 - 15 + eyeYOffset);
    bezierVertex(width / 2 - 30, height / 2 - 5 + eyeYOffset, width / 2 - 50, height / 2 - 5 + eyeYOffset, width / 2 - 60, height / 2 - 15 + eyeYOffset);
    endShape(CLOSE);
    // 오른쪽 눈
    beginShape();
    vertex(width / 2 + 60, height / 2 - 15 + eyeYOffset);
    bezierVertex(width / 2 + 50, height / 2 - 30 + eyeYOffset, width / 2 + 30, height / 2 - 30 + eyeYOffset, width / 2 + 25, height / 2 - 15 + eyeYOffset);
    bezierVertex(width / 2 + 30, height / 2 - 5 + eyeYOffset, width / 2 + 50, height / 2 - 5 + eyeYOffset, width / 2 + 60, height / 2 - 15 + eyeYOffset);
    endShape(CLOSE);
  
    // 쌍꺼풀 라인
    stroke(palette.outline);
    strokeWeight(1);
    noFill();
    bezier(width/2 - 60, height/2 - 25 + eyeYOffset, width/2 - 50, height/2 - 35 + eyeYOffset, width/2 - 30, height/2 - 35 + eyeYOffset, width/2 - 20, height/2 - 25 + eyeYOffset);
    bezier(width/2 + 60, height/2 - 25 + eyeYOffset, width/2 + 50, height/2 - 35 + eyeYOffset, width/2 + 30, height/2 - 35 + eyeYOffset, width/2 + 20, height/2 - 25 + eyeYOffset);
  
    // 눈동자
    fill(palette.eyeIris);
    noStroke();
    ellipse(width / 2 - 40, height / 2 - 17 + eyeYOffset, 18, 18);
    ellipse(width / 2 + 40, height / 2 - 17 + eyeYOffset, 18, 18);
  
    // 눈 반짝이
    fill(palette.white);
    ellipse(width / 2 - 45, height / 2 - 23 + eyeYOffset, 6, 6);
    ellipse(width / 2 + 35, height / 2 - 23 + eyeYOffset, 6, 6);
  
    // --- 블러셔와 입술 ---
    noStroke();
    let blushColor = color(palette.lipBlush);
    blushColor.setAlpha(80);
    fill(blushColor);
    ellipse(width / 2 - 45, height / 2 + 25, 40, 20);
    ellipse(width / 2 + 45, height / 2 + 25, 40, 20);
    
    fill(palette.lipBlush);
    arc(width / 2, height / 2 + 55, 40, 20, 0, PI);
  
    // --- 코 ---
    fill(palette.skinShadow);
    triangle(width / 2, height/2 + 45, 
             width/2 - 8, height/2 + 30, 
             width/2 + 8, height/2 + 30);
  }