"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { partners } from "@/lib/data.json"
import { cn } from "@/lib/utils";

export default function PartnersPage() {

    const offsets = [
        "translate-y-0",
        "translate-y-24",
        "translate-y-24",
        "-translate-y-10",
        "translate-y-20",
        "translate-y-20",
        "-translate-y-12",
        "translate-y-16",
        "translate-y-16",
        "-translate-y-8",
    ];

    const partnerRows = [
        [partners[0]],
        [partners[1], partners[2]],
        [partners[3]],
        [partners[4], partners[5]],
        [partners[6]],
        [partners[7], partners[8]],
        [partners[9]],
    ];
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-sky-50 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-extrabold text-blue-600 mb-4">Partners</h1>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-6">Collaborating with leading blockchain companies and organizations.</p>
                </div>
            </section>

            {/* Partners photo */}
            <section className="bg-white py-24">
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-6">
                        {partnerRows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={cn(
                                    "flex justify-center",
                                    row.length === 2 && "gap-70",
                                    row.length === 1 && "gap-0"
                                )}
                            >
                                {row.map((partner) => (
                                    <div
                                        key={partner.name}
                                        className="flex flex-col items-center"
                                    >
                                        <div 
                                            className="relative w-44 h-44 overflow-hidden"
                                            style={{
                                                clipPath: "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                                            }}
                                        >
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div
                                            className="mt-3 rounded-xl px-4 py-1 font-medium"
                                            style={{
                                                backgroundColor: partner.bgColor,
                                                color: partner.textColor,
                                            }}
                                        >
                                            {partner.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-sky-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
                        Want to partner with us?
                    </h2>
                    <p className="text-xl text-blue-700 mb-8 max-w-2xl mx-auto">
                        Let's build the future of blockchain education together
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-6 text-lg rounded-full"
                    >
                        <a href="/contact">Contact Us</a>
                    </Button>
                </div>
            </section>
        </main>
    )
}
