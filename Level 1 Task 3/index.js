var convertTemp = () => {
    var firstTemp = document.getElementById('temp').value;
    
    var unitSelected = document.getElementById('unit');
    var valueTemp = unit.options[unitSelected.selectedIndex].value;

    var celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    var fahTocel = (fah) => {
        let celsius = Math.round((fah -32) * 5/9);
        return celsius;
    }

    let result;
    if(valueTemp=='cel'){
        result = celToFah(firstTemp);
        document.getElementById('convertedTemp').innerHTML=`=${result}°Fahrenheit`;
    }else{
        result = fahTocel(firstTemp);
        document.getElementById('convertedTemp').innerHTML=`=${result}°Celsius`;
    }
}