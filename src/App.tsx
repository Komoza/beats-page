import { CharacteristicsComponent } from './components/characteristics/characteristics';
import { HeaderComponent } from './components/header/header';
import { MainComponent } from './components/main/main';
import { PaymentComponent } from './components/payment/payment';
import { ProductComponents } from './components/product/product';
import { PromoComponent } from './components/promo/promo';
import { ReviewsComponent } from './components/reviews/reviews';
import { TrustpilotComponents } from './components/reviews/trustpilot';
import { SaleTimerComponent } from './components/sale-timer/sale-timer';
import { ServicesComponent } from './components/services/services';
import './global.style.scss';

function App() {
    return (
        <div className="container">
            <div className="wrapper">
                <PromoComponent />
                <HeaderComponent />
                <MainComponent />
                <TrustpilotComponents />
                <ProductComponents />
                <SaleTimerComponent />
                <PaymentComponent />
                <CharacteristicsComponent />
                <ServicesComponent />
                <ReviewsComponent />
            </div>
        </div>
    );
}

export default App;
