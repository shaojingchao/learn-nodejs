// const hello = require('hello')

// const json = require('../load_file/folder/index.json')

// console.log('')

// const replacer = function (k, v) {
//         if (typeof v === "foo"){
//           console.log('========================')
//             return "a symbol";
//         }
//     }
// console.log('JSON',JSON.stringify({[Symbol.for("foo")]: "foo"}, replacer))
// console.log('')
// console.log('MSG from world.js')
// hello('hello world!')

function replacer(key, value) {

  if (typeof value === "boolean"){
    console.log('============== boolean ==========:', value)
      return key
  }

  if (typeof value === "string") {
    console.log('-----k-----:',key)
    console.log('-----v-----:',value)
    return key + ' -> string'
  }
  return value;
}

var foo = {bool: true, foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, replacer,2);

console.log(jsonString)