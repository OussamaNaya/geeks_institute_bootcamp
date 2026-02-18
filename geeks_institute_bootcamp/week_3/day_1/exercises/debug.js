    function calculate() {
      let a = 10;
      let b = 5;
      let sum = a + b;
      let product = a * b;

      console.log("Somme :", sum);
      console.log("Produit :", product);

      let result = multiply(sum);

      console.log("Résultat final :", result);
    }

    function multiply(x) {
      let y = 2;
      return x * y;
    }

calculate();
multiply(10);