import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData((currValue) => ({
      ...currValue,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = { name: "", email: "", password: "" };

    // Name validation
    if (formData.name.trim().length < 1) {
      newErrors.name = "Please enter your name";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
      //password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 6 chars, 1 uppercase & 1 number";
    }

    setErrors(newErrors);

    // agar err nahi hai to form submit hoga
    if (!newErrors.name && !newErrors.email && !newErrors.password) {
      console.log("Form Submitted:", formData);
      setFormData({ name: "", email: "", password: "" });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Signup Form</h2>

      
        <label className="block mb-1 font-semibold">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name..."
          className="w-full p-2 border rounded mb-1"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

      
        <label className="block mb-1 font-semibold">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email..."
          className="w-full p-2 border rounded mb-1"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        
        <label className="block mb-1 font-semibold">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your Password..."
          className="w-full p-2 border rounded mb-1"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
