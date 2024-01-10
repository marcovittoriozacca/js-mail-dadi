//array di email
const mailList = [
    'john.doe@gmail.com',
    'sarah.smith@gmail.com',
    'jennifer1234@gmail.com',
    'mike_anderson@gmail.com',
    'emily_87@gmail.com',
    'david1980@gmail.com',
    'lisa.jones@gmail.com',
    'ryan.miller@gmail.com',
    'anna.brown@gmail.com',
    'chriswilson@gmail.com',
    'jessica.martin@gmail.com',
    'andrew1985@gmail.com',
    'laura.baker@gmail.com',
    'matthew.green@gmail.com',
    'olivia78@gmail.com'
]

const inputEmailHtml = document.getElementById('inputEmail');
const checkBtnHtml = document.getElementById('checkBtn');
const resultHtml = document.getElementById('result');
const displayChange = document.querySelector('.d-none');


checkBtnHtml.addEventListener('click', function(){
    //reset delle classi che danno il colore allo sfondo del tag contenente il risultato
    resultHtml.classList.remove('bg-danger')
    resultHtml.classList.remove('bg-success')
    resultHtml.classList.remove('bg-warning')

    //controllo minimo sull'input dato dall'utente
    if(inputEmailHtml.value.length === 0){
        displayChange.classList.replace('d-none','d-block');
        resultHtml.innerHTML = 'Inserisci la tua mail prima!';
        resultHtml.classList.add('bg-warning');
    }else {
        //variabile di controllo
        let check = false;
        
        //scorrimento dell'intero array in cerca della corrispondente email. Se dovesse trovarla la variabile di controllo diventerà vera
        for (i = 0; i < mailList.length; i++){
            if (inputEmailHtml.value == mailList[i]){
                check = true;
            }
        }
        //se la variabile di controllo è vera allora la nostra email è presente nella lista, altrimenti no
        if (check == true){
            resultHtml.innerHTML = 'La tua mail è presenta nella lista!';
            resultHtml.classList.add('bg-success');
        }else{
            resultHtml.innerHTML = 'La tua mail non è presente nella lista';
            resultHtml.classList.add('bg-danger');
        }
    
        displayChange.classList.replace('d-none','d-block');
    }

})

