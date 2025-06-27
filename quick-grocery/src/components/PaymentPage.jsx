import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/PaymentPage.css";

export default function PaymentPage({ total, onBack, onPay }) {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const paymentOptions = [
    { id: "card", label: "Credit/Debit Card" },
    { id: "upi", label: "UPI" },
    { id: "cod", label: "Cash on Delivery" },
    { id: "wallet", label: "Wallet" },
  ];

  const formatCardNumber = (num) =>
    num
      .replace(/\s?/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();

  return (
    <motion.div
      className="payment-container"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <motion.div
        className="debit-card-ui"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
      >
        <div className="card-icons">
          <div className="chip"></div>
          <div className="card-logo">VISA</div>
          <svg className="contactless" viewBox="0 0 20 20">
            <path
              d="M2 10c4-4 12-4 16 0M5 10c2-2 6-2 8 0"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
        <div className="card-number">
          {formatCardNumber(cardNumber.padEnd(16, "•"))}
        </div>
        <div className="card-details">
          <span className="card-label">Card Holder</span>
          <span className="card-label">Valid Thru</span>
        </div>
        <div className="card-details">
          <span className="card-value">{cardName || "YOUR NAME"}</span>
          <span className="card-value">{cardExpiry || "MM/YY"}</span>
        </div>
      </motion.div>

      <div className="payment-section">
        <h3>Choose Payment Method</h3>
        <div className="payment-options">
          {paymentOptions.map((opt) => (
            <label
              key={opt.id}
              className={`payment-option ${
                selectedMethod === opt.id ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="payment"
                value={opt.id}
                checked={selectedMethod === opt.id}
                onChange={() => setSelectedMethod(opt.id)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>


      {selectedMethod === "card" && (
        <div className="card-form">
          <div className="card-form-group">
            <span className="input-icon">💳</span>
            <input
              type="text"
              maxLength={16}
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(e.target.value.replace(/[^\d]/g, ""))
              }
            />
          </div>
          <div className="card-form-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              maxLength={20}
              placeholder="Card Holder Name"
              value={cardName}
              onChange={(e) => setCardName(e.target.value.toUpperCase())}
            />
          </div>
          <div className="card-form-group">
            <span className="input-icon">📅</span>
            <input
              type="text"
              maxLength={5}
              placeholder="MM/YY"
              value={cardExpiry}
              onChange={(e) =>
                setCardExpiry(
                  e.target.value
                    .replace(/[^\d/]/g, "")
                    .replace(/^(\d{2})(\d{1,2})$/, "$1/$2")
                    .slice(0, 5)
                )
              }
            />
          </div>
          <div className="card-form-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              maxLength={3}
              placeholder="CVV"
              value={cardCvv}
              onChange={(e) => setCardCvv(e.target.value.replace(/[^\d]/g, ""))}
            />
          </div>
        </div>
      )}

      {selectedMethod === "upi" && (
        <div className="upi-form">
          <div className="upi-form-group">
            <span className="input-icon">📱</span>
            <input
              type="text"
              placeholder="Enter UPI ID (e.g., username@paytm)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value.toLowerCase())}
            />
          </div>
          <div className="upi-info">
            <p>💡 Enter your UPI ID to proceed with payment</p>
            <p>Supported UPI apps: Google Pay, PhonePe, Paytm, BHIM</p>
          </div>
        </div>
      )}

      <div className="payment-summary">
        <div>
          <span>Order Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>Grand Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="payment-actions">
        <button className="payment-back" onClick={onBack}>
          Back
        </button>
        <motion.button
          className="payment-pay"
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            
            if (selectedMethod === "card") {
              if (
                cardNumber.length === 16 &&
                cardName &&
                cardExpiry.length === 5 &&
                cardCvv.length === 3
              ) {
                onPay(total.toFixed(2), selectedMethod);
              } else {
                alert("Please fill all card details correctly.");
              }
            } else if (selectedMethod === "upi") {
              if (upiId && upiId.includes("@") && upiId.length > 5) {
                onPay(total.toFixed(2), selectedMethod);
              } else {
                alert("Please enter a valid UPI ID.");
              }
            } else {
              // For COD and Wallet, no validation needed
              onPay(total.toFixed(2), selectedMethod);
            }
          }}
        >
          Pay ${total.toFixed(2)}
        </motion.button>
      </div>
    </motion.div>
  );
}
