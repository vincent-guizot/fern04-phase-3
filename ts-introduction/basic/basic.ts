// Variables
// let num: number = 10;
// num = "str";

// console.log(num);

// Array
// let items: string[] = ["A", "B", "C"]
// items = "str" // tidak bisa di re assign dengan string karena tipe nya array string

// TUPLES
// type MixedTypes = [string, number, boolean, string[], number[]]
// let user: MixedTypes = ["Tests", 100, true, ["A"], [1]]

// Object

// const user: { name: string, age: number, skills: string[] } = {
//     name: "Admin",
//     age: 25,
//     skills: ["Coding"]
// }

// Functions

// function showItems(items: string[]): void {
//     console.log(items);
//     // return items // error karena tipe void tidak ada hasil return
// }

// console.log(showItems(['A', 'B', 'C']))

// Object

// interface Student {
//     name: string,
//     age: number,
//     skills: string[],
//     address: string,
//     isGraduated?: boolean
// }

// const student1: Student = {
//     name: "Ncent",
//     age: 17,
//     skills: ["Coding"],
//     address: "jakarta",
//     isGraduated: false
// }

// const student2: Student = {
//     name: "Admin",
//     age: 17,
//     skills: ["Design"],
//     address: "bandung"
// }

// console.log(student1, student2)

// Generic

// const printId = <T>(num: T): T => num

// console.log(printId<number>(10))
// console.log(printId<string>("1"))

// Generic Data Structure

interface RemoteData<T> {
    data: T,
    status: "idle" | "fetching" | 'success' | 'failed'
}

const createRemoteData = <T>(data: T): RemoteData<T> => ({
    data,
    status: 'idle'
})

console.log(
    createRemoteData('1') // RemoteData<string>
)
console.log(
    createRemoteData(1) // RemoteData<number>
)