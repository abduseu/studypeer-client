import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <header>
                <h1>This is Header.</h1>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <h2>This is Footer.</h2>
            </footer>
        </div>
    );
};

export default Root;