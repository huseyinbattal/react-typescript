export interface PropTypes{
    userArray?:Array<string> | number[],
    userObj: {
        userName: string,
        userLastName:string,
        },
}


const ArrayObjects=(props:PropTypes)=> {
  return (
      <div>
          {props.userObj.userName}
       -
          {props.userObj.userLastName}
      </div>
  )
}

export default ArrayObjects