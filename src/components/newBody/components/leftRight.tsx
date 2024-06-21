/* eslint-disable @typescript-eslint/no-explicit-any */
import "./common.less";
import Title from "./title";

function LeftRight(props: { title: string, desc: string, img: string, rtl?: boolean }) {
    const { title, desc, img, rtl } = props;
    return (
        <div className='lr lr-600' >
            {
                !rtl ?
                    <>
                        <div className="lr-left">
                            <Title text={title}></Title>
                            <span className="lr-left-desc">{desc}</span>
                        </div>
                        <div className="lr-right">
                            <img src={img} alt="" />
                        </div>
                    </>
                    :
                    <>
                        <div className="lr-right">
                            <img src={img} alt="" />
                        </div>
                        <div className="lr-left">
                            <Title text={title}></Title>
                            <span className="lr-left-desc">{desc}</span>
                        </div>
                    </>
            }

        </div>
    )
}

export default LeftRight
