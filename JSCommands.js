const a = 'Hello';
console.log(a);

const user ={
    firstName: 'Nicoleta',
    lastName: 'Ungureanu',
    age: 29
}

//delete the property mutabally
// delete user.age;

// Object destructors
// const {firstName} = user;

// const {age, ...rest} = user;
// console.log(age);
// console.log(rest);

// alias
// const firstName = 'Nico';
// const {firstName: fn, age, lastName} = user;

console.log(user);
// console.log(lastName);
// console.log(age);

// ES5
// const updatedUser = Object.assign({}, user, {gender: 'female'})

// ES6 - spread operator
const updatedUser = {...user, gender:'female', degree:'BTech'}

const add = (a, ...rest) => {
    let sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
     return sum;
}

console.log(add(1,2,3,5,8));


// crud operation mutabally
const userInfo = ({age, ...rest}) => {
    console.log(age);
    console.log(rest);
}

console.log(userInfo({firstName: 'Nicoleta', lastName: 'Ungureanu', age: 29}));

// array
const arr = [1,2,3,4,5];

// Mutabally
// LILO = last in last out
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);

// FIFO = first in first out
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
// split()

// Immutabally
// const newArr = [...arr];
// console.log(arr);
// at the end
// const newArr = [...arr, 6];
// at the beginning
// const newArr = [0, ...arr];

const arr2 = [1,2,3,4,5];
const arrFinal = [...arr2.slice(0,2), 6, ...arr2.slice(2)];
console.log(arrFinal);

//array destructuring
const [x, ...rest] = arr;
console.log(a);
console.log(rest);
console.log(arr);

const index = arr.findIndex(item => item === 3)
console.log(index);

const users = [
    {
        name: 'Yagnesh',
        age: 30
    },
    {
        name: 'michel',
        age: 64
    },
    {
        name: 'enrique',
        age: 40
    },
    {
        name: 'jenifer',
        age: 20
    },
    {
        name: 'beyonce',
        age: 25
    }
]

const every = users.every(elem => elem.age>18);
console.log(every);

const some = users.some(elem => elem.name === 'beyonce');
console.log(some);

const map = users.map(elem => elem.age)
console.log(map);

const sum = arr.reduce((previous, current) => previous + current, 0);
console.log(sum);

const updatedUser2 = users.map(user => {
    console.log(user);
    if(user.name === 'beyonce') {
        console.log(user);
        return {...user, age: 34};
    }
    return user;
})
console.log(updatedUser2);

const updatedUser3 = users.reduce((p,c) => {
    console.log(p);
    console.log(c);
    if(c.name === 'beyonce') {
        console.log(p);
        console.log(c);
        return [...p, {...c, age: 34}];
    }
    console.log(c);
    return [...p, c];
}, [])

console.log(updatedUser3);


const users2 = [
    {
        name: 'Yagnesh',
        age: 30,
        gender: 'male'
    },
    {
        name: 'michel',
        age: 64,
        gender: 'male'
    },
    {
        name: 'enrique',
        age: 40,
        gender: 'male'
    },
    {
        name: 'jenifer',
        age: 20,
        gender: 'female'
    },
    {
        name: 'beyonce',
        age: 25,
        gender: 'female'
    }
]

console.log(users2[0].gender)

//loop
const getByGender = users2.reduce((p,c) => {
    console.log(p);
    console.log(c);
    // c=> users2[i].gender => male/female
    //first iteration p[c.gender]=undefined
    if(p[c.gender]) {
        console.log(...p[c.gender]);
        console.log(c);
        p[c.gender] = [...p[c.gender], c];
    } else {
        //male = object of c
        p[c.gender] = [c]
    }
    return p;
}, {})
console.log(getByGender);

//
const groupByAge = users.reduce((p,c) => {
    const age = Math.floor(c.age/10);
    const key = `${age}0-${age}9`;
    if(p[key]) {
        //:)
        p[key] = [...p[key], c];
    } else {
        p[key] = [c];
    }
    return p;
}, {})



// classes
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    #getBankBalance() {
        return this.firstName.length * this.lastName.length;
    }

    getStatus() {
        const balance = this.#getBankBalance();
        if(balance > 20) {
            return balance;
        }
    }
}

class Student extends User {
    constructor(firstName, lastName, role) {
        super(firstName, lastName);
        this.role = role;
    }
}

class Manager extends User {
    constructor(fn, ln, managerLevel) {
        super(fn, ln);
        this.managerLevel = managerLevel;
    }

    #getManagerSalary() {
        switch (this.managerLevel) {
            case m1:
                return 1000000;
        
            default:
                return 50000;
        }
    }
}

class Director extends User {

}



//Asynchronous programming
setTimeout(() => {
   console.log(0); 
}, 100);

const p1 = () => {
    return new Promise((resolve, reject) => {
        // resolve('p1 resolved');
        // reject('p1 rejected');
        setTimeout(() => {
            resolve('token');
            // reject('p1 rejected');
        }, 5000);
    })
};

const p2 = (token) => {
    return new Promise((resolve, reject) => {
        // resolve('p1 resolved');
        // reject('p1 rejected');
        if(token) {
            setTimeout(() => {
                resolve('p2 resolved');
            }, 3000);
        } else {
            reject('please provide a token');
        }
        
    })
};

p1().then((value) => {
    console.log(value);
    p2(value).then((value) => {
        console.log(value);
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
})

const getData = async () => {
    try {
        console.time('prom');
        // const resP1 = await Promise.all([p1, p2()]);
        const resP1 = await Promise.race([p1, p2()]);
        console.log(resP1);
        console.timeEnd('prom');
    } catch (error) {
        console.log(error);
    }
    
}

console.log(getData());



const s = {
    a: 1,
    b: 2
}

for (const key in s) {

    console.log(key);
    console.log(s[key]);

    if (Object.hasOwnProperty.call(s, key)) {
        const element = s[key];
        
    }
}

for (const [key, value] of Object.entries(s)) {
    console.log(s);
    console.log(key);
    console.log(value);
}








