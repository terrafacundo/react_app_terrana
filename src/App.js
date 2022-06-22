import MainDOM from "./components/MainDOM";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
const App = () =>{ 
	return(
		<BrowserRouter>
			<NavBar/>
			<Routes>
				<Route path='/' element={<ItemListContainer/>}/>
				<Route path='/detail/:id' element={<ItemDetailContainer/>}/>
			</Routes>
		</BrowserRouter>
)};

export default App