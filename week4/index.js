//document = html
// body는 유사배열

const $body = document.getElementsByTagName('body');
const $container = document.getElementsByClassName('container');
const $title = document.getElementById('title');
const $cityList = document.getElementById("cityList");
const $cities = $cityList.getElementsByTagName("li");
const $cityDiv = document.querySelector(".city");

//querySelectorAll 유사배열 형태




//태그네임과 클래스는 유사배열 형태
console.log($body[0].innerText);
console.log($container);
console.log($title);
console.log($cityList);
console.log($cities);


//$cities.forEach(city => console.log(city.innerText));
//노드인 경우에는 forEach사용 가능, html collection은 불가능


//spread operator, Array.from (유사배열 -> 배열로 변환)
//1. spread operator
//const newCities = [...$cities]
//newCities.map(city=> console.log(city.innerText));

//2. Array.from
const newCities = Array.from($cities);
newCities.map(city => console.log(city.innerText));


//스타일변환
$body[0].style.backgroundColor = "teal";
$cityDiv.style.color = 'grey';

//element추가
const worstCity = document.createElement("ul");
const worstCityDiv = document.createElement("div");
const worstCitySubTitle = document.createElement("h2");
const worstCityArr = ["Cairo", "London", "Risbon", "Sydney"];

worstCitySubTitle.innerText = "< Worst 5 >";
worstCityDiv.appendChild(worstCitySubTitle);

worstCityArr.map((city) => {
  const worstCityItem = document.createElement("li");
  worstCityItem.innerText = city;
  console.log(worstCityItem);
  worstCity.appendChild(worstCityItem);
});

worstCityDiv.appendChild(worstCity);
$container[0].appendChild(worstCityDiv);

// const worstCityList = `
// <ul>
//   <li>Cairo</li>
//   <li>London</li>
//   <li>Risbon</li>
//    <li>Sydney</li>
// <ul>
// `

// $cityDiv.insertAdjacentHTML('beforeend',worstCityList);


// classList
worstCityDiv.classList.add("city");
// worstCityDiv.classList.remove('city');

//setAttribute
worstCity.setAttribute("name", "worstCity");

console.log(worstCity);