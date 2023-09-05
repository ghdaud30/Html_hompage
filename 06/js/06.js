const pailindrome = (x) => {
    console.log("문자열길이: ", x.length)

    //문자열 처리
    if (x.length === 0) {
        return
    }

    //문자열 한글자씩

    // for (let i of x)
    //     console.log(i);

    //회문 확인
    const txt2 = document.querySelector("#txt2");
    s = "";
    for (let i = x.length - 1; i >= 0; i--) {
        s = s + x[i];
    }
    if (x === s) {
        txt2.value = "회문입니다";
    }
    else if (x != s) {
        txt2.value = "회문이 아닙니다";
    }

    s1 = x.split("");
    console.log("s=", s1);
    //console.log("s=", s1.reverse());
    s1 = s1.reverse()
    console.log("s=", s1.join(""));
}


// 숫자 합계
const numSum = (x) => {
    const txt2 = document.querySelector("#txt2");
    let sum = 0;

    for (let i of x) {
        if (!isNaN(i)) {
            //s = x.split("");
            //console.log(s);
            sum = sum + parseInt(i)
        }
    }
    txt2.value = sum;



}






document.addEventListener("DOMContentLoaded", () => {

    // 배열 확인
    let arr = [];

    // 버튼 확인
    const bts = document.querySelectorAll("input[type=button]");
    const txt1 = document.querySelector("#txt1");
    const rbt = document.querySelector("input[type=reset]");
    rbt.addEventListener("click", () => {
        // 배열 지우기
        arr.length = 0;
        console.log("The Array is gone");
    });

    console.log(bts);

    bts.forEach((item) => {
        item.addEventListener("click", () => {

            if (item.value === "회문확인")
                pailindrome(txt1.value);
            else numSum(txt1.value);
        });
    });


    const bt1s = document.querySelectorAll(".bt1");
    console.log(bt1s);
    bt1s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(item.textContent);
            switch (item.textContent){
                case 'Apple' :arr.push('🍎'); break;
                case 'Banana' :arr.push('🍌'); break;
                case 'Carrot' :arr.push('🥕'); break;
                case 'Watermelon' :arr.push('🍉'); break;
            }
            console.log(arr);
            txt1.value = arr.join(",");
        });
    });


    const bt2s = document.querySelectorAll(".bt2");
    console.log(bt2s);

    bt2s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(item.textContent);
            switch (item.textContent){
                case 'Apple_Delete' :
                    arr = arr.filter((item => item != '🍎'));
                    break;
                case 'Banana_Delete' :
                    arr = arr.filter((item => item != '🍌'));
                    break;
                case 'Carrot_Delete' :
                    arr = arr.filter((item => item != '🥕'));
                    break;
                case 'Watermelon_Delete' :
                    arr = arr.filter((item => item != '🍉'));
                    break;
            }
            console.log(arr);
            txt1.value = arr.join(",");
        });
    });

    const bt3s = document.querySelectorAll(".bt3");
    console.log(bt3s);
    bt3s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(item.textContent.slice(0,2));
            switch (item.textContent.slice(0,2)){
                case 'Ap' :
                    arr = arr.map((item => item === '🍎' ? '🥒' : item));
                    break;
                case 'Ba' :
                    arr = arr.map((item => item === '🍌'? '🥦' : item));
                    break;
                case 'Ca' :
                    arr = arr.map((item => item === '🥕'? '🍊' : item));
                    break;
                case 'Wa' :
                    arr = arr.map((item => item === '🍉'? '🍇' : item));
                    break;
            }
            console.log(arr);
            txt1.value = arr.join(",");
        });
    });


    const bt4s = document.querySelectorAll(".bt4");
    console.log(bt4s);
    bt4s.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            console.log(item.textContent.slice(0,2));
            switch (item.textContent.slice(0,2)){
                case 'Cu' :
                    arr = arr.map((item => item === '🥒' ? '🍎' : item));
                    break;
                case 'Br' :
                    arr = arr.map((item => item === '🥦'? '🍌' : item));
                    break;
                case 'Or' :
                    arr = arr.map((item => item === '🍊'? '🥕' : item));
                    break;
                case 'Gr' :
                    arr = arr.map((item => item === '🍇'? '🍉' : item));
                    break;
            }
            console.log(arr);
            txt1.value = arr.join(",");
        });
    });

});