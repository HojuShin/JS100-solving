        const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
        let sum = 0;

        for (let i=0; i<3; i++){
            sum += parseInt(scores[i], 10); 
        }


        console.log(Math.floor(sum/3)); 

parseInt(해당값, 10)는 십진수의 형태의 숫자로 데이터 타입을 변환.


Math.floor 메서드는 소수점 자리를 모두 버림.