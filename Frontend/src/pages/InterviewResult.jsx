import React from "react";
import {
    CheckCircle2,
    ClipboardList,
    Target,
    Clock,
    Timer,
    ThumbsUp,
    AlertTriangle,
    Code2,
    Repeat,
    Layers,
    MessageSquare,
} from "lucide-react";

/* ---------- shared bits ---------- */

const CardTitle = ({ title, subtitle, right }) => (
    <div className="flex items-start justify-between">
        <div>
            <p className="text-xl font-bold text-gray-900">{title}</p>
            <p className="mt-0.5 text-sm text-gray-400">{subtitle}</p>
        </div>
        {right}
    </div>
);

const MetricBox = ({ icon: Icon, value, label }) => (
    <div className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <Icon size={16} />
        </span>
        <div>
            <p className="text-lg font-semibold text-gray-900">{value}</p>
            <p className="text-xs text-gray-400">{label}</p>
        </div>
    </div>
);

const scoreBadgeStyles = {
    Excellent: "bg-emerald-50 text-emerald-600",
    Good: "bg-sky-50 text-sky-600",
    Average: "bg-amber-50 text-amber-600",
};

const ScoreTag = ({ label }) => (
    <span
        className={`inline-flex shrink-0 rounded-md px-2 py-0.5 text-xs font-medium ${scoreBadgeStyles[label] ?? "bg-gray-100 text-gray-600"
            }`}
    >
        {label}
    </span>
);

const SkillBar = ({ name, percent }) => (
    <div>
        <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">{name}</span>
            <span className="font-medium text-violet-600">{percent}%</span>
        </div>
        <div className="mt-1.5 h-1.5 rounded-full bg-gray-100">
            <div
                className="h-1.5 rounded-full bg-violet-600"
                style={{ width: `${percent}%` }}
            />
        </div>
    </div>
);

const QuestionReview = ({ q, tag, answer, feedback, score }) => (
    <div className="rounded-lg border border-gray-100 p-4">
        <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-medium text-gray-900">{q}</p>
            <ScoreTag label={tag} />
        </div>
        <p className="mt-2 text-sm text-gray-500">
            <span className="font-medium text-gray-700">User answer:</span> {answer}
        </p>
        <p className="mt-1 text-sm text-gray-500">
            <span className="font-medium text-gray-700">AI feedback:</span>{" "}
            {feedback}
        </p>
        <p className="mt-2 text-sm font-medium text-violet-600">Score: {score}</p>
    </div>
);

const RecommendationRow = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-start gap-3 rounded-lg border border-gray-100 p-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <Icon size={16} />
        </span>
        <div>
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="mt-0.5 text-xs text-gray-400">{subtitle}</p>
        </div>
    </div>
);

/* ---------- data ---------- */

const skills = [
    { name: "React", percent: 90 },
    { name: "JavaScript", percent: 78 },
    { name: "HTML/CSS", percent: 95 },
    { name: "Problem Solving", percent: 82 },
    { name: "Communication", percent: 88 },
];

const strengths = [
    "Strong React fundamentals",
    "Good problem-solving approach",
    "Clear communication",
    "Logical explanations",
];

const improvements = [
    "Improve JavaScript closures",
    "Explain time complexity more clearly",
    "Give more practical examples",
];

const questionReviews = [
    {
        q: "Q1: Tell me about yourself.",
        tag: "Excellent",
        answer: "I'm a frontend developer focused on React, accessibility, and performance...",
        feedback: "Clear structure and strong confidence. Add one measurable achievement.",
        score: "9/10",
    },
    {
        q: "Q2: Explain closures in JavaScript.",
        tag: "Good",
        answer: "A closure is when a function remembers variables from its outer scope...",
        feedback: "Correct concept, but the explanation could include a practical example.",
        score: "7/10",
    },
    {
        q: "Q3: How do you handle difficult feedback?",
        tag: "Average",
        answer: "I listen carefully, ask clarifying questions, and apply the feedback...",
        feedback: "Good mindset. Expand on a real example and outcome.",
        score: "6/10",
    },
];

const recommendations = [
    {
        icon: Code2,
        title: "Practice React Hooks",
        subtitle: "Strengthen state management and side effects.",
    },
    {
        icon: Repeat,
        title: "Review JavaScript Promises",
        subtitle: "Improve async reasoning and error handling.",
    },
    {
        icon: Layers,
        title: "Study System Design Basics",
        subtitle: "Build confidence in architecture discussions.",
    },
    {
        icon: MessageSquare,
        title: "Improve Behavioral Interview Answers",
        subtitle: "Use STAR format for cleaner storytelling.",
    },
];

