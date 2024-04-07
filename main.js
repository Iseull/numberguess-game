//랜덤번호 지정
//유저가 번호 입력, go버튼 누름
//만약 유저가 맞추면-> 맞췄습니다!
//랜덤번호<유저번호 down!!
//랜덤번호>유저번호 up!! 
//reset버튼 누르면 게임 리셋 
//5번의 기회를 다쓰면 게임이 끝남(추측불가, 버튼 사용불가)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려줌. 기회 깎지 않음
//유저가 이미 입력한 숫자 또 입력하면 알려줌. 기회 깎지 않음

let computerNum=0;
let playButton=document.getElementById("play-button");
//document 이 웹사이트 자체이고, 플레이버튼이란 아이디(클래스같은것도 o)를 선택한다는 의미
let userInput=document.getElementById("user-input");
let resultArea=document.getElementById("result-area");

playButton.addEventListener("click",play);

//addEventListener(이벤트이름, 이벤트 발생시 실행함수) 이 버튼에 이벤트 더해주는
//함수도 매개변수처럼 넘길 수 있음 그래서 play()하면 안됨

function pickRandomNum(){
    computerNum=Math.floor(Math.random()*100)+1; //랜덤 숫자 뽑을 수 있게 하는 함수 기존꺼는 0~1(1에 근접한) 즉 곱하기 해도 1~100
    console.log("정답", computerNum); 
} 

function play(){
    let userValue=userInput.value;

    if(userValue<computerNum){
        resultArea.textContent = "UP!!!";
    }else if(userValue>computerNum){
        resultArea.textContent = "DOWN!!!";
    }
    else{
        resultArea.textContent = "맞추셨습니다!!!";
    }
}
pickRandomNum();