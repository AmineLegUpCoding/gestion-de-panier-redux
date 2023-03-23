const initState = {
    panier:[
        {id:1, libelle:"MOUSE", quantite: 1, prix: 150, total:50, disponible:15}
    ],
    amount:0,
    total:0
}
function panierReducer(state=initState,action){
    switch (action.type){
        case "AJOUTER_ARTICLE":
            return {...state, panier: [...state.panier, action.payload]}
        case "INCREASE_ARTICLE":
            return {...state, panier:[...state.panier.map(function(item){
                if(item.id === action.payload && item.quantite < item.disponible){
                    console.log(item)
                    item.quantite = parseInt(item.quantite) + 1
                    item.total = parseInt(item.quantite) * parseInt(item.prix)
                    return item
                }
                return item
            })]}
        case "DECREASE_ARTICLE":
            return {...state, panier:[...state.panier.map(function(item){
                if(item.id === action.payload && item.quantite > 1){
                    item.quantite = parseInt(item.quantite) - 1                    
                    item.total = parseInt(item.quantite) * parseInt(item.prix)
                    return item
                }
                return item
            })]}
        case "DELETE_ARTICLE":
            return {...state, panier:[...state.panier.filter(function(item){
                return item.id !== action.payload
            })]}
        case "CLEAR_ARTICLE":
            return {...state, panier: []}
        default:
            return state
    }
}

export default panierReducer