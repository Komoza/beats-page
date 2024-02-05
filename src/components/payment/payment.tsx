import './payment.scss';

export const PaymentComponent = () => {
    return (
        <section className="payment">
            <ul className="payment__list">
                <li className="payment__item">
                    <button className="payment__button">
                        <img
                            className="payment__logo"
                            src="/image/banks/visa.svg"
                            alt="visa"
                        />
                    </button>
                </li>

                <li className="payment__item">
                    <button className="payment__button">
                        <img
                            className="payment__logo"
                            src="/image/banks/mastercard.svg"
                            alt="mastercard"
                        />
                    </button>
                </li>

                <li className="payment__item">
                    <button className="payment__button">
                        <img
                            className="payment__logo"
                            src="/image/banks/samsung-pay.svg"
                            alt="samsung-pay"
                        />
                    </button>
                </li>

                <li className="payment__item">
                    <button className="payment__button">
                        <img
                            className="payment__logo"
                            src="/image/banks/apple-pay.svg"
                            alt="apple-pay"
                        />
                    </button>
                </li>

                <li className="payment__item">
                    <button className="payment__button">
                        <img
                            className="payment__logo"
                            src="/image/banks/google-pay.svg"
                            alt="google-pay"
                        />
                    </button>
                </li>
            </ul>
        </section>
    );
};
