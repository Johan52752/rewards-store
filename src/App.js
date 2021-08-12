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
    console.log(Object.keys(state).length)
  return (
    <div className="App">
      {
        Object.keys(state).length>2?<Switch>
                <Route exact path="/rewards-store/" component={Home}/>
                <Route exact path="/rewards-store/add-tokens" component={AddTokens}/>
                <Route exact path="/rewards-store/redeem-history" component={History}/>
              </Switch>
              :""
      }
      
    </div>
  );
}

export default App;
