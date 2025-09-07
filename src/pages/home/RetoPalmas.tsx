import MainLayout from '../../layouts/MainLayout';
import Clothes from './components/Clothes';
import Main from './components/Main';
import Products from './components/Products';
import Services from './components/Services';
import SocialMedia from './components/SocialMedia';

const RetoPalmas = () => {
    return (
        <MainLayout>
            <Main />
            <Clothes />
            <Products />
            <Services />
            <SocialMedia />
        </MainLayout>
    )
}

export default RetoPalmas; 