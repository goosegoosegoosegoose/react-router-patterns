import './App.css';
import React, {useState} from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom"
import ColorList from './ColorList';
import ColorPage from './ColorPage';
import ColorForm from './ColorForm';

function App() {
  const [colors, setColors] = useState(["red", "green", "blue"])

  const addColor = (color) => {
    setColors([...colors, color])
    console.log(colors);
  }

  return (
    <div className="center">
      <Switch>
        <Route exact path="/colors">
          <div className="black">
            <h4><b>Welcome to the color factory.</b></h4>
            <Link to="/colors/add">Add a color</Link>
          </div>
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/add">
          <ColorForm addColor={addColor} />
        </Route>
        <Route path="/colors/:color">
          <ColorPage />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
