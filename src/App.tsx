import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";
import User from "./features/user/User";

function App() {
    return (
        <div className="App">
            <CakeView />
            <IceCreamView />
            <User />
        </div>
    );
}

export default App;
