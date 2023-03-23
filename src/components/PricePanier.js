import { useSelector } from "react-redux"

function PricePanier(){
    const articles = useSelector((state)=> state.panier)
    const total =articles.reduce((somme, currentItem)=> somme + parseInt(currentItem.total),0)
    return(
        <>
            <p>
                Prix Total :<span style={{color:total>= 1000 && "green"}}>{total}</span>
            </p>
            <p>{total >= 1000 && <span>Remise 2%</span>}</p>
        </>
    )
}
export default PricePanier