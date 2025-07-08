import HeadingTitle from "@/Components/HeadingTitle";
import HeadingDate from "@/Components/HeadingDate";
import NewTaskButton from "@/Components/NewTaskButton";


const Heading = ({ onNewTaskClick }: { onNewTaskClick: () => void }) => {
    return (
        <div className="flex items-center justify-between mb-6 px-2 sm:px-4">
            <div>
                <HeadingTitle />
                <HeadingDate />
            </div>
            <NewTaskButton onClick={onNewTaskClick} name={"+ New Task"}/>
        </div>
    );
};

export default Heading;