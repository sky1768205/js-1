


export default function SuccessAlert({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-green-600 text-white p-6 rounded-lg max-w-sm w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl"
        >
          ×
        </button>

        <h3 className="text-xl font-bold mb-2">Congratulations!</h3>
        <p className="text-sm mb-4">
          Your order has been successfully placed on the website. A manager will contact you shortly to confirm your order.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-green-700 hover:bg-green-800 py-2 rounded text-sm font-medium"
        >
          OK
        </button>
      </div>
    </div>
  );
}