export interface PropTypes{
onClick:()=>string
}


const TestClick = (props:PropTypes) => {
    return (
        <div onClick={() => {
            props.onClick()
        }}>
            Test Click
        </div>
    )
}

export default TestClick