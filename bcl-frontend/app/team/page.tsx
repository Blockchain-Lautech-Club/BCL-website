import Team from '@/components/team'

export default function TeamLayout() {

    return (
        <div className="flex min-h-screen flex-col">
            <main className="min-h-screen bg-gray-50">
                <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-12 sm:py-16">
                    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-2 text-center">
                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 sm:mb-6">
                            Meet the Builders
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
                            Our team is made up of passionate builders, innovators, and problem-solvers dedicated to exploring the endless various possibilities of blockchain technology.They are committed to fostering innovation, collaboration, and education within the ecosystem.
                        </p>
                    </div>
                </section>
                <section className="py-1">
                    <Team />
                </section>
            </main>
        </div>
    )
}