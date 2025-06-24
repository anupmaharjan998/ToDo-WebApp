export default function TaskItemStar ({ isStarred }: { isStarred?: boolean }) {
    return <button className="text-blue-500">{isStarred ? "★" : "☆"}</button>;
}
