export interface TitlePropTypes {
    title: string,
    bgColor: string,
    subtitle:string | number,
}

const Title = (props: TitlePropTypes) => {
    const { title,bgColor,subtitle} = props;
    return (
        <div style={{ backgroundColor: bgColor }}>
            {title}
            <br />
            {subtitle}
        </div>
    )
}

export default Title