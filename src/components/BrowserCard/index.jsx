import "./card.scss"
import { Image } from "minista"
// import { ReactComponent as SrcSVG } from "@/assets/icons/${takeSrc}"

let takeSrc = null

export default (props) => {
    // const { src } = props
    // takeSrc = src
    return (
        <article>
            <Image src={props.image} />
        </article>
    )
}