"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TeamLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex min-h-screen flex-col">
            <Navigation />
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
                        <h1 className="font-serif text-primary text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
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
                                        src="/johnadek1.jpg"
                                        alt="Johnadek Avatar"
                                    />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">John ADEKUNJO</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <li>
                                                <a
                                                    href="https://x.com/@Johnadek_"
                                                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                                                >
                                                    <img className="w-6 h-6" src="./xlogo.png" alt="" />
                                                </a>
                                            </li>

                                            <li>
                                                <a href="https://www.linkedin.com/in/john-adekunjo-6757271b5/">                                                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.047c.476-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.064 2.063-2.064 1.14 0 2.063.926 2.063 2.064 0 1.139-.923 2.065-2.063 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" clipRule="evenodd" />
                                                </svg></a>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Thelma */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img
                                        className="mx-auto mb-4 w-36 h-36 rounded-full"
                                        src="/thelma1.jpg"
                                        alt="Thelma Avatar"
                                    />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Thelma OPURUM</a>
                                    </h3>

                                    <div className="flex flex-row items-center justify-center">
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <li>
                                                <a
                                                    href="https://x.com/@thelma_opurum"
                                                    className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                                                >
                                                    <img className="w-6 h-6" src="./xlogo.png" alt="" />


                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Blessing */}
                                <div className="text-center text-gray-500 dark:text-gray-400 max-md:col-span-2 max-md:flex max-md:justify-center">
                                    <div>
                                        <img
                                            className="mx-auto mb-4 w-36 h-36 rounded-full"
                                            src="blessing1.jpg"
                                            alt="Blessing Avatar"
                                        />
                                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                            <a href="#">Blessing OLUWABAMIDELE</a>
                                        </h3>
                                        <div className="flex flex-row items-center justify-center">
                                            <ul className="flex justify-center px-2 space-x-2">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                                                    >
                                                        <img className="w-6 h-6" src="./xlogo.png" alt="" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* COMMUNITY MODERATORS */}
                    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-4 text-center pt-8 pb-4">
                        <h1 className="font-serif text-primary text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                            Community Moderators
                        </h1>
                    </div>
                    {/* TEAM SECTION */}
                    <section className="container mx-auto mb-6">
                        <div className="pb-3 px-4 mx-auto max-w-screen-xl text-center py-2 lg:px-6">
                            <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full justify-content-center">
                                {/* Favour */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/favour.jpg" alt="Leslie Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Favour ABIDOYE-OLADEJO</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Lead C.M</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <li>
                                                <a href="https://x.com/@FavourAbidoye" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                    <img className="w-6 h-6" src="./xlogo.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://githubcom/Favour4712" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Acunetix */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="acunetix.png" alt="Joseph Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Precious ADEBISI</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Project Manager</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <li>
                                                <a href="https://x.com/@acunetixtech001" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                    <img className="w-6 h-6" src="./xlogo.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/devacunetixtech" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Maryam */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/teem12.jpg" alt="Michael Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Maryam TIJANI</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Female Guild Lead</p>
                                        <ul className="px-2">
                                            <li>
                                                <a href="https://x.com/@thetee_m" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                    <img className="w-6 h-6" src="./xlogo.png" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* CyberHackB */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="/jerrydam.jpg" alt="Jerry Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Jeremiah OYENIRAN</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Dev. Lead</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <li>
                                                <a href="https://x.com/@Jerydam00" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                    <img className="w-6 h-6" src="./xlogo.png" alt="" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://github.com/jerydam" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Herman */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="herman.jpg" alt="Neil Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Abdulhamid BAKARE</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Events Manager</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <li>
                                                <a href="https://x.com/@starkhubz" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                    <img className="w-6 h-6" src="./xlogo.png" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Trems */}
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <img className="mx-auto mb-4 w-36 h-36 rounded-full" src="trems.jpg" alt="Trems Avatar" />
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary dark:text-white">
                                        <a href="#">Tomiwa</a>
                                    </h3>
                                    <div className="flex flex-row items-center justify-center">
                                        <p>Design Lead</p>
                                        <ul className="flex justify-center px-2 space-x-2">
                                            <li>
                                                <a href="https://x.com/ @TommyTrems" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                                    <img className="w-6 h-6" src="./xlogo.png" alt="" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>
            <Footer />
        </div>
    )
}