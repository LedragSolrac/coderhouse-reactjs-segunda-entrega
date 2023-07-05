import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const  { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error);
            })
    }, [itemId])

    return(
        <div className="columns">
            <div className="column is-4"/>
            <div className="column is-4">
                <ItemDetail {...product} />
            </div>
            <div className="column is-4"/>
        </div>
    )
}

export default ItemDetailContainer;