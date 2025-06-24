export default function TaskItemText({ title, subtitle, date, isToday, emoji }: {
    title: string;
    subtitle: string;
    date: string;
    isToday?: boolean;
    emoji?: string;
}) {
    return (
        <div>
            <div className="flex items-center gap-2 group-hover:text-black dark:group-hover:text-white">
                {emoji && <span className="text-xl">{emoji}</span>}
                <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white">{title}</span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
                {subtitle} • <span className={(isToday ? "text-blue-600 dark:text-blue-400" : "")}>{isToday ? "Today" : date}</span>
            </div>
        </div>
    );
}
