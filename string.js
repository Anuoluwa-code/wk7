let text = "  Hello, world! This is a TEST stings.  it has  123 numbers and some extra spaces.   ";

text - text.trim()
console.log(Test);

test = text.toLowerCase()
console.log(text)

text = text.replace("test", "practice")
console,log(text)

let sCount = (text.match(/s/g) || []).length;
console.log(sCount)

let period = text.endsWith(" ");
console.log(period)

let findIndex = text.indexOf("world")
console.log(findIndex)

let wordsArray = text.split(" ")
console.log(wordsArray)

text = text.replace(/\d+/g, "")
console.log(text)

text = text.charAt(0).toUpperCase() + text.slice(1)
console.log(text)

let Hello = text.toLowerCase().includes("hello");
console.log(Hello)