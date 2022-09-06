

const HelloWorld = (props:{text:string,isActive:boolean,number:number,onClick:()=>void}) => {
  return (
    <div onClick={props.onClick}>
      <br/>
      {props.number}
      <br/>
      {props.text}
      <br/>
      {JSON.stringify(props.isActive)}
<br/>
          Hello World
      </div>
  )
}

export default HelloWorld