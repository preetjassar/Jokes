
import { useEffect, useState } from "react";
import "./task7.css";

function Task7() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showJoke, setShowJoke] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=twopart"
      );

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 flex flex-col items-center justify-center p-8">

      <h1 className="text-5xl font-extrabold text-pink-600 mb-3">
        😂 Programming Joke Generator
      </h1>

      <p className="text-lg text-gray-700 mb-10">
        Click the button and enjoy a random programming joke!
      </p>

      <div className="flex gap-5 mb-10">
        <button
          onClick={() => setShowJoke(true)}
          className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
        >
          😂 Show Joke
        </button>

        <button
          onClick={fetchData}
          className="bg-green-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
        >
          🔄 Refresh Joke
        </button>
      </div>

      {showJoke && (
        <div className="w-full max-w-2xl">
          {loading ? (
            <div className="bg-white rounded-3xl shadow-2xl p-10 text-center">
              <h2 className="text-3xl font-bold text-blue-600 animate-pulse">
                ⏳ Loading...
              </h2>
            </div>
          ) : (
            posts && (
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-4 border-yellow-300 hover:scale-105 transition-all duration-500">

                <h2 className="text-3xl font-extrabold text-center text-pink-600 mb-8">
                  🤣 Today's Programming Joke
                </h2>

                <div className="bg-yellow-100 rounded-xl p-5 mb-6">
                  <p className="text-xl text-gray-800">
                    <span className="font-bold text-blue-600">
                      💡 Joke:
                    </span>
                    {posts.setup}
                  </p>
                </div>

                <div className="bg-green-100 rounded-xl p-5">
                  <p className="text-xl text-gray-800">
                    <span className="font-bold text-green-700">
                      🎯 Answer:
                    </span>
                    {posts.delivery}
                  </p>
                </div>

                <p className="text-center text-gray-500 mt-8 italic">
                  😄 Keep smiling and keep coding!
                </p>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Task7;