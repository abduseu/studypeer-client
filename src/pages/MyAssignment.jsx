import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useQuery } from '@tanstack/react-query'

const MyAssignment = () => {
    const { user } = useAuth()

    const { isPending, isError, error, data: mySubmitted } = useQuery({
        queryKey: ['mySubmitted'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/mysubmitted/${user.email}`)
            return res.json()
        }
    })
    if(isPending){
        return <span>loading...!</span>
    }
    if(isError){
        return error.message
    }

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>My <span className="font-light">Assignment</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Total Marks</th>
                                <th>Result</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mySubmitted.map(x =>
                                    <tr key={x._id}>
                                        <td>{x.title}</td>
                                        <td>{x.status}</td>
                                        <td>{x.marks}</td>
                                        <td>{x.score}</td>
                                        <td>{x.feedback}</td>
                                        <td>
                                            <Link to={`/givemark/${x._id}`}><button className="btn btn-xs">Give Mark</button></Link>
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

export default MyAssignment;