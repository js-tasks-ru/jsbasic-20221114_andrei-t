function factorial(n) {
    // ваш код...
    let sum = 1;

    if (n == 0 || n == 1) {
        return sum;
    } else {
        for (let i = n; i >= 1; i--) {
            sum = sum * i;
        }
        return sum;
    }
  
}
