import { Alert } from './components/Alert';
import { Header } from './components/Header';
import { MainContainer } from './components/MainContainer';

function MainPageApp(){
    return(
        <div>
        <Alert />
        <Header />

        <MainContainer />

        </div>
    )
}

export default MainPageApp;