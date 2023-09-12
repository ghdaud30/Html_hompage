let juso;     //전체주소
let si;       //시
let gu;       //구
let dong;     //동

//시설유형
let equptype = {
    "노인시설": "001",
    "복지회관": "002",
    "마을회관": "003",
    "보건소": "004",
    "주민센터": "005",
    "면동사모소": "006",
    "종교시설": "007",
    "금융기관": "008",
    "정자": "009",
    "공원": "010",
    "정자 파고라": "011",
    "공원": "012",
    "교량하부": "013",
    "나무그늘": "014",
    "하천둔치": "015",
    "기타": "099"
};

//select 박스 내용 지우기
const removeOption = (s, str1) => {
    while (s.hasChildNodes()) {
        s.removeChild(s.firstChild);
    }
    const option = document.createElement("option")
    option.text = str1;
    option.value = "";
    s.appendChild(option);
}


//select박스 채우기
//d:data st:selectbox
const addOption = (d, st) => {
    for (let [k, v] of Object.entries(d)) {
        console.log(k, v)
        const option = document.createElement("option")
        option.text = k;
        option.value = v;
        st.appendChild(option);
    }
}

//무더위 심터 정보 가져오기
const getData = async (cd, etype, h2) => {

    let ServiceKey = "odgWuZqEkLq3B8i3URl%2BvXJl42Lr61W8sPd0edRlzlvelJmFSPtJ%2B%2BpdQXpU8lhVdGN1yvYOHsuRJNH8G3m6aQ%3D%3D";
    let pageNo = 1;
    let numOfRows = 10;
    let type = "json";
    let year = '2023';
    let url = "https://apis.data.go.kr/1741000/HeatWaveShelter2/getHeatWaveShelterList2?";

    url = url + `ServiceKey=${ServiceKey}`;
    url = url + `&pageNo=${pageNo}`;
    url = url + `&numOfRows=${numOfRows}`;
    url = url + `&type=${type}`;
    url = url + `&year=${year}`;
    url = url + `&areaCd=${cd}&equptype=${etype}`;

    console.log("url: ", url);

    const resp = await fetch(url);
    const data = await resp.json();
    const viewTb = document.getElementById("viewTb");

    console.log(data);

    if(data["RESULT"]){
         h2.innerHTML = `<span class='h2sel1'>데이터가 존재하지 않습니다.</span>`;
         viewTb.innerHTML="";
         return;
     }
    h2.innerHTML = h2.innerHTML + `, <span class='h2Sel1'>totalCount : ${data["HeatWaveShelter"][0]["head"][0]["totalCount"]}</span>` ;
    let row = data.HeatWaveShelter[1].row;
    console.log(row);
    let conTag = "<table>";

    conTag = conTag + `<thead>
    <tr>
        <th scope="co1">쉼터명</th>
        <th scope="co1">주소</th>
        <th scope="co1">인원수</th>
        <th scope="co1">선풍기</th>
        <th scope="co1">에어컨</th>
    </tr>
    </thead>`;

    conTag = conTag + `<tbody>`;
    for (let item of row ){
        conTag = conTag + `<tr>`;
        conTag = conTag + `<td>${item.restname}</td>`;
        conTag = conTag + `<td>${item.restaddr}</td>`;
        conTag = conTag + `<td>${item.usePsblNmpr}명</td>`;
        conTag = conTag + `<td>${item.colrHoldElefn}대</td>`;
        conTag = conTag + `<td>${item.colrHoldArcndtn}대</td>`;
        conTag = conTag + `</tr>`;
    }
    viewTb.innerHTML = conTag;

}

//확인 버튼 눌렀을때 시설 코드 나오기
const bt_Click = () => {
    event.preventDefault(); //기본 버튼 기능을 삭제
    const h2 = document.querySelector("h2");

    // if(sel4.selectedIndex == 0){
    //     alert("모두 선택해주세요");
    //     return;
    // }

    if (sel1.value == "") {
        h2.innerHTML = `<span class='h2sel1'>시를 선택해 주세요.</span>`;
        return;
    }

    if (sel2.value == "") {
        h2.innerHTML = `<span class='h2sel1'>구를 선택해 주세요.</span>`;
        return;
    }

    if (sel3.value == "") {
        h2.innerHTML = `<span class='h2sel1'>동를 선택해 주세요.</span>`;
        return;
    }

    if (sel4.value == "") {
        h2.innerHTML = `<span class='h2sel1'>시설 유형을 선택해 주세요.</span>`;
        return;
    }

    //지역코드
    let areaCd = `${sel1.value}${sel2.value}${sel3.value}00`;
    let equpName = Object.entries(equptype)
        .filter(item => item[1] == sel4.value)[0][0];

    h2.innerHTML = `<span class='h2sel2'>지역코드 (행정동코드) : ${areaCd}, 
    시설유형 : ${sel4.value}(${equpName})</span>`;
    getData(areaCd, sel4.value, h2);


    // const selectedIndex = sel4.selectedIndex;
    // const selectedOptionValue = sel4.options[selectedIndex].value;
    // const selectedOptionValue2 = sel4.options[selectedIndex].textContent;
    // const selectedOptionValue3 = selectedOptionValue2 + " : " + selectedOptionValue;
    // p = document.createElement("p");
    // p.textContent = selectedOptionValue3;
    // viewTb.appendChild(p);

    // console.log(selectedOptionValue3);

    // if(viewTb.childElementCount >= 2){
    //     viewTb.removeChild(viewTb.firstChild);
    // }
}


