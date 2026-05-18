class person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`hello, my name ${this.name} and my age is ${ this.age}`);
        
    }
}


const USER1  = new person("ram" , 99);

USER1.greet()