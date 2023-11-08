import { Link, useLoaderData } from "react-router-dom";

const SubmittedAssignment = () => {
    const submitted = useLoaderData()

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>Submitted <span className="font-light">Assignment</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Examinee</th>
                                <th>Title</th>
                                <th>Due Date</th>
                                <th>Total Marks</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                submitted.map(x =>
                                    <tr key={x._id}>
                                        <td>{x.studentName}</td>
                                        <td>{x.title}</td>
                                        <td>{x.dueDate}</td>
                                        <td>{x.marks}</td>
                                        <td>{x.status}</td>
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

export default SubmittedAssignment;