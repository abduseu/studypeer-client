import { Link } from "react-router-dom";

const CardAll = ({obj}) => {

    const { _id, image, title, difficulty, marks } = obj

    return (
        <div className="p-3 flex flex-col border bg-white rounded-lg">
            <div className="pb-4">
                <img className="h-60 mx-auto rounded" src={image} />
            </div>
            <h1 className="font-bold text-lg">{title}</h1>
            <div className="flex justify-between px-1">
                <p className="py-3 font-bold">Level: <span>{difficulty}</span></p>
                <p className="py-3 font-bold">Marks: <span>{marks}</span></p>
            </div>

            <div className="flex flex-col gap-1">
                <Link to={`/view/${_id}`}><button className="btn btn-sm navy btn-outline hover:bg-blue-900 w-full rounded">View Assignment</button></Link>
                <Link to={`/update/${_id}`}><button className="btn btn-sm navy btn-outline hover:bg-blue-900 w-full rounded">Update Assignment</button></Link>
            </div>
        </div>
    );
};

export default CardAll;