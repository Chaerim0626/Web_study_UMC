//if문
//fasle : 0, -0, null, false, undefined

let age = 22

if(age > 19) {
    console.log("술을 마실 수 있다.")
} else {
    console.log("미성년자");
}

//삼항 연산자 : 조건 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드
age > 19 ? console.log("술을 마실 수 있다") : console.log("미성년자");

//switch문은 만족하는 조건이 생기면 아래까지 다 실행, 이것을 방지하기 위해 break 사용
//default는 else와 같은 역할


//반복문
for (let i =1; i < 11 ; i++){
    console.log(i);
}

const numArr = [45, 33, 10, 23, 2];
for(let i=0; i< numArr.length; i++){
    numArr[i] += 10;
    console.log(numArr[i]);
}

let i=1;
while (i <11) {
    console.log(i);
    i++;
}

let j = 1;
do {
    console.log(i);
    i++;
} while(i < 11)
//한 번이라도 실행하고 싶으면 do while사용


for (let i=0; i<5; i++){
        console.log("*".repeat(i+1));
}

for(let i=0; i<5; i++){
    console.log(" ".repeat(4-i)+"*".repeat(2*i+1)+" ".repeat(4-i));
}
