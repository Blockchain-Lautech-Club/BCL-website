"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

export default function TeamLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
                    {/* FOUNDERS */}
                    <div className="max-w-4xl mx-auto pt-6 px-2 sm:px-6 lg:px-4 text-center">
                        <h1 className="font-serif text-primary text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-8">
                            Founders
                        </h1>
                    </div>
                    {/* TEAM SECTION */}
                    <section className="container mt-4 mx-auto">
                        <div className="pb-3 px-4 mx-auto max-w-screen-xl text-center pt-4 pb-4 lg:px-6">
                            <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full justify-content-center">
                                {/* Johnadek */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img
                                        className="mx-auto mb-4 w-36 h-36 rounded-full"
                                        src="/team/johnAdekunjo.jpg"
                                        alt="Johnadek Avatar"
                                    />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">John ADEKUNJO</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <Link href="https://x.com/@Johnadek_" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <XIcon className="w-6 h-6" />
                                            </Link>
                                            <Link href="https://www.linkedin.com/in/john-adekunjo-6757271b5/" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <Linkedin className="w-6 h-6" />
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                {/* Thelma */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img
                                        className="mx-auto mb-4 w-36 h-36 rounded-full"
                                        src="/team/thelmaOpurum.jpg"
                                        alt="Thelma Avatar"
                                    />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Thelma OPURUM</a>
                                    </h3>

                                    <div className="flex flex-row items-center justify-center">
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <Link href="https://x.com/@thelma_opurum" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <XIcon className="w-6 h-6" />
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                {/* Blessing */}
                                <div className="text-center text-gray-500 dark:text-gray-400 max-md:col-span-2 max-md:flex max-md:justify-center">
                                    <div>
                                        <img
                                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                                            src="/team/blessingOluwabamidele.jpg"
                                            alt="Blessing Avatar"
                                        />
                                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                            <a href="#">Blessing OLUWABAMIDELE</a>
                                        </h3>
                                        <div className="flex flex-row items-center justify-center">
                                            <ul className="flex justify-center px-2 space-x-2">
                                                <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                    <XIcon className="w-6 h-6" />
                                                </Link>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* COMMUNITY MODERATORS */}
                    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-4 text-center pt-12 pb-10">
                        <h1 className="font-serif text-primary text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                            Community Moderators
                        </h1>
                    </div>
                    {/* TEAM SECTION */}
                    <section className="container mx-auto mb-6">
                        <div className="pb-3 px-4 mx-auto max-w-screen-xl text-center py-2 lg:px-6">
                            <div className="grid gap-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full justify-content-center">
                                {/* Favour */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/team/favourAbidoyeOadejo.jpg" alt="Favour Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Favour ABIDOYE-OLADEJO</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Lead C.M</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <Link href="https://x.com/@FavourAbidoye" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <XIcon className="w-6 h-6" />
                                            </Link>
                                            <Link href="https://githubcom/Favour4712" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <Github className="w-6 h-6" />
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                {/* Acunetix */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/team/preciousAdebisi.png" alt="Precious Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Precious ADEBISI</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Project Manager</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <Link href="https://x.com/@acunetixtech00" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <XIcon className="w-6 h-6" />
                                            </Link>
                                            <Link href="https://github.com/devacunetixtech" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <Github className="w-6 h-6" />
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                {/* Maryam */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/team/maryamTijani.jpg" alt="Maryam Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Maryam TIJANI</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Female Guild Lead</p>
                                        <ul className="px-2">
                                            <Link href="https://x.com/@thetee_m" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <XIcon className="w-6 h-6" />
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                {/* CyberHackB */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/team/jeremiahOyeniran.jpg" alt="Jeremiah Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Jeremiah OYENIRAN</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Dev. Lead</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <Link href="https://x.com/@Jerydam00" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <XIcon className="w-6 h-6" />
                                            </Link>
                                            <Link href="https://github.com/jerydam" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <Github className="w-6 h-6" />
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                                {/* Herman */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/team/abdulhamidBakare.jpg" alt="Abdulhamid Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Abdulhamid BAKARE</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Events Manager</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <Link href="https://x.com/@starkhubz" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <XIcon className="w-6 h-6" />
                                            </Link>
                                        </ul>
                                    </div>
                                </div>

                                {/* Trems */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/team/tomiwaKayode.jpg" alt="Tomiwa Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Tomiwa KAYODE</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Design Lead</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <Link href="https://x.com/ @TommyTrems" className="text-gray-600 hover:text-blue-600 transition-colors">
                                                <XIcon className="w-6 h-6" />
                                            </Link>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
        </div>
    )
}