const qrLink = document.getElementById('qr-link');
const qrBtn = document.getElementById('qr-generate');
const qrReset = document.getElementById('qr-reset');
const qrImage = document.getElementById('qr-image');

const qrError = document.getElementById('error-message');


qrBtn.addEventListener('click', ()=>{
    const inputValue = qrLink.value;

    if(!inputValue){
        qrLink.classList.add('placeholder-red');
        qrLink.placeholder = "Please enter text"

        //this will enable the bottom text
        qrError.style.display = 'block';
        return;
    }
    else{
        qrImage.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImage.alt = `${inputValue}`
    }
});

qrReset.addEventListener('click', ()=> {
    // You can set all the values to Null
   qrLink.value = '';
   qrImage.src = '';
   qrImage.alt = '';

   // Or Relode the webpage
   location.reload();

   //above both method works perfectly fine
})