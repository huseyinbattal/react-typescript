interface PropTypes{
    children:React.ReactNode 
}

const ParentComponent = (props:PropTypes) => {
    return (
        <div>
    {props.children}
        </div>
    )
}

export default ParentComponent;