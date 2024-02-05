import './characteristics.scss';

export const CharacteristicsComponent = () => {
    return (
        <section className="characteristic">
            <div className="characteristic__trial-music">
                <div className="characteristic__title-wrap">
                    <img
                        className="characteristic__apple-music-logo"
                        src="./image/apple-music.svg"
                        alt="apple music logo"
                    />
                    <p className="characteristic__trial-music-text">
                        Free Apple Music Trial
                    </p>
                </div>
                <p className="characteristic__description">
                    Get 6 months of access to over 100 million songs, ad-free
                </p>
            </div>

            <div className="characteristic__apple-store">
                <div className="characteristic__title-wrap">
                    <img
                        className="characteristic__apple-store-logo"
                        src="./image/apple-store.svg"
                        alt="apple store logo"
                    />
                    <p className="characteristic__apple-store-text">
                        In-Store Pickup
                    </p>
                </div>
                <p className="characteristic__description">
                    Pick up your Beats at an Apple Store near you
                </p>
            </div>

            <div className="characteristic__properties properties">
                <p className="properties__title">Earbuds</p>

                <div className="properties__wrap">
                    <div className="properties__str">
                        <p className="properties__key">Height:</p>
                        <p className="properties__value">0.59 in / 1.5 cm</p>
                    </div>

                    <div className="properties__str">
                        <p className="properties__key">Weight:</p>
                        <p className="properties__value">5 g</p>
                    </div>
                </div>

                <p className="properties__title">Case</p>

                <div className="properties__wrap">
                    <div className="properties__str">
                        <p className="properties__key">Height:</p>
                        <p className="properties__value">1 in / 2.55 cm</p>
                    </div>

                    <div className="properties__str">
                        <p className="properties__key">Weight:</p>
                        <p className="properties__value">48 g</p>
                    </div>

                    <div className="properties__str">
                        <p className="properties__key">Length:</p>
                        <p className="properties__value">2.83 in / 7.2 cm</p>
                    </div>

                    <div className="properties__str">
                        <p className="properties__key">Width:</p>
                        <p className="properties__value">2 in / 5.1 cm</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
