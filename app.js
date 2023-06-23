// class Person{
// pName
// pAge
// pGender
// constructor(Name,Age,Gender){
//     this.pName=Name
//     this.pAge = Age;
//     this.pGender = Gender;
// }

// introduce(){
//     document.write(this.pName + " is a "+ this.pAge +" year old person of the gender: ", this.pGender+"<br>")
// }
// }

// const p1=new Person('Talha',20,'M')
// const p2=new Person('Rabia',15,'F')

// p1.introduce()
// p2.introduce()


// class Vehicle{
//     vName
//     vModel
//     vColor
//     vGears
//     constructor(name,model,color,gears){
//         this.vName= name
//         this.vModel = model;
//         this.vColor = color;
//         this.vGears = gears;
//     }
//     displayDetails(){
//         console.log("The vehicle's Name:",this.vName)
//         console.log("The vehicle's Model:",this.vModel);
//         console.log("The vehicle's Color:",this.vColor);
//         console.log("The number of Gears in it are :",this.vGears);
//     }
// }

// const v1=new Vehicle('Mehran',1999,'white',4)
// const v2=new Vehicle('Yamaha',2018,'Red',5)

// v2.displayDetails()
// v1.displayDetails()

// class Rectangle{
//     length
//     breadth
//     name
//     constructor(name,len,width){
// this.name=name
// this.length=len
// this.breadth= width
//     }
//     area(){
//         console.log('Area of Rectangle is: '+(this.length*this.breadth))
//     }
//     perimeter(){
//         console.log('Perimeter of Rectangle is: '+(2*(parseFloat(this.length)+parseFloat(this.breadth))))
//     }
//     display(){
//         console.log('Name of the rectangle is: '+this.name)
//         console.log('Length of the rectangle is: '+this.length)
//         console.log('Breadth of the rectangle is: '+this.breadth)

//     }
// }


// console.log('Data for first rectangle')
// const r1=new Rectangle('Rect1',5,10)
// r1.display()
// r1.area()
// r1.perimeter()
// console.log('Data for first rectangle')
// const r2=new Rectangle('Rect2',10,20)
// r2.display()
// r2.area()
// r2.perimeter()


// class Person{
//     balance=0
//     income=[
//         {
//         description:'Salary',
//         amount:45000
//     },
//     {
//         description: 'Gift',
//             amount:5000
//     }
// ]

// expense=[
//     {
// description:'Clothes',
// amount:15000
// },{
//     description:"Food",
//     amount:2000
// }]

// viewIncome(){
//     let totalIncome=0;
//     for(let i=0;i<this.income.length;i++){
//         totalIncome=totalIncome+this.income[i].amount
//     }
//  document.getElementById("output").innerHTML='Total Income is: '+totalIncome
// }
// viewExpense(){
//     let totalExpense=0;
//     for(let j=0;j<this.expense.length;j++){
//         totalExpense=totalExpense+this.expense[j].amount
//     }
//  document.getElementById("output").innerHTML='Total Expense is: '+totalExpense
// }
// viewBalance(){
//     let totalExpense=0;
//     for(let j=0;j<this.expense.length;j++){
//         totalExpense=totalExpense+this.expense[j].amount
//     }
//     let totalIncome=0;
//     for(let i=0;i<this.income.length;i++){
//         totalIncome=totalIncome+this.income[i].amount
//     }
//     this.balance=(this.balance+totalIncome)-totalExpense
//     document.getElementById("output").innerHTML='Total Balance is: '+this.balance
// }

// addIncome(){
//     let desc=prompt("Enter source of income")
//     let am=+prompt("Enter amount of in rupees")
//     this.income.push({description:desc,amount:am})
//     alert(desc+' with amount '+am+' added successfully')
// }

// addExpense(){
//     let desc=prompt("Enter expense type")
//     let am=+prompt("Enter the cost")
//     if(this.balance<am){
//         alert("Your balance is insufficeint")
//     }
//     else if(this.balance>=am){
//         this.expense.push({description:desc,amount:am})
//         alert(desc+' with amount '+am+' added successfully')
//     }
// }
// }

// const p1=new Person()

class Vehicle{

name
model
constructor(name,model){
    this.name=name
    this.model=model
}
display(){
    console.log(`The vehicle name is ${this.name} and ${this.model}`)
}
}

class Car extends Vehicle{
    noOfSeats
    constructor(name,model,noOfSeats){
        super(name,model)
        this.noOfSeats=noOfSeats
    }
    display(){
        super.display()
        console.log(`There are ${this.noOfSeats} seats`)
    }
}

class Bike extends Vehicle{

    //Write your code here
}

class Truck extends Vehicle{

    //Write your code here
}




// const c1=new Car()

const c1=new Car('Mehran',2004,5)
c1.display()

