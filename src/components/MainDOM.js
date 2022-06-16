import ItemCount from "./ItemCount";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
const MainDOM = () => {
    return(
    <main>
        <ItemCount inicio={1} stock={15} />
        <ItemListContainer/>
        <ItemDetailContainer/>
    </main>
    )};

export default MainDOM;