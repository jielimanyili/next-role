import { Briefcase, CheckSquare, FileText, Sparkles } from "lucide-react";

const cards = [
  {
    title: "Applications",
    value: "0",
    hint: "Track roles from drafting to submitted.",
    icon: Briefcase,
  },
  {
    title: "Todos",
    value: "0",
    hint: "Focus this week and follow up on time.",
    icon: CheckSquare,
  },
  {
    title: "Materials",
    value: "0",
    hint: "Store resume and cover letter variants.",
    icon: FileText,
  },
  {
    title: "AI Runs",
    value: "0 / 20",
    hint: "Daily usage cap scaffold is in place.",
    icon: Sparkles,
  },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <header className="space-y-2">
        <p className="text-sm font-medium text-primary">NextRole</p>
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Week 1 foundation complete. CRUD and auth actions are the next milestone.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="rounded-xl border bg-card p-4 text-card-foreground">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium text-muted-foreground">{card.title}</h2>
              <card.icon className="size-4 text-primary" />
            </div>
            <p className="text-2xl font-semibold tracking-tight">{card.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{card.hint}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
