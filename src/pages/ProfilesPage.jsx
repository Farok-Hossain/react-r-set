import { NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex  gap-2">
      <div className="flex flex-col">
        {profiles.map((profile) => (
          // <Link to={`/profiles/${profile}`} key={profile}>
          //   Profile{profile}
          // </Link>
          <NavLink
            to={`/profiles/${profile}`}
            key={profile}
            className={({ isActive }) => {
              return isActive ? "text-orange-700 text-2xl" : "";
            }}
          >
            Profile{profile}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default ProfilesPage;
