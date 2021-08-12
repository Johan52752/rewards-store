import './App.css';
import {Route, Switch} from "react-router-dom"
import {Home} from "./pages/Home/Home"
import {AddTokens} from "./pages/AddTokens/AddTokens"
import {useSelector} from "react-redux"
import {History} from "./pages/History/History"
import {useEffect} from "react"
import {getUsers,getProducts} from "./actions/actions"
import {useDispatch} from "react-redux"

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getUsers())
    dispatch(getProducts())

  },[])
    const state=useSelector((state)=>state)
    console.log(state)
  return (
    <div className="App">
      {
        state?<Switch>
                <Route exact path="/rewards-store/" component={Home}/>
                <Route exact path="/rewards-store/add-tokens" component={AddTokens}/>
                <Route exact path="/rewards-store/redeem-history" component={History}/>
              </Switch>
              :null
      }
      
    </div>
  );
}

export default App;
