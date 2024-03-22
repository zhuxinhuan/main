import './index.less'
import { contentImg } from "@/assets/constant"
import { useEffect, useState } from "react"

function Title(props: { id: number }) {
    const id: number = props.id
    const [name, setName] = useState<string | null>()
    useEffect(() => {
        contentImg.find((item) => {
            if (item.id == id) { setName(item.name) }
        })
    }, [id])
    return (
        <>
            {
                name &&
                <div className="title-box">
                    <span className="title">{name}</span>
                </div>

            }
        </>

    )
}

export default Title
