// 1.  Write ! (exclamation) for specifying that this value can never be null or undefined

   1.1  // ReactDOM.createRoot(document.getElementById('root')!).render(
    //     <React.StrictMode>
    //       <App />
    //     </React.StrictMode>,
    //   )

   1.2  // if (someValue !== null && someValue !== undefined) {
    //     // TypeScript still considers someValue as possibly null or undefined here
    //     someValue.someMethod(); // Error: Object is possibly 'null' or 'undefined'
    //   }
    //   // Using the non-null assertion operator
    //   someValue!.someMethod();


// 2. In useState hook 
      // It is a good Practice to specify the type while declaring a state using useState hook for tackling error in future codes

      // Example 1
      // const [name , setName] = useState<string>("Devanjoy")

      // Example 2
      // const [listOfCars , setListOfCars] = useState<string[]>(["Car1","Car2"])


// 3. Using Services like Appwrite 
// Sometimes we fetch list of documents from a collection of a database , In services like appwrite each document (row) have the type "Models.Document" 

         // Example
         // const {departmentList} = getDepartmentListFromCollectionEmployee();
         // const departmentListArray = departmentList.documents.map((eachDepartment : Models.Document)=>{
         //       return (eachDepartment)
         // })

// 4. Using with Context API
// A general Example

            // export const INITIAL_USER = {
            //       id: "",
            //       name: "",
            //       username: "",
            //       email: "",
            //       imageUrl: "",
            //       bio: "",
            // };
            
            // const INITIAL_STATE = {
            //       user: INITIAL_USER,
            //       isLoading: false,
            //       isAuthenticated: false,
            //       setUser: () => {},
            //       setIsAuthenticated: () => {},
            //       checkAuthUser: async () => false as boolean,
            // };
            
            // export type UserType = {
            //       id: string;
            //       name: string;
            //       username: string;
            //       email: string;
            //       imageUrl: string;
            //       bio: string;
            //     };

            // type IContextType = {
            //       user: IUser;
            //       isLoading: boolean;
            //       setUser: React.Dispatch<React.SetStateAction<IUser>>;
            //       isAuthenticated: boolean;
            //       setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
            //       checkAuthUser: () => Promise<boolean>;
            // };
            // export function AuthProvider({ children }: { children: React.ReactNode }) { }

// 5. File Type in TS
            // function processFile(file: File) {
            //       // Your code here
            //   }