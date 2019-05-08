import React, {useState} from 'react';
import './App.css';
import Menu from './components/Menu';

function App() {
  let [data, setData] = useState(
    [
      {
        "name": "Baked Salmon",
        "ingredients": [
          { "name" : "Salmon" , "amount" : 1 , "measurement" : "l lb" },
          { "name" : "Pine Nuts" , "amount" : 1 , "measurement" : "cup" },
          { "name" : "Butter Lettuce" , "amount" : 2 , "measurement" : "cups" },
          { "name" : "Yellow Squash" , "amount" : 1 , "measurement" : "med" },
          { "name" : "Olive Oil" , "amount" : 0.5 , "measurement" : "cup" },
          { "name" : "Garlic" , "amount" : 3 , "measurement" : "cloves" }
        ],
        "steps" : [
          "Preheat the oven to 350 degrees.",
          "Spread the olive oil around a glass baking dish.",
          "Add the salmon, garlic, and pine nutes to the dish.",
          "Bake for 15 minutes.",
          "Add the yellow squash and put back in the oven for 30 mins.",
          "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
        ]
      },
    ]
  );
  return (
    <div className="App">
      <Menu title="Recipes" recipes={data}/>
    </div>
  );
}

export default App;
