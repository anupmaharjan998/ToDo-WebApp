import TaskItem from "@/Components/TaskItem";
import Heading from "@/Components/Heading";

const tasks = [
  { title: "Promotion banner", subtitle: "GoPay", date: "Today", isToday: true, isStarred: true },
  { title: "Daily workout", subtitle: "Personal", date: "Today", isToday: true, isStarred: false, emoji: "🏋️" },
  { title: "Make Dribbble shoot", subtitle: "Kretya Studio", date: "Wednesday, Dec 28", isStarred: true, emoji: "🧡" },
  { title: "Announcement of Kretya Design Challenge #1", subtitle: "Kretya Studio", date: "Wednesday, Dec 28", isStarred: true },
  { title: "Buy LED Strips", subtitle: "Personal", date: "Thursday, Dec 29", isStarred: false, emoji: "🔗" },
  { title: "Pull to refresh at promo discovery", subtitle: "GoPay", date: "Friday, Dec 30" },
  { title: "Edit video for social media", subtitle: "Content Dump", date: "Friday, Dec 30", emoji: "🎥" },
  { title: "Make mood-board for new office interior", subtitle: "Content Dump", date: "Friday, Dec 30", emoji: "🖼️" },
];

export default function Home() {
  return (
      <div className="p-4">
        <Heading />
        <div className="flex flex-col gap-2">
          {tasks.map((task, index) => (
              <TaskItem key={index} {...task} />
          ))}
        </div>
      </div>
  );
}
