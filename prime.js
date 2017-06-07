function getPrime(n) {
    var primes = [];
    for(var i = 2; i < n; i++) {
        primes[i] = true;
    }
    for(i = 2; i < n; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }
    for(i = 2; i < n; i++) {
        if(primes[i] === true) {
          console.log(i)
        }
    }
}
getPrime(100);