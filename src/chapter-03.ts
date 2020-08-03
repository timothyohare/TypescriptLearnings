import { updateSourceFileNode, collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { arrayify } from 'tslint/lib/utils';

function add1(a: number, b: number) {
  return a + b;
}
const x: number = add1(20, 20);
console.log(x);
const y = add1.apply(null, [10, 20]);
console.log(y);

// Chapter 4

// pg. 52

function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibonacciGenerator = createFibonacciGenerator(); // IterableIterator<number>
let m = fibonacciGenerator.next(); // evaluates to {value: 0, done: false}
console.log(m);
m = fibonacciGenerator.next();
console.log(m);
m = fibonacciGenerator.next();
console.log(m);
m = fibonacciGenerator.next();
console.log(m);

const numbers = {
  *[Symbol.iterator]() {
    for (let n = 1; n <= 10; n++) {
      yield n;
    }
  }
};

const greet3 = (name: string) => {
  return 'hello' + name;
};

function area(radius: number): number | null {
  if (radius < 0) {
    return null;
  }
  return Math.PI * radius ** 2;
}

const r = 3;
const a = area(r);
if (a != null) {
  console.info('result:', a);
}

type Log = (message: string, userId?: string) => void;

const log: Log = (message, userId = 'Not signed in') => {
  const time = new Date().toISOString();
  console.log(time, message, userId);
};

function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}

times((n) => console.log(n), 4);

// Chapter 4: functions pg. 60

type Reserve = {
  (from: Date, to: Date, destination: string): void;
  (from: Date, destination: string): void;
};

const reserve: Reserve = (from: Date, toOrDestination: Date | string, destination?: string) => {
  if (toOrDestination instanceof Date && destination !== undefined) {
    // Book a one-way trip
  } else if (typeof toOrDestination === 'string') {
    // book a round trip
  }
};
/*
type CreateElement = {
    (tag: 'a') : HTMLAnchorElement
    (tag: 'canvas') : HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
}

let createElement: CreateElement = (tag: string): HTMLElement => {
    // ..
}*/

type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

const filter: Filter = (array, f) => {
  //function filterArray(array, f) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};

const names = [{ firstName: 'beth' }, { firstName: 'caitlyn' }, { firstName: 'xin' }];

const result = filter(names, (_) => _.firstName.startsWith('b'));
console.log(result[0].firstName);

function map<T, U>(array: T[], f: (item: T) => U): U[] {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}
const result2 = map(['a', 'b', 'c'], (_) => _ === 'a');
console.log(result);
