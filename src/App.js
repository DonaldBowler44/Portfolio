import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import MainPageApp from './MainPageApp';
import MRApp from './MRApp';
import { ContactList } from './components/HomeSections/ContactList';

function App(){
    return(
        <Router>
            <Routes>
            <Route path='/Contacts' element={<ContactList />} />
            <Route path='/Home' element={<MainPageApp />} />
            <Route path='*' element={<MRApp />} />
            </Routes>
        </Router>
    )
}

export { App }