import HeadingTitle from "@/components/HeadingTitle";
import HeadingDate from "@/components/HeadingDate";
import NewTaskButton from "@/components/NewTaskButton";


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