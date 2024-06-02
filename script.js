let player = 1; // player 변경값
let currentScore = document.getElementById("current-score"); // input 현재점수
let totalScore = document.getElementById("total-score"); // input 총점수

// ROLL DICE 클릭
const rollDiceBtn = document.getElementById("rollDice-btn");
rollDiceBtn.addEventListener("click", rollDice);

function rollDice() {
  // 랜덤 숫자 생성하기 Math.random() : 0~1 사이의 부동소수점 난수 생성
  // 정수 난수 생성 Math.floor() 함수와 함께 사용
  // 6을 포함한 정수 난수를 얻고 싶다면 Math.random() 함수의 결과에 7을 곱하고, 소수점 이하를 버림한다 ==> 0까지 나와버림
  // 1~6 범위의 정수 난수를 계산하기 위해서는 Math.floor(Math.random() * 6) + 1
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log("randomNumber", randomNumber);

  // 숫자 1 또는 2가 나왔을 때 현재 점수를 초기화
  if (randomNumber < 3) {
    playerChange();
  } else {
    // 2 이상이 나왔을 때 현재 점수에 주사위 숫자를 더하기
    currentScore.value = Number(currentScore.value) + randomNumber;
  }

  console.log("currentScore.value", currentScore.value);
}

// 홀드 버튼 클릭
const holdBtn = document.getElementById("hold-btn");
holdBtn.addEventListener("click", hold);

// 홀드 함수
function hold() {
  totalScore.value = Number(currentScore.value) + Number(totalScore.value);
  console.log("totalScore.value", totalScore.value);

  if (totalScore.value > 50) {
    alert("game over");
    newGame();
  } else {
    playerChange();
  }
}

// 점수 초기화
const newGameBtn = document.getElementById("newGame-btn");
newGameBtn.addEventListener("click", newGame);

// 점수 초기화 함수
function newGame() {
  document.getElementById("current-score").value = 0;
  document.getElementById("total-score").value = 0;
  document.getElementById("current-score2").value = 0;
  document.getElementById("total-score2").value = 0;
  player = 1;
}

// player 체인지
function playerChange() {
  currentScore.value = 0;
  if (player === 1) {
    player = 2;
  } else {
    player = 1;
  }

  if (player === 2) {
    currentScore = document.getElementById("current-score2");
    totalScore = document.getElementById("total-score2");
  } else {
    currentScore = document.getElementById("current-score");
    totalScore = document.getElementById("total-score");
  }
}
