import './App.css';
import {Route, Switch} from "react-router-dom"
import {Home} from "./pages/Home/Home"
import {AddTokens} from "./pages/AddTokens/AddTokens"
import {useSelector} from "react-redux"
import {History} from "./pages/History/History"

function App() {
  const state=useSelector((state)=>state)
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/rewards-store" component={Home}/>
        <Route exact path="/rewards-store/add-tokens" component={AddTokens}/>
        <Route exact path="/rewards-store/redeem-history" component={History}/>
      </Switch>
    </div>
  );
}

export default App;
