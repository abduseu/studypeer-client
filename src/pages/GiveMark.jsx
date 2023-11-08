import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const GiveMark = () => {
    const { _id, status, score, title, marks, studentName, pdfURL, quickNote, } = useLoaderData()

    const handleGivemark = (e) => {
        e.preventDefault()
        const form = e.target
        const score = form.score.value
        const feedback = form.feedback.value

        const status = "completed"
        const giveMark = { status, score, feedback }

        console.log(giveMark)

        axios.put(`http://localhost:5000/submitted/${_id}`, giveMark)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Mark Submitted!',
                        text: 'Mark submission successful.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })

                    window.location.reload();
                }
            })
    }
    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>Give <span className="font-light">Mark</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="max-w-lg mx-auto flex flex-col items-center">
                    <div className="w-full">
                        <h2 className="text-2xl text-center font-semibold">{title}</h2>
                        <div className="text-lg py-8">
                            <div className="md:flex justify-between">
                                <div>
                                    <h3>Student: <span>{studentName}</span> </h3>
                                    <h3>Result: <span>{score}</span> </h3>
                                </div>
                                <div>
                                    <h3>Status: <span>{status}</span> </h3>
                                    <h3>Total Marks: <span>{marks}</span> </h3>
                                </div>
                            </div>
                            <p className="pt-8">PDF URL: <Link to={pdfURL} target="_blank"><span>View assignment PDF</span></Link> </p>
                            <p>[Note: {quickNote} ]</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleGivemark} className="flex flex-col items-center">
                    <div className="w-full space-y-4">
                        <div className="flex flex-col items-center w-full">
                            <h3>Give Mark:</h3>
                            <input type="text" name="score" placeholder="Provide a valid score" className="input input-bordered w-full max-w-lg" required />
                        </div>
                        <div className="flex flex-col items-center w-full">
                            <h3>Feedback:</h3>
                            <textarea name="feedback" placeholder="Type feedback here" className="textarea textarea-bordered textarea-lg px-5 w-full max-w-lg" ></textarea>
                            {/* <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required /> */}
                        </div>
                    </div>
                    <div className="text-center pt-10">
                        <button className="btn btn-outline btn-neutral">Submit Mark</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GiveMark;