import { Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, dispatch } = useCart();
  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id,
    });
  };
  const handleIncrease = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };

  const handleDecrease = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cart.length > 0 ? (
        <div className="grid lg:grid-cols-[1fr_350px] gap-8">
          {/* Cart Items */}
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col md:flex-row gap-5"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full md:w-36 h-36 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h2 className="font-semibold text-xl">{item.title}</h2>

                  <p className="text-green-600 font-bold text-lg mt-2">
                    ₹{item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="w-9 h-9 border rounded-lg"
                    >
                      -
                    </button>

                    <span className="font-medium">{item.quantity}</span>

                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="w-9 h-9 border rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="self-start text-red-500 hover:scale-110 transition"
                >
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <ShoppingBag size={80} />

          <h2 className="text-2xl font-semibold mt-5">Your cart is empty</h2>

          <p className="text-gray-500 mt-2">Add products to start shopping.</p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
