function scope() {
  const bodyClass = document.body.classList.contains("imc-calculator");
  if (bodyClass === true) {
    const imcForm = document.querySelector(".imc-form");
    imcForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const weight = document.querySelector("#weight").value;
      const height = document.querySelector("#height").value;
      const imcCoeficient = weight / height ** 2;

      let imcResult;
      if (imcCoeficient < 18.5) {
        imcResult = "Abaixo do peso";
      } else if (imcCoeficient >= 18.5 && imcCoeficient <= 24.9) {
        imcResult = "Peso normal";
      } else if (imcCoeficient >= 25 && imcCoeficient <= 29.9) {
        imcResult = "Sobrepeso";
      } else if (imcCoeficient >= 30 && imcCoeficient <= 34.9) {
        imcResult = "Obesidade Grau 1";
      } else if (imcCoeficient >= 35 && imcCoeficient <= 39.9) {
        imcResult = "Obesidade Grau 2";
      } else if (imcCoeficient >= 40) {
        imcResult = "Obesidade Grau 3";
      } else {
        imcResult = "Impossível determinar";
      }

      const resultElement = document.querySelector(".imc-final-result");
      if (imcCoeficient < 18.5) {
        resultElement.style.display = "block";
        resultElement.style.backgroundColor = "silver";
        resultElement.innerHTML = `<p>Seu IMC é ${imcCoeficient} (${imcResult})</p>`;
      } else if (imcCoeficient >= 18.5 && imcCoeficient <= 24.9) {
        resultElement.style.display = "block";
        resultElement.style.backgroundColor = "lime";
        resultElement.innerHTML = `<p>Seu IMC é ${imcCoeficient} (${imcResult})</p>`;
      } else if (imcCoeficient >= 25 && imcCoeficient <= 29.9) {
        resultElement.style.display = "block";
        resultElement.style.backgroundColor = "green";
        resultElement.innerHTML = `<p>Seu IMC é ${imcCoeficient} (${imcResult})</p>`;
      } else if (imcCoeficient >= 30 && imcCoeficient <= 34.9) {
        resultElement.style.display = "block";
        resultElement.style.backgroundColor = "yellow";
        resultElement.innerHTML = `<p>Seu IMC é ${imcCoeficient} (${imcResult})</p>`;
      } else if (imcCoeficient >= 35 && imcCoeficient <= 39.9) {
        resultElement.style.display = "block";
        resultElement.style.backgroundColor = "olive";
        resultElement.innerHTML = `<p>Seu IMC é ${imcCoeficient} (${imcResult})</p>`;
      } else if (imcCoeficient >= 40) {
        resultElement.style.display = "block";
        resultElement.style.backgroundColor = "maroon";
        resultElement.innerHTML = `<p>Seu IMC é ${imcCoeficient} (${imcResult})</p>`;
      } else {
        resultElement.style.display = "block";
        resultElement.style.backgroundColor = "yellow";
        resultElement.innerHTML = `<p>Seu IMC é ${imcCoeficient} (${imcResult})</p>`;
      }
    });
  }
}
scope();
