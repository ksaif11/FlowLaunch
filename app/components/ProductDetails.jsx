export default function ProductDetailsModal({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="font-bold text-2xl text-center text-gray-600 mb-4 underline">{product.title}</h2>
        <img src={product.image} alt={product.title} className="h-64 w-full object-contain mb-4" />
        <p className="text-gray-600 mb-4"><span className="text-xl text-slate-950 underline">Description</span> : {product.description}</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">price : ${product.price}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
  }
  