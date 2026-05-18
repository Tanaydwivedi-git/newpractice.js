class person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`hello, my name ${this.name} and my age is ${ this.age}`);
        
    }
}

class student extends person{
    constructor(name,age,grade){
        super(name,age)
        this.garde= grade
    }


    greet(){
        console.log(`hello, my name ${this.name} and my age is ${ this.age} and my school grde is ${this.garde}`);
}
}



const USER1  = new student("ram" , 99 , "100");

USER1.greet()