문제20 : 몫과 나머지
공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

입출력

입력 : 10 2
출력 : 5 0

//예상답 
const input = prompt('a,b이력').split(' '); 
console.log(input)

const 몫 = parseInt(input[0],10) / parseInt(input[1], 10)

const 나머지 = parseInt(input[0],10) % parseInt(input[1], 10)

console.log(몫, 나머지)

// 답
const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

//Math.floor 
Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환

연산에는 Math 객체를 사용해보자..