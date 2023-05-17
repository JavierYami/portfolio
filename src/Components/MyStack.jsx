import {stack} from "../Utils/stack";
import TechCard from "./TechCard";

const MyStack = () => {

    return (
        <section>
            <h1 className="text-indigo-500 font-black text-center text-5xl mb-8">Tech Skills</h1>
            <div className="grid grid-cols-3 p-3 place-items-center">
                {stack.map(stackItem => {
                    return (
                        <TechCard img={stackItem.image} name={stackItem.name}/>
                    )
                })}
            </div>
        </section>
    )
}

export default MyStack;
