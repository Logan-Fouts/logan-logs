import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "/src/app/components/NavBar.client";

const featuredProjects = [
  {
    slug: "contrib-cal-v2-commercial-partnership",
    title: "Contrib Cal V2",
    subtitle: "Open Source → Commercial Partnership with Elecrow",
    description:
      "A physical GitHub contribution tracker built with a Raspberry Pi Pico and NeoPixels. The V2 evolved from a personal project into a commercial collaboration with PCB manufacturer Elecrow.",
    tags: ["Python", "Hardware", "NeoPixels", "PCB Design"],
    imgSrc: "/contrib-cal.png",
    category: "Hardware",
    categoryColor: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    highlight: true,
  },
  {
    slug: "multi-method-ndi-detection-framework",
    title: "Multi-Method NDI Detection Framework",
    subtitle: "Bachelor's Thesis — Published Research",
    description:
      "A novel near-duplicate image detection system combining multiple algorithmic approaches for robust, high-accuracy results. Benchmarked against existing methods and published as my undergraduate thesis.",
    tags: ["Python", "Computer Vision", "Research", "ML"],
    imgSrc: "/thesis.png",
    category: "Research",
    categoryColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    highlight: false,
  },
  {
    slug: "meshtastic-safety-bot",
    title: "MeshBot",
    subtitle: "Safety Assistant for Areas Without Cell Service",
    description:
      "An autonomous safety assistant that runs over the Meshtastic mesh radio network. Designed for remote areas where cell coverage is unavailable, providing emergency notifications and location tracking.",
    tags: ["Python", "Meshtastic", "LoRa", "Networking"],
    imgSrc: "/meshtastic.jpg",
    category: "Hardware + Software",
    categoryColor: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    highlight: false,
  },
  {
    slug: "nuphy-linux-keyboard-control",
    title: "NuPhy Linux",
    subtitle: "USB HID Communication for Keyboard Control",
    description:
      "Reverse-engineered the USB HID protocol for NuPhy keyboards to enable full control on Linux — something the official software doesn't support. Built a custom Python library for sending lighting and macro commands directly over USB.",
    tags: ["Python", "USB HID", "Linux", "Reverse Engineering"],
    imgSrc: "/nuphy.png",
    category: "Linux / Hardware",
    categoryColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function FeaturedHero({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative rounded-2xl overflow-hidden border border-green-500/20 bg-gray-900/60 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent lg:hidden" />
        </div>
        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.categoryColor}`}
            >
              {project.category}
            </span>
            <span className="text-xs text-green-400 font-medium bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">
              ★ Featured
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
            {project.title}
          </h2>
          <p className="text-green-400 font-medium text-sm mb-4">
            {project.subtitle}
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-400 bg-gray-800 border border-gray-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link href={`/${project.slug}`}>
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition-all duration-200 text-sm w-fit hover:gap-3">
              View Project →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      className="rounded-xl border border-gray-800 hover:border-green-500/30 bg-gray-900/40 hover:bg-gray-900/70 transition-all duration-300 overflow-hidden group flex flex-col"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={project.imgSrc}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full border ${project.categoryColor}`}
          >
            {project.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <p className="text-green-400 text-xs font-medium mb-3">
          {project.subtitle}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-500 bg-gray-800/80 border border-gray-700/50 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/${project.slug}`}>
          <span className="text-green-400 hover:text-green-300 font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all duration-200">
            Read more →
          </span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Featured() {
  const [heroProject, ...restProjects] = featuredProjects;

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Highlighted Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A curated selection of my most impactful work — from published research to shipped products and commercial partnerships.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Hero card — most impressive project */}
          <FeaturedHero project={heroProject} />

          {/* Grid of remaining projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Want to see everything?</p>
          <Link href="/projects">
            <span className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-green-400 rounded-full transition-all duration-200 text-sm font-medium">
              View All Projects →
            </span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
