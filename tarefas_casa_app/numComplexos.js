class NumerosComplexos {
    constructor(real, imag) {
      this.real = real;
      this.imaginary = imag;
    }
  
    add(other) {
      const numReal = this.real + other.real;
      const numImaginario = this.imaginary + other.imaginary;
      return new NumerosComplexos(numReal, numImaginario);
    }
  
    subtract(other) {
      const numReal = this.real - other.real;
      const numImaginario = this.imaginary - other.imaginary;
      return new NumerosComplexos(numReal, numImaginario);
    }
  
    multiply(other) {
      const numReal = this.real * other.real - this.imaginary * other.imaginary;
      const numImaginario = this.real * other.imaginary + this.imaginary * other.real;
      return new NumerosComplexos(numReal, numImaginario);
    }
  
    toString() {
      return `${this.real} + ${this.imaginary}i`;
    }
  }
  
  
  const num1 = new NumerosComplexos(2, 3);
  const num2 = new NumerosComplexos(1, 4);
  const num3 = new NumerosComplexos(5, 2);
  
  const result1 = num1.add(num2);
  const result2 = num1.subtract(num3);
  const result3 = num2.multiply(num3);
  
  console.log('Resultado 1 (adição):', result1.toString());
  console.log('Resultado 2 (subtração):', result2.toString());
  console.log('Resultado 3 (multiplicação):', result3.toString());
  