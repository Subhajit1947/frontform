import Form from "./component/Form";
import Table from "./component/Table";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/" element={<Table/>}/>
      </Routes>
      
    </BrowserRouter> 
    
  );
}

export default App;
