// prezzo biglietto per km
const kmPrice = 0.21;
// sconto <18
const disc20 = 20;
//sconto >65
const disc40 = 40;

const nameUser = document.getElementById('name')
console.log('name', name);

const kmUser = document.getElementById('km')
console.log('km', km);

const button1 = document.getElementById('button1')

const button2 = document.getElementById('button2')


button1.addEventListener('click', function(){
    
    km = kmUser.value; 
    console.log('km da percorrere', km);

    let standardPrice =  kmPrice * km;
    console.log('prezzo standard', standardPrice);
    
    
})







