import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import Profile from "./components/Profile";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  const handleReset = () => {
    setUser(null);
  };

  const handleSearch = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      setUser(userResponse.data);

      console.log(
        "Rate Limit Remaining:",
        userResponse.headers["x-ratelimit-remaining"]
      ); /* this clg is to know what remains of the rate limit for GitHub's API using the generated token */

      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=created&per_page=5`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      );
      setRepos(reposResponse.data);
    } catch (error) {
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="  md:flex md:flex-col   items-center justify-start  bg-white min-w-screen min-h-screen overflow-hidden">
      <div
        onClick={handleReset}
        className="header cursor-pointer bg-slate-950 w-full space-x-2 h-16 p-5 flex flex-row justify-center items-center text-white text-3xl "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.234 1.838 1.234 1.07 1.835 2.809 1.304 3.495.997.108-.776.418-1.304.762-1.603-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.467-2.381 1.235-3.221-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.29-1.553 3.297-1.23 3.297-1.23.653 1.649.241 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.623-5.475 5.92.43.369.823 1.096.823 2.21v3.277c0 .319.218.694.825.576 4.765-1.588 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        <h1>Github Finder</h1>
      </div>
      <Search onSearch={handleSearch} />
      {loading ? (
        <p className="">Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Profile user={user} repos={repos} />
      )}
    </div>
  );
};

export default App;
