export class Calculate {
  public calculate(n: number) {
    const prime = this.numberPrime(n - 2);
    const triangular = this.numberTriangular(n - 2);
    const fibonacci = this.numberFibonacci(n - 1);

    return 2 * prime * (3 * triangular) * (7 * fibonacci);
  }

  public numberTriangular(n: number) {
    return (n * (n + 1)) / 2;
  }

  public numberFibonacci(n: number) {
    let a: number = 0,
      b: number = 1,
      temp: number;
    for (let i = 1; i < n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return a;
  }

  public numberPrime(n: number) {
    let count = 0,
      current = 2;
    while (count < n) {
      if (this.isPrime(current)) {
        count++;
      }
      current++;
    }
    return current - 1;
  }

  public isPrime(num: number) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
}
