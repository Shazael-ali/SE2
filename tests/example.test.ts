describe("Example Suite",()=>{
    beforeAll(() => {
        //just for if i have instanition of statup 
        // or if i have a connection to a database
        console.log("Runs once before all tests");
    });

    beforeEach(() => {
        console.log("Runs before each test ");
    });

    afterEach(() => {
        console.log("Runs after each test ");
    });

    afterAll(() => {
          // or if i have a unconnection to a database
        console.log("Runs once after all tests ");
    });

    it('first test', () => {
        console.log("first test ");
        
    })
    it('second test', () => {
        console.log(" second test");
        
    })
})