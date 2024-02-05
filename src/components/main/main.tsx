import './main.scss';

export const MainComponent = () => {
    return (
        <main className="main">
            <img
                className="main__bg-img"
                src="./image/main-bg.png"
                alt="background"
            />

            <h1 className="main__title">Beats Studio Buds +</h1>
            <p className="main__subtitle">Powerful Sound. Perfect Fit</p>
            <div className="main__price price">
                <p className="price__old">£150</p>
                <p className="price__new">£5</p>
            </div>

            <div className="main__qualities qualities">
                <div className="qualities__card">
                    <img
                        src="./image/battery.svg"
                        alt="battery"
                        className="qualities__icon"
                    />
                    <p className="qualities__text">
                        Up to 1.6x MoreActive Noise Cancelling
                    </p>
                </div>

                <div className="qualities__card">
                    <img
                        src="./image/heartrate.svg"
                        alt="battery"
                        className="qualities__icon"
                    />
                    <p className="qualities__text">
                        Up to 36 Hours of Listening Time with Charging Case
                    </p>
                </div>

                <div className="qualities__card">
                    <img
                        src="./image/mic.svg"
                        alt="battery"
                        className="qualities__icon"
                    />
                    <p className="qualities__text">
                        3x Larger Mics for Crisp, Clear Calls
                    </p>
                </div>
            </div>
        </main>
    );
};
