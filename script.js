function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "Please enter valid height and weight.";
        return;
    }
    
    var bmi = weight / ((height / 100) ** 2);
    var category;
    
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal";
    } else {
        category = "Overweight";
    }
    
    var resultText = "Your BMI is " + bmi.toFixed(2) + ", which is considered " + category + ".";
    
    document.getElementById('result').innerHTML = resultText;
    
    var historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = '<span class="index">' + (document.getElementById('history').childElementCount + 1) + '</span><span class="details">' + resultText + '</span>';
    
    document.getElementById('history').appendChild(historyItem);
}

function clearHistory() {
    document.getElementById('history').innerHTML = '';
}
