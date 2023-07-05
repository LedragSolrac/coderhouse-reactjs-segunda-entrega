import "./App.css"
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js/ItemDetailContainer";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer />}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
            {/* <div className="block">
            </div>
            <ItemListContainer greeting={"Bienvenidos!"}/>
            <ItemDetailContainer/> */}
        </div>

    )
}

export default App;