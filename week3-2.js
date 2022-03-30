//배열 

//1. 선언
const travel_spot1 = ['방콕', '파리', '뉴욕'];
const travel_spot2 = new Array('방콕', '파리', '뉴욕');
const travel_spot3 = new Array();

travel_spot3[0] = '방콕';
travel_spot3[1] = '파리';
travel_spot3[2] = '뉴욕';

//2. 접근 : index
const paris = travel_spot1[1];

//3. 추가 및 삭제 
//push : 뒤에 원소 추가
travel_spot1.push('토론토', '퀘백');

//unshift : 앞에 원소 추가
travel_spot1.unshift('바로셀로나');

//splice : 원하는 지점에 추가 및 삭제
//splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들)
travel_spot1.splice(4, 0, '멜버른', '아테네');

//pop : 뒤에 원소 하나만 삭제
travel_spot1.pop();

//shift : 앞에 원소 삭제
travel_spot1.shift();

//splice
travel_spot1.splice(3, 3);

travel_spot1.splice(1, 1, '이스탄불', '하노이');