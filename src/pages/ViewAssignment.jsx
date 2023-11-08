import { Link, useLoaderData } from "react-router-dom";

const ViewAssignment = () => {
    const { _id, title, description, difficulty, marks, image, dueDate } = useLoaderData()

    const deadline = new Date(dueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    return (
        <div className="bg-gray rounded-lg">
            <div className="text-center font-semibold text-2xl md:text-4xl p-10 md:p-20 uppercase">
                <h2>Assignment <span className="font-light">Details</span></h2>
            </div>
            <div className="pb-10 md:pb-20 px-10 md:px-20">
                <div className="max-w-2xl mx-auto flex flex-col items-center">
                    <div className="md:px-5 w-full">
                        <h2 className="text-2xl text-center font-semibold">{title}</h2>
                        <div className="md:flex justify-between text-lg pb-4">
                            <h3>Due Date: <span>{deadline}</span> </h3>
                            <h3>Marks: <span>{marks}</span> </h3>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <img src={image} />
                    </div>
                    <div className="md:px-5 w-full mt-4">
                        <h3 className="text-xl font-semibold">Difficulty: <span>{difficulty}</span></h3>
                        <p className="pt-4">{description}</p>
                    </div>
                </div>
                <div className="text-center pt-10">
                    <Link to={`/take/${_id}`}><button className="btn btn-outline btn-neutral">Take Assignment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ViewAssignment;