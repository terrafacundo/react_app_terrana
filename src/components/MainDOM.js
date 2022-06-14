import ItemCount from "./ItemCount";
import ItemListContainer from "./ItemListContainer";

const MainDOM = () => {
    return(
    <main>
        <ItemCount inicio={1} stock={15} />
        <ItemListContainer/>
    </main>
    )};

export default MainDOM;