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
let resetButton=document.getElementById("reset-button");
let chances=5;
let gameOver=false;
let chanceArea=document.getElementById("chance-area");
let mainImg=document.querySelector(".article-main #main-img img");
let history=[];

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value="";
}); //잠깐 쓰고 버릴꺼라 함수이름 x

//addEventListener(이벤트이름, 이벤트 발생시 실행함수) 이 버튼에 이벤트 더해주는
//함수도 매개변수처럼 넘길 수 있음 그래서 play()하면 안됨

function pickRandomNum(){
    computerNum=Math.floor(Math.random()*100)+1; //랜덤 숫자 뽑을 수 있게 하는 함수 기존꺼는 0~1(1에 근접한) 즉 곱하기 해도 1~100
    console.log("정답", computerNum); 
} 

function play(){
    let userValue=userInput.value;

    if(userValue<1||userValue>100)
    {
        resultArea.textContent="1과 100 사이 숫자를 입력해야해. 바보야.";
        mainImg.src="img_ham/햄스터짤_범위.jpeg";

        return;
    }

if(history.includes(userValue)){
    resultArea.innerHTML="이미 입력했던 숫자잖아. 다른 숫자 입력해."
    mainImg.src="img_ham/햄스터짤_같은숫자.jpeg";
    return;
}

    chances --;
    console.log(chances);

    chanceArea.textContent=`남은 기회 : ${chances}번`;

    if(userValue<computerNum){
        resultArea.textContent = "UP!!!";
    }else if(userValue>computerNum){
        resultArea.textContent = "DOWN!!!";
    }
    else{
        resultArea.textContent = "푸힝힝 나도 이제 부자다! 이 바보야!";
        gameOver=true;
        mainImg.src="img_ham/햄스터짤_정답.jpeg";
    }

    history.push(userValue);
    console.log(history);
    
    if(chances<1){
        gameOver=true;
        mainImg.src="img_ham/햄스터짤_오답.jpeg";
        resultArea.textContent = "난 이제 그지야 이 바보야";

    }
    if(gameOver==true){
        playButton.disabled=true;
    }
}

function reset(){
    //user input창이 깨끗하고 정리되고
    userInput.value="";
    //새로운 번호가 생성되고
    pickRandomNum();
    resultArea.textContent="결과값은 요기서 나와!";
    gameOver=false;
    chances=5;
    history=[];
    playButton.disabled=false;
    chanceArea.textContent=`남은 기회 : ${chances}번`;
    mainImg.src="img_ham/햄스터짤_메인2.gif";   
}

pickRandomNum();