const express = require("express");
const app = express();
const port = 3000;

function calculateSum(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function revStr(value) {
  var strArr = value.split("");
  console.log(strArr);
  var revString = "";
  for (var i = 0; i < strArr.length; i++) {
    revString += strArr[strArr.length - 1 - i];
  }
  console.log(revString);
  return revString;
}

function isPalindrome(req, res) {
  var value = req.query.value;
  var revValue = revStr(value);
  if (revValue === value) {
    res.send(value + " It is Palindrome");
  } else {
    res.send(value + " It is not Palindrome");
  }
}

function handleFirstRequest(req, res) {
  var calulateSum = calculateSum(100);
  var answer = "The caluclation results to " + calulateSum;
  res.send(answer);
}

function handleCounterSum(req, res) {
  var counter = req.query.counter;
  var ans = calculateSum(counter);
  res.send("The answer to " + counter + " sum is " + ans);
}

app.get("/", handleFirstRequest);

app.get("/palindrome", isPalindrome);

app.get("/counter", handleCounterSum);

function handleStart() {
  console.log("App listening on port " + port);
}

app.listen(port, handleStart);
