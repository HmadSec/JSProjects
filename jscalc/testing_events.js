const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener('keydown', event =>  {
    output.textContent = `You pressed the key: ${event.key}.`
})



/* Form testing */
//add an event handler on the submit button
//when the form is submitted, test if the inputs are empty
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

//lets add the event listener
form.addEventListener('submit', e => {
    //check if inputs are empty
    if(fname.value === '' || lname.value === '') {
        console.log('One or Both inputs are empty!');
        //prevent default behavior which is submitting the form
        e.preventDefault();
        para.textContent = "You need to fill in both names!";
    } else {
        console.log(`Both inputs are not empty: fname = ${fname.value}, lname = ${lname.value}.`);
       
    }
})