'use client'

import { useEffect } from 'react'
import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'

export default function Home() {
  useEffect(() => {
    const deck = new Reveal({
      hash: true,
      slideNumber: true,
      progress: true,
      controlsTutorial: false,
      transition: 'convex',
      backgroundTransition: 'concave',
      plugins: [Markdown],
    })
    deck.initialize()
  }, [])

  return (
    <>
      {/* SLIDE 1: TITLE */}
      <section
        className="flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url(/images/mooc-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-slate-50 text-6xl font-extrabold mb-4 drop-shadow-md animate-fade-in">
          MOOCs: A Path to Global Learning
        </h1>
        <p className="text-slate-200 text-2xl animate-fade-in-delay">
          Muhammed Celil Altiparmak 240126101047
        </p>
      </section>

      {/* SLIDE 2: INTRODUCTION */}
      <section className="bg-blue-900/80 p-16 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-center font-bold mb-8 text-slate-50">
          What Are MOOCs?
        </h2>
        <div className="grid grid-cols-2 gap-10 w-[80%] max-w-5xl">
          <div className="space-y-4">
            <p className="bg-blue-800/50 p-4 rounded-md text-slate-50 text-xl animate-slide-in">
              • Massive Open Online Courses
            </p>
            <p className="bg-blue-800/50 p-4 rounded-md text-slate-50 text-xl animate-slide-in-delay-1">
              • Accessible Worldwide
            </p>
            <p className="bg-blue-800/50 p-4 rounded-md text-slate-50 text-xl animate-slide-in-delay-2">
              • Often Free or Very Affordable
            </p>
            <p className="bg-blue-800/50 p-4 rounded-md text-slate-50 text-xl animate-slide-in-delay-3">
              • University-Level Quality
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/online-education.png"
              alt="Online Education"
              className="w-[300px] drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SLIDE 3: WHY MOOCS MATTER (NESTED SUB-SLIDES) */}
      <section>
        <section
          className="flex flex-col items-center justify-center bg-gray-800/80 p-16"
        >
          <h2 className="text-4xl text-slate-50 font-bold mb-4">
            Why MOOCs Matter
          </h2>
          <p className="text-slate-200 text-lg max-w-2xl text-center">
            MOOCs bring equitable and flexible education right to your fingertips.
            Dive deeper to learn more!
          </p>
        </section>
        <section className="bg-gray-900 p-16 flex items-center justify-center">
          <div className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-md animate-slide-in">
            <h3 className="text-2xl font-semibold text-slate-50 mb-4">
              Equitable Education
            </h3>
            <p className="text-slate-200 text-md">
              Accessible to anyone with an internet connection, bridging gaps in
              traditional education systems.
            </p>
          </div>
        </section>
        <section className="bg-gray-900 p-16 flex items-center justify-center">
          <div className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-md animate-slide-in">
            <h3 className="text-2xl font-semibold text-slate-50 mb-4">
              Lifelong Learning
            </h3>
            <p className="text-slate-200 text-md">
              Suitable for students, professionals, and hobbyists looking to
              continuously upgrade their skills.
            </p>
          </div>
        </section>
        <section className="bg-gray-900 p-16 flex items-center justify-center">
          <div className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-md animate-slide-in">
            <h3 className="text-2xl font-semibold text-slate-50 mb-4">
              Top Institutions & Experts
            </h3>
            <p className="text-slate-200 text-md">
              Courses from prestigious universities and industry leaders from all
              over the world.
            </p>
          </div>
        </section>
        <section className="bg-gray-900 p-16 flex items-center justify-center">
          <div className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-md animate-slide-in">
            <h3 className="text-2xl font-semibold text-slate-50 mb-4">
              Self-Paced Flexibility
            </h3>
            <p className="text-slate-200 text-md">
              Learn when it’s convenient, revisiting materials anytime to build
              mastery.
            </p>
          </div>
        </section>
      </section>

      {/* SLIDE 4: POPULAR PLATFORMS (NESTED SUB-SLIDES) */}
      <section>
        <section className="bg-gradient-to-r from-purple-900 to-indigo-900 p-16 flex flex-col items-center">
          <h2 className="text-slate-50 text-4xl font-bold mb-8 text-center">
            Popular MOOC Platforms
          </h2>
          <p className="text-slate-200 text-lg text-center max-w-2xl">
            Dive into the most well-known platforms that offer online courses
            across various topics and industries.
          </p>
        </section>
        <section className="bg-indigo-900 flex flex-col items-center justify-center p-16">
          <div className="bg-white/10 p-8 rounded-lg max-w-lg w-full animate-slide-in">
            <img
              src="/images/coursera-logo.png"
              alt="Coursera"
              className="mx-auto mb-4 h-16 w-auto"
            />
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 text-center">
              Coursera
            </h3>
            <p className="text-slate-200 text-center text-md">
              Collaborations with top global universities like Stanford, Yale,
              and Princeton.
            </p>
          </div>
        </section>
        <section className="bg-indigo-900 flex flex-col items-center justify-center p-16">
          <div className="bg-white/10 p-8 rounded-lg max-w-lg w-full animate-slide-in">
            <img
              src="/images/edx-logo.png"
              alt="edX"
              className="mx-auto mb-4 h-16 w-auto"
            />
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 text-center">
              edX
            </h3>
            <p className="text-slate-200 text-center text-md">
              Founded by MIT and Harvard, offering a range of high-level, free
              courses.
            </p>
          </div>
        </section>
        <section className="bg-indigo-900 flex flex-col items-center justify-center p-16">
          <div className="bg-white/10 p-8 rounded-lg max-w-lg w-full animate-slide-in">
            <img
              src="/images/udemy-logo.png"
              alt="Udemy"
              className="mx-auto mb-4 h-16 w-auto"
            />
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 text-center">
              Udemy
            </h3>
            <p className="text-slate-200 text-center text-md">
              Thousands of practical courses covering tech, business, and personal
              development.
            </p>
          </div>
        </section>
        <section className="bg-indigo-900 flex flex-col items-center justify-center p-16">
          <div className="bg-white/10 p-8 rounded-lg max-w-lg w-full animate-slide-in">
            <img
              src="/images/futurelearn-logo.png"
              alt="FutureLearn"
              className="mx-auto mb-4 h-16 w-auto"
            />
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 text-center">
              FutureLearn
            </h3>
            <p className="text-slate-200 text-center text-md">
              Based in Europe with global reach, featuring courses from respected
              universities.
            </p>
          </div>
        </section>
      </section>

      {/* SLIDE 5: BENEFITS (NESTED SUB-SLIDES) */}
      <section>
        <section className="bg-gray-900 p-16">
          <h2 className="text-slate-50 text-4xl font-bold text-center mb-4">
            Benefits of MOOCs
          </h2>
          <p className="text-slate-200 text-lg text-center max-w-2xl mx-auto">
            From flexibility to global networking, here’s why MOOCs continue to
            attract millions of learners.
          </p>
        </section>
        <section className="bg-gray-800 flex items-center justify-center p-16">
          <div
            className="border border-white/20 p-8 rounded-md bg-gray-700 max-w-xl animate-fade-in"
          >
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 flex items-center">
              <span className="text-3xl mr-2">⌛</span> Flexible Schedule
            </h3>
            <p className="text-slate-200 text-md">
              Study at your own pace and convenience, making learning truly
              adaptable to your lifestyle.
            </p>
          </div>
        </section>
        <section className="bg-gray-800 flex items-center justify-center p-16">
          <div
            className="border border-white/20 p-8 rounded-md bg-gray-700 max-w-xl animate-fade-in"
          >
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 flex items-center">
              <span className="text-3xl mr-2">💲</span> Affordable
            </h3>
            <p className="text-slate-200 text-md">
              Most courses are free or low-cost, removing financial barriers and
              opening doors to many.
            </p>
          </div>
        </section>
        <section className="bg-gray-800 flex items-center justify-center p-16">
          <div
            className="border border-white/20 p-8 rounded-md bg-gray-700 max-w-xl animate-fade-in"
          >
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 flex items-center">
              <span className="text-3xl mr-2">📖</span> Wide Array of Topics
            </h3>
            <p className="text-slate-200 text-md">
              From computer science to art history, find courses that match your
              goals and interests.
            </p>
          </div>
        </section>
        <section className="bg-gray-800 flex items-center justify-center p-16">
          <div
            className="border border-white/20 p-8 rounded-md bg-gray-700 max-w-xl animate-fade-in"
          >
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 flex items-center">
              <span className="text-3xl mr-2">🏆</span> Certificates & Degrees
            </h3>
            <p className="text-slate-200 text-md">
              Many MOOCs offer verifiable certificates or even degrees for a
              fraction of traditional costs.
            </p>
          </div>
        </section>
        <section className="bg-gray-800 flex items-center justify-center p-16">
          <div
            className="border border-white/20 p-8 rounded-md bg-gray-700 max-w-xl animate-fade-in"
          >
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 flex items-center">
              <span className="text-3xl mr-2">🚀</span> Career Advancement
            </h3>
            <p className="text-slate-200 text-md">
              Upskill or reskill to stay competitive in the job market.
            </p>
          </div>
        </section>
        <section className="bg-gray-800 flex items-center justify-center p-16">
          <div
            className="border border-white/20 p-8 rounded-md bg-gray-700 max-w-xl animate-fade-in"
          >
            <h3 className="text-2xl font-semibold text-slate-50 mb-2 flex items-center">
              <span className="text-3xl mr-2">🌎</span> Global Interaction
            </h3>
            <p className="text-slate-200 text-md">
              Network with learners and professionals around the world, expanding
              your cultural understanding.
            </p>
          </div>
        </section>
      </section>

      {/* SLIDE 6: STATISTICS */}
      <section className="bg-blue-800 p-16 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-slate-50 text-center mb-8">
          Key MOOC Statistics
        </h2>
        <div className="grid grid-cols-2 gap-10 items-center max-w-5xl w-full">
          <div className="space-y-8 text-center text-slate-50 text-xl">
            <div className="bg-blue-900/50 p-8 rounded-lg animate-pop">
              <p className="text-5xl font-bold mb-2">220M+</p>
              <p className="opacity-80">Learners Registered Worldwide</p>
            </div>
            <div className="bg-blue-900/50 p-8 rounded-lg animate-pop">
              <p className="text-5xl font-bold mb-2">640%</p>
              <p className="opacity-80">Enrollment Spike During COVID-19</p>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/mooc-stat.png"
              alt="MOOC Growth"
              className="h-64 w-auto rounded-md shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SLIDE 7: CONCLUSION */}
      <section
        className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 to-black p-16"
      >
        <h2 className="text-4xl text-center font-bold text-slate-50 mb-6">
          Thanks for listening.
        </h2>
        <p className="text-slate-100 text-lg mb-8 text-center max-w-2xl">
          Source: ChatGPT
        </p>
        
        <p className="text-slate-300 text-lg">Any questions?</p>
      </section>
    </>
  )
}