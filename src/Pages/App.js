import Titles from '../Atoms/Titles';
import SearchInput from '../Atoms/SearchInput';
import Logo from '../Atoms/Logo';
import IconMenu from '../Atoms/IconMenu';


function App() {
  return (
    <div className="App">
      <Logo />
      <Titles text="Hola mundo cruel!!!!!" />
      <SearchInput placeholderText="Search and find" />
      <IconMenu name="home"/>
    </div>
  );
}

export default App;
