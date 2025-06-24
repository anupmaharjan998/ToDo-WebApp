import HeadingTitle from "@/Components/HeadingTitle";
import HeadingDate from "@/Components/HeadingDate";
import NewTaskButton from "@/Components/NewTaskButton";

export default function Heading() {
    return (
        <div className="flex items-center justify-between mb-6 px-2 sm:px-4">
            <div>
                <HeadingTitle />
                <HeadingDate />
            </div>
            <NewTaskButton />
        </div>
    );
}