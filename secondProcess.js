var secondObj = {
  method: "GET",
};

var body = {};

function logResponseBody(jsonBody) {
  console.log(jsonBody);
}
function callbackFn(result) {
  result.json().then(logResponseBody);
}
fetch("http://localhost:3000/counter?counter=10", secondObj)
  .then(callbackFn)
  .catch(callbackFn);
