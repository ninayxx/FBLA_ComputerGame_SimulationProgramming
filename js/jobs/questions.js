const questions = [

    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers `nums` and `target`, return indices of the two numbers such that they add up to `target`.",
        initialCode: "function twoSum(nums, target) { \n    \n}",
        testCases: [{ input: [[2, 7, 11, 15], 9], expected: [0, 1] }]
    },
    {
        id: 2,
        title: "Palindrome Number",
        difficulty: "Easy",
        description: "Given an integer `x`, return true if `x` is a palindrome integer.",
        initialCode: "function isPalindrome(x) { \n    \n}",
        testCases: [{ input: [121], expected: true }, { input: [-121], expected: false }]
    },
    {
        id: 3,
        title: "Reverse String",
        difficulty: "Easy",
        description: "Write a function that reverses a string. The input string is given as an array of characters.",
        initialCode: "function reverseString(s) { \n    \n}",
        testCases: [{ input: [["h", "e", "l", "l", "o"]], expected: ["o", "l", "l", "e", "h"] }]
    },
    {
        id: 4,
        title: "Factorial",
        difficulty: "Easy",
        description: "Calculate the factorial of a non-negative integer `n`.",
        initialCode: "function factorial(n) { \n    \n}",
        testCases: [{ input: [5], expected: 120 }]
    },
    {
        id: 5,
        title: "Fibonacci Number",
        difficulty: "Easy",
        description: "Calculate the `n`-th Fibonacci number.",
        initialCode: "function fib(n) { \n    \n}",
        testCases: [{ input: [4], expected: 3 }]
    },
    {
        id: 6,
        title: "FizzBuzz",
        difficulty: "Easy",
        description: "Return an array of strings. For multiples of 3 return 'Fizz', for 5 return 'Buzz', for both 'FizzBuzz'.",
        initialCode: "function fizzBuzz(n) { \n    \n}",
        testCases: [{ input: [3], expected: ["1", "2", "Fizz"] }]
    },
    {
        id: 7,
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        initialCode: "function isValid(s) { \n    \n}",
        testCases: [{ input: ["()"], expected: true }]
    },
    {
        id: 8,
        title: "Single Number",
        difficulty: "Easy",
        description: "Given a non-empty array of integers, every element appears twice except for one. Find that single one.",
        initialCode: "function singleNumber(nums) { \n    \n}",
        testCases: [{ input: [[2, 2, 1]], expected: 1 }]
    },
    {
        id: 9,
        title: "Running Sum",
        difficulty: "Easy",
        description: "Given an array `nums`, return the running sum of the array.",
        initialCode: "function runningSum(nums) { \n    \n}",
        testCases: [{ input: [[1, 2, 3, 4]], expected: [1, 3, 6, 10] }]
    },
    {
        id: 10,
        title: "Move Zeroes",
        difficulty: "Easy",
        description: "Given an array `nums`, move all 0's to the end while maintaining relative order of non-zero elements.",
        initialCode: "function moveZeroes(nums) { \n    \n}",
        testCases: [{ input: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] }]
    },


    {
        id: 11,
        title: "Contains Duplicate",
        difficulty: "Easy",
        description: "Given an integer array `nums`, return true if any value appears at least twice.",
        initialCode: "function containsDuplicate(nums) { \n    \n}",
        testCases: [{ input: [[1, 2, 3, 1]], expected: true }]
    },
    {
        id: 12,
        title: "Majority Element",
        difficulty: "Easy",
        description: "Given array `nums` of size n, return the majority element (appears > n/2 times).",
        initialCode: "function majorityElement(nums) { \n    \n}",
        testCases: [{ input: [[3, 2, 3]], expected: 3 }]
    },
    {
        id: 13,
        title: "Best Time to Buy Stock",
        difficulty: "Easy",
        description: "Find maximum profit by buying on one day and selling on a future day.",
        initialCode: "function maxProfit(prices) { \n    \n}",
        testCases: [{ input: [[7, 1, 5, 3, 6, 4]], expected: 5 }]
    },
    {
        id: 14,
        title: "Missing Number",
        difficulty: "Easy",
        description: "Given array containing n distinct numbers in range [0, n], return the missing number.",
        initialCode: "function missingNumber(nums) { \n    \n}",
        testCases: [{ input: [[3, 0, 1]], expected: 2 }]
    },
    {
        id: 15,
        title: "Plus One",
        difficulty: "Easy",
        description: "Given a large integer represented as an integer array logic, increment by one.",
        initialCode: "function plusOne(digits) { \n    \n}",
        testCases: [{ input: [[1, 2, 3]], expected: [1, 2, 4] }]
    },
    {
        id: 16,
        title: "Roman to Integer",
        difficulty: "Easy",
        description: "Convert a roman numeral to an integer.",
        initialCode: "function romanToInt(s) { \n    \n}",
        testCases: [{ input: ["III"], expected: 3 }]
    },
    {
        id: 17,
        title: "Longest Common Prefix",
        difficulty: "Easy",
        description: "Find the longest common prefix string amongst an array of strings.",
        initialCode: "function longestCommonPrefix(strs) { \n    \n}",
        testCases: [{ input: [["flower", "flow", "flight"]], expected: "fl" }]
    },
    {
        id: 18,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        description: "Merge two sorted arrays into one sorted array.",
        initialCode: "function merge(nums1, m, nums2, n) { \n    \n}",
        testCases: [{ input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3], expected: [1, 2, 2, 3, 5, 6] }]
    },
    {
        id: 19,
        title: "Pascals Triangle",
        difficulty: "Easy",
        description: "Given integer `numRows`, return the first numRows of Pascal's triangle.",
        initialCode: "function generate(numRows) { \n    \n}",
        testCases: [{ input: [5], expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] }]
    },
    {
        id: 20,
        title: "Climbing Stairs",
        difficulty: "Easy",
        description: "You are climbing a staircase. It takes n steps. Each time you can climb 1 or 2 steps. How many ways?",
        initialCode: "function climbStairs(n) { \n    \n}",
        testCases: [{ input: [2], expected: 2 }]
    },


    {
        id: 21,
        title: "Power of Two",
        difficulty: "Easy",
        description: "Return true if n is a power of two.",
        initialCode: "function isPowerOfTwo(n) { \n    \n}",
        testCases: [{ input: [16], expected: true }]
    },
    {
        id: 22,
        title: "Add Binary",
        difficulty: "Easy",
        description: "Given two binary strings a and b, return their sum as a binary string.",
        initialCode: "function addBinary(a, b) { \n    \n}",
        testCases: [{ input: ["11", "1"], expected: "100" }]
    },
    {
        id: 23,
        title: "Sqrt(x)",
        difficulty: "Easy",
        description: "Given a non-negative integer x, compute and return the square root of x.",
        initialCode: "function mySqrt(x) { \n    \n}",
        testCases: [{ input: [4], expected: 2 }]
    },
    {
        id: 24,
        title: "Remove Duplicates",
        difficulty: "Easy",
        description: "Remove duplicates from sorted array in-place.",
        initialCode: "function removeDuplicates(nums) { \n    \n}",
        testCases: [{ input: [[1, 1, 2]], expected: 2 }]
    },
    {
        id: 25,
        title: "Remove Element",
        difficulty: "Easy",
        description: "Remove all occurrences of `val` in `nums` in-place.",
        initialCode: "function removeElement(nums, val) { \n    \n}",
        testCases: [{ input: [[3, 2, 2, 3], 3], expected: 2 }]
    },
    {
        id: 26,
        title: "Search Insert Position",
        difficulty: "Easy",
        description: "Given sorted array and target, return index if found or index where it would be.",
        initialCode: "function searchInsert(nums, target) { \n    \n}",
        testCases: [{ input: [[1, 3, 5, 6], 5], expected: 2 }]
    },
    {
        id: 27,
        title: "Length of Last Word",
        difficulty: "Easy",
        description: "Return length of only the last word in the string.",
        initialCode: "function lengthOfLastWord(s) { \n    \n}",
        testCases: [{ input: ["Hello World"], expected: 5 }]
    },
    {
        id: 28,
        title: "First Unique Char",
        difficulty: "Easy",
        description: "Find the first non-repeating character in a string and return its index.",
        initialCode: "function firstUniqChar(s) { \n    \n}",
        testCases: [{ input: ["leetcode"], expected: 0 }]
    },
    {
        id: 29,
        title: "Valid Anagram",
        difficulty: "Easy",
        description: "Given two strings s and t, return true if t is an anagram of s.",
        initialCode: "function isAnagram(s, t) { \n    \n}",
        testCases: [{ input: ["anagram", "nagaram"], expected: true }]
    },
    {
        id: 30,
        title: "Intersection of Arrays",
        difficulty: "Easy",
        description: "Given two integer arrays nums1 and nums2, return an array of their intersection.",
        initialCode: "function intersection(nums1, nums2) { \n    \n}",
        testCases: [{ input: [[1, 2, 2, 1], [2, 2]], expected: [2] }]
    },


    {
        id: 31,
        title: "Happy Number",
        difficulty: "Easy",
        description: "Determine if a number is 'happy' (sum of squares logic).",
        initialCode: "function isHappy(n) { \n    \n}",
        testCases: [{ input: [19], expected: true }]
    },
    {
        id: 32,
        title: "Reverse Bits",
        difficulty: "Easy",
        description: "Reverse bits of a given 32 bits unsigned integer.",
        initialCode: "function reverseBits(n) { \n    \n}",
        testCases: [{ input: [43261596], expected: 964176192 }]
    },
    {
        id: 33,
        title: "Number of 1 Bits",
        difficulty: "Easy",
        description: "Taking an unsigned integer, return the number of '1' bits it has.",
        initialCode: "function hammingWeight(n) { \n    \n}",
        testCases: [{ input: [11], expected: 3 }]
    },
    {
        id: 34,
        title: "Power of Three",
        difficulty: "Easy",
        description: "Given an integer n, return true if it is a power of three.",
        initialCode: "function isPowerOfThree(n) { \n    \n}",
        testCases: [{ input: [27], expected: true }]
    },
    {
        id: 35,
        title: "Power of Four",
        difficulty: "Easy",
        description: "Given an integer n, return true if it is a power of four.",
        initialCode: "function isPowerOfFour(n) { \n    \n}",
        testCases: [{ input: [16], expected: true }]
    },
    {
        id: 36,
        title: "Sign of Product",
        difficulty: "Easy",
        description: "Return sign of the product of all values in array (1, -1, or 0).",
        initialCode: "function arraySign(nums) { \n    \n}",
        testCases: [{ input: [[-1, -2, -3, -4, 3, 2, 1]], expected: 1 }]
    },
    {
        id: 37,
        title: "Check if Straight Line",
        difficulty: "Easy",
        description: "Check if points make a straight line.",
        initialCode: "function checkStraightLine(coordinates) { \n    \n}",
        testCases: [{ input: [[[1, 2], [2, 3], [3, 4], [4, 5]]], expected: true }]
    },
    {
        id: 38,
        title: "Merge Strings Alternately",
        difficulty: "Easy",
        description: "Merge strings by adding letters in alternating order.",
        initialCode: "function mergeAlternately(word1, word2) { \n    \n}",
        testCases: [{ input: ["abc", "pqr"], expected: "apbqcr" }]
    },
    {
        id: 39,
        title: "Find the Difference",
        difficulty: "Easy",
        description: "Find the letter that was added to string t.",
        initialCode: "function findTheDifference(s, t) { \n    \n}",
        testCases: [{ input: ["abcd", "abcde"], expected: "e" }]
    },
    {
        id: 40,
        title: "Is Subsequence",
        difficulty: "Easy",
        description: "Check if s is a subsequence of t.",
        initialCode: "function isSubsequence(s, t) { \n    \n}",
        testCases: [{ input: ["abc", "ahbgdc"], expected: true }]
    },


    {
        id: 41,
        title: "Can Place Flowers",
        difficulty: "Easy",
        description: "Can n flowers be planted in flowerbed without violating no-adjacent rule?",
        initialCode: "function canPlaceFlowers(flowerbed, n) { \n    \n}",
        testCases: [{ input: [[1, 0, 0, 0, 1], 1], expected: true }]
    },
    {
        id: 42,
        title: "Reverse Vowels",
        difficulty: "Easy",
        description: "Reverse only the vowels of a string.",
        initialCode: "function reverseVowels(s) { \n    \n}",
        testCases: [{ input: ["hello"], expected: "holle" }]
    },
    {
        id: 43,
        title: "Rotate String",
        difficulty: "Easy",
        description: "Given two strings s and goal, return true if s can become goal after some number of shifts.",
        initialCode: "function rotateString(s, goal) { \n    \n}",
        testCases: [{ input: ["abcde", "cdeab"], expected: true }]
    },
    {
        id: 44,
        title: "Backspaced String",
        difficulty: "Easy",
        description: "Given two strings S and T, return if they are equal when typed into empty editors. # means backspace.",
        initialCode: "function backspaceCompare(s, t) { \n    \n}",
        testCases: [{ input: ["ab#c", "ad#c"], expected: true }]
    },
    {
        id: 45,
        title: "Counting Bits",
        difficulty: "Easy",
        description: "Given integer n, return array of length n+1 with count of 1s in binary.",
        initialCode: "function countBits(n) { \n    \n}",
        testCases: [{ input: [2], expected: [0, 1, 1] }]
    },
    {
        id: 46,
        title: "Tribonacci Number",
        difficulty: "Easy",
        description: "The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2.",
        initialCode: "function tribonacci(n) { \n    \n}",
        testCases: [{ input: [4], expected: 4 }]
    },
    {
        id: 47,
        title: "Subtract Product and Sum",
        difficulty: "Easy",
        description: "Given an integer n, return the difference between the product of its digits and the sum of its digits.",
        initialCode: "function subtractProductAndSum(n) { \n    \n}",
        testCases: [{ input: [234], expected: 15 }]
    },
    {
        id: 48,
        title: "Complement of Base 10",
        difficulty: "Easy",
        description: "Returns the complement of integer.",
        initialCode: "function bitwiseComplement(n) { \n    \n}",
        testCases: [{ input: [5], expected: 2 }]
    },
    {
        id: 49,
        title: "Defanging an IP Address",
        difficulty: "Easy",
        description: "Given a valid (IPv4) IP address, return a defanged version of that IP address.",
        initialCode: "function defangIPaddr(address) { \n    \n}",
        testCases: [{ input: ["1.1.1.1"], expected: "1[.]1[.]1[.]1" }]
    },
    {
        id: 50,
        title: "Jewels and Stones",
        difficulty: "Easy",
        description: "You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.",
        initialCode: "function numJewelsInStones(jewels, stones) { \n    \n}",
        testCases: [{ input: ["aA", "aAAbbbb"], expected: 3 }]
    }
];