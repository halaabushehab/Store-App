// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Home() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//     .get("http://localhost:9511/api/products")
//     .then((response) => {
//       console.log("Data received:", response.data);  // فحص البيانات
//       setProducts(response.data);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.error("Error fetching products:", error);
//       setError("Failed to load products.");
//       setLoading(false);
//     });
  
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Store App 🏬</h1>

//       {loading ? (
//         <h2>Loading...</h2>
//       ) : error ? (
//         <h2 style={{ color: "red" }}>{error}</h2>
//       ) : (
//         <ul>
//         {products.map((product) => (
//           <li key={product.id}>  {/* تأكد من المفتاح الصحيح */}
//             <h3>{product.title}</h3>  {/* تأكد من الحروف الصحيحة */}
//             <img src={product.image} alt={product.title} width="100" />
//             <p>Price: ${product.price}</p>
//           </li>
//         ))}
//       </ul>
      
//       )}
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  // const [userInput, setUserInput] = useState("");
  const [serverResponse, setServerResponse] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:9511/api/products");
        setProducts(response.data); // تخزين بيانات المنتجات
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await axios.post("http://localhost:9511/api/post-message", { userMessage: userInput });
  //     setServerResponse(response.data.response);
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //   }
  // };

  return (
    <div className="w-screen mx-auto mt-5 p-5 bg-gray-100 rounded-lg shadow-md text-center max-w-7xl">
    <h1 className="text-4xl font-bold">Store App 🏬</h1>
  
    <h2 className="text-2xl font-semibold text-gray-700 mt-4">Products:</h2>
  
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 px-4 sm:px-6 md:px-8">
      {products.map((product) => (
        <li key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">{product.Titel}</h3>
          <img
            src={product.Image}
            alt={product.Titel}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <p className="text-gray-800 font-bold">Price: ${product.Price}</p>
          <p className="text-gray-600">{product.Description}</p>
        </li>
      ))}
    </ul>
  
    {serverResponse && <h3 className="text-green-600 mt-4">Response: {serverResponse}</h3>}
  </div>
  
  );
}

export default Home;
