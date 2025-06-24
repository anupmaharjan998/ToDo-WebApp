export default function HeadingDate () {
    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    return (
        <p className="text-sm text-gray-500 dark:text-gray-400">
            {today}
        </p>
    );
}