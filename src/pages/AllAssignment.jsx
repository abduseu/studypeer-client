import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllAssignment = () => {
    const loadedAssignments = useLoaderData()
    const [assignments, setAssignments] = useState(loadedAssignments)

    const handleDelete = (id)=>{
        console.log(id)
    }

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>All <span className="font-light">Assignment</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                Cards will be here
                {
                    assignments.map(x=> <li key={x._id}>{x.title}</li>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;