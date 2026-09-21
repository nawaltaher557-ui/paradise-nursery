import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15", description: "Produces oxygen at night." },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12", description: "Filters formaldehyde." }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2016/04/19/15/03/lavender-1339198_1280.jpg", cost: "$20", description: "Calming scent." },
        { name: "Jasmin", image: "https://cdn.pixabay.com/photo/2017/03/24/19/33/jasmine-2171887_1280.jpg", cost: "$18", description: "Sweet fragrance." }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-list-container">
      <h2>Our Plants Collection</h2>
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>
          <div className="product-grid">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img src={plant.image} alt={plant.name} className="product-image" />
                <h4>{plant.name}</h4>
                <p>{plant.cost}</p>
                <button
                  className={`product-button ${addedToCart[plant.name] ? 'added' : ''}`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
