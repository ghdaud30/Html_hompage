//html 문서가 로드 된후 실행 되는 함수
document.addEventListener("DOMContentLoaded", ()=>{

    //버튼 가져오기
    // const bts = document.querySelectorAll("button");
    // bts.forEach((item) => {
    //     item.addEventListener("click", () =>{
    //         //console.log(item.textContent)
    //         dice2(parseInt(item.textContent)); //문자를 숫자로 바꿔줌
    //     });
    // }) ;

    const bt = document.querySelector("button");
    const radios = document.querySelectorAll("input[type = radio]")
    bt.addEventListener("click", () =>{
        //console.log(radios);
        for(let item of radios){
            //console.log(item);
            if(item.checked){
                console.log(item.value);
                //문자를 숫자로 변환
                dice2(parseInt(item.value));
                //foreach()는 break 구문 사용 안됨
                break;
            }
        }
    });
});

const callDice = () => {
    let n =  1 + Math.floor(Math.random() * 6);
    console.log(n);
    const adiv = document.querySelector("#adiv");
    console.log(adiv);

    adiv.innerHTML = `<img src='./images/${n}.png'>`;
    
}

//view the dice
const dice = () => {
    
}

// when button is clicked, view the dice
const dice2 = (seln) =>{
    // 주사위 숫자 1~6
    let n = Math.floor(Math.random() * 6) + 1;

    // 주사위 이미지 넣을 위치
    const adiv = document.querySelector("#adiv");
    adiv.innerHTML = `<img src='./images/${n}.png'>`;

    // 결과 출력을 위한 위치
    const h2 = document.querySelector("hgroup > h2");
    h2.style.color = "red";
    if (n === seln){
        h2.textContent = "correct(win)";
        h2.style.color = "yellow";
    }
    else {
        h2.textContent = "correct(lose)";  
        h2.style.color = "green";
    }
}

const dice3 = () =>{

}