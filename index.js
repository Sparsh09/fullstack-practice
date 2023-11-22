const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
let numberOfRequests = 0;

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
  console.log(counter);
  var ans = calculateSum(counter);
  res.send({ sum: ans });
}

function handleSum(req, res) {
  console.log(req.body);
  // var counter = req.headers.counter;
  var counter = req.body.counter;
  if (counter < 1000000) {
    console.log(counter);
    var ans = calculateSum(counter);
    res.send("The answer to " + counter + " sum is " + ans);
  } else {
    res.status(411).send("You have send a large number");
  }
}

// function middleware1(req, res, next) {
//   console.log(" from inside middleware " + req.headers.counter);
//   numberOfRequests += 1;
//   console.log("The number of requests made is " + numberOfRequests);
//   next();
// }

function handleNewCounter(req, res) {
  var counter = req.body.counters;

  var ans = {
    sum: calculateSum(counter),
    mul: calculateMul(counter),
  };

  res.status(200).send(ans);
}

function calculateMul(counter) {
  console.log(counter);
  var mul = 1;
  for (var i = 1; i <= counter; i++) {
    mul *= i;
  }
  console.log(mul);
  return mul;
}

function givePage(req, res) {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello From Title</title>
</head>
<body>
    <b>Hi There</b>
</body>
</html>`);
}

app.use(bodyParser.json());
// app.use(middleware1);

app.get("/", handleFirstRequest);

app.get("/palindrome", isPalindrome);

app.get("/counter", handleCounterSum);

app.post("/handleSum", handleCounterSum);

app.post("/handleSum1", handleSum);

app.post("/handleCounter", handleNewCounter);

app.get("/givePage", givePage);

function handleStart() {
  console.log("App listening on port " + port);
}

app.listen(port, handleStart);
