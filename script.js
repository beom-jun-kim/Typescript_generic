// generic:
// call signature를 작성할때 
// 여기 들어올 확실한 타입을 모를때 generic을 사용한다

// type SuperPrint = {
//     (arr: number[]): void
//     (arr: boolean[]): void
//     (arr: string[]): void
// }

// const superPrint: SuperPrint = (arr) => {
//     arr.forEach(i => console.log(i))
// }

// superPrint([1, 2, 3, 4])
// superPrint([true, false, true])
// superPrint(["a","b","c"])

// => 좋지 않은 방식

// type SuperPrint = {
//     <T>(arr: T[]): T
// }

// const superPrint: SuperPrint = (arr) => arr[0]

// const a = superPrint([1, 2, 3, 4])
// const b = superPrint([true, false, true])
// const c = superPrint(["a", "b", "c"])
// const d = superPrint([1, 2, "a", "b", true, false])


// 두개의 generic
// type SuperPrint = {
//     <T, M>(a: T[], b:M): T
// }

// const superPrint: SuperPrint = (a) => a[0]

// const a = superPrint([1, 2, 3, 4],"x")
// const b = superPrint([true, false, true],1)
// const c = superPrint(["a", "b", "c"],false)
// const d = superPrint([1, 2, "a", "b", true, false],[])

// type Player<Extra> = {
//     name: string
//     extraInfo: Extra
// }

// const nico: Player<{ favFood: string }> = {
//     name: "nico",
//     extraInfo: {
//         favFood: "kimchi"
//     }
// }

// const lynn: Player<null> = {
//     name: "lynn",
//     extraInfo: null
// }

// function pringAllNumbers(arr:Array<number>){

// }