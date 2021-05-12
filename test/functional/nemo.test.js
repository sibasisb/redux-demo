
// describe('@firstTest@', function () {
//   it('should load a website', async function () {
//     await this.nemo.driver.get(this.nemo.data.baseUrl);
//   });
// });

// describe("Array",function(){
//   describe("#indexOf",function(){
//     it('should return -1 when value is not present in array',function(){
//       assert([1,2,3].indexOf(4),-1);
//     });
//   });
// });

let rootContainer=null;

// beforeEach(()=>{
//   rootContainer=document.createElement("div");
//   document.body.appendChild(rootContainer);
// });

// afterEach(()=>{
//   document.body.removeChild(rootContainer);
//   rootContainer=null;
// })

describe('@App component testing@',()=>{
  
  beforeEach(async function(){
    await this.nemo.driver.get(this.nemo.data.baseUrl)
  });
  
  it('#should say Testing',async function(){
    await this.nemo.view._find('#root h1')
    await this.nemo.view._waitVisible('#heading')
  });
})