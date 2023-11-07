import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const ManageAssignment = () => {
    const loadedAssignments = useLoaderData()
    const [assignments, setAssignments] = useState(loadedAssignments)
    const { user } = useAuth()

    const handleDelete = (id, userId) => {
        if(userId === user.email){
            axios.delete(`http://localhost:5000/assignments/${id}`)
            .then(res => {
                console.log(res.data)
                if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Deleted Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    const remaining = assignments.filter(x=> x._id !== id)
                    setAssignments(remaining)
                }
            })
        }else{
            Swal.fire({
                title: 'Wrong User!',
                text: 'You cannot delete other users assignment',
                icon: 'error',
                confirmButtonText: 'OK'
              })
        }
    }

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>Manage <span className="font-light">Assignment</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Database ID</th>
                                <th>Title</th>
                                <th>Difficulty</th>
                                <th>Marks</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                assignments.map(x =>
                                    <tr key={x._id}>
                                        <td>{x._id}</td>
                                        <td>{x.title}</td>
                                        <td>{x.difficulty}</td>
                                        <td>{x.marks}</td>
                                        <td>
                                            <Link to={`/update/${x._id}`}><button className="btn btn-xs">Update</button></Link>
                                            <button onClick={() => handleDelete(x._id, x.userId)} className="btn btn-xs">X</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageAssignment;