export interface PropTypes {
    
    userArray?: Array<string> | string[],    

    otherUserArray: Array<{
        userName: string,
        userLastName: string}>,
    
    userObj: {
        userName: string,
        userLastName: string,
    },
}


const ArrayObjects = (props: PropTypes) => {
    return (
        <h1>
            {props.userObj.userName}
            -
            {props.userObj.userLastName}

            {props.userArray?.map((item,index:number) => {
                return (
                    <div key={index}>
                        {item.toUpperCase()}
        </div>
    )
            })}
            
            {props.otherUserArray?.map((item,index:number) => {
                return (
                    <div key={index}>
                        {item.userName.toLocaleUpperCase()}{" "}
                        {item.userLastName.toLocaleUpperCase()}

        </div>
    )
})}


        </h1>
    )
}

export default ArrayObjects;