import { useState } from 'react';
import { PhotosComponents } from './photos/photos';
import './product.scss';

export const ProductComponents = () => {
    const [activeColor, setActiveColor] = useState<string>('grey');

    const handleClickColor = (color: string) => {
        switch (color) {
            case 'grey':
                setActiveColor('grey');
                break;

            case 'black':
                setActiveColor('black');
                break;

            case 'pink':
                setActiveColor('pink');
                break;

            case 'white':
                setActiveColor('white');
                break;

            default:
                break;
        }
    };
    return (
        <section className="product">
            <PhotosComponents currentColor={activeColor} />

            <h2 className="product__name">Beats Studio Buds + </h2>
            <p className="product__description">
                True Wireless Noise Cancelling Earbuds
            </p>

            <div className="product__price">
                <p className="product__price--old">£150</p>
                <p className="product__price--new">£3</p>
                <p className="product__price--sale">90% OFF</p>
            </div>

            <div className="product__colors colors">
                <p className="colors__text">Color:</p>

                <div className="colors__wrapper">
                    <div
                        className={`colors__color ${
                            activeColor === 'grey' && 'colors__color--active'
                        }`}
                        onClick={() => handleClickColor('grey')}
                    >
                        <div className="colors__color--grey"></div>
                    </div>
                    <div
                        className={`colors__color ${
                            activeColor === 'black' && 'colors__color--active'
                        }`}
                        onClick={() => handleClickColor('black')}
                    >
                        <div className="colors__color--black"></div>
                    </div>
                    <div
                        className={`colors__color ${
                            activeColor === 'pink' && 'colors__color--active'
                        }`}
                        onClick={() => handleClickColor('pink')}
                    >
                        <div className="colors__color--pink"></div>
                    </div>
                    <div
                        className={`colors__color ${
                            activeColor === 'white' && 'colors__color--active'
                        }`}
                        onClick={() => handleClickColor('white')}
                    >
                        <div className="colors__color--white"></div>
                    </div>
                </div>
            </div>

            <button className="product__buy">Buy now</button>
        </section>
    );
};
