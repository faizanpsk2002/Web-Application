import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Setup = () => {
  // Fields based on your "Style/Preferences" requirement
  const [formData, setFormData] = useState({ bio: "", style: "", gender: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

    try {
      const response = await fetch(`${API_URL}/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}` // Send Token!
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/profile"); // Redirect to Profile after setup
      } else {
        alert("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md w-96">
        <h2 className="mb-4 text-2xl font-bold">Complete Your Profile</h2>
        <p className="mb-6 text-gray-500">Tell us about your style preferences.</p>
        
        <label className="block mb-2 font-medium">Bio</label>
        <textarea
          name="bio"
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        ></textarea>

        <label className="block mb-2 font-medium">Fashion Style</label>
        <select name="style" onChange={handleChange} className="w-full p-2 mb-4 border rounded">
            <option value="">Select Style</option>
            <option value="Casual">Casual</option>
            <option value="Formal">Formal</option>
            <option value="Streetwear">Streetwear</option>
        </select>

        <button type="submit" className="w-full p-2 text-white bg-purple-600 rounded hover:bg-purple-700">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default Setup;