const overallScore = 82;
const ringPercent = overallScore;

export default function InterviewResults() {
    const radius = 46;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (ringPercent / 100) * circumference;

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="mx-auto max-w-6xl space-y-4">
                {/* header */}
                <div className="flex items-start justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                            <CheckCircle2 size={18} />
                        </span>
                        <div>
                            <p className="text-xl font-bold text-gray-900">
                                Interview Completed Successfully 🎉
                            </p>
                            <p className="mt-0.5 text-sm text-gray-400">
                                Your interview has been analyzed by AI. Review your
                                performance below.
                            </p>
                        </div>
                    </div>
                    <span className="whitespace-nowrap rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                        Excellent
                    </span>
                </div>

                {/* overall score + performance stats */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {/* overall score */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <CardTitle
                            title="Overall Score"
                            subtitle="Great work! Keep practicing to become interview-ready."
                        />
                        <div className="mt-6 flex items-center gap-6">
                            <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
                                <svg width={112} height={112} className="-rotate-90">
                                    <circle
                                        cx={56}
                                        cy={56}
                                        r={radius}
                                        fill="none"
                                        stroke="#EDE9FE"
                                        strokeWidth={8}
                                    />
                                    <circle
                                        cx={56}
                                        cy={56}
                                        r={radius}
                                        fill="none"
                                        stroke="#7C3AED"
                                        strokeWidth={8}
                                        strokeLinecap="round"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={offset}
                                    />
                                </svg>
                                <div className="absolute flex flex-col items-center">
                                    <span className="text-2xl font-bold text-violet-600">
                                        {overallScore}
                                    </span>
                                    <span className="text-xs text-gray-400">/ 100</span>
                                </div>
                            </div>
                            <div>
                                <span className="inline-flex rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-600">
                                    Performance Level
                                </span>
                                <p className="mt-1.5 text-lg font-semibold text-gray-900">
                                    Excellent
                                </p>
                                <p className="mt-1 text-sm text-gray-400">
                                    Great work! Keep practicing to become interview-ready.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* performance statistics */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <CardTitle
                            title="Performance Statistics"
                            subtitle="Key metrics from your interview session"
                        />
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <MetricBox icon={ClipboardList} value="10" label="Questions Answered" />
                            <MetricBox icon={Target} value="8" label="Correct Answers" />
                            <MetricBox icon={Clock} value="42s" label="Average Response Time" />
                            <MetricBox icon={Timer} value="18m" label="Interview Duration" />
                        </div>
                    </div>
                </div>

                {/* AI feedback + skills analysis */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {/* AI feedback */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <CardTitle
                            title="AI Feedback"
                            subtitle="Strengths, improvement areas, and summary"
                        />
                        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="rounded-lg bg-emerald-50/60 p-4">
                                <p className="flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                                    <ThumbsUp size={14} />
                                    Strengths
                                </p>
                                <ul className="mt-2 space-y-1.5">
                                    {strengths.map((s) => (
                                        <li key={s} className="text-sm text-gray-600">
                                            <span className="mr-1.5 text-emerald-500">✓</span>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-lg bg-amber-50/60 p-4">
                                <p className="flex items-center gap-1.5 text-sm font-medium text-amber-600">
                                    <AlertTriangle size={14} />
                                    Areas for Improvement
                                </p>
                                <ul className="mt-2 space-y-1.5">
                                    {improvements.map((s) => (
                                        <li key={s} className="text-sm text-gray-600">
                                            <span className="mr-1.5 text-amber-500">•</span>
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-3 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
                            <span className="font-semibold text-gray-900">AI Summary:</span>{" "}
                            You demonstrated solid frontend development knowledge with
                            particularly strong React fundamentals. Continue improving
                            advanced JavaScript concepts and provide more real-world
                            examples during explanations.
                        </div>
                    </div>

                    {/* skills analysis */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <CardTitle
                            title="Skills Analysis"
                            subtitle="Progress across core competencies"
                        />
                        <div className="mt-5 space-y-4">
                            {skills.map((s) => (
                                <SkillBar key={s.name} {...s} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* question review + recommendations */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <CardTitle
                            title="Question-by-Question Review"
                            subtitle="Detailed feedback for each question"
                        />
                        <div className="mt-4 space-y-3">
                            {questionReviews.map((q) => (
                                <QuestionReview key={q.q} {...q} />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <CardTitle
                            title="Recommended Learning"
                            subtitle="Suggested next steps to improve"
                        />
                        <div className="mt-4 space-y-3">
                            {recommendations.map((r) => (
                                <RecommendationRow key={r.title} {...r} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
