import { useState } from "react";
import img1 from "../../images/pricing/img1.webp";
import img2 from "../../images/pricing/img2.webp";
import img3 from "../../images/pricing/img3.webp";
import qrCodeImage from "../../images/qr-code.png";

const imgStyles = `grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0`;

const headingStyles = `clip-path-left group-hover:clip-path-right absolute bottom-[-1px] right-1/2 w-3/4 translate-x-1/2 bg-white py-5 text-lg font-bold text-red transition-all duration-500 group-hover:bg-red group-hover:text-white`;

function Cards() {
  const [showQRCode, setShowQRCode] = useState(false);

  const handlePurchaseClick = () => {
    setShowQRCode(true);
  };

  const handleCloseModal = () => {
    setShowQRCode(false);
  };

  return (
    <div className="relative z-10 grid gap-8 xl:grid-cols-2 2xl:grid-cols-3">
      {/* Card 01 */}
      <div className="mx-auto flex max-w-md flex-col shadow-lg">
        <div className="group relative overflow-hidden">
          <img src={img1} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Beginners</h4>
        </div>
        <div className="bg-white p-6">
          <h5 className="text-gray-800 text-2xl">
            ₹ <span className="text-4xl font-bold text-gray-600">1800</span> P/M
          </h5>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Free Hand</li>
            <li>Gym Fitness</li>
            <li>Weight Loss</li>
            <li>Personal Trainer</li>
            <li>Cycling</li>
          </ul>
          <button
            onClick={handlePurchaseClick}
            className="mt-4 rounded-md bg-red px-4 py-2 text-white hover:bg-opacity-80"
          >
            Purchase now
          </button>
        </div>
      </div>

      {/* Card 02 */}
      <div className="mx-auto flex max-w-md flex-col shadow-lg">
        <div className="group relative overflow-hidden">
          <img src={img2} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Basic</h4>
        </div>
        <div className="bg-white p-6">
          <h5 className="text-gray-800 text-2xl">
            ₹ <span className="text-4xl font-bold text-gray-600">7000</span>6/M
          </h5>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Free Hand</li>
            <li>Gym Fitness</li>
            <li>Weight Loss</li>
            <li>Personal Trainer</li>
            <li>Cycling</li>
          </ul>
          <button
            onClick={handlePurchaseClick}
            className="mt-4 rounded-md bg-red px-4 py-2 text-white hover:bg-opacity-80"
          >
            Purchase now
          </button>
        </div>
      </div>

      {/* Card 03 */}
      <div className="mx-auto flex max-w-md flex-col shadow-lg">
        <div className="group relative overflow-hidden">
          <img src={img3} alt="" className={imgStyles} />
          <h4 className={headingStyles}>Advance</h4>
        </div>
        <div className="bg-white p-6">
          <h5 className="text-gray-800 text-2xl">
            ₹ <span className="text-4xl font-bold text-gray-600">11000</span>{" "}
            1/Y
          </h5>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>Free Hand</li>
            <li>Gym Fitness</li>
            <li>Weight Loss</li>
            <li>Personal Trainer</li>
            <li>Cycling</li>
          </ul>
          <button
            onClick={handlePurchaseClick}
            className="mt-4 rounded-md bg-red px-4 py-2 text-white hover:bg-opacity-80"
          >
            Purchase now
          </button>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="bg-black absolute inset-0 bg-opacity-75"
            onClick={handleCloseModal} // Close on overlay click
          ></div>
          <div className="mx-auto max-w-md rounded-lg bg-white p-8">
            <img
              src={qrCodeImage}
              alt="QR Code"
              className="mx-auto mb-4 h-48 w-48"
            />
            <p className="text-center text-gray-600">
              Scan the QR code to complete your purchase
            </p>
            <button
              onClick={handleCloseModal}
              className="mt-4 rounded-md bg-red px-4 py-2 text-white hover:bg-opacity-80"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
