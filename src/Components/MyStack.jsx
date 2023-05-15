import {stack} from "../Utils/stack";
import TechCard from "./TechCard";

const MyStack = () => {

    return (
        <section className="container mx-auto w-9/12 text-white text-center" >
            <h1 className="text-5xl font-medium mb-5 ">My stack</h1>
            <div className="grid grid-cols-3 gap-4 justify-items-center" >
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