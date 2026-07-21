import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
    Briefcase,
    ChevronDown,
    TrendingUp,
    Zap,
    BarChart2,
    Code2,
    Users,
    Shuffle,
    SlidersHorizontal,
    Hash,
    Clock,
    Sparkles,
    MessageSquare,
    BarChart3,
    FileText,
    Info,
    Play,
} from "lucide-react";

const SelectCard = ({ selected, onClick, icon: Icon, title, subtitle, accent = "violet" }) => {
    const accentClasses =
        accent === "violet"
            ? "border-violet-300 bg-violet-50"
            : "border-amber-300 bg-amber-50";
    return (
        <button
            onClick={onClick}
            className={`flex flex-1 font-semibold cursor-pointer flex-col items-center gap-1 rounded-lg border px-4 py-4 text-center transition-colors ${selected ? accentClasses : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
        >
            <Icon
                size={16}
                className={selected ? "text-violet-600" : "text-gray-800"}
            />
            <span
                className={`text-sm font-bold ${selected ? "text-gray-900" : "text-gray-600"
                    }`}
            >
                {title}
            </span>
            {subtitle && (
                <span className="text-xs text-gray-800">{subtitle}</span>
            )}
        </button>
    );
};

const SectionLabel = ({ icon: Icon, children }) => (
    <div className="mb-3 flex items-center gap-1.5 text-base font-bold uppercase tracking-wide text-gray-800">
        <Icon size={13} className="text-gray-800" />
        {children}
    </div>
);

const FeatureCard = ({ icon: Icon, label }) => (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3">
        <Icon size={15} className="text-violet-600" />
        <span className="text-sm font-medium text-gray-900">{label}</span>
    </div>
);

const experienceLevels = [
    { key: "beginner", title: "Beginner", subtitle: "0-1 Years", icon: BarChart2 },
    { key: "intermediate", title: "Intermediate", subtitle: "2-4 Years", icon: TrendingUp },
    { key: "advanced", title: "Advanced", subtitle: "5+ Years", icon: Zap },
];

const rounds = [
    {
        title: "Coding Round",
        subtitle: "DSA & Problem Solving",
        icon: Shuffle,
    },
    {
        title: "Technical Round",
        subtitle: "Algorithms & system design",
        icon: Code2,
    },
    {
        title: "HR Round",
        subtitle: "Behavioral & culture fit",
        icon: Users,
    },
];

const difficulties = ["Easy", "Medium", "Hard"];

const roles = ["Frontend Developer", "Backend Developer", "Data Analyst"]

export default function Interview() {
    const [role, setRole] = useState("Frontend Developer");
    const [experience, setExperience] = useState("intermediate");
    const [round, setRound] = useState("Coding Round");
    const [level, setLevel] = useState("Medium");
    const [numQuestions, setNumQuestions] = useState(10);
    const navigate = useNavigate();

    const API = import.meta.env.VITE_API_URL;

    const selectedTypeLabel =
        rounds.find((t) => t.key === round)?.title ?? "";

    const percent = ((numQuestions - 5) / (20 - 5)) * 100;

    const handleStartInterview = async () => {
        console.log(role, experience, round, level, numQuestions)
        if (!role || !experience || !round || !level || !numQuestions)
            return alert("Please provide the proper details");
        const response = await fetch(`${API}/interview/start-interview`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ role, round, level, numQuestions }),
            credentials: "include"
        })
        const data = await response.json();
        console.log(data.message)
        if (data.success) {
            {
                alert("Generating Questions")
                navigate(`/start-interview/${data.savedData._id}`);
            }
        }
        else {
            alert(data.message);
        }
    }

    return (
        <div className="bg-gray-50 p-12 px-6 md:px-54">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-3xl font-bold text-gray-900">
                    Start New Interview
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                    Configure your session and begin practicing.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
                    {/* main config card */}
                    <div className="space-y-6 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        {/* job role */}
                        <div>
                            <SectionLabel icon={Briefcase}>Job Role</SectionLabel>

                            <div className="relative">
                                <select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2 pr-10 text-sm font-semibold text-gray-900 focus:outline-none hover:bg-gray-50 cursor-pointer"
                                >
                                    {roles.map((item, idx) => (
                                        <option key={idx} value={item} className="bg-gray-50">{item}</option>
                                    ))}
                                </select>

                                <ChevronDown
                                    size={16}
                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-800"
                                />
                            </div>
                        </div>

                        {/* experience level */}
                        <div className="flex flex-col md:flex-row gap-3">
                            {experienceLevels.map((e) => (
                                <SelectCard
                                    key={e.key}
                                    icon={e.icon}
                                    title={e.title}
                                    subtitle={e.subtitle}
                                    selected={experience === e.key}
                                    onClick={() => setExperience(e.key)}
                                />
                            ))}
                        </div>

                        {/* interview Round type */}
                        <div>
                            <SectionLabel icon={Code2}>Interview Type</SectionLabel>
                            <div className="flex flex-col md:flex-row gap-3">
                                {rounds.map((t, key) => (
                                    <SelectCard
                                        key={key}
                                        icon={t.icon}
                                        title={t.title}
                                        subtitle={t.subtitle}
                                        selected={round === t.title}
                                        onClick={() => setRound(t.title)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* difficulty Level */}
                        <div>
                            <SectionLabel icon={SlidersHorizontal}>Difficulty Level</SectionLabel>
                            <div className="flex gap-3">
                                {difficulties.map((d) => {
                                    const selected = level === d;
                                    return (
                                        <button
                                            key={d}
                                            onClick={() => setLevel(d)}
                                            className={`rounded-full cursor-pointer border px-5 py-1.5 text-sm font-medium transition-colors ${selected
                                                ? "border-amber-300 bg-amber-50 text-amber-700"
                                                : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                                                }`}
                                        >
                                            {d}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* number of questions */}
                        <div>
                            <div className="mb-3 flex items-center justify-between">
                                <SectionLabel icon={Hash}>Number of Questions</SectionLabel>
                                <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">
                                    {numQuestions} Questions
                                </span>
                            </div>
                            <input
                                type="range"
                                min={5}
                                max={20}
                                step={1}
                                value={numQuestions}
                                onChange={(e) => setNumQuestions(Number(e.target.value))}
                                className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-violet-600"
                                style={{
                                    background: `linear-gradient(to right, #7C3AED ${percent}%, #E5E7EB ${percent}%)`,
                                }}
                            />
                            <div className="mt-2 flex justify-between text-xs text-gray-800">
                                <span>5</span>
                                <span>10</span>
                                <span>15</span>
                                <span>20</span>
                            </div>
                        </div>

                        {/* estimated duration */}
                        <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-600">
                            <Clock size={15} className="text-gray-800" />
                            Estimated Duration:{" "}
                            <span className="font-medium text-gray-900">~20 minutes</span>
                        </div>

                        {/* AI features preview */}
                        <div>
                            <SectionLabel icon={Sparkles}>AI Features Preview</SectionLabel>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                <FeatureCard icon={Sparkles} label="AI-generated questions" />
                                <FeatureCard icon={MessageSquare} label="Instant feedback" />
                                <FeatureCard icon={BarChart3} label="Performance analysis" />
                                <FeatureCard icon={FileText} label="Final interview report" />
                            </div>
                        </div>

                        {/* actions */}
                        <div className="flex gap-3 pt-2">
                            <button className="flex-1 cursor-pointer rounded-lg border border-gray-200 bg-white py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                                Cancel
                            </button>
                            <button className="flex cursor-pointer flex-1 items-center justify-center gap-1.5 rounded-lg bg-violet-600 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-violet-700" onClick={handleStartInterview}>
                                <Play size={14} />
                                Start Interview
                            </button>
                        </div>
                    </div>

                    {/* sidebar */}
                    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
                        <div className="flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                <Info size={15} />
                            </span>
                            <div>
                                <p className="text-sm font-bold text-gray-900">
                                    Session Overview
                                </p>
                            </div>
                        </div>
                        <p className="mt-2 text-sm text-gray-800">
                            A quick summary of your upcoming practice session.
                        </p>

                        <div className="mt-5 flex gap-3 border-t border-gray-100 pt-5">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                                <Sparkles size={15} />
                            </span>
                            <div>
                                <p className="text-sm font-medium text-gray-900">Smart setup</p>
                                <p className="mt-0.5 text-xs text-gray-800">
                                    Your selected role, difficulty, and interview type will
                                    shape the AI-generated questions.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 space-y-4 border-t border-gray-100 pt-5">
                            <div className="flex items-start gap-3">
                                <Briefcase size={14} className="mt-0.5 text-gray-800" />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-gray-800">
                                        Role
                                    </p>
                                    <p className="text-sm font-medium text-gray-900">{role}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Users size={14} className="mt-0.5 text-gray-800" />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-gray-800">
                                        Type
                                    </p>
                                    <p className="text-sm font-medium text-gray-900">{round}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={14} className="mt-0.5 text-gray-800" />
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide text-gray-800">
                                        Duration
                                    </p>
                                    <p className="text-sm font-medium text-gray-900">~20 minutes</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-5">
                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    Ready to begin?
                                </p>
                                <p className="mt-0.5 text-xs text-gray-800">
                                    Start when you feel prepared and focused.
                                </p>
                            </div>
                            <span className="whitespace-nowrap rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
                                {numQuestions} Questions
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
