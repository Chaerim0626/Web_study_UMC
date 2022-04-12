function taskA() {
	setTimeout(()=> {
	console.log("A Task End");}, 2000);
}

taskA();
console.log("코드 끝");