export interface TitlePropTypes {
    title: string
    bgColor: string
}

const Title = (props: TitlePropTypes) => {
    const { title,bgColor} = props;
    return (
        <div style={{ backgroundColor: bgColor }}>
            {title}
        </div>
    )
}

export default Title