

type UserDetailsPropsValidation = {
    name : string,
    age? : number
}

const Card = ({name,age} : UserDetailsPropsValidation) => {  
  return (
    <div>
        <div>Name : {name}</div>
        {
            age? <div>Age : {age}</div> : <div>No age Given</div> 
        }
    </div>
  )
}
// OR 
// const Card = ({name,age} : {name : string , age? : number}) => {  
//   return (
//     <div>
//         <div>Name : {name}</div>
//         {
//             age? <div>Age : {age}</div> : <div>No age Given</div> 
//         }
//     </div>
//   )
// }

export default Card