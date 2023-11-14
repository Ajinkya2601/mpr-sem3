const donate = document.getElementById('donate')
const buy= document.getElementById('buy')
const donation=document.getElementById('donation')
const merchandise= document.getElementById('merchandise')
const end=document.getElementsByClassName('end')

donation.addEventListener('click',function(){
    donation.style.backgroundColor='#19cb19'
    merchandise.style.backgroundColor='#357738'
    donate.style.display='block';
    buy.style.display='none'
    end[0].style.display='flex'
})

merchandise.addEventListener('click',function(){
    merchandise.style.backgroundColor='#19cb19'
    donation.style.backgroundColor='#357738'
    buy.style.display='block';
    donate.style.display='none'
    end[0].style.display='flex'
})