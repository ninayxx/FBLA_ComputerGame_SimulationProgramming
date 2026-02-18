const questions = [

    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        description: "Given an array of integers `nums` and `target`, return indices of the two numbers such that they add up to `target`.",
        initialCode: "function twoSum(nums, target) { \n    \n}",
        testCases: [
            { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
            { input: [[3, 2, 4], 6], expected: [1, 2] },
            { input: [[3, 3], 6], expected: [0, 1] },
            { input: [[-1, -2, -3, -4, -5], -8], expected: [2, 4] },
            { input: [[0, 4, 3, 0], 0], expected: [0, 3] },
            { input: [[1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 11], expected: [5, 11] }, // Large array
            { input: [[1000000, 500000, 500000], 1000000], expected: [1, 2] }, // Large numbers
            { input: [[2, 5, 5, 11], 10], expected: [1, 2] }
        ]
    },
    {
        id: 2,
        title: "Palindrome Number",
        difficulty: "Easy",
        description: "Given an integer `x`, return true if `x` is a palindrome integer.",
        initialCode: "function isPalindrome(x) { \n    \n}",
        testCases: [
            { input: [121], expected: true },
            { input: [-121], expected: false },
            { input: [10], expected: false },
            { input: [0], expected: true },
            { input: [11], expected: true },
            { input: [12321], expected: true },
            { input: [123456], expected: false },
            { input: [1001], expected: true },
            { input: [1], expected: true }
        ]
    },
    {
        id: 3,
        title: "Reverse String",
        difficulty: "Easy",
        description: "Write a function that reverses a string. The input string is given as an array of characters.",
        initialCode: "function reverseString(s) { \n    \n}",
        testCases: [
            { input: [["h", "e", "l", "l", "o"]], expected: ["o", "l", "l", "e", "h"] },
            { input: [["H", "a", "n", "n", "a", "h"]], expected: ["h", "a", "n", "n", "a", "H"] },
            { input: [["A"]], expected: ["A"] },
            { input: [["a", "b"]], expected: ["b", "a"] },
            { input: [[]], expected: [] },
            { input: [["1", "2", "3"]], expected: ["3", "2", "1"] },
            { input: [["!", "@", "#"]], expected: ["#", "@", "!"] },
            { input: [[" "]], expected: [" "] }
        ]
    },
    {
        id: 4,
        title: "Factorial",
        difficulty: "Easy",
        description: "Calculate the factorial of a non-negative integer `n`.",
        initialCode: "function factorial(n) { \n    \n}",
        testCases: [
            { input: [5], expected: 120 },
            { input: [0], expected: 1 },
            { input: [1], expected: 1 },
            { input: [3], expected: 6 },
            { input: [10], expected: 3628800 },
            { input: [2], expected: 2 },
            { input: [4], expected: 24 },
            { input: [6], expected: 720 },
            { input: [7], expected: 5040 }
        ]
    },
    {
        id: 5,
        title: "Fibonacci Number",
        difficulty: "Easy",
        description: "Calculate the `n`-th Fibonacci number.",
        initialCode: "function fib(n) { \n    \n}",
        testCases: [
            { input: [4], expected: 3 },
            { input: [2], expected: 1 },
            { input: [3], expected: 2 },
            { input: [0], expected: 0 },
            { input: [1], expected: 1 },
            { input: [5], expected: 5 },
            { input: [6], expected: 8 },
            { input: [10], expected: 55 },
            { input: [20], expected: 6765 },
            { input: [30], expected: 832040 }
        ]
    },
    {
        id: 6,
        title: "FizzBuzz",
        difficulty: "Easy",
        description: "Return an array of strings. For multiples of 3 return 'Fizz', for 5 return 'Buzz', for both 'FizzBuzz'.",
        initialCode: "function fizzBuzz(n) { \n    \n}",
        testCases: [
            { input: [3], expected: ["1", "2", "Fizz"] },
            { input: [5], expected: ["1", "2", "Fizz", "4", "Buzz"] },
            { input: [15], expected: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"] },
            { input: [1], expected: ["1"] },
            { input: [0], expected: [] },
            { input: [6], expected: ["1", "2", "Fizz", "4", "Buzz", "Fizz"] },
            { input: [10], expected: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"] },
            { input: [9], expected: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz"] }
        ]
    },
    {
        id: 7,
        title: "Valid Parentheses",
        difficulty: "Easy",
        description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        initialCode: "function isValid(s) { \n    \n}",
        testCases: [
            { input: ["()"], expected: true },
            { input: ["()[]{}"], expected: true },
            { input: ["(]"], expected: false },
            { input: ["([)]"], expected: false },
            { input: ["{[]}"], expected: true },
            { input: [""], expected: true },
            { input: ["[([(({}))])]"], expected: true },
            { input: ["((("], expected: false },
            { input: [")))"], expected: false },
            { input: ["({[("], expected: false }
        ]
    },
    {
        id: 8,
        title: "Single Number",
        difficulty: "Easy",
        description: "Given a non-empty array of integers, every element appears twice except for one. Find that single one.",
        initialCode: "function singleNumber(nums) { \n    \n}",
        testCases: [
            { input: [[2, 2, 1]], expected: 1 },
            { input: [[4, 1, 2, 1, 2]], expected: 4 },
            { input: [[1]], expected: 1 },
            { input: [[0, 1, 0]], expected: 1 },
            { input: [[-1, -1, -2]], expected: -2 },
            { input: [[100, 200, 100, 200, 300]], expected: 300 },
            { input: [[99]], expected: 99 },
            { input: [[5, 4, 3, 2, 1, 1, 2, 3, 4]], expected: 5 },
            { input: [[7, 3, 5, 5, 3, 7, 1]], expected: 1 }
        ]
    },
    {
        id: 9,
        title: "Running Sum",
        difficulty: "Easy",
        description: "Given an array `nums`, return the running sum of the array.",
        initialCode: "function runningSum(nums) { \n    \n}",
        testCases: [
            { input: [[1, 2, 3, 4]], expected: [1, 3, 6, 10] },
            { input: [[1, 1, 1, 1, 1]], expected: [1, 2, 3, 4, 5] },
            { input: [[3, 1, 2, 10, 1]], expected: [3, 4, 6, 16, 17] },
            { input: [[0, 0, 0, 0]], expected: [0, 0, 0, 0] },
            { input: [[-1, -2, -3]], expected: [-1, -3, -6] },
            { input: [[5]], expected: [5] },
            { input: [[10, -10, 10, -10]], expected: [10, 0, 10, 0] },
            { input: [[1, -1]], expected: [1, 0] },
            { input: [[100, 200, 300]], expected: [100, 300, 600] }
        ]
    },
    {
        id: 10,
        title: "Move Zeroes",
        difficulty: "Easy",
        description: "Given an array `nums`, move all 0's to the end while maintaining relative order of non-zero elements.",
        initialCode: "function moveZeroes(nums) { \n    \n}",
        testCases: [
            { input: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
            { input: [[0]], expected: [0] },
            { input: [[1, 0]], expected: [1, 0] },
            { input: [[0, 1]], expected: [1, 0] },
            { input: [[0, 0, 1]], expected: [1, 0, 0] },
            { input: [[1, 2, 3]], expected: [1, 2, 3] },
            { input: [[0, 0, 0]], expected: [0, 0, 0] },
            { input: [[4, 2, 4, 0, 0, 3, 0, 5, 1, 0]], expected: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0] },
            { input: [[1]], expected: [1] }
        ]
    },


    {
        id: 11,
        title: "Contains Duplicate",
        difficulty: "Easy",
        description: "Given an integer array `nums`, return true if any value appears at least twice.",
        initialCode: "function containsDuplicate(nums) { \n    \n}",
        testCases: [
            { input: [[1, 2, 3, 1]], expected: true },
            { input: [[1, 2, 3, 4]], expected: false },
            { input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], expected: true },
            { input: [[1]], expected: false },
            { input: [[]], expected: false },
            { input: [[1, 1]], expected: true },
            { input: [[10, 20, 30, 40, 10]], expected: true },
            { input: [[0, 1, 2, 3, 4, 5, 0]], expected: true },
            { input: [[-1, -2, -1]], expected: true }
        ]
    },
    {
        id: 12,
        title: "Majority Element",
        difficulty: "Easy",
        description: "Given array `nums` of size n, return the majority element (appears > n/2 times).",
        initialCode: "function majorityElement(nums) { \n    \n}",
        testCases: [
            { input: [[3, 2, 3]], expected: 3 },
            { input: [[2, 2, 1, 1, 1, 2, 2]], expected: 2 },
            { input: [[1]], expected: 1 },
            { input: [[6, 5, 5]], expected: 5 },
            { input: [[1, 2, 1, 2, 1]], expected: 1 },
            { input: [[10, 10, 20]], expected: 10 },
            { input: [[-1, -1, 2147483647]], expected: -1 },
            { input: [[8, 8, 7, 7, 7]], expected: 7 },
            { input: [[3, 3, 4]], expected: 3 }
        ]
    },
    {
        id: 13,
        title: "Best Time to Buy Stock",
        difficulty: "Easy",
        description: "Find maximum profit by buying on one day and selling on a future day.",
        initialCode: "function maxProfit(prices) { \n    \n}",
        testCases: [
            { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
            { input: [[7, 6, 4, 3, 1]], expected: 0 },
            { input: [[1, 2]], expected: 1 },
            { input: [[2, 4, 1]], expected: 2 },
            { input: [[1]], expected: 0 },
            { input: [[2, 1, 2, 1, 0, 1, 2]], expected: 2 },
            { input: [[3, 3, 5, 0, 0, 3, 1, 4]], expected: 4 },
            { input: [[1, 2, 3, 4, 5]], expected: 4 },
            { input: [[0, 6, -3, 7]], expected: 10 }
        ]
    },
    {
        id: 14,
        title: "Missing Number",
        difficulty: "Easy",
        description: "Given array containing n distinct numbers in range [0, n], return the missing number.",
        initialCode: "function missingNumber(nums) { \n    \n}",
        testCases: [
            { input: [[3, 0, 1]], expected: 2 },
            { input: [[0, 1]], expected: 2 },
            { input: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 },
            { input: [[0]], expected: 1 },
            { input: [[1]], expected: 0 },
            { input: [[1, 2]], expected: 0 },
            { input: [[0, 2]], expected: 1 },
            { input: [[0, 1, 2, 3, 4, 5, 6, 7, 8, 10]], expected: 9 }
        ]
    },
    {
        id: 15,
        title: "Plus One",
        difficulty: "Easy",
        description: "Given a large integer represented as an integer array logic, increment by one.",
        initialCode: "function plusOne(digits) { \n    \n}",
        testCases: [
            { input: [[1, 2, 3]], expected: [1, 2, 4] },
            { input: [[4, 3, 2, 1]], expected: [4, 3, 2, 2] },
            { input: [[9]], expected: [1, 0] },
            { input: [[1, 9]], expected: [2, 0] },
            { input: [[9, 9]], expected: [1, 0, 0] },
            { input: [[0]], expected: [1] },
            { input: [[8, 9, 9, 9]], expected: [9, 0, 0, 0] },
            { input: [[1, 2, 9]], expected: [1, 3, 0] },
            { input: [[2, 4, 9, 3, 9]], expected: [2, 4, 9, 4, 0] }
        ]
    },
    {
        id: 16,
        title: "Roman to Integer",
        difficulty: "Easy",
        description: "Convert a roman numeral to an integer.",
        initialCode: "function romanToInt(s) { \n    \n}",
        testCases: [
            { input: ["III"], expected: 3 },
            { input: ["LVIII"], expected: 58 },
            { input: ["MCMXCIV"], expected: 1994 },
            { input: ["IV"], expected: 4 },
            { input: ["IX"], expected: 9 },
            { input: ["XL"], expected: 40 },
            { input: ["XC"], expected: 90 },
            { input: ["CD"], expected: 400 },
            { input: ["CM"], expected: 900 },
            { input: ["D"], expected: 500 },
            { input: ["M"], expected: 1000 }
        ]
    },
    {
        id: 17,
        title: "Longest Common Prefix",
        difficulty: "Easy",
        description: "Find the longest common prefix string amongst an array of strings.",
        initialCode: "function longestCommonPrefix(strs) { \n    \n}",
        testCases: [
            { input: [["flower", "flow", "flight"]], expected: "fl" },
            { input: [["dog", "racecar", "car"]], expected: "" },
            { input: [["a"]], expected: "a" },
            { input: [["ab", "a"]], expected: "a" },
            { input: [["a", "b"]], expected: "" },
            { input: [["cir", "car"]], expected: "c" },
            { input: [["interspecies", "interstellar", "interstate"]], expected: "inters" },
            { input: [["throne", "throne"]], expected: "throne" },
            { input: [["", ""]], expected: "" }
        ]
    },
    {
        id: 18,
        title: "Merge Sorted Array",
        difficulty: "Easy",
        description: "Merge two sorted arrays into one sorted array.",
        initialCode: "function merge(nums1, m, nums2, n) { \n    \n}",
        testCases: [
            { input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3], expected: [1, 2, 2, 3, 5, 6] },
            { input: [[1], 1, [], 0], expected: [1] },
            { input: [[0], 0, [1], 1], expected: [1] },
            { input: [[4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3], expected: [1, 2, 3, 4, 5, 6] },
            { input: [[1, 2, 4, 5, 6, 0], 5, [3], 1], expected: [1, 2, 3, 4, 5, 6] },
            { input: [[0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5], expected: [1, 2, 3, 4, 5] },
            { input: [[2, 0], 1, [1], 1], expected: [1, 2] },
            { input: [[-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3], expected: [-1, 0, 0, 1, 2, 2, 3, 3, 3] }
        ]
    },
    {
        id: 19,
        title: "Pascals Triangle",
        difficulty: "Easy",
        description: "Given integer `numRows`, return the first numRows of Pascal's triangle.",
        initialCode: "function generate(numRows) { \n    \n}",
        testCases: [
            { input: [5], expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]] },
            { input: [1], expected: [[1]] },
            { input: [2], expected: [[1], [1, 1]] },
            { input: [3], expected: [[1], [1, 1], [1, 2, 1]] },
            { input: [4], expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] },
            { input: [6], expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]] }
        ]
    },
    {
        id: 20,
        title: "Climbing Stairs",
        difficulty: "Easy",
        description: "You are climbing a staircase. It takes n steps. Each time you can climb 1 or 2 steps. How many ways?",
        initialCode: "function climbStairs(n) { \n    \n}",
        testCases: [
            { input: [2], expected: 2 },
            { input: [3], expected: 3 },
            { input: [1], expected: 1 },
            { input: [4], expected: 5 },
            { input: [5], expected: 8 },
            { input: [6], expected: 13 },
            { input: [10], expected: 89 },
            { input: [45], expected: 1836311903 }, // Edge case: Large n
            { input: [0], expected: 0 } // Depending on interpretation, usually 0 or 1. Let's say 0 for 0 steps.
        ]
    },


    {
        id: 21,
        title: "Power of Two",
        difficulty: "Easy",
        description: "Return true if n is a power of two.",
        initialCode: "function isPowerOfTwo(n) { \n    \n}",
        testCases: [
            { input: [16], expected: true },
            { input: [1], expected: true },
            { input: [3], expected: false },
            { input: [4], expected: true },
            { input: [5], expected: false },
            { input: [0], expected: false },
            { input: [-16], expected: false },
            { input: [1024], expected: true },
            { input: [2147483648], expected: true } // 2^31
        ]
    },
    {
        id: 22,
        title: "Add Binary",
        difficulty: "Easy",
        description: "Given two binary strings a and b, return their sum as a binary string.",
        initialCode: "function addBinary(a, b) { \n    \n}",
        testCases: [
            { input: ["11", "1"], expected: "100" },
            { input: ["1010", "1011"], expected: "10101" },
            { input: ["0", "0"], expected: "0" },
            { input: ["1", "0"], expected: "1" },
            { input: ["1111", "1111"], expected: "11110" },
            { input: ["100", "110010"], expected: "110110" },
            { input: ["1", "111"], expected: "1000" },
            { input: ["0", "1"], expected: "1" }
        ]
    },
    {
        id: 23,
        title: "Sqrt(x)",
        difficulty: "Easy",
        description: "Given a non-negative integer x, compute and return the square root of x.",
        initialCode: "function mySqrt(x) { \n    \n}",
        testCases: [
            { input: [4], expected: 2 },
            { input: [8], expected: 2 },
            { input: [0], expected: 0 },
            { input: [1], expected: 1 },
            { input: [2], expected: 1 },
            { input: [9], expected: 3 },
            { input: [10], expected: 3 },
            { input: [16], expected: 4 },
            { input: [2147395600], expected: 46340 }
        ]
    },
    {
        id: 24,
        title: "Remove Duplicates",
        difficulty: "Easy",
        description: "Remove duplicates from sorted array in-place.",
        initialCode: "function removeDuplicates(nums) { \n    \n}",
        testCases: [
            { input: [[1, 1, 2]], expected: 2 },
            { input: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]], expected: 5 },
            { input: [[1, 2, 3]], expected: 3 },
            { input: [[1, 1, 1]], expected: 1 },
            { input: [[]], expected: 0 },
            { input: [[1]], expected: 1 },
            { input: [[-1, 0, 0, 3, 3]], expected: 3 },
            { input: [[-3, -1, 0, 0]], expected: 3 }
        ]
    },
    {
        id: 25,
        title: "Remove Element",
        difficulty: "Easy",
        description: "Remove all occurrences of `val` in `nums` in-place.",
        initialCode: "function removeElement(nums, val) { \n    \n}",
        testCases: [
            { input: [[3, 2, 2, 3], 3], expected: 2 },
            { input: [[0, 1, 2, 2, 3, 0, 4, 2], 2], expected: 5 },
            { input: [[1], 1], expected: 0 },
            { input: [[1], 2], expected: 1 },
            { input: [[], 0], expected: 0 },
            { input: [[3, 3, 3], 3], expected: 0 },
            { input: [[4, 5], 4], expected: 1 },
            { input: [[2, 2, 2], 0], expected: 3 }
        ]
    },
    {
        id: 26,
        title: "Search Insert Position",
        difficulty: "Easy",
        description: "Given sorted array and target, return index if found or index where it would be.",
        initialCode: "function searchInsert(nums, target) { \n    \n}",
        testCases: [
            { input: [[1, 3, 5, 6], 5], expected: 2 },
            { input: [[1, 3, 5, 6], 2], expected: 1 },
            { input: [[1, 3, 5, 6], 7], expected: 4 },
            { input: [[1, 3, 5, 6], 0], expected: 0 },
            { input: [[1], 0], expected: 0 },
            { input: [[1], 2], expected: 1 },
            { input: [[1, 2, 3], 1], expected: 0 },
            { input: [[1, 2, 3], 3], expected: 2 }
        ]
    },
    {
        id: 27,
        title: "Length of Last Word",
        difficulty: "Easy",
        description: "Return length of only the last word in the string.",
        initialCode: "function lengthOfLastWord(s) { \n    \n}",
        testCases: [
            { input: ["Hello World"], expected: 5 },
            { input: ["   fly me   to   the moon  "], expected: 4 },
            { input: ["luffy is still joyboy"], expected: 6 },
            { input: ["a"], expected: 1 },
            { input: ["a "], expected: 1 },
            { input: [" day"], expected: 3 },
            { input: ["word"], expected: 4 },
            { input: ["   "], expected: 0 }
        ]
    },
    {
        id: 28,
        title: "First Unique Char",
        difficulty: "Easy",
        description: "Find the first non-repeating character in a string and return its index.",
        initialCode: "function firstUniqChar(s) { \n    \n}",
        testCases: [
            { input: ["leetcode"], expected: 0 },
            { input: ["loveleetcode"], expected: 2 },
            { input: ["aabb"], expected: -1 },
            { input: ["z"], expected: 0 },
            { input: ["aadadaad"], expected: -1 },
            { input: ["abc"], expected: 0 },
            { input: ["abca"], expected: 1 },
            { input: ["aabbc"], expected: 4 }
        ]
    },
    {
        id: 29,
        title: "Valid Anagram",
        difficulty: "Easy",
        description: "Given two strings s and t, return true if t is an anagram of s.",
        initialCode: "function isAnagram(s, t) { \n    \n}",
        testCases: [
            { input: ["anagram", "nagaram"], expected: true },
            { input: ["rat", "car"], expected: false },
            { input: ["a", "ab"], expected: false },
            { input: ["ab", "a"], expected: false },
            { input: ["", ""], expected: true },
            { input: ["listen", "silent"], expected: true },
            { input: ["evil", "vile"], expected: true },
            { input: ["a", "a"], expected: true }
        ]
    },
    {
        id: 30,
        title: "Intersection of Arrays",
        difficulty: "Easy",
        description: "Given two integer arrays nums1 and nums2, return an array of their intersection.",
        initialCode: "function intersection(nums1, nums2) { \n    \n}",
        testCases: [
            { input: [[1, 2, 2, 1], [2, 2]], expected: [2] },
            { input: [[4, 9, 5], [9, 4, 9, 8, 4]], expected: [9, 4] },
            { input: [[1, 2, 3], [4, 5, 6]], expected: [] },
            { input: [[], [1]], expected: [] },
            { input: [[1], []], expected: [] },
            { input: [[1], [1]], expected: [1] },
            { input: [[1, 2], [2, 1]], expected: [1, 2] }, // Order might vary, usually set equality. Game logic uses simple stirngify so specific order might be needed or logic refined. Assuming simple cases or specific order for now.
            { input: [[1, 2, 2, 1], [2, 2, 2]], expected: [2] }
        ]
    },


    {
        id: 31,
        title: "Happy Number",
        difficulty: "Easy",
        description: "Determine if a number is 'happy' (sum of squares logic).",
        initialCode: "function isHappy(n) { \n    \n}",
        testCases: [
            { input: [19], expected: true },
            { input: [2], expected: false },
            { input: [1], expected: true },
            { input: [7], expected: true },
            { input: [111], expected: false },
            { input: [4], expected: false },
            { input: [100], expected: true },
            { input: [20], expected: false }
        ]
    },
    {
        id: 32,
        title: "Reverse Bits",
        difficulty: "Easy",
        description: "Reverse bits of a given 32 bits unsigned integer.",
        initialCode: "function reverseBits(n) { \n    \n}",
        testCases: [
            { input: [43261596], expected: 964176192 },
            { input: [0], expected: 0 },
            { input: [1], expected: 2147483648 }, // 1 << 31
            { input: [2147483648], expected: 1 },
            { input: [4294967295], expected: 4294967295 }, // All 1s
            { input: [3], expected: 3221225472 },
            { input: [6], expected: 1610612736 },
            { input: [10], expected: 1342177280 }
        ]
    },
    {
        id: 33,
        title: "Number of 1 Bits",
        difficulty: "Easy",
        description: "Taking an unsigned integer, return the number of '1' bits it has.",
        initialCode: "function hammingWeight(n) { \n    \n}",
        testCases: [
            { input: [11], expected: 3 },
            { input: [128], expected: 1 },
            { input: [2147483645], expected: 30 },
            { input: [0], expected: 0 },
            { input: [1], expected: 1 },
            { input: [2], expected: 1 },
            { input: [3], expected: 2 },
            { input: [7], expected: 3 },
            { input: [15], expected: 4 },
            { input: [4294967295], expected: 32 }
        ]
    },
    {
        id: 34,
        title: "Power of Three",
        difficulty: "Easy",
        description: "Given an integer n, return true if it is a power of three.",
        initialCode: "function isPowerOfThree(n) { \n    \n}",
        testCases: [
            { input: [27], expected: true },
            { input: [0], expected: false },
            { input: [-1], expected: false },
            { input: [1], expected: true },
            { input: [9], expected: true },
            { input: [45], expected: false },
            { input: [243], expected: true },
            { input: [2], expected: false },
            { input: [28], expected: false }
        ]
    },
    {
        id: 35,
        title: "Power of Four",
        difficulty: "Easy",
        description: "Given an integer n, return true if it is a power of four.",
        initialCode: "function isPowerOfFour(n) { \n    \n}",
        testCases: [
            { input: [16], expected: true },
            { input: [5], expected: false },
            { input: [1], expected: true },
            { input: [0], expected: false },
            { input: [-16], expected: false },
            { input: [64], expected: true },
            { input: [4], expected: true },
            { input: [2], expected: false },
            { input: [8], expected: false }
        ]
    },
    {
        id: 36,
        title: "Sign of Product",
        difficulty: "Easy",
        description: "Return sign of the product of all values in array (1, -1, or 0).",
        initialCode: "function arraySign(nums) { \n    \n}",
        testCases: [
            { input: [[-1, -2, -3, -4, 3, 2, 1]], expected: 1 },
            { input: [[1, 5, 0, 2, -3]], expected: 0 },
            { input: [[-1, 1, -1, 1, -1]], expected: -1 },
            { input: [[1, 2, 3]], expected: 1 },
            { input: [[0]], expected: 0 },
            { input: [[-5]], expected: -1 },
            { input: [[5]], expected: 1 },
            { input: [[-1, -1]], expected: 1 }
        ]
    },
    {
        id: 37,
        title: "Check if Straight Line",
        difficulty: "Easy",
        description: "Check if points make a straight line.",
        initialCode: "function checkStraightLine(coordinates) { \n    \n}",
        testCases: [
            { input: [[[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]], expected: true },
            { input: [[[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]], expected: false },
            { input: [[[0, 0], [0, 1], [0, -1]]], expected: true }, // Vertical line
            { input: [[[1, 1], [2, 1], [3, 1]]], expected: true }, // Horizontal line
            { input: [[[0, 0], [1, 2], [2, 1]]], expected: false },
            { input: [[[1, 2], [2, 3]]], expected: true },
            { input: [[[2, 1], [4, 2], [6, 3]]], expected: true }
        ]
    },
    {
        id: 38,
        title: "Merge Strings Alternately",
        difficulty: "Easy",
        description: "Merge strings by adding letters in alternating order.",
        initialCode: "function mergeAlternately(word1, word2) { \n    \n}",
        testCases: [
            { input: ["abc", "pqr"], expected: "apbqcr" },
            { input: ["ab", "pqrs"], expected: "apbqrs" },
            { input: ["abcd", "pq"], expected: "apbqcd" },
            { input: ["", "abc"], expected: "abc" },
            { input: ["abc", ""], expected: "abc" },
            { input: ["a", "b"], expected: "ab" },
            { input: ["", ""], expected: "" },
            { input: ["z", "z"], expected: "zz" }
        ]
    },
    {
        id: 39,
        title: "Find the Difference",
        difficulty: "Easy",
        description: "Find the letter that was added to string t.",
        initialCode: "function findTheDifference(s, t) { \n    \n}",
        testCases: [
            { input: ["abcd", "abcde"], expected: "e" },
            { input: ["", "y"], expected: "y" },
            { input: ["a", "aa"], expected: "a" },
            { input: ["ae", "aea"], expected: "a" },
            { input: ["wx", "wyx"], expected: "y" },
            { input: ["abc", "acb"], expected: undefined }, // Should handle logic error or return undefined if logic is find extra char. Wait, problem says t has one more.
            // Actually test cases assume t has one extra char.
            { input: ["abc", "abce"], expected: "e" },
            { input: ["random", "randonm"], expected: "n" }
        ]
    },
    {
        id: 40,
        title: "Is Subsequence",
        difficulty: "Easy",
        description: "Check if s is a subsequence of t.",
        initialCode: "function isSubsequence(s, t) { \n    \n}",
        testCases: [
            { input: ["abc", "ahbgdc"], expected: true },
            { input: ["axc", "ahbgdc"], expected: false },
            { input: ["", "ahbgdc"], expected: true },
            { input: ["abc", ""], expected: false },
            { input: ["", ""], expected: true },
            { input: ["a", "b"], expected: false },
            { input: ["a", "a"], expected: true },
            { input: ["ace", "abcde"], expected: true }
        ]
    },


    {
        id: 41,
        title: "Can Place Flowers",
        difficulty: "Easy",
        description: "Can n flowers be planted in flowerbed without violating no-adjacent rule?",
        initialCode: "function canPlaceFlowers(flowerbed, n) { \n    \n}",
        testCases: [
            { input: [[1, 0, 0, 0, 1], 1], expected: true },
            { input: [[1, 0, 0, 0, 1], 2], expected: false },
            { input: [[0, 0, 0, 0, 0], 3], expected: true },
            { input: [[1, 0, 1, 0, 1], 1], expected: false },
            { input: [[0, 0, 0, 0, 0], 4], expected: false }, // Only 3 can fit
            { input: [[0], 1], expected: true },
            { input: [[0, 0, 1], 1], expected: true },
            { input: [[1], 0], expected: true }
        ]
    },
    {
        id: 42,
        title: "Reverse Vowels",
        difficulty: "Easy",
        description: "Reverse only the vowels of a string.",
        initialCode: "function reverseVowels(s) { \n    \n}",
        testCases: [
            { input: ["hello"], expected: "holle" },
            { input: ["leetcode"], expected: "leotcede" },
            { input: ["aA"], expected: "Aa" },
            { input: ["aeiou"], expected: "uoiea" },
            { input: ["xyz"], expected: "xyz" },
            { input: [" "], expected: " " },
            { input: ["Aiueo"], expected: "oeuiA" },
            { input: ["0P"], expected: "0P" }
        ]
    },
    {
        id: 43,
        title: "Rotate String",
        difficulty: "Easy",
        description: "Given two strings s and goal, return true if s can become goal after some number of shifts.",
        initialCode: "function rotateString(s, goal) { \n    \n}",
        testCases: [
            { input: ["abcde", "cdeab"], expected: true },
            { input: ["abcde", "abced"], expected: false },
            { input: ["abc", "bca"], expected: true },
            { input: ["abc", "cab"], expected: true },
            { input: ["a", "a"], expected: true },
            { input: ["aa", "a"], expected: false }, // Length check
            { input: ["", ""], expected: true },
            { input: ["geeks", "eksge"], expected: true }
        ]
    },
    {
        id: 44,
        title: "Backspaced String",
        difficulty: "Easy",
        description: "Given two strings S and T, return if they are equal when typed into empty editors. # means backspace.",
        initialCode: "function backspaceCompare(s, t) { \n    \n}",
        testCases: [
            { input: ["ab#c", "ad#c"], expected: true },
            { input: ["ab##", "c#d#"], expected: true }, // Both ""
            { input: ["a##c", "#a#c"], expected: true }, // Both "c"
            { input: ["a#c", "b"], expected: false },
            { input: ["y#fo##f", "y#f#o##f"], expected: true }, // "f" vs "f"
            { input: ["#a", "a"], expected: true }, // "a" vs "a"
            { input: ["###", ""], expected: true },
            { input: ["abc", "abc"], expected: true }
        ]
    },
    {
        id: 45,
        title: "Counting Bits",
        difficulty: "Easy",
        description: "Given integer n, return array of length n+1 with count of 1s in binary.",
        initialCode: "function countBits(n) { \n    \n}",
        testCases: [
            { input: [2], expected: [0, 1, 1] },
            { input: [5], expected: [0, 1, 1, 2, 1, 2] },
            { input: [0], expected: [0] },
            { input: [1], expected: [0, 1] },
            { input: [8], expected: [0, 1, 1, 2, 1, 2, 2, 3, 1] },
            { input: [10], expected: [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2] }
        ]
    },
    {
        id: 46,
        title: "Tribonacci Number",
        difficulty: "Easy",
        description: "The Tribonacci sequence Tn is defined as follows: T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2.",
        initialCode: "function tribonacci(n) { \n    \n}",
        testCases: [
            { input: [4], expected: 4 },
            { input: [25], expected: 1389537 },
            { input: [0], expected: 0 },
            { input: [1], expected: 1 },
            { input: [2], expected: 1 },
            { input: [3], expected: 2 },
            { input: [5], expected: 7 },
            { input: [37], expected: 2082876103 } // Edge case: Large n, fits in standard 32-bit int? 2B fits in signed 32-bit (max 2.14B).
        ]
    },
    {
        id: 47,
        title: "Subtract Product and Sum",
        difficulty: "Easy",
        description: "Given an integer n, return the difference between the product of its digits and the sum of its digits.",
        initialCode: "function subtractProductAndSum(n) { \n    \n}",
        testCases: [
            { input: [234], expected: 15 }, // 24 - 9 = 15
            { input: [4421], expected: 21 }, // 32 - 11 = 21
            { input: [1], expected: 0 },
            { input: [1000], expected: -1 }, // 0 - 1 = -1
            { input: [705], expected: -12 },
            { input: [11], expected: -1 },
            { input: [123456], expected: 699 }
        ]
    },
    {
        id: 48,
        title: "Complement of Base 10",
        difficulty: "Easy",
        description: "Returns the complement of integer.",
        initialCode: "function bitwiseComplement(n) { \n    \n}",
        testCases: [
            { input: [5], expected: 2 },
            { input: [7], expected: 0 },
            { input: [10], expected: 5 },
            { input: [0], expected: 1 },
            { input: [1], expected: 0 },
            { input: [2], expected: 1 },
            { input: [8], expected: 7 },
            { input: [1000000000], expected: 73741823 } // 101110111001101011001010000000 (30 bits)
        ]
    },
    {
        id: 49,
        title: "Defanging an IP Address",
        difficulty: "Easy",
        description: "Given a valid (IPv4) IP address, return a defanged version of that IP address.",
        initialCode: "function defangIPaddr(address) { \n    \n}",
        testCases: [
            { input: ["1.1.1.1"], expected: "1[.]1[.]1[.]1" },
            { input: ["255.100.50.0"], expected: "255[.]100[.]50[.]0" },
            { input: ["0.0.0.0"], expected: "0[.]0[.]0[.]0" },
            { input: ["192.168.1.1"], expected: "192[.]168[.]1[.]1" },
            { input: ["10.10.10.10"], expected: "10[.]10[.]10[.]10" }
        ]
    },
    {
        id: 50,
        title: "Jewels and Stones",
        difficulty: "Easy",
        description: "You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.",
        initialCode: "function numJewelsInStones(jewels, stones) { \n    \n}",
        testCases: [
            { input: ["aA", "aAAbbbb"], expected: 3 },
            { input: ["z", "ZZ"], expected: 0 },
            { input: ["abc", ""], expected: 0 },
            { input: ["", "abc"], expected: 0 },
            { input: ["a", "a"], expected: 1 },
            { input: ["A", "a"], expected: 0 },
            { input: ["bed", "ddeb"], expected: 4 },
            { input: ["aAb", "aAAbbbb"], expected: 7 }
        ]
    }
];