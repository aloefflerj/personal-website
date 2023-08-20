import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";


export function Router() {
    return (
        
        <Routes>
            <Route path='/'>
                <Route path='' element={<Home />}/>
                <Route path='code' element={<h1>Code</h1>}/>
                <Route path='*' element={<h1>not found</h1>} />
            </Route>
        </Routes>
    )
}