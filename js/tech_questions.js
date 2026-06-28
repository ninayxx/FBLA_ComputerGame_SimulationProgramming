var questions = [
    {
        id: 1,
        title: "Reverse a String",
        description: "Arrange the code blocks to create a function that takes a string and returns it reversed.",
        correctOrder: [
            "function reverseString(str) {",
            "  var result = \"\";",
            "  for (var i = str.length - 1; i >= 0; i--) {",
            "    result += str[i];",
            "  }",
            "  return result;",
            "}"
        ],
        distractors: [
            "  for (var i = 0; i < str.length; i++) {",
            "  var result = 0;",
            "  return str;"
        ],
        testCases: [
            { input: ["hello"], expected: "olleh" },
            { input: ["world"], expected: "dlrow" },
            { input: ["a"], expected: "a" }
        ]
    },
    {
        id: 2,
        title: "Find the Maximum",
        description: "Arrange the code blocks to create a function that finds and returns the largest number in an array.",
        correctOrder: [
            "function findMax(arr) {",
            "  var max = arr[0];",
            "  for (var i = 1; i < arr.length; i++) {",
            "    if (arr[i] > max) {",
            "      max = arr[i];",
            "    }",
            "  }",
            "  return max;",
            "}"
        ],
        distractors: [
            "  var max = 0;",
            "    if (arr[i] < max) {",
            "  return arr;"
        ],
        testCases: [
            { input: [[3, 7, 2, 9, 1]], expected: 9 },
            { input: [[-5, -1, -10]], expected: -1 },
            { input: [[42]], expected: 42 }
        ]
    },
    {
        id: 3,
        title: "Count Vowels",
        description: "Arrange the code blocks to create a function that counts how many vowels (a, e, i, o, u) are in a string.",
        correctOrder: [
            "function countVowels(str) {",
            "  var count = 0;",
            "  var vowels = \"aeiouAEIOU\";",
            "  for (var i = 0; i < str.length; i++) {",
            "    if (vowels.indexOf(str[i]) !== -1) {",
            "      count++;",
            "    }",
            "  }",
            "  return count;",
            "}"
        ],
        distractors: [
            "  var vowels = \"aeiou\";",
            "    if (vowels.indexOf(str[i]) === -1) {",
            "      count--;",
            "  return str;"
        ],
        testCases: [
            { input: ["hello"], expected: 2 },
            { input: ["WHY"], expected: 0 },
            { input: ["Education"], expected: 5 }
        ]
    },
    {
        id: 4,
        title: "Sum of Array",
        description: "Arrange the code blocks to create a function that returns the sum of all numbers in an array.",
        correctOrder: [
            "function sumArray(arr) {",
            "  var total = 0;",
            "  for (var i = 0; i < arr.length; i++) {",
            "    total += arr[i];",
            "  }",
            "  return total;",
            "}"
        ],
        distractors: [
            "  var total = 1;",
            "    total -= arr[i];",
            "    total *= arr[i];"
        ],
        testCases: [
            { input: [[1, 2, 3, 4]], expected: 10 },
            { input: [[-1, 1, -1, 1]], expected: 0 },
            { input: [[100]], expected: 100 }
        ]
    },
    {
        id: 5,
        title: "Check Even or Odd",
        description: "Arrange the code blocks to create a function that returns <code>\"even\"</code> if a number is even, or <code>\"odd\"</code> if it is odd.",
        correctOrder: [
            "function evenOrOdd(num) {",
            "  if (num % 2 === 0) {",
            "    return \"even\";",
            "  } else {",
            "    return \"odd\";",
            "  }",
            "}"
        ],
        distractors: [
            "  if (num % 2 === 1) {",
            "  if (num / 2 === 0) {",
            "    return num;"
        ],
        testCases: [
            { input: [4], expected: "even" },
            { input: [7], expected: "odd" },
            { input: [0], expected: "even" }
        ]
    },
    {
        id: 6,
        title: "Factorial",
        description: "Arrange the code blocks to create a function that calculates the factorial of a number n.",
        correctOrder: [
            "function factorial(n) {",
            "  var result = 1;",
            "  for (var i = 1; i <= n; i++) {",
            "    result *= i;",
            "  }",
            "  return result;",
            "}"
        ],
        distractors: [
            "  var result = 0;",
            "  for (var i = 0; i < n; i++) {",
            "    result += i;"
        ],
        testCases: [
            { input: [5], expected: 120 },
            { input: [3], expected: 6 },
            { input: [0], expected: 1 }
        ]
    },
    {
        id: 7,
        title: "FizzBuzz Single",
        description: "Arrange the code blocks to create a function that returns <code>\"FizzBuzz\"</code> if divisible by both 3 and 5, <code>\"Fizz\"</code> if divisible by 3, <code>\"Buzz\"</code> if divisible by 5, or the number as a string otherwise.",
        correctOrder: [
            "function fizzBuzz(n) {",
            "  if (n % 3 === 0 && n % 5 === 0) {",
            "    return \"FizzBuzz\";",
            "  } else if (n % 3 === 0) {",
            "    return \"Fizz\";",
            "  } else if (n % 5 === 0) {",
            "    return \"Buzz\";",
            "  } else {",
            "    return String(n);",
            "  }",
            "}"
        ],
        distractors: [
            "  if (n % 3 === 0 || n % 5 === 0) {",
            "  } else if (n % 15 === 0) {",
            "    return n;",
            "    return \"FizzBuzz\";"
        ],
        testCases: [
            { input: [15], expected: "FizzBuzz" },
            { input: [9], expected: "Fizz" },
            { input: [10], expected: "Buzz" },
            { input: [7], expected: "7" }
        ]
    },
    {
        id: 8,
        title: "Palindrome Check",
        description: "Arrange the code blocks to create a function that checks if a string reads the same forwards and backwards.",
        correctOrder: [
            "function isPalindrome(str) {",
            "  var reversed = \"\";",
            "  for (var i = str.length - 1; i >= 0; i--) {",
            "    reversed += str[i];",
            "  }",
            "  return str === reversed;",
            "}"
        ],
        distractors: [
            "  return str !== reversed;",
            "  for (var i = 0; i < str.length; i++) {",
            "  var reversed = str;"
        ],
        testCases: [
            { input: ["racecar"], expected: true },
            { input: ["hello"], expected: false },
            { input: ["madam"], expected: true }
        ]
    },
    {
        id: 9,
        title: "Remove Duplicates",
        description: "Arrange the code blocks to create a function that removes duplicate values from an array and returns a new array with only unique elements.",
        correctOrder: [
            "function removeDupes(arr) {",
            "  var unique = [];",
            "  for (var i = 0; i < arr.length; i++) {",
            "    if (unique.indexOf(arr[i]) === -1) {",
            "      unique.push(arr[i]);",
            "    }",
            "  }",
            "  return unique;",
            "}"
        ],
        distractors: [
            "    if (unique.indexOf(arr[i]) !== -1) {",
            "      unique.pop(arr[i]);",
            "  return arr;"
        ],
        testCases: [
            { input: [[1, 2, 2, 3, 3]], expected: [1, 2, 3] },
            { input: [[5, 5, 5, 5]], expected: [5] },
            { input: [[1, 2, 3]], expected: [1, 2, 3] }
        ]
    },
    {
        id: 10,
        title: "Find the Minimum",
        description: "Arrange the code blocks to create a function that finds and returns the smallest number in an array.",
        correctOrder: [
            "function findMin(arr) {",
            "  var min = arr[0];",
            "  for (var i = 1; i < arr.length; i++) {",
            "    if (arr[i] < min) {",
            "      min = arr[i];",
            "    }",
            "  }",
            "  return min;",
            "}"
        ],
        distractors: [
            "  var min = 0;",
            "    if (arr[i] > min) {",
            "  return arr.length;"
        ],
        testCases: [
            { input: [[3, 7, 2, 9, 1]], expected: 1 },
            { input: [[-5, -1, -10]], expected: -10 },
            { input: [[42]], expected: 42 }
        ]
    },
    {
        id: 11,
        title: "Capitalize First Letter",
        description: "Arrange the code blocks to create a function that capitalizes the first letter of a string and returns the result.",
        correctOrder: [
            "function capitalize(str) {",
            "  if (str.length === 0) {",
            "    return \"\";",
            "  }",
            "  var first = str[0].toUpperCase();",
            "  var rest = str.slice(1);",
            "  return first + rest;",
            "}"
        ],
        distractors: [
            "  var first = str[0].toLowerCase();",
            "  var rest = str.slice(0);",
            "  return str.toUpperCase();"
        ],
        testCases: [
            { input: ["hello"], expected: "Hello" },
            { input: ["world"], expected: "World" },
            { input: ["a"], expected: "A" }
        ]
    },
    {
        id: 12,
        title: "Count Occurrences",
        description: "Arrange the code blocks to create a function that counts how many times a target value appears in an array.",
        correctOrder: [
            "function countOccurrences(arr, target) {",
            "  var count = 0;",
            "  for (var i = 0; i < arr.length; i++) {",
            "    if (arr[i] === target) {",
            "      count++;",
            "    }",
            "  }",
            "  return count;",
            "}"
        ],
        distractors: [
            "    if (arr[i] !== target) {",
            "      count--;",
            "  return arr.indexOf(target);"
        ],
        testCases: [
            { input: [[1, 2, 2, 3, 2], 2], expected: 3 },
            { input: [[1, 2, 3], 4], expected: 0 },
            { input: [[5, 5, 5], 5], expected: 3 }
        ]
    },
    {
        id: 13,
        title: "Reverse an Array",
        description: "Arrange the code blocks to create a function that reverses an array without using the built-in reverse method.",
        correctOrder: [
            "function reverseArray(arr) {",
            "  var result = [];",
            "  for (var i = arr.length - 1; i >= 0; i--) {",
            "    result.push(arr[i]);",
            "  }",
            "  return result;",
            "}"
        ],
        distractors: [
            "  for (var i = 0; i < arr.length; i++) {",
            "    result.pop(arr[i]);",
            "  return arr;"
        ],
        testCases: [
            { input: [[1, 2, 3]], expected: [3, 2, 1] },
            { input: [["a", "b"]], expected: ["b", "a"] },
            { input: [[]], expected: [] }
        ]
    },
    {
        id: 14,
        title: "Power Function",
        description: "Arrange the code blocks to create a function that calculates base raised to the exponent power (base^exp).",
        correctOrder: [
            "function power(base, exp) {",
            "  var result = 1;",
            "  for (var i = 0; i < exp; i++) {",
            "    result *= base;",
            "  }",
            "  return result;",
            "}"
        ],
        distractors: [
            "  var result = 0;",
            "    result += base;",
            "  for (var i = 1; i <= exp; i++) {"
        ],
        testCases: [
            { input: [2, 3], expected: 8 },
            { input: [5, 2], expected: 25 },
            { input: [10, 0], expected: 1 }
        ]
    },
    {
        id: 15,
        title: "String Repeat",
        description: "Arrange the code blocks to create a function that repeats a string n times and returns the result.",
        correctOrder: [
            "function repeatString(str, n) {",
            "  var result = \"\";",
            "  for (var i = 0; i < n; i++) {",
            "    result += str;",
            "  }",
            "  return result;",
            "}"
        ],
        distractors: [
            "  var result = str;",
            "  for (var i = 1; i <= n; i++) {",
            "    result -= str;"
        ],
        testCases: [
            { input: ["ha", 3], expected: "hahaha" },
            { input: ["abc", 1], expected: "abc" },
            { input: ["xyz", 0], expected: "" }
        ]
    },
    {
        id: 16,
        title: "Celsius to Fahrenheit",
        description: "Arrange the code blocks to create a function that converts Celsius to Fahrenheit.",
        correctOrder: [
            "function toFahrenheit(c) {",
            "  var f = (c * 9/5) + 32;",
            "  return f;",
            "}"
        ],
        distractors: [
            "  var f = (c * 5/9) + 32;",
            "  var f = (c - 32) * 9/5;"
        ],
        testCases: [
            { input: [0], expected: 32 },
            { input: [100], expected: 212 },
            { input: [-40], expected: -40 }
        ]
    },
    {
        id: 17,
        title: "Count Words",
        description: "Arrange the code blocks to create a function that counts the number of words in a space-separated string.",
        correctOrder: [
            "function countWords(str) {",
            "  if (str.length === 0) {",
            "    return 0;",
            "  }",
            "  var words = str.split(' ');",
            "  return words.length;",
            "}"
        ],
        distractors: [
            "  var words = str.slice(' ');",
            "  return str.length;",
            "  if (str.length === 0) return 1;"
        ],
        testCases: [
            { input: ["hello world"], expected: 2 },
            { input: ["a b c"], expected: 3 },
            { input: [""], expected: 0 }
        ]
    },
    {
        id: 18,
        title: "Sum of Evens",
        description: "Arrange the code blocks to create a function that returns the sum of all even numbers in an array.",
        correctOrder: [
            "function sumEvens(arr) {",
            "  var sum = 0;",
            "  for (var i = 0; i < arr.length; i++) {",
            "    if (arr[i] % 2 === 0) {",
            "      sum += arr[i];",
            "    }",
            "  }",
            "  return sum;",
            "}"
        ],
        distractors: [
            "    if (arr[i] % 2 !== 0) {",
            "      sum *= arr[i];",
            "  return arr;"
        ],
        testCases: [
            { input: [[1, 2, 3, 4]], expected: 6 },
            { input: [[2, 4, 6]], expected: 12 },
            { input: [[1, 3, 5]], expected: 0 }
        ]
    },
    {
        id: 19,
        title: "Find Longest Word",
        description: "Arrange the code blocks to create a function that returns the length of the longest word in an array of strings.",
        correctOrder: [
            "function longestWord(arr) {",
            "  var max = 0;",
            "  for (var i = 0; i < arr.length; i++) {",
            "    if (arr[i].length > max) {",
            "      max = arr[i].length;",
            "    }",
            "  }",
            "  return max;",
            "}"
        ],
        distractors: [
            "    if (arr[i] > max) {",
            "      max = arr[i];",
            "  var max = arr[0];"
        ],
        testCases: [
            { input: [["a", "bb", "ccc"]], expected: 3 },
            { input: [["hello", "world"]], expected: 5 },
            { input: [[]], expected: 0 }
        ]
    },
    {
        id: 20,
        title: "Contains Element",
        description: "Arrange the code blocks to create a function that returns true if an array contains a target element, and false otherwise.",
        correctOrder: [
            "function contains(arr, target) {",
            "  for (var i = 0; i < arr.length; i++) {",
            "    if (arr[i] === target) {",
            "      return true;",
            "    }",
            "  }",
            "  return false;",
            "}"
        ],
        distractors: [
            "  return true;",
            "    if (arr[i] !== target) {",
            "      return false;"
        ],
        testCases: [
            { input: [[1, 2, 3], 2], expected: true },
            { input: [[1, 2, 3], 4], expected: false },
            { input: [["a", "b"], "a"], expected: true }
        ]
    }
];