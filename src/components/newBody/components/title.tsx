/* eslint-disable @typescript-eslint/no-explicit-any */
import "./common.less";

function Title(props: { text: string }) {
    const { text } = props
    return (
        <div className='c-title' >
            <span className="c-title-text">{text}</span>
            <span className='c-title-line' />
        </div>
    )
}

export default Title
