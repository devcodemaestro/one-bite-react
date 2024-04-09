const a = true;

switch (typeof a) {
  case "boolean": {
    console.log("boolean");
    break;
  }
  case "string": {
    console.log("string");
    break;
  }
  case "number": {
    console.log("number");
    break;
  }
  case "undefined": {
    console.log("undefined");
    break;
  }
  case "object": {
    console.log("object");
    break;
  }
  case "function": {
    console.log("function");
    break;
  }
}
