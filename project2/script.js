const form=document.querySelector('form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const height=parseInt(document.querySelector('#height').value)/100
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')

    if (height===''|| height<0|| isNaN(height)) {
        result.innerHTML=`Please enter valid numbers for height ${height}`
    }
    // result.innerHTML=`${height} `
    else if (weight===''|| weight<0|| isNaN(weight)) {
        result.innerHTML=`Please enter valid numbers for weight ${weight}`
    }
    // result.innerHTML=`${weight} `
    else{
        const bmi=(weight/(height*height)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`
    }
});