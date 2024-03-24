// Basic Types
let id: number = 5;
let company: string = 'Zelda Corp'
let isPublished: boolean = true
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'k']

// Tuple -- order matters
let person: [number, string, boolean] = [1, 'jo', false]
// Tuple Array
let employee: [number, string][]

employee = [
    [1, 'Brad'],
    [2, 'Naomi'],
    [3, 'Kaan']
]

// Union
let pid: string | number

pid = 22

// Enum
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid

let customerId = cid as number

// Functions

function addNum(x: number, y: number): number {
    return x + y
}

// Void
function log(message: string | number): void {
    console.log(message)
}

log('Hello')

// Interfaces - cannot be used with primitives or Unions as in Type. Question mark (?) makes a property optional. readonly makes in unable to overwritten/redefined

interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Jane'
}

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

interface PersonInterface {
    id: number
    name: string
    register(): string
}

// Classes - for objects. Properties of obj can be set as publick and can be accessed everywhere which is default. They can be set as private and can be accessed within the class. They can be set as protected and accessed either within class or in extended class within.
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id 
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, 'Brad')
const mike = new Person(2, 'Mike')

// console.log(brad.register())

// Subclasses - Employee is extended from Person
class Employee extends Person {
    position: string


    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

// console.log(emp.register())

// Generics - instead of any, assign type with T and te function will assign a specific type within <> when it is called.
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['brad', 'Jane', 'Kaan'])



