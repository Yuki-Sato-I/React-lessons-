class Counter {
  constructor(initialCount) {
    this.c = initialCount;
  }

  increment() {
    return this.c++;
  }
}

const counter = new Counter(1);

console.log(counter.increment(), counter.increment(), counter.increment());