// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입출력

입력 : 거꾸로
출력 : 로꾸거

//예상답
const input = prompt('입력');

let nameArr = input.split('') ; // 입력값을 배열로 반환

nameArr = nameArr.reverse(); // 배열을 역순으로 

console.log(nameArr.join('')) // 하나의 문자열로 합침

// 답 , 설명
const reverseString = n.split('').reverse().join('');
/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/
