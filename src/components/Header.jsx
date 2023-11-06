import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignout = () => {
        logOut()
            .then(() => {
                console.log('Signout Successful!')
            })
            .catch((error) => {
                console.log(error.message)
            });
    }

    //Navlink
    const links = <>
        <li><NavLink to="/all">All Assignment</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </>
    const linksPrivate = <>
        <li><NavLink to="/all">All Assignment</NavLink></li>
        <li><NavLink to="/create">Create Assignment</NavLink></li>
        <li><NavLink to="/my">My Assignment</NavLink></li>
        <li><NavLink to="/submitted">Submited Assignment</NavLink></li>
    </>

    return (
        <div className="py-4">
            {/* Logo & Button */}
            <div className="flex flex-col md:flex-row md:gap-10 items-center justify-between mb-2">
                <div>
                    <Link to="/" className="text-3xl font-semibold flex items-center">STUDY<span className="font-light">PEER</span></Link>
                </div>
                <div className="mt-6 md:mt-0">
                    <div>
                        <ul className={`md:space-x-12 flex list-none font-semibold text-lg uppercase`}>
                            {user ?
                                <>
                                    <div className="dropdown dropdown-hover">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded">
                                            <li className="whitespace-nowrap">{user.displayName}</li>
                                        </ul>
                                    </div>
                                    <li><Link onClick={handleSignout} className="navbtn rounded-lg">Signout</Link></li>
                                </> :
                                <li><NavLink to="/login" className="navbtn rounded-lg">Login</NavLink></li>}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <div className="flex justify-center p-4 bg-gray font-semibold rounded-lg">
                <ul className={`md:space-x-12 grid grid-cols-1 gap-4 md:flex list-none uppercase`}>
                    {user ? linksPrivate : links}
                </ul>
            </div>
        </div>
    );
};

export default Header;