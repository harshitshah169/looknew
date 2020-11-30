import './App.css';
import HomePage from './components/HomePage';
import MansClothingPage from './components/MansClothingPage'
import MansShoesPage from './components/MansShoesPage'
import MansAccessoriesPage from './components/MansAccessoriesPage'
import WomansClothingPage from './components/WomansClothingPage'
import WomansShoesPage from './components/WomansShoesPage'
import WomansAccessoriesPage from './components/WomansAccessoriesPage'
import PageNotFound from './components/PageNotFound'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UploadImages from './components/UploadImages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/mans-clothing-page" exact component={MansClothingPage} />
        <Route path="/mans-shoes-page" exact component={MansShoesPage} />
        <Route path="/mans-accessories-page" exact component={MansAccessoriesPage} />
        <Route path="/womans-clothing-page" exact component={WomansClothingPage} />
        <Route path="/womans-shoes-page" exact component={WomansShoesPage} />
        <Route path="/womans-accessories-page" exact component={WomansAccessoriesPage} />
        <Route path="/upload-images" exact component={UploadImages} />
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;

/*HOW TO DEPLOY SITE TO FIREBASE
https://blog.logrocket.com/8-ways-to-deploy-a-react-app-for-free/
*/
