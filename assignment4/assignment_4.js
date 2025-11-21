const palette = {
    darkTeal: '#03045e',
    teal: '#576F72',
    lightTeal: '#00b4d8',
    skyBlue: '#90e0ef',
    lightOrange: '#fca311',
    darkOrange: '#e85d04',
    gold: '#FFC300',
    white: '#FFFFFF',
    backgroundColor: '#caf0f8'
  };
  
  let orange1;
  let orange2;
  
  function setup() {
    createCanvas(600, 400);
    orange1 = color(palette.lightOrange + '90');
    orange2 = color(palette.darkOrange + '90');
    rectMode(CENTER);
  }
  
  function draw() {
    // 배경색 설정
    background(palette.backgroundColor);
  
    // 1. 배경의 큰 요소들 배치
    noStroke();

    // 왼쪽 아래 사각형
    fill(palette.lightTeal + '80');
    rectMode(CORNER);
    rect(0, 150, 400, 250);

    // 왼쪽 위 사각형
    fill(palette.teal + 'B0');
    rect(-150, -100, 550, 300);
  
    // 오른쪽 위 원 - 색상 변화
    noStroke();
    let colorAmt = (sin(frameCount * 0.02) + 1) / 2;
    let newColor = lerpColor(orange1, orange2, colorAmt);
    fill(newColor);
    ellipse(500, 100, 300, 300);
  
    // 2. 중앙의 포인트 요소들 배치
  
    // 왼쪽 중앙 사각형
    stroke(palette.gold);
    strokeWeight(8);
    fill(palette.gold);
    rectMode(CENTER); 
    rect(230, 150, 80, 150, 10);
  
    // 중앙 원 - 크기 변화
    let orangeCirclePulse = sin(frameCount * 0.03) * 10;
    fill(palette.darkOrange);
    noStroke();
    circle(420, 300, 180 + orangeCirclePulse);
  
    // 왼쪽 부채꼴
    stroke(palette.white + 50);
    fill(palette.darkOrange + 90);
    arc(100, 250, 200, 200, PI, PI + HALF_PI);
    
    // 중앙 원
    fill(palette.darkTeal);
    stroke(palette.backgroundColor);
    strokeWeight(10);
    ellipse(350, 220, 280, 280);
  
    // 3. 세부적인 디자인 요소들 배치
  
    // 왼쪽 아래 작은 원들
    noStroke();
    fill(palette.lightTeal);
    circle(100, 300, 30);
    circle(130, 340, 20);
    circle(150, 310, 25);
  
    // 왼쪽 중앙 작은 원들
    let yOffset = sin(frameCount * 0.05) * 10;
    fill(palette.white);
    circle(80, 150 + yOffset, 60);
    circle(130, 120 - yOffset, 30);
    circle(160, 180 + yOffset, 40);
  
    // 오른쪽 아래 삼각형 - 꼭짓점 이동
    let triangleOffset = sin(frameCount * 0.06) * 15;
    fill(palette.darkTeal);
    stroke(palette.white);
    strokeWeight(8);
    triangle(500, 350, 550 + triangleOffset, 280, 580, 380);
  
    // 왼쪽 아래 선 - 위치 변경
    let lineOffset = sin(frameCount * 0.04) * 25;
    stroke(palette.lightOrange);
    strokeWeight(10);
    line(50, 380, 200 + lineOffset, 20);
  
    // 중앙 선
    stroke(palette.gold);
    strokeWeight(6);
    line(300, 150, 450, 50);
    line(300, 250, 450, 350);
  
    // 중앙 작은 원 - 크기 변화
    let pulse = sin(frameCount * 0.08) * 8;
    let pulseSize = 50 + pulse;
    fill(palette.gold);
    noStroke();
    circle(350, 220, pulseSize);
  
    // 중앙 작은 사각형 - 회전
    let angle = frameCount * 0.03;
    push(); 
    translate(220, 260);
    rotate(angle);

    fill(palette.darkOrange);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, 40, 40); 
    pop();
  }
  
  function keyTyped() {
    if (key === 's' || key === 'S') {
      saveGif('abstract_animation.gif', 8, {
        units: 'seconds'
      });
    }
  }