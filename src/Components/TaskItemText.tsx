export default function TaskItemText({
                                         title,
                                         subtitle,
                                         date,
                                     }: {
    title: string;
    subtitle: string;
    date: string;
}) {
    const taskDate = new Date(date);
    const today = new Date();
    const isToday =
        taskDate.getFullYear() === today.getFullYear() &&
        taskDate.getMonth() === today.getMonth() &&
        taskDate.getDate() === today.getDate();

    return (
        <div>
            <div className="flex items-center gap-2 group-hover:text-black dark:group-hover:text-white">
        <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white">
          {title}
        </span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
                {subtitle} •{" "}
                <span className={isToday ? "text-blue-600 dark:text-blue-400" : ""}>
          {isToday ? "Today" : taskDate.toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
          })}
        </span>
            </div>
        </div>
    );
}
