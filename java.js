function convertirTemperatura() {
    let temperaturaCelsius;
  
    do {
      temperaturaCelsius = prompt("Ingrese la temperatura en grados Celsius:");
    } while (isNaN(temperaturaCelsius));
  
    let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;
  
    console.log("Grados Kelvin:", temperaturaKelvin);
    console.log("Grados Fahrenheit:", temperaturaFahrenheit);
  }
  
  convertirTemperatura();
  
