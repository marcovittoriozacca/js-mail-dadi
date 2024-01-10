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


let personalMail = prompt('Inserisci la tua mail');
let check = false;

for (i = 0; i < mailList.length; i++){
    if (personalMail == mailList[i]){
        check = true;
    }
}
if (check == true){
    console.log('La tua mail è inclusa');
}else{
    console.log('La tua mail NON è inclusa');
}