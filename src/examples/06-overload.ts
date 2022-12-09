// Arselt => [A,r,s,e,l,t] => string => string[]
// [A,r,s,e,l,t] =>  Arselt => string[] => string

function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join('') // string
  } else {
    return input.split('') // string[]
  }
}

const ansArray = parseStr('Arselt')
if (Array.isArray(ansArray)) {
  ansArray.reverse();
}
console.log("Array Answer: ", ansArray)

const ansString = parseStr(["A", "r", "s", "e", "l", "t"])
// ansString.toLowerCase() doesn't work cuz ts doens have an infered type
console.log("String Answer: ", ansString)

//this is a fuction overload
