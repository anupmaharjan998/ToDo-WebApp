"use client";
import { useEffect, useState } from "react";

import TaskItem from "@/Components/TaskItem";
import Heading from "@/Components/Heading";
import NewTaskForm from "@/Components/NewTaskForm";

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const res = await fetch("/API/tasks");
                const data = await res.json();
                setTasks(data.data);
            } catch (err) {
                console.error("Failed to fetch tasks", err);
            }
        };

        fetchTasks();
    }, []);

    const addTask = async (task: never) => {

            try {
                const res = await fetch("/API/tasks", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(task),
                });
                const data = await res.json();
                if(data.success){location.reload()}
            }catch (e){
                console.error("Failed to fetch tasks", e);
            }
    };

    const deleteTask = async (id: string) => {
        try {
            console.log(id);
            await fetch("/API/tasks", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            setTasks((prev) => prev.filter((t) => t.id !== id));
        } catch (e) {
            console.error("Failed to delete task", e);
        }
    };


    return (
        <div className="p-4">
            <Heading onNewTaskClick={() => setShowForm(true)} />
            {showForm && <NewTaskForm onClose={() => setShowForm(false)} onAdd={addTask} />}
            <div className="flex flex-col gap-2">
                {tasks.map((task, index) => (
                    <TaskItem key={task.id} {...task} onDelete={deleteTask} />
                ))}
            </div>
        </div>
    );
}
