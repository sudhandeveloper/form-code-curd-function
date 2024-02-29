import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

const Formfile = () => {
  const [formData, setFormData] = useState({
    
    name: "",
    description: "",
    price: "",
    quantity: "",
    manufacturer: "none",
    weight: "",
    dimensions: "",
    photo: "",
  });

  // Function to update form data when inputs change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// post
  const handleSubmit = async () => {
    try {
      
      const res = await axios.post("http://localhost:5000/products", formData);
      console.log("Product created:", res.data);
      // Reset form after successful submission
      setFormData({
        name: "",
        description: "",
        price: "",
        quantity: "",
        manufacturer: "none",
        weight: "",
        dimensions: "",
        photo: "",
      });
      setTimeout(fetchProducts, 500);
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
  // --------------------- get data----------------
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // State to hold products data
  const [post, setPost] = useState(null);

  // Use effect to fetch products initially
  useEffect(() => {
    // Fetch products initially
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container flex flex-col mx-auto space-y-12">
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label for="name" className="text-sm">
                    {" "}
                    name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-1 rounded-md focus:ring focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="description" className="text-sm">
                    description
                  </label>
                  <input
                    id="description"
                    type="text"
                    placeholder="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-1 rounded-md focus:ring focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="price" className="text-sm">
                    price
                  </label>
                  <input
                    id="price"
                    type="text"
                    placeholder="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-1 rounded-md focus:ring focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label for="quantity" className="text-sm">
                    quantity
                  </label>
                  <input
                    id="quantity"
                    type="text"
                    placeholder="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="w-full p-1 rounded-md focus:ring focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label className="text-sm">
                    manufacturer
                    <select
                      name="manufacturer"
                      value={formData.manufacturer}
                      onChange={handleChange}
                      className="w-full p-1 rounded-md focus:ring focus:ri dark:border-gray-700 dark:text-gray-900"
                    >
                      <option value="apple">none</option>
                      <option value="banana">Banana</option>
                      <option value="orange">Orange</option>
                    </select>
                  </label>
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="weight" className="text-sm">
                    weight
                  </label>
                  <input
                    id="weight"
                    type="text"
                    placeholder="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full p-1 rounded-md focus:ring focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="dimensions" className="text-sm">
                    dimensions
                  </label>
                  <input
                    id="dimensions"
                    type="text"
                    placeholder="dimensions"
                    name="dimensions"
                    value={formData.dimensions}
                    onChange={handleChange}
                    className="w-full p-1 rounded-md focus:ring focus:ri dark:border-gray-700 dark:text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label for="image uploade" className="text-sm">
                    image uploade
                  </label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    value={formData.photo}
                    onChange={handleChange}
                    placeholder="image uploade"
                    className="w-full p-1 text-white rounded-md focus:ring focus:ri dark:border-gray-700 "
                  />
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="py-1 mt-5 font-semibold rounded-md px-7 bg-slate-400 dark:bg-gray-100 dark:text-gray-800"
                  >
                    submit
                  </button>
                </div>
              </div>
            </fieldset>
          </div>
        </section>
      </div>

      <div className="w-full p-5 text-center uppercase mt-5 font-bold text-[25px]">
        <table className="w-full p-6 text-xs text-left whitespace-nowrap">
          <thead className="">
            <tr className="border-2 border-black">
              <th className="p-3 border-2 border-black">ID</th>
              <th className="p-3 border-2 border-black">Name</th>
              <th className="p-3 border-2 border-black">Description</th>
              <th className="p-3 border-2 border-black">Price</th>
              <th className="p-3 border-2 border-black">Quantity</th>
              <th className="p-3 border-2 border-black">Manufacturer</th>
              <th className="p-3 border-2 border-black">Weight</th>
              <th className="p-3 border-2 border-black">Dimensions</th>
              <th className="p-3 border-2 border-black">Image URL</th>
            </tr>
          </thead>
          <tbody>
            {post &&
              post.map((product) => (
                <tr key={product._id}>
                  <td className="p-3 border-2 border-black">{product._id}</td>
                  <td className="p-3 border-2 border-black">{product.name}</td>
                  <td className="p-3 border-2 border-black">
                    {product.description}
                  </td>
                  <td className="p-3 border-2 border-black">{product.price}</td>
                  <td className="p-3 border-2 border-black">
                    {product.quantity}
                  </td>
                  <td className="p-3 border-2 border-black">
                    {product.manufacturer}
                  </td>
                  <td className="p-3 border-2 border-black">
                    {product.weight}
                  </td>
                  <td className="p-3 border-2 border-black">
                    {product.dimensions}
                  </td>
                  <td className="p-3 border-2 border-black">
                    <img src={product.photo} alt="loading" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <div className="w-full text-center uppercase mt-5 font-bold text-[25px]">
  
        <ul>
          {users.map((datas) => (
            <li>
              <span className="pr-4"> {datas.id}.</span>
              {datas.name}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default Formfile;
