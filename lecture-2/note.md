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
