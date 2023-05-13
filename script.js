/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(arrMapping);

  function arrMapping(list) {
    if(list.marks >= 50) {
      console.log(list);
    }
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(forEachMethod);

  function forEachMethod(list1) {
    if(list1.marks >= 50) {
      console.log(list1);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let obj1 = {id:4,name:"susan",age:"20",marks:45};
  arr.push(obj1);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for(let i=0;i<arr.length;i++){
    if(arr[i].marks < 50) {
      arr.splice(i,2);
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    {id:5,name:'Hofstader',age:'24',marks:92},
    {id:6,name:'Cooper',age:'21',marks:80},
    {id:7,name:'Kothrapali',age:'20',marks:90}
  ]
  console.log(arr.concat(newArr));
}
