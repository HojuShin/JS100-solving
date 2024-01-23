<h1>배열의 삭제</h1>

답안

        nums.pop();
        nums.pop();
---
설명 

    .pop(); 
    .pop();

배열에서 마지막 요소를 제거하고 반환하여 <span style="color:rgba(255, 243, 184, 0.92)">원본 배열 길이 변경됨</span> 

---

제출 

    .slice(시작인덱스, 마지막인덱스)
마지막 인덱스는 미포함<br>
<span style="color:rgba(255, 243, 184, 0.92)">원본 배열은 바뀌지 않음. </span>

    var nums = [100, 200, 300, 400, 500];
    nums.slice(0,3) //[100, 200, 300]

    console.log(nums) // [100, 200, 300, 400, 500]

---

