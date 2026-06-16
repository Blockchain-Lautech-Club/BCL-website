import { Binoculars, Settings } from "lucide-react";

const VisionMissionContent = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Blue diagonal triangle */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right top, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.5) 50%, transparent 50%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to left top, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.5) 50%, transparent 50%, transparent 100%)",
        }}
      />

      {/* Your content goes here */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="relative mx-auto max-w-4xl px-4">
          {/* Vision Card */}
          <div className="mx-auto mb-6 max-w-lg rounded-xl bg-[#1e3a8a] p-8 text-white shadow-lg">
            <div className="flex items-start gap-6">
              {/* Binoculars icon */}
              <div className="shrink-0">
                <Binoculars className="w-18 h-18 text-white/70 " />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold">Vision</h3>
                <p className="text-sm leading-relaxed text-blue-100">
                  To create a LAUTECH where every student is equipped with
                  blockchain knowledge and contributes to Nigeria's leadership
                  in Web3 innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="mx-auto max-w-lg rounded-xl bg-white p-8 shadow-lg border border-gray-100">
            <div className="flex items-start gap-6">
              {/* Gear icon */}
              <div className="shrink-0">
                <Settings className="w-16 h-16 text-blue-400" />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-blue-900">
                  Mission
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  To empower LAUTECH students with blockchain expertise, drive
                  innovation, and build a vibrant ecosystem for future
                  blockchain leaders through workshops, hackathons, and
                  collaborative projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="text-center mb-16">
        <div
          className="mx-auto mb-10 inline-flex rounded-full p-[1.5px]"
          style={{ background: "linear-gradient(to bottom, #7C3AED, #3B82F6)" }}
        >
          <div className="rounded-full bg-gray-100/90 px-6 py-2">
            <span className="text-sm font-semibold text-blue-600">
              Vision & Mission
            </span>
          </div>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          What we want to achieve and how we achieve it
        </p>
      </div>

      <VisionMissionContent />
    </section>
  );
}
