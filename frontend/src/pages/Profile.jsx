import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch Profile Data on Page Load
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return navigate("/login");

      try {
        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
        const response = await fetch(`${API_URL}/users/profile`, {
          method: "GET",
          headers: { "Authorization": `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, [navigate]);

  if (!user) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-lg w-96">
        <h1 className="mb-4 text-3xl font-bold text-center">My Profile</h1>
        
        <div className="mb-4">
          <strong className="text-gray-700">Name:</strong> 
          <span className="ml-2">{user.name}</span>
        </div>
        
        <div className="mb-4">
          <strong className="text-gray-700">Email:</strong> 
          <span className="ml-2">{user.email}</span>
        </div>

        <div className="mb-4">
          <strong className="text-gray-700">Bio:</strong> 
          <p className="mt-1 text-gray-600">{user.bio || "No bio added yet."}</p>
        </div>
        
        <div className="mb-6">
           <strong className="text-gray-700">Style:</strong>
           <span className="ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
             {user.style || "Not set"}
           </span>
        </div>

        {/* Button to go back to Setup page to edit */}
        <button 
          onClick={() => navigate("/setup")}
          className="w-full p-2 text-white bg-gray-800 rounded hover:bg-gray-900"
        >
          Edit Profile
        </button>
        
        <button 
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="w-full p-2 mt-2 text-red-600 border border-red-600 rounded hover:bg-red-50"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;