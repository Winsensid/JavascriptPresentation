// let marks = Array (6)
// var marks = new Array(20,40,35,12,37,100)
var marks = [20,40,35,12,37,100]
subMarks = marks.slice(2,4)
console.log("SubMark array is: "+ subMarks)
console.log(marks[2])
console.log("*****ONE******")
//changes the value in the array
console.log(marks[3]= 14)
console.log("*****TWO******")
console.log("Lentgh is iqual to "+marks.length)
console.log("*****THREE*****")
console.log("added number is "+marks.push(65))
console.log("******FOUR******")
//remove last index
marks.pop
console.log("array equals "+marks)
console.log("*****FIVE*******")
console.log(marks.unshift(12))
console.log("index of 100 is "+marks.indexOf(100))
//check is element is present 
console.log(marks.includes(117))
var sum = 0
for(let i = 0;i<marks.length; i++){
    //print all array elements
    console.log(marks[i])
    //summ all arrays #s
    sum = sum + marks[i]
    }
    console.log("the sum: " +sum)
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    calculate sum using .reduce function instead of loop above*/
    var total = marks.reduce((sum,mark)=>sum+mark,0)
    console.log("total using .reduce function is: "+total)
    /*print only even numbers from array*/
    var score = [12,13,14,16]
    var evenNumbers = []
    for(let i = 0;i<score.length;i++){
        if(score[i]%2===0)
            {
               evenNumbers.push(score[i])
            }
            console.log("the even numbers are: "+ evenNumbers)
           
         
    }
     



