const NewTaskButton = ({
                           onClick,
                           name,
                           type = "button",
                       }: {
    onClick?: () => void;
    name: string;
    type?: "button" | "submit";
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 transition"
        >
            {name}
        </button>
    );
};

export default NewTaskButton;
