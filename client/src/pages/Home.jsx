import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col text-center font-sans bg-gray-50">
      {/* Header Section */}
      <header className="flex justify-between items-center p-5 bg-blue-500 text-white">
        <h1 className="text-xl font-bold">Travel Planner</h1>
        <nav className="flex items-center space-x-6">
          <Link to="/login" className="flex items-center space-x-2 hover:text-green-300 hover:scale-105 transition-all duration-300">
            <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" alt="Login" className="h-6 w-6" />
            <span className="text-red-500">Login</span> {/* Set text color to red */}
          </Link>
          <Link to="/signup" className="flex items-center space-x-2 hover:text-green-300 hover:scale-105 transition-all duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5NISpp0_zAyoVOjx8fsAyyPxGASa6XMB7w&s" alt="Sign Up" className="h-6 w-6" />
            <span className="text-red-500">Sign Up</span> {/* Set text color to red */}
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-10 px-5 bg-gray-100">
        <h2 className="text-4xl font-semibold">Plan Your Perfect Trip</h2>
        <p className="mt-3 text-lg max-w-lg">
          Discover destinations, manage itineraries, and make your travels hassle-free.
        </p>
        <Link
          to="/signup"
          className="mt-5 inline-block bg-orange-500 text-white py-3 px-8 rounded-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
        >
          Get Started
        </Link>
      </main>

      {/* Features Section */}
      <section className="flex justify-center gap-8 py-10 bg-white">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-64 hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl">📍 Destination Search</h3>
          <p className="mt-3">Find the best places to visit.</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-64 hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl">💰 Budget Estimator</h3>
          <p className="mt-3">Manage your travel expenses easily.</p>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg w-64 hover:bg-blue-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
          <h3 className="text-xl">🌦️ Weather Updates</h3>
          <p className="mt-3">Get real-time weather forecasts.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white py-3 mt-auto">
        <p>© 2025 Travel Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
