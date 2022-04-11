const $div = document.querySelector('.container');
const  $form = document.querySelector('form');
const  $input = document.querySelector('input');
const  $button = document.querySelector('button');

//1. 이벤트 핸들러 
//target.이벤트이름 = 콜백함수

$div.onclick = handleClick;
//이벤트 이름 앞에 on붙이기, 함수는 분리해서 작성
//콜백은 클릭이 이루어질때마다 함수 호출하기에 () 없음
//동일한 대상의 이벤트 2개가 있으면 뒤에가 덮어씀
//그렇기에 addEvent Listener쓰는걸 권장

//2. addEventLister
//동일한 이벤트 다 적용
$div.addEventListener('click', handleClick);
$div.addEventListener('click', () => alert('clicked'))

function handleClick() {
    console.log('clicked');
}

//3. removeEventlistener : 이벤트 제거
$div.removeEventListener('click', handleClick);


//4. 이벤트 인자: 이벤트 함수들은 event를 인자로 받을 수 있음

$div.addEventListener('click', handleClick);
function handleClick(event) {
    console.log(event.target);
}

$input.addEventListener('change', handleChange);

function handleChange(event){
    console.log(event.target.value);
}

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const inputValue = $input.value; //값 가져오기
    console.log(inputValue);
    $input.value = ""; //input 초기화
}