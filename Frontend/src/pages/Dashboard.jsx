import React from "react";
import {
    Sparkles,
    ListChecks,
    BarChart3,
    Trophy,
    CalendarDays,
    Code2,
    Users,
    History,
    Heart,
    Lightbulb,
    ChevronRight,
} from "lucide-react";

const StatRow = ({ icon: Icon, label, value, hint, isLast }) => (
    <div
        className={`flex items-start gap-4 py-5 ${!isLast ? "border-b border-gray-100" : ""
            }`}
    >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <Icon size={18} strokeWidth={2} />
        </div>
        <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
            <p className="mt-0.5 text-sm text-gray-400">{hint}</p>
        </div>
    </div>
);

const ActionRow = ({ icon: Icon, title, subtitle, isLast, onClick }) => (
    <button
        onClick={onClick}
        className={`flex w-full items-center gap-4 py-5 text-left transition-colors hover:bg-gray-50 ${!isLast ? "border-b border-gray-100" : ""
            }`}
    >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <Icon size={18} strokeWidth={2} />
        </div>
        <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-0.5 text-sm text-gray-400">{subtitle}</p>
        </div>
        <ChevronRight size={16} className="text-gray-300" />
    </button>
);

const ScoreBadge = ({ value }) => (
    <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
        {value}
    </span>
);

const StatusBadge = ({ status }) => {
    const isDone = status === "Completed";
    return (
        <span
            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${isDone
                ? "bg-gray-100 text-gray-600"
                : "bg-violet-50 text-violet-600"
                }`}
        >
            {status}
        </span>
    );
};

const CircularProgress = ({ percent = 70, label = "Great" }) => {
    const size = 64;
    const stroke = 5;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
            <svg width={size} height={size} className="-rotate-90">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#EDE9FE"
                    strokeWidth={stroke}
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-xs font-semibold text-gray-900">{percent}%</span>
                <span className="text-[10px] text-gray-400">{label}</span>
            </div>
        </div>
    );
};

/* ---------- data ---------- */

const stats = [
    {
        icon: ListChecks,
        label: "Total Interviews",
        value: "128",
        hint: "Completed practice sessions",
    },
    {
        icon: BarChart3,
        label: "Average Score",
        value: "84%",
        hint: "Across all interview types",
    },
    {
        icon: Trophy,
        label: "Best Score",
        value: "97%",
        hint: "Highest performance achieved",
    },
    {
        icon: CalendarDays,
        label: "Interviews This Month",
        value: "24",
        hint: "Keep the momentum going",
    },
];

const actions = [
    {
        icon: Code2,
        title: "Start Technical Interview",
        subtitle: "Practice system design, coding, and problem-solving.",
    },
    {
        icon: Users,
        title: "Start HR Interview",
        subtitle: "Improve communication, culture fit, and storytelling.",
    },
    {
        icon: History,
        title: "View Interview History",
        subtitle: "Review past sessions, scores, and feedback trends.",
    },
];

const interviews = [
    {
        role: "Frontend Developer",
        date: "Mar 12, 2026",
        score: "88%",
        status: "Completed",
    },
    {
        role: "Product Manager",
        date: "Mar 10, 2026",
        score: "91%",
        status: "Completed",
    },
    {
        role: "Backend Engineer",
        date: "Mar 08, 2026",
        score: "In Progress",
        status: "In Progress",
    },
];

const tips = [
    "Rehearse answers out loud to improve clarity and pacing.",
    "Review feedback after each session to spot patterns.",
];

export default function Dashboard() {
    return (
        <div className="bg-gray-50 p-12 px-6 md:px-54">
            <div className="mx-auto max-w-6xl">
                {/* top bar */}
                <div className="mb-6 flex justify-between">
                    <button className="flex items-center cursor-pointer gap-1.5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-violet-700">
                        <Sparkles size={14} />
                        Start New Interview
                    </button>
                    <button className="flex items-center cursor-pointer gap-1.5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-violet-700">
                        <Sparkles size={14} />
                        Create New Interview
                    </button>
                </div>

                {/* content grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
                    {/* main column */}
                    <div className="space-y-6">
                        {/* welcome card */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h1 className="text-3xl font-semibold text-gray-900">
                                Welcome back, Mukul 👋
                            </h1>
                            <p className="mt-2 text-sm text-gray-500">
                                Practice AI-powered interviews and improve your confidence.
                            </p>
                        </div>

                        {/* stats */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Interview stats
                            </h2>

                            {stats.map((s, i) => (
                                <StatRow key={s.label} {...s} isLast={i === stats.length - 1} />
                            ))}
                        </div>

                        {/* quick actions */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <h2 className="text-base font-semibold text-gray-900">
                                Quick Actions
                            </h2>
                            <p className="mt-0.5 text-sm text-gray-400">
                                Jump into a focused practice session
                            </p>
                            <div className="mt-2">
                                {actions.map((a, i) => (
                                    <ActionRow key={a.title} {...a} isLast={i === actions.length - 1} />
                                ))}
                            </div>
                        </div>

                        {/* recent interviews */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-base font-semibold text-gray-900">
                                        Recent Interviews
                                    </h2>
                                    <p className="mt-0.5 text-sm text-gray-400">
                                        Latest sessions and outcomes
                                    </p>
                                </div>
                                <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
                                    View all
                                </button>
                            </div>

                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full min-w-130 text-left text-sm">
                                    <thead>
                                        <tr className="text-gray-400">
                                            <th className="pb-3 font-medium">Role</th>
                                            <th className="pb-3 font-medium">Date</th>
                                            <th className="pb-3 font-medium">Score</th>
                                            <th className="pb-3 font-medium">Status</th>
                                            <th className="pb-3 font-medium"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {interviews.map((row, i) => (
                                            <tr
                                                key={row.role}
                                                className={i !== interviews.length - 1 ? "border-t border-gray-100" : "border-t border-gray-100"}
                                            >
                                                <td className="py-3 font-medium text-gray-900">{row.role}</td>
                                                <td className="py-3 text-gray-500">{row.date}</td>
                                                <td className="py-3">
                                                    <ScoreBadge value={row.score} />
                                                </td>
                                                <td className="py-3">
                                                    <StatusBadge status={row.status} />
                                                </td>
                                                <td className="py-3 text-right">
                                                    <button className="text-violet-600 hover:text-violet-700">
                                                        View Details
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* sidebar */}
                    <div className="space-y-6">
                        {/* motivation */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                    <Heart size={15} />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Motivation</p>
                                    <p className="text-xs text-gray-400">
                                        Weekly progress and encouragement
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 rounded-lg bg-violet-50/60 p-3 text-sm italic text-violet-700">
                                "Consistency beats intensity. One great interview practice
                                session today creates confidence for tomorrow."
                            </div>

                            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                                <div>
                                    <p className="text-xs text-gray-400">Weekly goal</p>
                                    <p className="text-lg font-semibold text-gray-900">7 / 10</p>
                                    <p className="text-xs text-gray-400">Interviews completed</p>
                                </div>
                                <CircularProgress percent={70} label="Great" />
                            </div>
                        </div>

                        {/* focus tips */}
                        <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                            <div className="flex items-center gap-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                    <Lightbulb size={15} />
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Focus Tips</p>
                                    <p className="text-xs text-gray-400">
                                        Small habits that improve results
                                    </p>
                                </div>
                            </div>

                            <ul className="mt-4 space-y-3">
                                {tips.map((tip) => (
                                    <li key={tip} className="flex gap-2 text-sm text-gray-600">
                                        <ChevronRight size={14} className="mt-0.5 shrink-0 text-violet-400" />
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
