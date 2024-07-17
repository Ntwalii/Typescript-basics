// // console.clear()

// // //array
// // let numbers:number[]=[1,2,3,4]
// // console.log(numbers[1])
// // //object
// // let object:{names:string,age:number}={
// //     names:"Aubin",
// //     age:21
// // }
// // console.log(object)

// // //Destructuring
// // const {names,age}:{names:string,age:number}=object;
// // console.log(names);
// // console.log(age)

// // //Arrow functions
// // const display=(names:string,age?:number):string=>{
// // return `${names} is ${age}`
// // }
// // const sentence:string=display(names,age)
// // console.log(sentence)

// // //union 
// // const mixedArray:(number|string)[]=[1,2,"string"]
// // console.log(mixedArray);

// // //readonly 
// // const readonlyArray: readonly string[]=["Can't write"]
// // console.log(readonlyArray)

// // //tuples 
// // const tuple:[number,string]=[1,"Hello"];
// // console.log(tuple)

// // //Named tuples
// // const graph: [x: number, y: number] = [55.2, 41.3];
// // console.log(graph[0])

// // //enums 
// // enum CardinalDirections {
// //   North,
// //   East,
// //   South,
// //   West
// // }
// // let currentDirection = CardinalDirections.South;
// // console.log(currentDirection);

// // //Unknown
// // let x:unknown="1";
// // if(typeof x==="string"){
// // x=x+"2";
// // }
// // console.log(x)

// // //Generics
// // const identity = <T>(arg: T): T => {
// //     return arg;
// //   };

  
// //   type Gender="Male" | "Female" | "IDK" |undefined |null |0 |false
  
// //   type Male=NonNullable<Gender>

// //   interface obj{
// //       name: string,
// //       gender:string,
// //       age:number
// //   }

// //   function fn(param:obj):Omit<obj,"name">{
// //     return {
// //         gender:"male",
// //         age:21
// //     }
// //   }

// //   type NewType=ReturnType<typeof fn>

// // //   type ParameterType=Parameters<fn>

// // const real:[string,number,string]=["hi",2,"hello"]
// // console.log(real)

// // interface StringMap {
// //     [key: string]: string;
// // }

// // let myMap: StringMap = {
// //     "key1": "value1",
// //     "key2": "value2",
// // };

// // console.log(myMap["key1"]); // Output: value1
// // console.log(myMap["key2"]); // Output: value2

// // // Adding a new key-value pair
// // myMap["key3"] = "value3";
// // console.log(myMap["key3"]); // Output: value3

// // type myType=string|boolean |boolean
// // const setRange = (range: myType[]): {x:myType,y:myType} => {
// //     const x = range[0];
// //     const y = range[1];

// //     return {x, y}
// //   };
  
// //   setRange([true, "10"]);

// // type SetRange = number | string | boolean;
// // const setRange = (
// //   range: SetRange[]
// // ): {
// //   x: SetRange;
// //   y: SetRange;
// // } => {
// //   const x = range[0];
// //   const y = range[1];

// //   return { x, y };
// // };

// // setRange([true, "10"]);
// type myType={
//     title:string,
//     ingredients:{name:string,quantity:(number|string),price?:number}[],
//     instructions:String
// }
// const processRecipe = (recipe: myType) => {
//     console.log(recipe.ingredients);
//   };
  
//   processRecipe({
//     title: 'Chocolate Chip Cookies',
//     ingredients: [
//       { name: 'Flour', quantity: 4 },
//       { name: 'Sugar', quantity: '1 cup', price: 5 },
//     ],
//     instructions: '...',
//   });

type Person={
    name:string,
    age:number
}

type Result={
        x:boolean,
        y:boolean
    }

const setRange = (range: [boolean,Person]): Result => {
    const x = range[0];
    const y = range[1];
  
    return { x, y: y.age > 10 };
  };
  
  setRange([true, { name: "Patrick", age: 3 }]);