//주소정보가져오기
const getJuso = async () => {        //비동기 방식인 async 사용
    const resp = await fetch("juso2023.json");
    const data = await resp.json();

    juso = data;

    si = {}
    //juso 배열
    juso.forEach(element => {
        let { 시도명칭, 시도코드 } = element;
        if (!si[시도명칭]) {
            si[시도명칭] = 시도코드;
        }
    });
    addOption(si, sel1);
    console.log(sel1);

}
//구정보 가져오기
const getGu = async () => {

    gu = {}
    //juso 배열
    juso.filter(item => item["시도코드"] === sel1.value)
        .map(item => {
            let { 시군구코드, 시군구명칭 } = item;
            if (!gu[시군구명칭])
                gu[시군구명칭] = 시군구코드;
        });
    removeOption(sel2, "--구선택--");
    removeOption(sel3, "--동선택--");
    removeOption(sel4, "--시설 유형--");
    addOption(gu, sel2);

    console.log(sel2);
}

//동정보 가저오기
const getDong = async () => {

    dong = {}
    //juso 배열
    juso.filter(item => item["시도코드"] === sel1.value
        && item["시군구코드"] === sel2.value)
        .map(item => {
            let { 읍면동코드, 읍면동명칭 } = item;
            if (!dong[읍면동명칭])
                dong[읍면동명칭] = 읍면동코드;
        });
    removeOption(sel3, "--동선택--");
    removeOption(sel4, "--시설 유형--");
    addOption(dong, sel3);
    console.log(sel3);
}

//시설정보 가져오기
const equpType = () => {
    removeOption(sel4, "--시설 유형--");
    addOption(equptype, sel4);
    console.log(sel4);
}

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    const sel3 = document.querySelector("#sel3");
    const sel4 = document.querySelector("#sel4");
    const bt = document.querySelector("#bt");
    const viewTb = document.querySelector("#viewTb");


    //시 정보
    sel1.addEventListener("click", () => {
        getJuso();     //구 정보
    });

    sel1.addEventListener("change", () => {
        getGu();        //구 정보
    });

    sel2.addEventListener("change", () => {
        getDong();      //동 정보
    })

    sel3.addEventListener("change", () => {
        equpType();     //시설 정보
    })


    sel2.addEventListener("click", () => {
        if (sel2.childElementCount < 2) {
            alert("구를 선택하세요.");
            console.log("구를 선택하세요");
        }
    })
    sel3.addEventListener("click", () => {
        if (sel3.childElementCount < 2) {
            alert("동을 선택하세요.");
            console.log("동를 선택하세요");
        }
    })
    sel4.addEventListener("click", () => {
        if (sel4.childElementCount < 2) {
            alert("시설 유형을 선택하세요.");
            console.log("시설 유형을 선택하세요");
        }
    })

    //확인 버튼을 눌렀을때
    bt.addEventListener("click", () => {
        bt_Click();
    });


});























// // console.log("-- Object --");
// // console.log(equptype);
// // console.log(equptype["노인시설"]); // 배열 키값
// // console.log(equptype.노인시설); // 배열 키값

// // object 순회
// for(let k in equptype){
//     console.log(k, equptype[k]); // 키 , 값
// }
// // object 순회
// for(let [k,v] of Object.entries(equptype)){
//     console.log(k, "=>", v);
// }

// //주소데이터 가져오기
// fetch('juso2023.json')
// .then(resp => resp.json()) // 주어진 데이터를 json 으로 변환
// .then(data => {
//     juso = data;         // data를 주소에 넣기
//     console.log(juso); // 패치를 먼저 하고 콘솔 출력

//     si = {}
//     //juso 배열
//     juso.forEach(element => {
//         let {시도명칭, 시도코드} = element;
//         if(!si[시도명칭]){
//             si[시도명칭] = 시도코드;
//         }
//     });
//     console.log(si);
// })
// .catch(error => console.log(error));

