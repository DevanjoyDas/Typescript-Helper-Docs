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