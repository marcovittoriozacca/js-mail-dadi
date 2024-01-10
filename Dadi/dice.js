//funzione per generare i numeri dei dadi (randomici)
function randomNumGen(min, max){
    return Math.floor (Math.random()*(max-min + 1)+min);
}


const diceButton = document.getElementById('diceBtn');

diceButton.addEventListener('click', function(){
    console.clear();
    let userDice = randomNumGen(1,6), cpuDice = randomNumGen(1,6);
    console.log(`dado utente: ${userDice} - dado computer: ${cpuDice}`)

    if (userDice > cpuDice){
        console.log("vince l'utente!")

    }else if (userDice < cpuDice){
        console.log("vince il computer!")

    }else{
        console.log("pareggio!")

    }
})



