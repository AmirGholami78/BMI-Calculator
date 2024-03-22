let $ = document
let weight = $.querySelector( '#weight' )
let weightVal = $.querySelector( '#weight-val' )
let height = $.querySelector( '#height' )
let heightVal  = $.querySelector( '#height-val' )
let result = $.querySelector('#result')
let category = $.querySelector('#category')
let details = $.querySelector('.info')



function BMICal () {
    let weightInputValue = weight.value
    let heightInputValue = height.value
    
    heightVal.innerHTML = heightInputValue + 'cm'
    weightVal.innerHTML = weightInputValue + 'kg'

    // BMI Formula : (weight / (height * height))
    let bmiVal = (weightInputValue / (Math.pow(heightInputValue/100,2))).toFixed(2)

    result.innerHTML = bmiVal

    if (bmiVal < 18.5) { // UnderWeight
        category.innerHTML = 'UnderWeight'
        result.style.color = '#ffc44d'

        
        details.innerHTML = "People who are underweight (BMI less than 18.5 kg/m2), don't get enough nutrients and don't exercise, may be malnourished and suffer from the following: Risk of poor immune function Respiratory diseases Digestive diseases Cancer Infertility bone depression"
        

    } else if (bmiVal >= 18.5 && bmiVal <= 24.9) { // Normal Weight
        category.innerHTML = 'Normal Weight'
        result.style.color = '#0be881'

        
        details.innerHTML = "BMI is an indicator of total body fat in many people. Therefore, it is considered as a health risk indicator. The purpose of normal or normal BMI is to place people with a certain height and weight in a normal weight range, so that they have the least fat tissue in their body. Being normal in this situation means being away from the risk of being harmed by various diseases related to obesity, such as diabetes or heart attack."
    } else if (bmiVal >= 25 && bmiVal < 29.9) { // OverWeight
        category.innerHTML = 'OverWeight'
        result.style.color = '#ff884d'

        
        details.innerHTML ="People who are overweight according to the BMI criteria (with a BMI of more than 25 kg/m2), do not follow a proper diet and do not have enough physical activity and movement, are exposed to the following risks: high blood cholesterol or other lipid disorders, type 2 diabetes, heart disease Heart attack or stroke, high blood pressure, certain cancers, gall bladder disease, sleep apnea and snoring, premature death, arthritis and joint disease."
    } else { // Obese
        category.innerHTML = 'Obese'
        result.style.color = '#ff5e4d'

        
        details.innerHTML ="People who are overweight according to the BMI criteria (with a BMI of more than 25 kg/m2), do not follow a proper diet and do not have enough physical activity and movement, are exposed to the following risks: high blood cholesterol or other lipid disorders, type 2 diabetes, heart disease Heart attack or stroke, high blood pressure, certain cancers, gall bladder disease, sleep apnea and snoring, premature death, arthritis and joint disease."
    }

}



weight.addEventListener('input' , BMICal)
height.addEventListener('input' , BMICal)