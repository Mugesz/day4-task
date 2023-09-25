Print the Odd numer



function odd (){
    var a = 3;
    
    if(a % 2==0){
        document.write("This is even number")
    }else if(a == 0){
        document.write("NAN")
    }else{
        document.write("This is odd number")
    }
};

odd();

/////////////////////////////////////////////////////////////////////////////////////////////


Char at string for title 

function mugesh(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
console.log(mugesh("my name is mugesh "));


///////////////////////////////////////////////////////////////////////////////////////////////////
