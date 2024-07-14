const Profile = ({ user, repos }) => {
  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div className="md:flex md:flex-col flex flex-col justify-center  p-10  gap-9 overflow-hidden">
      <div className="md:flex md:flex-row flex flex-col justify-center items-center gap-20 ">
        <div className="info-1 md:flex md:flex-col   justify-center items-center gap-4 ">
          <img
            className="rounded-full w-44 h-44 shadow-md transition transform duration-500 hover:scale-95 hover:shadow-lg "
            src={user.avatar_url}
            alt={`${user.login} avatar`}
          />
          <h1 className="font-bold text-3xl">{user.login}</h1>
          <h3 className="font-light text-2xl text-pretty max-w-xs ">
            {user.bio}
          </h3>
          <button className=" border-1 border-white rounded-sm w-[8rem] h-10 text-white bg-black hover:bg-stone-500 transition ease-in-out transform duration-500  ">
            <a href={user.html_url} target="_blank">
              View Profile
            </a>
          </button>
        </div>
        <div className="info-2 flex flex-col  items-start gap-10">
          <div className="flex flex-row gap-1 items-center justify-center">
            <p className="text-lg font-semibold"> Company:</p>{" "}
            <div className="text-lg ">
              {user.company ? <p>{user.company}</p> : <p>undefined</p>}
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center justify-center">
            <p className="text-lg font-semibold"> Location:</p>{" "}
            <div className="text-lg ">
              {user.location ? <p>{user.location}</p> : <p>undefined</p>}
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center justify-center">
            <p className="text-lg font-semibold"> Member since:</p>{" "}
            <div className="text-lg ">{user.created_at}</div>
          </div>
        </div>
      </div>
      <div className="info-3 md:flex md:flex-row grid grid-cols-2  items-center justify-center gap-7 mt-11  ">
        <div className="flex flex-row gap-1 items-center justify-center">
          <p className="font-bold">Hireable: </p>
          {user.hireable ? (
            <h4 className="text-green-500 text-sm">✔️</h4>
          ) : (
            <h4 className="text-red-500 text-sm">❌</h4>
          )}
        </div>
        <div className="flex items-center justify-center w-32 h-12  bg-light rounded-lg shadow-md">
          <div className="text-center">
            <p className="text-sm">Public Repos:</p>
            <p className="text-lg font-bold">{user.public_repos}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-32 h-12 bg-dark text-white rounded-lg shadow-md">
          <div className="text-center">
            <p className="text-sm">Public Gists:</p>
            <p className="text-lg font-bold">{user.public_gists}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-32 h-12 bg-danger text-white rounded-lg shadow-md">
          <div className="text-center">
            <p className="text-sm">Followers:</p>
            <p className="text-lg font-bold">{user.followers}</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-32 h-12 bg-success text-white rounded-lg shadow-md">
          <div className="text-center">
            <p className="text-sm">Following:</p>
            <p className="text-lg font-bold">{user.following}</p>
          </div>
        </div>
      </div>

      <h1 className="font-bold text-3xl">Latest Repos: </h1>

      <div className="recent-repos md:flex md:flex-col  justify-center items-center  mb-10">
        <ul className="md:flex md:flex-col flex flex-col items-center justify-center gap-8  mt-4 md:w-auto w-[300px] text-nowrap">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="md:flex md:flex-row flex flex-col  md:items-center  justify-between w-full p-4 border-2 border-black rounded-lg"
            >
              <a
                href={repo.html_url}
                target="_blank"
                className="text-lg font-bold text-danger mr-10  hover:underline "
              >
                {repo.name}
              </a>
              <div className="flex gap-5">
                <p className="flex items-center justify-center md:w-24 md:h-12 w-18 h-8 p-2 text-sm text-nowrap bg-danger text-white rounded-md shadow-md">
                  Stars: {repo.stargazers_count}
                </p>
                <p className="flex items-center justify-center md:w-24 md:h-12 w-18 h-8 p-2 text-sm text-nowrap bg-light text-black rounded-md shadow-md">
                  Watchers: {repo.watchers_count}
                </p>
                <p className="flex items-center justify-center md:w-24 md:h-12 w-18 h-8 p-2 text-sm text-nowrap bg-success text-white rounded-md shadow-md">
                  Forks: {repo.forks_count}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
