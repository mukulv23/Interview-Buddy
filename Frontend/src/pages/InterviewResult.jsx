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
                        <div className="mt-4 grid gap-3">
                            <MetricBox icon={ClipboardList} value="10" label="Questions Answered" />
                            <MetricBox icon={Target} value="8" label="Correct Answers" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
