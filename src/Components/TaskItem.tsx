import TaskItemCheckbox from "@/Components/TaskItemCheckbox";
import TaskItemText from "@/Components/TaskItemText";
import TaskItemStar from "@/Components/TaskItemStar";

export default function TaskItem({ title, subtitle, date, isToday, isStarred, emoji }: {
    title: string;
    subtitle: string;
    date: string;
    isToday?: boolean;
    isStarred?: boolean;
    emoji?: string;
}) {
    return (
        <div className="flex items-start justify-between p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition group">
            <div className="flex items-start gap-2">
                <TaskItemCheckbox />
                <TaskItemText title={title} subtitle={subtitle} date={date} isToday={isToday} emoji={emoji} />
            </div>
            <TaskItemStar isStarred={isStarred} />
        </div>
    );
}
