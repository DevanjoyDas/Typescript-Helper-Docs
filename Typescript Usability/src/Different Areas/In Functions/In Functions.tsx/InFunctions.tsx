// 1. Primitive type of Parameters and return type (along with default Values)

        function addNumberAndLogStringValue(number1 : number = 1 , number2 : number = 2 , name:string = "Devanjoy") : number{
                const sumValue = number1 + number2;
                console.log(name);
                return sumValue
        }

        const ans = addNumberAndLogStringValue(5,5,"Devanjoy")

// 2. Passing object as Parameter
// 2.1 using type aliases

        type details = {
            name : string,
            age : number,
            departments : string[]
        }

        const getDetailsAndReturnDepartmentList = (employee : details) : {[key : string ] : string}[] =>  {
            console.log(employee.name);
            console.log(employee.age) ;
            const departmentArray = (employee.departments).map((eachDepartment : string , index : number)=>{
                return (
                    {
                        [`department${index}`] : eachDepartment
                    }
                )
            })
            return departmentArray

        }
        const departmentArray = getDetailsAndReturnDepartmentList({name : "Devanjoy" , age : 20 , departments : ["Web" , "App"]})

// 2.2 Directly Speicifying the Object type


        const getDetailsAndReturnDepartmentList2 = (employee : {name : string, age : number , departments : string[]}) : {[key : string ] : string}[] =>  {
            console.log(employee.name);
            console.log(employee.age) ;
            const departmentArray = (employee.departments).map((eachDepartment : string , index : number)=>{
                return (
                    {
                        [`department${index}`] : eachDepartment
                    }
                )
            })
            return departmentArray
        }
        const departmentArray2 = getDetailsAndReturnDepartmentList2({name : "Devanjoy" , age : 20 , departments : ["Web" , "App"]})


// 2.3 Destructuring the Parameter object for better readability

        const getDetailsAndReturnDepartmentList3 = ({name , age , departments} : {name : string, age : number , departments : string[]}) : {[key : string ] : string}[] =>  {
            console.log(name);
            console.log(age) ;
            const departmentArray = (departments).map((eachDepartment : string , index : number)=>{
                return (
                    {
                        [`department${index}`] : eachDepartment
                    }
                )
            })
            return departmentArray
        }
        const departmentArray3 = getDetailsAndReturnDepartmentList3({name : "Devanjoy" , age : 20 , departments : ["Web" , "App"]})

// 3. Dealing with Optional Values  (?)
// Sometimes the parameters may be optional , for example a formed filled by a user in which he/she did not filled phoneNumber, so phoneNumber is optional      
// 3.1 Destructuring and using optional (?) (Similarly (?) can be used with other ways as mentioned in Point 2)

            const getDetailsOfUsers = ({name , phoneNumber} : {name : string, phoneNumber? : number}) =>{
                    if(phoneNumber){
                        console.log(phoneNumber)
                    }
                    console.log(name)
            }
            getDetailsOfUsers({name : "Devanjoy" , phoneNumber : 1234567890})
            getDetailsOfUsers({name : "Devanjoy"})

// 4. In event Handlers , it is recommonded to do type check for the event passed (e: React.MouseEvent<HTMLImageElement, MouseEvent>)

            const handleButtonClick = (event : React.MouseEvent<HTMLImageElement, MouseEvent>) =>{
                console.log(event);
            }