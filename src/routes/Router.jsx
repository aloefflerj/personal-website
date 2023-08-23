import { Route, Routes } from "react-router-dom";
import { CodePage } from "../pages/categories/CodePage";
import { Home } from "../pages/Home";


export function Router() {
    return (
        
        <Routes>
            <Route path='/'>
                <Route path='' element={<Home />}/>
                <Route path='code' element={<CodePage />}/>
                <Route path='*' element={<h1>not found</h1>} />
            </Route>
        </Routes>
    )
}