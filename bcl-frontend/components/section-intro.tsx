export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-6 py-1.5 text-sm text-blue-900">
      {children}
    </span>
  )
}

export function SectionIntro({
  pill,
  heading,
  subtext,
  align = "center",
}: {
  pill: string
  heading: string
  subtext: string
  align?: "center" | "left"
}) {
  if (align === "left") {
    return (
      <div className="mb-8 flex flex-col items-start gap-2">
        <Pill>{pill}</Pill>
        <h2 className="font-serif text-[32px] font-bold text-blue-900">{heading}</h2>
        <p className="text-gray-400">{subtext}</p>
      </div>
    )
  }

  return (
    <div className="mx-auto mb-8 flex max-w-xl flex-col items-center gap-2 text-center">
      <Pill>{pill}</Pill>
      <h2 className="font-serif text-2xl font-semibold text-blue-900">{heading}</h2>
      <p className="text-gray-600">{subtext}</p>
    </div>
  )
}
