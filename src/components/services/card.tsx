import { useState } from 'react';

interface CardComponentProps {
    card: {
        image: {
            url: string;
            alt: string;
        };
        title: string;
        description: string;
    };
}
export const CardComponent: React.FC<CardComponentProps> = ({ card }) => {
    const [description, setDescription] = useState<boolean>(false);

    const handleClickOpenMenu = () => {
        setDescription(!description);
    };

    return (
        <div className="services__card">
            <div className="services__header">
                <div className="services__left">
                    <img
                        src={card.image.url}
                        alt={card.image.alt}
                        className="services__icon"
                    />
                    <p className="services__title">{card.title}</p>
                </div>

                <button
                    onClick={handleClickOpenMenu}
                    className="services__button"
                >
                    <img
                        src={
                            description
                                ? './image/close-card.svg'
                                : './image/open-card.svg'
                        }
                        alt="open"
                    />
                </button>
            </div>
            {description && (
                <p className="services__description">{card.description}</p>
            )}
        </div>
    );
};
