import TaskItemCheckbox from "@/components/TaskItemCheckbox";
import TaskItemText from "@/components/TaskItemText";
import TaskItemStar from "@/components/TaskItemStar";

export default function TaskItem({id, title, subtitle, date, isStarred, onDelete }: {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    isStarred?: boolean;
    onDelete?: (id: string) => void;
}) {
    return (
        <div className="flex items-start justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition group">
            <div className="flex items-start gap-2">
                <TaskItemCheckbox />
                <TaskItemText title={title} subtitle={subtitle} date={date} />
            </div>
            <div className="flex items-center gap-2">
                <TaskItemStar isStarred={isStarred} />
                {onDelete && (
                    <button
                        onClick={() => onDelete(id)}
                        className="text-red-500 text-sm hover:text-red-700 transition"
                        title="Delete task"
                    >
                        🗑
                    </button>
                )}
            </div>
        </div>
    );
}
