### var 가 가진 문제

1. var 로 정의된 변수가 함수 스코프를 가진다는 것.

`scope : 변수가 사용될 수 있는 영역`

var 변수를 함수가 아닌 프로그램의 가장 바깥에서 정의하면 전역 변수가 됨.

for, if, while, switch 문 등 에서 선언한 var 변수는 각 문을 벗어나도 변수가 사라지지 않는다.

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // 10
```

var 변수의 스코프 제한을 위해 즉시 실행 함수를 사용하기도 함. (번거롭고 가독성이 떨어짐)

2. 호이스팅

var 로 정의된 변수는 그 변수가 속한 스코프의 최상단으로 끌어올려짐

이를 `호이스팅(hoisting)`이라고 부름.

```js
console.log(foo); // undefined
var foo = "foo";
```

호이스팅의 결과는 다음과 같음

```js
var foo = undefined;
console.log(foo); // undefined
foo = "foo";
```

3. 재정의 가능

### const, let

const, let 은 블록 스코프를 가진다.

```js
if (true) {
  const foo = "foo";
}
console.log(foo); // 참조 에러
```

const, let 또한 호이스팅된다. 하지만 변수를 정의하기 전에 변수를 사용하려고 하면 참조 에러가 발생한다.

const 로 선언한 변수는 재할달되지 않는다.

하지만 const 로 정의된 객체의 내부 속성값은 수정 가능하다.

```js
const bar = { prop1: "a" };
bar.prop1 = "b";
bar.prop2 = 123;
console.log(bar); // {prop1 : 'b', prop2: 123};

const arr = [10, 20];
arr[0] = 100;
arr.push(300);
console.log(arr); // [100, 20, 300];
```

객체 내부의 속성값 수정도 불가능 하게 하고 싶다면 immer, immutable.js 등의 패키지 활용

단지 수정을 차단하고 싶다면. `Object.freeze` `Object.seal` `Object.preventExtensions` 등의 내장 함수 활용
