class Post1 {
    @processOne()
    @processTwo()
    qualquerFuncao() {}
  }
  
  function processOne() {
    console.log("processOne has run");
    return function (target : any, propertyKey : string, descriptor : PropertyDescriptor) {
      console.log("processOne has been called");
    }
  }
  
  function processTwo() {
    console.log("processTwo has run");
    return function (target: any, propertyKey : string, descriptor : PropertyDescriptor) {
      console.log("processTwo has been called");
    }
  }
  
  // processOne has run
  // processTwo has run
  // processTwo has been called
  // processOne has been called