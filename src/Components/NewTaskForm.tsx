"use client";
import {useState} from "react";
import NewTaskButton from "@/components/NewTaskButton";

export default function NewTaskForm({
                                        onClose,
                                        onAdd,
                                    }: {
    onClose: () => void;
    onAdd: (task: any) => void;
}) {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [date, setDate] = useState("");
    const [isStarred, setIsStarred] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const todayString = new Date().toISOString().split("T")[0]; // format: yyyy-mm-dd

        onAdd({
            title,
            subtitle,
            date,
            isToday: date === todayString,
            isStarred,
        });

        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-md border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Add New Task</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
                            required
                        />
                    </div>

                    {/* Subtitle */}
                    <div>
                        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Subtitle</label>
                        <input
                            type="text"
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
                        />
                    </div>

                    {/* Date Picker */}
                    <div>
                        <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
                            required
                        />
                    </div>

                    {/* Star toggle */}
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => setIsStarred((prev) => !prev)}
                            className="text-2xl text-yellow-500 hover:scale-110 transition"
                            aria-label="Toggle Favorite"
                        >
                            {isStarred ? "★" : "☆"}
                        </button>
                        <span className="text-sm text-gray-700 dark:text-gray-300">Mark as Favourite</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-3 pt-2">
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    onClick={onClose}*/}
                        {/*    className="text-sm px-3 py-1 text-gray-600 dark:text-gray-300 hover:underline"*/}
                        {/*>*/}
                        {/*    Cancel*/}
                        {/*</button>*/}
                        {/*<button*/}
                        {/*    type="submit"*/}
                        {/*    className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"*/}
                        {/*>*/}
                        {/*    Add Task*/}
                        {/*</button>*/}

                        <NewTaskButton onClick={onClose} name={"Cancel"}/>
                        <NewTaskButton type="submit" name={"Add Task"}/>
                    </div>
                </form>
            </div>
        </div>
    );
}
