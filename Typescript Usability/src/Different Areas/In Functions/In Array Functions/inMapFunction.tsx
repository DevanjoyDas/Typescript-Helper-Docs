//  Whenever you are mapping through an array then it's better to check the type of the element (Type Annotation) 

//  1. In array of objects 

                    const employees = [
                        {
                            name : "Employee1",
                            age : 32
                         },
                         {
                            name : "Employee2",
                            age : 45
                         }
                    ]
                    type EmployeeObject = {          
                        name : string,
                        age : number
                    }

                    // Or you can use interface
                    // interface EmployeeObject{
                    //     name : string,
                    //     age : number
                    // }

                    employees.map((singleEmployee : EmployeeObject)=>{
                            return (
                                <div>
                                    <div>Name : {singleEmployee.name}</div>
                                    <div>Age : {singleEmployee.age}</div>
                                </div>
                            )
                    })


// 2. In array of a Primitives type (string, number etc)

                    const nameOfEmployees = ["Name1" , "Name2" , "Name3"];
                    
                    nameOfEmployees.map((name : string , index : number)=>{
                        return (
                            <div>
                                <div>Name : {name} , Index : {index}</div>
                            </div>
                        )
                    })
