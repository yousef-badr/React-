import React from 'react';

const products = [
  {
    id: 1,
    name: 'Backpack, Fits 15 Laptops',
    description: 'Your perfect pack for everyday use and walks in the forest',
    imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    name: 'Mens Casual Premium Slim',
    description: 'Slim-fitting style, contrast raglan long sleeve',
    imageUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 3,
    name: 'anDisk SSD PLUS 1TB',
    description: 'Easy upgrade for faster boot up',
    imageUrl: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  },
];

const Task1 = () => {
  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-dark text-white">Buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default task1;
