import React from 'react';

export default function Home()
{
    return (<>
    
    <h1>home</h1>
    </>);
}

/*

Handling Multiple Parameters
You can define multiple parameters in the route.

Code Example:

javascript
Copy code
function Product() {
  const { category, id } = useParams();
  return <h1>Category: {category}, Product ID: {id}</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/product/:category/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}
Explanation:

Dynamic Path:

path="/product/:category/:id" includes two dynamic parameters: :category and :id.
Accessing Parameters:

useParams() extracts both category and id.
Output:

Visiting /product/electronics/123 displays: Category: electronics, Product ID: 123.
Visiting /product/furniture/456 displays: Category: furniture, Product ID: 456.*/