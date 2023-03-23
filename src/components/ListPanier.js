import { useDispatch, useSelector } from "react-redux"
import { decreasePanierAction, deletePanierAction, increasePanierAction } from "../redux/actions/panierActions"
function ListPanier(){
    const articles = useSelector((state)=> state.panier)
    const dispatch = useDispatch()
    return(
        <>                   
            <table>
                <thead>
                    <tr>
                        <th>Id</th> 
                        <th>Libellé</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                        <th>Disponible</th>
                    </tr>                                    
                </thead>
                <tbody>
                    {articles.map(function (item){
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.libelle}</td>
                        <td><span style={{color:item.quantite == item.disponible ? "red" : "black"}}>{item.quantite}</span></td>
                        <td>{item.prix}</td>
                        <td>{item.disponible}</td>
                        <td> <button onClick={()=> dispatch(increasePanierAction(item.id))}> + </button></td>
                        <td><button onClick={()=> dispatch(decreasePanierAction(item.id))}> - </button></td>
                        <td><button onClick={()=> dispatch(deletePanierAction(item.id))}> X </button></td>
                    </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ListPanier