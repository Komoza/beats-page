import './reviews.scss';

export const TrustpilotComponents = () => {
    return (
        <section className="trustpilot">
            <p className="trustpilot__text">See our 437 reviews on</p>
            <a
                href="https://www.trustpilot.com/"
                target="blank"
                className="trustpilot__link"
            >
                <img
                    src="./image/trustpilot-logo.svg"
                    alt="trustpilot logo"
                    className="trustpilot__logo"
                />
            </a>
        </section>
    );
};
