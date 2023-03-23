import {useState} from "react"
import { useDispatch } from "react-redux"
import { addPanierAction } from "../redux/actions/panierActions"
function AddPanier(){
    const emptyArticle = {
        id:1,
        libelle:"",
        quantite:0,
        prix:0,
        disponible:0
    }
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(emptyArticle)
    const dispatch = useDispatch()
    function onInputChange(e){
        let name = e.target.name
        let val = e.target.value
        let _article = {...article}
        _article[name]=val
        _article.total = parseInt(_article.prix) * parseInt(_article.quantite)
        setArticle(_article)
    }
    return (
        <>
            <input name="id" onChange={onInputChange} placeholder="Id"></input>
            <input name="libelle" onChange={onInputChange} placeholder="Libellé"></input>
            <input name="quantite" onChange={onInputChange} placeholder="Quantité"></input>
            <input name="prix" onChange={onInputChange} placeholder="Prix"></input>
            <input name="disponible" onChange={onInputChange} placeholder="Disponible"></input>
            <button onClick={()=>dispatch(addPanierAction(article))}>ADD</button>
        </>
    )
}

export default AddPanier