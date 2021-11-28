class person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender; 
    }
}

let p1 = new person("aa", "12", "M")

console.log(p1)

// output: person { name: 'aa', age: '12', gender: 'M' }