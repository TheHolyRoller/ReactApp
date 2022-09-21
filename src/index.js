import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//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
//C:\Users\danie\wakeleyapp\src




import { Button } from "./components/Button";

//Create the function to be rendered here

function App() {

return(
<div className="App"> <Button>Buy Now</Button>
</div>

);

}



const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(<App />, root);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
