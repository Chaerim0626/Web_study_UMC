//객체
//1. 선언 : key : value 형태

const pooh = {
    name : 'pooh', 
    species : 'bear',
    job : 'disney character',
    gender : 'boy',
    'say-hi' : function() {
        console.log("HI ");
    }
}

//2. 객체 접근 : ., []
console.log(pooh['say-hi']()); //문자열을 하나로 인식할 때는 [] 로 감싸줌

//3. 객체에 추가 및 삭제
pooh['say-bye'] = function() {
    console.log("Bye");
}

pooh.favorites = ['honey', 'friends', 'cake']; //요소 추가
delete pooh.favorites; //요소 삭제

//4. 생성자 함수 : 틀

function Character(name, species, job, gender) {
    this.name = name; //생성자 함수를 통해 만들어지는 객체를 인스턴스라고 하는데, 각각의 인스턴스를 가리킴
    this.species = species;
    this.job = job;
    this.gender = gender;

    this['say-hi'] = function() {
        console.log("I'm ${this.name}");
    }
    this['say-bye'] = function() {
        console.log("I'm ${this.name} bye");
    }

    const pooh2 = new Charater('winnie the pooh', 'bear', 'disney character', 'boy');
    console.log(pooh2);

    const obj = new Object({
        name : 'dwell',
        greeting : function() {
            console.log("HI");
        }
    })
}

