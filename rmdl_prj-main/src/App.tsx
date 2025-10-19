import { useContext, useEffect } from "react";
import { AppContext } from "./context";
import CartSummary from "./CartSummary";
import Slider from "./Slider";
import "./App.css";

const App = () => {
  const { items, setItems } = useContext(AppContext);

  // Initialize product list with descriptions
  useEffect(() => {
    if (items.length === 0) {
      setItems([
        {
          item_name: "Sofa",
          item_cost: 1099.00,
          item_quantity: 0,
          description: "A cushioned seat designed for comfort and relaxation.",         
        },
        {
          item_name: "Bookcase Organizer",
          item_cost: 179.00,
          item_quantity: 0,
          description: "A tall shelving unit for organizing books and decor.",
        },
        {
          item_name: "Wardrobe Closet",
          item_cost: 290.95,
          item_quantity: 0,
          description: "A standing closet designed for storing clothes and accessories."
        },
        {
          item_name: "TV Stand Furniture",
          item_cost: 382.58,
          item_quantity: 0,
          description: "A sturdy base for holding your TV and media accessories."
        },
        {
          item_name: "Table Desk",
          item_cost: 87.00,
          item_quantity: 0,
          description: "A flat-surfaced table ideal for working, studying, or organizing tasks.",
        },
      ] as any); // Add `as any` to allow extra description field if your context type is strict
    }
  }, [items, setItems]);

  const increase = (name: string) => {
    setItems(
      items.map((i) =>
        i.item_name === name
          ? { ...i, item_quantity: i.item_quantity + 1 }
          : i
      )
    );
  };

  const decrease = (name: string) => {
    setItems(
      items.map((i) =>
        i.item_name === name && i.item_quantity > 0
          ? { ...i, item_quantity: i.item_quantity - 1 }
          : i
      )
    );
  };

  return (
    <div className="container">
      <Slider />

      <div className="main-content">
        {/* Featured Product */}
        <div className="featured">
          <img
            src="https://www.ikea.com/us/en/images/products/idanaes-upholstered-storage-bed-naggen-beige__1322816_pe942270_s5.jpg?f=xl"
            alt="Bed"
          />
          <h3>Bed Frame</h3>
          <p className="price">$859</p>
          <div className="stars">⭐⭐⭐⭐⭐</div>
        </div>

        {/* Product List */}
        <div className="product-list">
          <h2>Product List</h2>
          <div className="product-items">
            {items.map((item) => (
              <div key={item.item_name} className="product-card">
                <img
                  src={
                    item.item_name === "Sofa"
                      ? "https://www.ikea.com/us/en/images/products/kivik-sofa-tibbleby-beige-gray__1056144_pe848277_s5.jpg?f=xl"
                      : item.item_name === "Bookcase Organizer"
                      ? "https://www.ikea.com/us/en/images/products/billy-bookcase-brown-walnut-effect__1097082_pe864710_s5.jpg?f=xl"
                      : item.item_name === "Wardrobe Closet"
                      ? "https://www.ikea.com/us/en/images/products/hauga-wardrobe-with-sliding-doors-white__0939485_pe794580_s5.jpg?f=xl"
                      : item.item_name === "TV Stand Furniture"
                      ? "https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0704610_pe725291_s5.jpg?f=xl"
                      : "https://www.ikea.com/us/en/images/products/micke-desk-white__0736018_pe740345_s5.jpg?f=xl"
                  }
                  alt={item.item_name}
                />
                <h3>{item.item_name}</h3>
                <p className="desc">{(item as any).description}</p>
                <p className="price">${item.item_cost.toFixed(2)}</p>
                <div className="quantity-control">
                  <button onClick={() => decrease(item.item_name)}>-</button>
                  <span>{item.item_quantity}</span>
                  <button onClick={() => increase(item.item_name)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CartSummary />
    </div>
  );
};

export default App;
