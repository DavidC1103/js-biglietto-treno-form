const kmPrice = 0.21;

const nameUser = document.getElementById('name')
console.log('name', name);

const kmUser = document.getElementById('km')
console.log('km', km);

const button1 = document.getElementById('button1')

const button2 = document.getElementById('button2')







button1.addEventListener('click', function(){
    
    let age = document.getElementById('age')
    console.warn('age', age.value);

    name = nameUser.value;
    console.log('nomeutente', name);
    
    km = kmUser.value; 
    console.log('km utente', km);
    
    let standardPrice =  kmPrice * km;
    console.log('prezzo standard', standardPrice);
    
    let discountPrice = standardPrice;
    
    if(age.value == 'minorenne'){
        discountPrice -= standardPrice * 20 / 100;
        console.log('discountPrice', discountPrice);
    }else if(age.value == 'over65'){
        discountPrice -= standardPrice * 40 / 100;
        console.log('discountPrice', discountPrice);
    }
});







