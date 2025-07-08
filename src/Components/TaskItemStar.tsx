"use client"
import { useState } from "react";

export default function TaskItemStar ({ isStarred }: { isStarred?: boolean }) {
    const [starred, setStarred] = useState(isStarred);

    const toggleStar = () => {
        setStarred(!starred);
    };

    return (
        <button
            className="text-blue-500 text-xl focus:outline-none"
            onClick={toggleStar}
            aria-label="Toggle favorite"
        >
            {starred ? "★" : "☆"}
        </button>
    );
}
