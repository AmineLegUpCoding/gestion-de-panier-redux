export function addPanierAction(newArticle){
    return({
        type:"AJOUTER_ARTICLE",
        payload:newArticle
    })
}

export function increasePanierAction(idArticle){
    return({
        type:"INCREASE_ARTICLE",
        payload:idArticle
    })
}

export function decreasePanierAction(idArticle){
    return({
        type:"DECREASE_ARTICLE",
        payload:idArticle
    })
}

export function deletePanierAction(idArticle){
    return({
        type:"DELETE_ARTICLE",
        payload:idArticle
    })
}

export function clearPanierAction(){
    return({
        type:"CLEAR_ARTICLE"
    })
}