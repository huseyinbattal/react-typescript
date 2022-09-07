export interface PropTypes{
onClick:(str:string)=>void
}


const TestClick = (props:PropTypes) => {
    return (
        <div onClick={() => {
            props.onClick("test")
        }}>
            Test Click
        </div>
    )
}

export default TestClick