/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if(i == nums.length){return 1}
  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length == 1){return words[0].length}
  return Math.max(words[0].length, longest(words.splice(1)))
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index=0, result="") {
  if(index >= str.length){return result}
  result += str[index]
  return everyOther(str, index+2, result)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length <= 1){return true}
  if(str[0] != str[str.length - 1]){return false}
  return isPalindrome(str.slice(1, -1))
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index=0) {
  if(index >= arr.length){return -1}
  if(val == arr[index]){return index}
  return findIndex(arr, val, index+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length <= 1){return str}
  return str.slice(-1) + revString(str.slice(0, -1))
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  if(left > right){return -1}
  let mid = Math.floor((left + right)/2)
  if(arr[mid] == val){return mid}
  if(arr[mid] > val){
    return binarySearch(arr, val, left, mid - 1)
  }else{
    return binarySearch(arr, val, mid + 1, right)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
