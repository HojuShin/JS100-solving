# 문제19 : 제곱을 구하자

공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

//예상답

const input = prompt('a,b이력').split(' '); 

 const a = parseInt(input[0])
 const b = parseInt(input[1])
 
 console.log(a**b)


//답, 설명
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));

Math.pow 함수는 
두 개의 매개변수를 받아 첫 번째 매개변수를 두 번째 매개변수만큼 거듭제곱한 값을 반환