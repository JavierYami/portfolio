import {stack} from "../Utils/stack";
import TechCard from "./TechCard";

const MyStack = () => {

    return (
        <section>
            <h1>Tech Skills</h1>
            <div >
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
