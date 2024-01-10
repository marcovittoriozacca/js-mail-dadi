//funzione per generare i numeri dei dadi (randomici)
function randomNumGen(min, max){
    return Math.floor (Math.random()*(max-min + 1)+min);
}



const diceButton = document.getElementById('diceBtn');
const userHtml = document.getElementById('user');
const cpuHtml = document.getElementById('cpu');
const resultHtml = document.getElementById('result');
const displayChange = document.querySelector('.d-none');



diceButton.addEventListener('click', function(){

    //reset classi del risultato
    resultHtml.className = '';

    //generazione valori dei dadi
    let userDice = randomNumGen(1,6), cpuDice = randomNumGen(1,6), result;

    //output nel DOM dei dadi
    userHtml.innerHTML = userDice;
    cpuHtml.innerHTML = cpuDice;
    userHtml.classList.add('bg-body-tertiary', 'dice', 'rounded', 'border', 'border-2');
    cpuHtml.classList.add('bg-body-tertiary', 'dice', 'rounded', 'border', 'border-2');

    
    if (userDice > cpuDice){
        result = "Vince l'utente!";
        resultHtml.classList.add('btn','bg-success','p-3', 'text-light');
        

    }else if (userDice < cpuDice){
        result = 'Vince la cpu!';
        resultHtml.classList.add('btn','bg-danger','p-3', 'text-light');

    }else{
        result = 'Pareggio!';
        resultHtml.classList.add('btn','bg-warning','p-3');
    }
    //dadi e risultati vengono visualizzati nel DOM
    displayChange.classList.replace('d-none','d-block')
    resultHtml.innerHTML = result;
    
})



