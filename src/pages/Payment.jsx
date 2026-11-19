import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { payeeName, upiId, upiPaymentLink } from "../Data/paymentDetails";
import "./Payment.css";

function Payment() {
  return (
    <section className="payment-page">
      <section className="payment-panel" aria-labelledby="payment-title">
        <div className="payment-copy">
          <p className="payment-eyebrow">UPI PAYMENT</p>
          <h1 id="payment-title">Make a payment</h1>
          <p className="payment-intro">
            Scan the QR code with any UPI app to pay {payeeName}.
          </p>

          <div className="payment-qr">
            <QRCodeSVG
              value={upiPaymentLink}
              size={256}
              level="M"
              marginSize={4}
              title={`UPI payment QR code for ${payeeName}`}
            />
          </div>

          <p className="payment-scan-hint">
            Scan to pay with any UPI app
          </p>

          <div className="payment-recipient">
            <span className="payment-recipient-label">Paying</span>
            <strong>{payeeName}</strong>
          </div>

          <div className="payment-upi-row">
            <span className="payment-recipient-label">UPI ID</span>
            <code>{upiId}</code>
          </div>

          <a className="payment-app-link" href={upiPaymentLink}>
            Open a UPI app
            <span aria-hidden="true">→</span>
          </a>

          <p className="payment-note">
            Enter or confirm the amount in your UPI app, and verify the
            recipient before completing payment.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Payment;
