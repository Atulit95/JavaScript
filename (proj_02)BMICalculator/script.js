const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === "" || weight < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }

    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    function bmiWeight(text){
        const weight_guide = document.querySelector("#weight-guide")
        const newEle = document.createElement("p")
        newEle.className = "bmiindex"
        newEle.innerHTML = `${text}`
        weight_guide.appendChild(newEle)
    }
    if(bmi > 0 && bmi < 18.6){
        bmiWeight('Under Weight')
    }
    else if(bmi >= 18.6 && bmi < 24.9){
        bmiWeight('Normal Weight')
    }
    else if(bmi >= 24.9){
        bmiWeight('OverWeight')
    }
});