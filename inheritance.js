

// console.log("inheritance");

// class employee {
//     constructor(givenname, givenexperience, givendivision){
//         this.name = givenname;
    
//         this.experience =givenexperience;
    
//         this.division = givendivision;

//     }

// }

// class programer extends employee{
// constructor(givenname, givenexperience, givendivision,language,github){
// super(givenname, givenexperience, givendivision);
// this.language = language;
// this.github = github;
// }

// }

//  let employe = new programer("mirza",0,"javascript","javascript","muneeb136");
//  console.log(employe); 



for(var i = 1; i<=100; i++){
   
var prime = true;
    for(var j = 2; j<=100; j++){
        if(i%j==0 && i!==j){

       prime = false ;
        }
    }
    if(prime===true){
     console.log(i) 
    }
   
}


let arr = [];

 for(var i = 1; i<=100; i++){
    arr.push(i);
 }
 

 let arr2 = arr.filter((num)=>{
    for(var j = 2; j<=100; j++){
    
      if(num%j==0 && num!==j){
       return false;
      }
     
    }
     return true;
    })

console.log(arr2)




function func(){
    let num = document.getElementById("demo");
    let num2 = num.value;
    
let str = num2.toString().split("")
let arr=[];
     for(var i=0; i<=str.length-1; i++){
      var number = parseInt(str[i])
          arr.push(number);
     }

       let arr2 = arr.filter((num)=>{

             for(var j=2; j<=arr.length; j++){
              if(num%j==0 && num!==j){
                return false;
              }
             }
             return true;
       })
       document.getElementById("demo1").innerHTML=`<p>${arr2}</p>`;
    

}

