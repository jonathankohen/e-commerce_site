import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';

function App() {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path="/" component={Home} exact />
                    <Route path="/product/:id" component={SingleProduct} />
                    <Route path="/cart/:id?" component={Cart} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
