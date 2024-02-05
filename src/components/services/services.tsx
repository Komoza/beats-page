import { dataServices } from '../../data';
import { CardComponent } from './card';
import './services.scss';

export const ServicesComponent = () => {
    return (
        <section className="services">
            {dataServices.map((item, idx) => (
                <CardComponent key={idx} card={item} />
            ))}
        </section>
    );
};
