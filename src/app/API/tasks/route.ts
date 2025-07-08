import { NextRequest, NextResponse } from "next/server";

type Task = {
    id: number;
    title: string;
    subtitle: string;
    date: string;
    isStarred: boolean;
}

const tasks: Task[] = [
    { id: 1, title: "Promotion banner", subtitle: "GoPay", date: new Date().toISOString().split("T")[0], isStarred: true },
    { id: 2, title: "🏋️ Daily workout", subtitle: "Personal", date: new Date().toISOString().split("T")[0], isStarred: false },
    { id: 3, title: "🧡 Make Dribbble shoot", subtitle: "Kretya Studio", date: "2025-06-25", isStarred: true },
    { id: 4, title: "Announcement of Kretya Design Challenge #1", subtitle: "Kretya Studio", date: "2025-06-25", isStarred: true },
    { id: 5, title: "🔗 Buy LED Strips", subtitle: "Personal", date: "2025-06-26", isStarred: false },
    { id: 6, title: "Pull to refresh at promo discovery", subtitle: "GoPay", date: "2025-06-27", isStarred: false  },
    { id: 7, title: "🎥 Edit video for social media", subtitle: "Content Dump", date: "2025-06-28", isStarred: false  },
    { id: 8, title: "🖼️ Make mood-board for new office interior", subtitle: "Content Dump", date: "2025-06-29", isStarred: true  },
];

export async function GET() {
    return NextResponse.json({
        success: true,
        data: tasks,
    });
}

export async function POST(req: NextRequest) {
    try {
        const body: Task = await req.json();

        if (!body.title || !body.subtitle || !body.date) {
            return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
        }

        const newTask = {
            id: tasks.length + 1,
            title: body.title,
            subtitle: body.subtitle,
            date: body.date,
            isStarred: body.isStarred,
        };
        tasks.push(newTask);

        return NextResponse.json({
            success: true,
            data: newTask,
        });
    } catch (e) {
        return NextResponse.json({ success: false, message: "Invalid request" + e }, { status: 500 });
    }
}


export async function DELETE(req: NextRequest) {
    try {
        const body = await req.json();
        if (!body.id) {
            return NextResponse.json({ success: false, message: "Missing task id" }, { status: 400 });
        }
        const taskIndex = tasks.findIndex((task) => task.id === body.id);
        tasks.splice(taskIndex, 1);
        return NextResponse.json({ success: true });
    }catch (e){
        return NextResponse.json({ success: false, message: "Invalid request" + e }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const body = await req.json();

        if (!body.id) {
            return NextResponse.json({ success: false, message: "Missing task id" }, { status: 400 });
        }
        const taskIndex = tasks.findIndex((task) => task.id === body.id);

        if (taskIndex === -1) {
            return NextResponse.json({ success: false, message: "Task not found" }, { status: 404 });
        }

        tasks[taskIndex] = body;
        return NextResponse.json({ success: true });
    }catch (e){
        return NextResponse.json({ success: false, message: "Invalid request" + e }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
   try {
       const body: Task = await req.json();

       if (!body.id) {
           return NextResponse.json({ success: false, message: "Missing task id" }, { status: 400 });
       }

       const taskIndex = tasks.findIndex((task) => task.id === body.id);

       if (taskIndex === -1) {
           return NextResponse.json({ success: false, message: "Task not found" }, { status: 404 });
       }

       tasks[taskIndex] = {
           ...tasks[taskIndex],
           ...body,
       };

       return NextResponse.json({ success: true });
   }catch (e){
       return NextResponse.json({ success: false, message: "Invalid request" + e }, { status: 500 });
   }
}
