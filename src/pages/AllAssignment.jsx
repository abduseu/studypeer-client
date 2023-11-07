import { useLoaderData } from "react-router-dom";
import CardAll from "../components/CardAll";

const AllAssignment = () => {
    const assignments = useLoaderData()

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>All <span className="font-light">Assignment</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    {
                        assignments.map(x => <CardAll key={x._id} obj={x}></CardAll>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAssignment;