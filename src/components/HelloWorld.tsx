

const HelloWorld = (props:{text:string,isActive:boolean,number:number,onClick:()=>void}) => {
  return (
      <div>
          {props.isActive}

          Hello World
      </div>
  )
}

export default HelloWorld