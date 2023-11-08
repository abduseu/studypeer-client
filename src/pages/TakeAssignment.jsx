import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const TakeAssignment = () => {
    const { user } = useAuth()
    const { _id, title, marks, dueDate } = useLoaderData()

    const deadline = new Date(dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const pdfURL = form.pdfURL.value
        const quickNote = form.quickNote.value

        const status = "pending"
        const score = "Unchecked"
        const feedback = ""
        const studentName = user?.displayName
        const studentId = user.email
        const assingmentId = _id
        const dueDate = deadline
        const submitAssign = { status, studentName, studentId, assingmentId, title, dueDate, marks, score, feedback, pdfURL, quickNote  }

        axios.post('https://studypeer-server.vercel.app/submitted', submitAssign)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        title: 'Submitted!',
                        text: 'Assignment submitted successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
            })
    }
    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>Take <span className="font-light">Assignment</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="max-w-lg mx-auto flex flex-col items-center">
                    <div className="w-full">
                        <h2 className="text-2xl text-center font-semibold">{title}</h2>
                        <div className="text-lg py-8">
                            <h3>Deadline: <span>{deadline}</span> </h3>
                            <h3>Total Marks: <span>{marks}</span> </h3>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="w-full space-y-4">
                        <div className="flex flex-col items-center w-full">
                            <h3>PDF URL:</h3>
                            <input type="url" name="pdfURL" placeholder="Paste PDF url here" className="input input-bordered w-full max-w-lg" required />
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <h3>Quick Note:</h3>
                            <textarea name="quickNote" placeholder="Type quick note here" className="textarea textarea-bordered textarea-lg px-5 w-full max-w-lg" ></textarea>
                            {/* <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required /> */}
                        </div>
                    </div>
                    <div className="text-center pt-10">
                        <button className="btn btn-outline btn-neutral">Submit Assignment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TakeAssignment;