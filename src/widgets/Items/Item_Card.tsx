export default function Item_Card(image: string, text: string) {
    return (
        <div className="itm_card">
            <img src={image} width={240} height={240}></img>
            <p>{text}</p>
        </div>
    )
}