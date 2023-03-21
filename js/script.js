const kmPrice = 0.21;

const nameUser = document.getElementById('name')

const kmUser = document.getElementById('km')

const button1 = document.getElementById('button1')

const button2 = document.getElementById('button2')

const ticket = document.querySelector('.ticket');






button1.addEventListener('click', function(){

    
    let name2 = document.getElementById('name2');
    name2 = nameUser.value;
    output.innerHTML = name2
    nameUser.value = "";


    const disc = document.getElementById('disc')
  
    
    
    
    
    
    
    let age = document.getElementById('age')
    
    name = nameUser.value;
    
    km = kmUser.value; 
    
    let standardPrice =  kmPrice * km;
    
    let discountPrice = standardPrice;
    
    if(age.value == 'minorenne'){
        discountPrice -= standardPrice * 20 / 100;
        ticket.classList.remove('hide');

    }else if(age.value == 'over65'){
        discountPrice -= standardPrice * 40 / 100;
        ticket.classList.remove('hide');

    }else if(age.value == 'maggiorenne')
    discountPrice = standardPrice;
    ticket.classList.remove('hide');
});





button2.addEventListener('click', function(){
    
    if(ticket){
        ticket.classList.add('hide')
    }
})
 




