import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <div className="card block has-background-grey-light">
        <header className="card-header">
            <h2 className="card-header-title">
                {name}
            </h2>
        </header>
        <div className="card-image is-flex is-justify-content-center">
            <figure className="image is-128x128">
                <img src={img} alt={name}/>
            </figure>
        </div>
        <section className="card-content">
            <p>
                Categoria: {category}
            </p>
            <p>
                Descripción: {description}
            </p>
            <p>
                Precio: ${price}
            </p>
        </section>
        <footer className="card-footer is-flex is-justify-content-center">
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
        </footer>
    </div>

    )
}

export default ItemDetail;