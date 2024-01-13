 const modal: HTMLDivElement | null = document.querySelector('.modal');
 const overlay: HTMLDivElement | null = document.querySelector('.overlay');
 const btnCloseModal: HTMLDivElement | null = document.querySelector('.close-modal');

 // if you want to use typescript to select multiple HTML elements with same class the do the following.
 // you need to use NodeListOf<HTMLDivElement | other type of div element> and document.querySelectorAll() to select 
 // multiple HTML elements with same class.

 const showModalButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.show-modal');
 

 
// with for loop

for(let i: number = 0; i < showModalButtons.length; i++){
    showModalButtons[i].addEventListener('click', function(){
  modal?.classList.remove('hidden');
  overlay?.classList.remove('hidden');
    });
}

overlay?.addEventListener('click', function(){
overlay.classList.add('hidden'); // there are used for adding or removing class from the html element. 
modal?.classList.add('hidden'); // and styling for this class must be provide in css file.
});

btnCloseModal?.addEventListener('click', function(){
    overlay?.classList.add('hidden');
    modal?.classList.add('hidden');
});

document.addEventListener('keydown', function(e){
if(e.key === 'Escape' && !modal?.classList.contains('hidden')){   // it is checking, whether the modal has 'hidden' class or not in the html element.
    overlay?.classList.add('hidden');
    modal?.classList.add('hidden');
   }

});
 

//==============================================================================================================================================================

// if you want to apply different actions with same variable then do the following.

/* let firstButton: HTMLButtonElement | undefined = showModalButtons[0];
let secondButton: HTMLButtonElement | undefined = showModalButtons[1];
let thirdButton: HTMLButtonElement | undefined = showModalButtons[2];

if(firstButton){
    firstButton.addEventListener('click', function(){
alert('this is from first modal');
    });
}

if(secondButton){
    secondButton.addEventListener('click', function(){
alert('this is from first modal');
    });
} */
 
// ================================================================================================================================================================

// or do the following: 

/* showModalButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        switch (index) {
            case 0:
                alert('This is from the first button');
                break;
            case 1:
                alert('This is from the second button');
                break;
            // Add more cases if needed
            default:
                break;
        }
    });
});
 */

// ================================================================================================================================================================


//========================================================================================================================
// with foreach loop

// if you want to apply same actions with "showModalButtons variable" towards selected html elements then do the following.

/* 


 const modal: HTMLDivElement | null = document.querySelector('.modal');
 const overlay: HTMLDivElement | null = document.querySelector('.overlay');
 const btnCloseModal: HTMLDivElement | null = document.querySelector('.close-modal');
 const showModalButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.show-modal');
 const hiddenElement: NodeListOf<HTMLDivElement> = document.querySelectorAll('.hidden');

showModalButtons.forEach((button) => {
    
    // Do something with each button
   button.addEventListener('click', function(){
    // hiddenElement loop starts

    hiddenElement.forEach((hides) => {
   hides.style.display = "block";
    });

    // hiddenElement loop ends
   });

  });

 // typescript logic for btnCloseModal 

btnCloseModal?.addEventListener('click', function(){
hiddenElement.forEach((hides)=> {
    hides.style.display = "none";
})
});

overlay?.addEventListener('click', function(){
    hiddenElement.forEach((hides)=> {
        hides.style.display = "none";
    })
   
    }); 

// hiding modal with "ESC" key from the keyboard
// for keyboard events we use "document" and in the addEventlistner the keyboard events are 3 types
// "keydown", "keyup"  and "keypress"

document.addEventListener('keydown', function(e){
//  console.log(e); -- it will generate a list of object, if any key get pressed and show the name on which button has been clicked.
 if(e.key === 'Escape'){
    hiddenElement.forEach((hides)=> {
        hides.style.display = "none";
    })
 }
}); */