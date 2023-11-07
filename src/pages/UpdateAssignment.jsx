import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";

const UpdateAssignment = () => {
    const assignment = useLoaderData()
    const { title, description, difficulty, marks, image, dueDate } = assignment
    
    const [startDate, setStartDate] = useState(new Date(dueDate));

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const difficulty = form.difficulty.value
        const marks = form.marks.value
        const image = form.image.value
        const dueDate = startDate

        const updateAssign = { title, description, difficulty, marks, image, dueDate }

        console.log(updateAssign)
    }

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>Update <span className="font-light">Assignment</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3>Title:</h3>
                            <input type="text" name="title" defaultValue={title} className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Description:</h3>
                            <input type="text" name="description" defaultValue={description} className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Difficulty Level:</h3>
                            <select name="difficulty" defaultValue={difficulty} className="select select-bordered w-full">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div>
                            <h3>Marks:</h3>
                            <input type="text" name="marks" defaultValue={marks} className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Image:</h3>
                            <input type="url" name="image" defaultValue={image} className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <h3>Due Date:</h3>
                            <div className="input input-bordered w-full flex items-center">
                                <DatePicker selected={startDate} defaultDate={dueDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-10">
                        <button className="btn btn-outline btn-neutral">Update Assignment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateAssignment;