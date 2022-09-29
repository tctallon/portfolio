// Toggle Mobile Menu

const toggleBtn = document.querySelector('#burgerBtn');
const navDisplay = document.querySelector('#toggleDisplay');

toggleBtn.addEventListener('click', () =>{
    if(navDisplay.style.display === 'none'){
        navDisplay.style.display = 'grid';

    } else {
        navDisplay.style.display = 'none';
    }
});