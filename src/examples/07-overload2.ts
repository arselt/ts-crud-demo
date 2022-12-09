// Arselt => [A,r,s,e,l,t] => string => string[]
// [A,r,s,e,l,t] =>  Arselt => string[] => string

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
//accepted overload by TS

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join('') // string
//   } else {
//     return input.split('') // string[]
//   }
// }

export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join('') // string
  } else if (typeof input === "string") {
    return input.split('') // string[]
  }
}

const ansArray = parseStr('Arselt')
ansArray.reverse(); // we assigned a type on lines 4 and 5 in each of the cases
console.log("Array Answer: ", ansArray)

const ansString = parseStr(["A", "r", "s", "e", "l", "t"])
ansString.toLowerCase() // this now works // don;t trigger warnings
// ansString.reverse() => Property 'reverse' does not exist on type 'string'
console.log("String Answer: ", ansString)
