// const domCreate = () => {
//     console.log("dom Create");
//     const myh2 = document.createElement("button");
//     const myh2Txt = document.createTextNode("Java Script Produce");

//     myh2.appendChild(myh2Txt);
//     document.getElementById("adiv").append(myh2);
// }

// const domRead = () => {
//     console.log("dom Read");
//     const myh1 = document.querySelector("h1");
//     console.log("innerHTML =>" , document.querySelector("h1").innerHTML);
//     console.log("innerHTML =>" , myh1.innerHTML);
// }

// const domUpdate = () => {
//     console.log("dom Update");
//     const myh1 = document.querySelector("h1");
//     myh1.innerHTML = "<h3>C# UPDATE</h3>";
//     myh1.textContent = "<h3>C# UPDATE</h3>";
// }

// const domDelete = function(){
//     console.log("dom Delete");
//     const myh2 = document.querySelector("h2");

//     if (myh2){
//         console.log("myh2",myh2);
//         myh2.remove();
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
    const bt1 = document.querySelector("footer > div ");
    console.log(bt1.textContent);

    const bt = document.querySelectorAll("button");
    console.log(bt);

    //nodelist 순회
    // 1. 전통적인 for
    console.log("1. 전통적인 for")
    for(let i = 0; i < bt.length; i ++){
        console.log(bt[i]);
    }

    //2. for ..in : 키순회
    console.log("2. for ..in : 키순회")
    for(let i in bt){
        console.log(bt[i])
    }

    //3. array 순회
    console.log("3. array 순회")
    bt.forEach((i, idx) => console.log(idx ,i))

    //4. for .. of 순회
    console.log("4. for .. of 순회")
    for (let [idx,i] of bt.entries()){
        console.log(idx, i);
    }

    console.log("take Caption Value of Button")
    let s ="";
    s = s + "Button Caption";
    console.log(s);

    for(let i of bt){
        s = s + "<li>" + i.getAttribute("id") + i.textContent + "</li>";
    }
    console.log(s);
    document.querySelector("#adiv").innerHTML = "<ul>" + s + "</ul>";
});