// SomeOtherComponent.tsx

import React from 'react';
import DynamicTable from './_components/DynamicTable';

const Home: React.FC = () => {
  const products = [
    // Array of product objects
    {
      name: 'Product 1',
      pricePerTB: '$50',
      price: '$100',
      capacity: '1TB',
      warranty: '1 year',
      formFactor: '2.5"',
      // technology: 'SSD',
      // condition: 'New',
    },
    // Additional products...
  ];

  const columns = [
    'Name',
    'Price per TB',
    'Price',
    'Capacity',
    'Warranty',
    'Form Factor',
    'Technology',
    'Condition',
  ];

  return (
    <div>
      {/* Pass products and columns as props to DynamicTable */}
      <DynamicTable products={products} columns={columns} />
    </div>
  );
};

export default Home;
