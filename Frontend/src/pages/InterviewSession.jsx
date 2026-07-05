import React, { useState } from "react";
import {
  Bot,
  Clock,
  LogOut,
  X,
  Save,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  Briefcase,
  BarChart3,
} from "lucide-react";

/* ---------- shared bits ---------- */

const Caption = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
    {children}
  </p>
);

const DetailBox = ({ label, children }) => (
  <div className="rounded-lg bg-gray-50 px-4 py-3">
    <Caption>{label}</Caption>
    <div className="mt-1 text-sm font-medium text-gray-900">{children}</div>
  </div>
);

const MetricBox = ({ label, icon: Icon, value, valueClassName }) => (
  <div className="rounded-lg bg-gray-50 px-4 py-3">
    <div className="flex items-center gap-1.5 text-xs text-gray-400">
      {Icon && <Icon size={12} />}
      {label}
    </div>
    <p className={`mt-1 text-xl font-semibold ${valueClassName ?? "text-gray-900"}`}>
      {value}
    </p>
  </div>
);

const CardHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-center gap-3">
    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
      <Icon size={16} />
    </span>
    <div>
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  </div>
);

/* ---------- data ---------- */

const totalQuestions = 10;
const currentQuestion = 3;
const progressPercent = Math.round((currentQuestion / totalQuestions) * 100);
const maxChars = 1500;

/* ---------- main ---------- */

export default function InterviewSession() {
  const [answer, setAnswer] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="mx-auto max-w-6xl space-y-4">
        {/* top bar */}
        <div className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
              <Bot size={17} />
            </span>
            <div>
              <p className="text-sm font-semibold text-gray-900">InterviewAI</p>
              <p className="text-xs text-gray-400">Active interview session</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm font-semibold text-gray-900">
              Frontend Developer Interview
            </p>
            <p className="text-xs text-gray-400">
              Technical Interview &middot; Medium
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700">
              <Clock size={14} className="text-gray-400" />
              00:15:32
            </span>
            <button className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-sm font-medium text-red-500 hover:bg-red-50">
              <LogOut size={14} />
              Exit Interview
            </button>
          </div>
        </div>

        {/* progress bar */}
        <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
          <span className="whitespace-nowrap rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">
            Question {currentQuestion} of {totalQuestions}
          </span>
          <div className="h-2 flex-1 rounded-full bg-gray-100">
            <div
              className="h-2 rounded-full bg-violet-600"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="whitespace-nowrap text-sm text-gray-500">
            {progressPercent}% Completed
          </span>
        </div>

        {/* content grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_300px]">
          {/* main column */}
          <div className="space-y-4">
            {/* question card */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-white">
                  <Bot size={26} />
                </span>
                <span className="mt-2 rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-600">
                  AI
                </span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  AI Interviewer
                </p>
              </div>

              <div className="relative mt-4 rounded-xl bg-violet-50/60 p-4">
                <p className="text-sm font-medium text-gray-900">
                  Explain the Virtual DOM in React and why it improves
                  performance.
                </p>
                <div className="mt-3 flex gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300 [animation-delay:0.15s]" />
                </div>
              </div>
            </div>

            {/* answer card */}
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">Your Answer</p>
                <p className="text-xs text-gray-400">
                  {answer.length} / {maxChars} characters
                </p>
              </div>

              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value.slice(0, maxChars))}
                placeholder="Type your answer here..."
                rows={7}
                className="mt-3 w-full resize-none rounded-lg border border-gray-200 p-3 text-sm text-gray-900 placeholder-gray-400 outline-none focus:border-violet-300"
              />

              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => setAnswer("")}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <X size={14} />
                  Clear
                </button>
                <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  <Save size={14} />
                  Save Draft
                </button>
              </div>
            </div>

            {/* navigation */}
            <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <button
                disabled
                className="flex items-center gap-1.5 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-400"
              >
                <ChevronLeft size={14} />
                Previous Question
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <SkipForward size={14} />
                Skip Question
              </button>
              <button className="flex items-center gap-1.5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-violet-700">
                Next Question
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* sidebar */}
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <CardHeader
                icon={Briefcase}
                title="Interview Details"
                subtitle="Session context and configuration"
              />

              <div className="mt-4 space-y-3">
                <DetailBox label="Role">Frontend Developer</DetailBox>
                <DetailBox label="Experience">Intermediate (2-4 Years)</DetailBox>
                <DetailBox label="Type">Technical Interview</DetailBox>
                <DetailBox label="Difficulty">
                  <span className="inline-flex rounded-md bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                    Medium
                  </span>
                </DetailBox>
                <DetailBox label="Questions Remaining">
                  <span className="text-violet-600">7 remaining</span>
                </DetailBox>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <CardHeader
                icon={BarChart3}
                title="Live Performance"
                subtitle="Real-time session metrics"
              />

              <div className="mt-4 space-y-3">
                <MetricBox
                  label="Questions Answered"
                  value="2"
                  valueClassName="text-violet-600"
                />
                <MetricBox label="Avg. Response Length" value="320 words" />
                <MetricBox label="Time Spent" icon={Clock} value="04:28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
