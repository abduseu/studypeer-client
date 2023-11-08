import { useLoaderData } from "react-router-dom";
import CardAll from "../components/CardAll";
import axios from "axios";
import { useState } from "react";

const AllAssignment = () => {
    const loadedAssignments = useLoaderData()
    const [assignments, setAssignments] = useState(loadedAssignments)

    const handleFilter = (e) => {
        const difficulty = e.target.value

        if(difficulty !== ""){
            axios.get(`https://studypeer-server.vercel.app/difficulty/${difficulty}`)
            .then(res => {
                setAssignments(res.data)
            })
        }else{
            setAssignments(loadedAssignments)
        }
    }

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>All <span className="font-light">Assignment</span></h2>

                <div className="flex justify-center mt-4 gap-4 text-base">
                    <h3>Filter:</h3>
                    <select name="difficulty" onChange={handleFilter} className="rounded">
                        <option value="">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
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