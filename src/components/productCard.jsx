
export default function ProductCard(props) {

    console.log(props)

    return(
        <div className= "bg-red-400 w-48 h-[280px]">
            <img src={props.image} />
            <h1>{props.name}</h1>
            <p>Price: {props.price}</p>
        </div>
    )
}
