const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

const greet = (temperature) =>
  console.log(`Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`);

// const sendMarsTemperature = (scale) => {
//     if (scale === greet) {
//     setTimeout(() => console.log(`Olá! Curiosity aqui. Nesse momento está  ${getMarsTemperature()}ºC em Marte`), messageDelay())
//     }  setTimeout(() => console.log(`Atualmente está  ${toFahrenheit(getMarsTemperature())}ºF em Marte`), messageDelay())
// }

const sendMarsTemperature = (onSuccess) => { 
    const currentTemperature = getMarsTemperature(); 
    setTimeout(() => onSuccess(currentTemperature), messageDelay())
  };

sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo