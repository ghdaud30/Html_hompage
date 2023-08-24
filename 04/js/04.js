const callDice = () => {
    let n =  1 + Math.floor(Math.random() * 6);
    console.log(n);
    const adiv = document.querySelector("#adiv");
    console.log(adiv);

    adiv.innerHTML = `<img src='./images/${n}.png'>`;
    
}