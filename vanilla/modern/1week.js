// 1. 변수 선언문은 호이스팅 가능 BUT, 변수대입부는 호이스팅 X
console.log(x);
var x;

console.log(y);
var y = 1;
console.log(y);

console.log(`i'm going to learn Javascript \u{1f4d6}.`);

// 2. es6 데이터 타입 - Symbol() : 주로 사용되는 예시
var NONE = 0; // 칸에 돌이 없다
var BLACK = -1; // 칸에 검은 돌이 있다
var WHITE = 1; // 칸에 흰 돌이 있다

var NONE = Symbol("none");
var BLACK = Symbol("black stone");
var WHITE = Symbol("white stone");

console.log(NONE.toString());
console.log(BLACK.toString());
console.log(WHITE.toString());

// 3. 객체 리터럴 {}
var card = { suit: "하트", rank: "A" };
console.log(card.suit);
console.log(card["rank"]);

card.value = 14;

delete card.rank;
console.log(card);

console.log("color" in card); // es6 in 객체의 값의 여부를 논리값으로 반환
// in 연산자는 조사하는 대상이 객체가 상속받은 모든 프로퍼티이다!!
console.log("toString" in card); // Object 객체를 상속받았기 때문에 true

var a = card;

console.log(a.suit);
a.suit = "스페이드";
console.log(a);
console.log(card);

// 4. 함수 : 원시 값을 인수로 넘겼을 때 - 값에 의한 호출 (값의 전달)
function add1(x) {
  return (x = x + 1);
}
var a = 3;
var b = add1(a);
console.log("a=" + a + ", b=" + b);

// 5. 함수 : 참조에 의한 호출 (객체 전달)
function add2(p) {
  p.x = p.x + 1;
  p.y = p.y + 1;
  return p;
}
var a = { x: 3, y: 4 };
var b = add2(a);
console.log(a, "b", b);

// 5. 변수의 충돌 막기
var a = "G";
function f() {
  var a = "L";
  console.log(a);
}
f();
console.log(a);

// 6. 함수 한에서의 변수 선언과 변수 끌어올림
function f1() {
  console.log(a1); // undefined
  //   console.log(h); // <- 참조에러
  var a1 = "local";
  console.log(a1);
  return a1;
}
f1();

// 7. 함수안에서의 변수선언생략하여 값을 대입하면 전역변수로 선언이 됨
function f2() {
  va = "L";
  console.log(va);
  return va;
}
f2();
console.log(va); // va가 함수 안에서 사용됬음에도 전역변수가 됨 변수선언을 하지 않아서

// 8. 함수리터럴(익명함수)는 호이스팅이 안된다
// console.log(squ(3)); // -> 타입에러
var squ = function(x) {
  return x;
};

// 9. 생성자
function Cc(suit, rank) {
  this.suit = suit;
  this.rank = rank;
} // 생성자
var card1 = new Cc("heart", "aa"); // 생성자로 객체 생성하는 것은 new 연산자 사용
console.log(card1); // card1은 Cc의 인스턴스
