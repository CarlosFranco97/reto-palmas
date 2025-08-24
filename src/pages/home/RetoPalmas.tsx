import Layout from '../../layouts/Layout';
import Clothes from './components/Clothes';
import Main from './components/Main';
import Products from './components/Products';
import Services from './components/Services';
import SocialMedia from './components/SocialMedia';

const RetoPalmas = () => {
    return (
        <Layout>
            <Main />
            <Clothes />
            <Products />
            <Services />
            <SocialMedia />
        </Layout>
    )
}

export default RetoPalmas; 