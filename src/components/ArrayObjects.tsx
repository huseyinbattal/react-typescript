export interface PropTypes {
    userArray?: Array<string> | string[],
    userObj: {
        userName: string,
        userLastName: string,
    },
}


const ArrayObjects = (props: PropTypes) => {
    return (
        <div>
            {props.userObj.userName}
            -
            {props.userObj.userLastName}

            {props.userArray?.map((item,index:number) => {
                return (
                    <div key={index}>
                        {item}
        </div>
    )
})}


        </div>
    )
}

export default ArrayObjects;