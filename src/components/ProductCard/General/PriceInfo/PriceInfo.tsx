import { AddToCart } from "@/components/AddToCart/AddToCart";
// import { useState } from "react";

// const colors = [
//      '#1E1D21',
//      '#5826DA',
//      '#FBEBDD',
//      '#F2F4FA'

// ]
const PriceInfo = () => {
  // const [selectedColor, setSelectedColor] = useState(colors[0]);

  // const handleChange = (color) => {
  //   setSelectedColor(color);
  // };

  return (
    <div>
      {/* <div>
        {colors.map((color) => (
          <label key={color} style={{ backgroundColor: color }}>
            <input
              type="radio"
              value={color}
              checked={selectedColor === color}
              onChange={() => handleChange(color)}
            />
          </label>
        ))}
      </div> */}
      <AddToCart />
    </div>
  );
};

export default PriceInfo;
