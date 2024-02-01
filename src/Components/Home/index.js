import HeroBanner from '../HeroBanner';
import ProductList from '../ProductList';
import './home.css'
const Home = (props) => {
    const { productData, addToCart, removeCart } = props
    return (
        <section className=" py-5">
            <div className="container">
                <div className="row">
                    <HeroBanner />
                    <ProductList productData={productData} addToCart={addToCart} removeCart={removeCart} />
                </div>
            </div>
        </section>
    )
}

export default Home;