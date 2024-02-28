class InchConversion {//class inch conversion
    static convertToFeet(inches) {//method to convert inches to feet
      const feet = inches / 12;
      return feet;
    }

    static convertToYards(inches) {//method to convert inches to yards
      const yards = inches / 36;
      return yards;
    }
  }

  function convert() {
    const inchInput = document.getElementById('inchInput');
    const resultContainer = document.getElementById('resultContainer');
    
    const inputValue = parseFloat(inchInput.value);

    if (isNaN(inputValue)) {//If else checking if valid number
      resultContainer.innerHTML = '<p>Please enter a valid number.</p>';
    } else {//when its a valid number it'll result inches methods
      const feetResult = InchConversion.convertToFeet(inputValue);
      const yardsResult = InchConversion.convertToYards(inputValue);

      resultContainer.innerHTML = `
        <p>${inputValue} inches is equal to ${feetResult.toFixed(2)} feet.</p>
        <p>${inputValue} inches is equal to ${yardsResult.toFixed(2)} yards.</p>
      `;
    }
  }