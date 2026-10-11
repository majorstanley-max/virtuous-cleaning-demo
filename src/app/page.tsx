"use client";



import { useEffect, useState } from "react";

import ChatAssistant from "./components/ChatAssistant";



const PHONE = "+12819022796";

const PHONE_DISPLAY = "(281) 902-2796";

const EMAIL = "virtuouspww@gmail.com";

const HERO_IMAGE =

  "https://cdn.phototourl.com/member/2026-10-10-b68000dd-891e-4182-9247-b28207240625.jpg";

const LOGO_IMAGE =

  "https://cdn.phototourl.com/member/2026-10-10-ce0fcb8a-0c5b-4b95-8d70-d4b93a767f7a.jpg";



const services = [

  {

    number: "01",

    title: "Commercial Window Cleaning",

    description:

      "Professional window cleaning for offices, storefronts, and commercial properties.",

    image:

      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",

  },

  {

    number: "02",

    title: "Residential Window Cleaning",

    description:

      "Bring more natural light into your home with a clearer, brighter view.",

    image:

      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",

  },

  {

    number: "03",

    title: "Pressure Washing",

    description:

      "Refresh exterior surfaces and improve the appearance of your property.",

    image:

      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=85",

  },

];



export default function Home() {

  const [showHeroImage, setShowHeroImage] = useState(false);









  useEffect(() => {

    const timer = window.setTimeout(() => setShowHeroImage(true), 1500);

    return () => window.clearTimeout(timer);

  }, []);



  return (

    <main className="min-h-screen bg-white text-slate-900">

      <div className="bg-slate-950 px-5 py-3 text-sm text-white">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">

          <p>Professional Window Cleaning &amp; Pressure Washing</p>

          <a href={`tel:${PHONE}`} className="font-semibold transition hover:text-cyan-300">

            Call Us: {PHONE_DISPLAY}

          </a>

        </div>

      </div>



      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4">

          <a href="#home" className="flex items-center gap-3">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">


              <img src={LOGO_IMAGE} alt="Virtuous Pressure & Window Washing logo" className="h-full w-full object-contain" />

            </div>

            <div>

              <p className="text-base font-extrabold tracking-tight sm:text-lg">VIRTUOUS</p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-xs">

                Pressure &amp; Window Washing

              </p>

            </div>

          </a>



          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">

            <a href="#home" className="hover:text-cyan-700">Home</a>

            <a href="#services" className="hover:text-cyan-700">Services</a>

            <a href="#about" className="hover:text-cyan-700">About</a>

            <a href="#reviews" className="hover:text-cyan-700">Why Choose Us</a>

            <a href="#contact" className="hover:text-cyan-700">Contact</a>

          </nav>



          <a href="#contact" className="hidden rounded-full bg-cyan-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-800 sm:inline-flex">

            Get a Free Quote

          </a>



          <details className="relative lg:hidden">

            <summary className="cursor-pointer list-none rounded-lg border border-slate-300 px-4 py-2 font-semibold">Menu ☰</summary>

            <nav className="absolute right-0 top-12 flex w-56 flex-col gap-1 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">

              <a href="#home" className="rounded-lg p-3 hover:bg-slate-100">Home</a>

              <a href="#services" className="rounded-lg p-3 hover:bg-slate-100">Services</a>

              <a href="#about" className="rounded-lg p-3 hover:bg-slate-100">About</a>

              <a href="#reviews" className="rounded-lg p-3 hover:bg-slate-100">Why Choose Us</a>

              <a href="#contact" className="rounded-lg p-3 hover:bg-slate-100">Contact / Quote</a>

            </nav>

          </details>

        </div>

      </header>



      <section id="home" className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-slate-950 text-white sm:min-h-[700px]">

        <div

          aria-hidden="true"

          className={`absolute inset-0 -z-20 bg-cover bg-center transition-opacity duration-700 ${showHeroImage ? "opacity-100" : "opacity-0"}`}

          style={showHeroImage ? { backgroundImage: `url("${HERO_IMAGE}")` } : undefined}

        />

        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/35" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">

          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">

              <span className="h-2 w-2 rounded-full bg-cyan-400" />

              A clearer view starts here

            </div>

            <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">

              A clearer view.

              <span className="mt-2 block text-cyan-300">A better first impression.</span>

            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">

              Professional window cleaning and pressure washing to help your property look its best. Reliable service, attention to detail, and results you can see.

            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a href="#contact" className="rounded-full bg-cyan-600 px-7 py-4 font-bold text-white transition hover:bg-cyan-500">Request a Free Quote →</a>

              <a href="#services" className="rounded-full border border-white/60 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950">Explore Our Services</a>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-200">

              <span>✓ Residential Properties</span>

              <span>✓ Commercial Properties</span>

              <span>✓ Exterior Cleaning</span>

            </div>

          </div>



          <div className="rounded-3xl border border-white/20 bg-slate-950/65 p-7 shadow-2xl backdrop-blur-md sm:p-9">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Let&apos;s get started</p>

            <h2 className="mt-4 text-3xl font-extrabold">Your property deserves a better shine.</h2>

            <p className="mt-4 leading-7 text-slate-300">Tell us what needs cleaning. We&apos;ll help you take the next step toward a cleaner property.</p>

            <div className="mt-7 space-y-3">

              <a href="#contact" className="flex w-full items-center justify-between rounded-xl bg-white px-5 py-4 font-bold text-slate-950 transition hover:bg-cyan-100">Request an Estimate <span>→</span></a>

              <a href={`tel:${PHONE}`} className="flex w-full items-center justify-between rounded-xl border border-white/25 px-5 py-4 font-bold transition hover:bg-white/10">Call {PHONE_DISPLAY} <span>↗</span></a>

            </div>

            <p className="mt-5 text-xs leading-5 text-slate-400">Contact us to discuss your property and requirements.</p>

          </div>

        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-cyan-300 to-transparent" />

      </section>



      <section className="border-b border-slate-200 bg-slate-50">

        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-3">

          {[

            ["✦", "Attention to Detail", "Careful, thorough cleaning."],

            ["◷", "Convenient Scheduling", "Discuss a time that works for you."],

            ["✓", "Professional Service", "A cleaner look for your property."],

          ].map(([symbol, title, description]) => (

            <div key={title} className="flex items-center gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-2xl">{symbol}</div>

              <div><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm text-slate-600">{description}</p></div>

            </div>

          ))}

        </div>

      </section>



      <section id="services" className="px-5 py-20 sm:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-700">What We Do</p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Cleaning solutions for a better-looking property</h2>

            <p className="mt-5 leading-7 text-slate-600">From windows to exterior surfaces, explore services designed to help maintain the appearance of your home or business.</p>

          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <article key={service.number} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

                <div className="relative h-60 overflow-hidden bg-slate-200">

                  {/* eslint-disable-next-line @next/next/no-img-element */}

                  <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />

                  <span className="absolute left-5 top-5 rounded-lg bg-white px-3 py-2 text-sm font-black text-cyan-800">{service.number}</span>

                </div>

                <div className="p-7">

                  <h3 className="text-xl font-extrabold">{service.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">{service.description}</p>

                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-800 transition hover:gap-3">Ask About This Service <span>→</span></a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      <section id="about" className="bg-slate-50 px-5 py-20 sm:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div className="relative">

            <div className="overflow-hidden rounded-3xl bg-slate-200">

              {/* eslint-disable-next-line @next/next/no-img-element */}

              <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85" alt="Modern property exterior" className="h-[350px] w-full object-cover sm:h-[500px]" />

            </div>

            <div className="relative mx-5 -mt-12 rounded-2xl bg-cyan-800 p-6 text-white shadow-xl sm:absolute sm:-bottom-7 sm:right-[-20px] sm:mt-0 sm:max-w-xs">

              <p className="text-2xl font-black">A brighter outlook</p>

              <p className="mt-2 text-sm leading-6 text-cyan-50">Helping properties make a clean, professional first impression.</p>

            </div>

          </div>

          <div className="lg:pl-8">

            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-700">About Virtuous</p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">We believe the little details make a big difference.</h2>

            <p className="mt-6 leading-8 text-slate-600">Clean windows and well-maintained exterior surfaces can transform the way a property looks and feels. Virtuous Pressure &amp; Window Washing focuses on helping residential and commercial customers maintain their properties.</p>

            <p className="mt-4 leading-8 text-slate-600">Every property is different. Contact us to discuss your cleaning needs, property type, and preferred schedule so we can help you find the right service.</p>

            <ul className="mt-7 space-y-4">

              {["Services for residential and commercial properties", "Clear communication about your cleaning requirements", "A convenient way to request a quote"].map((item) => (

                <li key={item} className="flex items-start gap-3"><span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-800">✓</span><span className="font-semibold">{item}</span></li>

              ))}

            </ul>

            <a href="#contact" className="mt-9 inline-flex rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-cyan-800">Talk to Our Team →</a>

          </div>

        </div>

      </section>



      <section id="reviews" className="px-5 py-20 sm:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-700">The Virtuous Difference</p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">A straightforward experience from start to finish</h2>

            <p className="mt-5 leading-7 text-slate-600">A good service experience starts with clear communication and a plan that fits your property.</p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[

              ["01", "Tell Us What You Need", "Share your property type, cleaning requirements, and preferred timing."],

              ["02", "Discuss Your Quote", "Contact the team to discuss the job and the details needed for an estimate."],

              ["03", "Plan Your Service", "Confirm the service details and arrange a suitable appointment with the team."],

            ].map(([number, title, description]) => (

              <div key={number} className="rounded-2xl border border-slate-200 p-7">

                <div className="text-3xl">{number}</div><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{description}</p>

              </div>

            ))}

          </div>

          <div className="mt-10 rounded-2xl bg-slate-950 px-7 py-9 text-white sm:px-12 sm:py-12">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Have a property to clean?</p>

            <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

              <h3 className="max-w-2xl text-2xl font-black sm:text-3xl">Let&apos;s talk about making your property shine.</h3>

              <a href="#contact" className="inline-flex shrink-0 justify-center rounded-full bg-cyan-600 px-7 py-4 font-bold transition hover:bg-cyan-500">Get a Quote →</a>

            </div>

          </div>

        </div>

      </section>



      <section id="feedback" className="bg-slate-950 px-5 py-20 text-white sm:py-28">

        <div className="mx-auto max-w-3xl">

          <div className="text-center">

            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-300">Customer Feedback</p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Your experience matters to us.</h2>

            <p className="mt-5 leading-7 text-slate-300">Have you used our window cleaning or pressure washing services? We would love to hear about your experience.</p>

          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
            <p className="leading-7 text-slate-200">Our feedback inbox is being set up. Please call our team to share your experience for now.</p>
            <a href={`tel:${PHONE}`} className="mt-6 inline-flex rounded-full bg-cyan-600 px-7 py-4 font-bold text-white transition hover:bg-cyan-500">Call Us: {PHONE_DISPLAY}</a>
          </div>

        </div>

      </section>



      <section id="contact" className="scroll-mt-28 bg-slate-50 px-5 py-20 sm:py-28">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">

          <div>

            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-cyan-700">Contact Us</p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Let&apos;s discuss your next cleaning project.</h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">Complete the request form and we&apos;ll send your enquiry to the Virtuous team.</p>

            <div className="mt-9 space-y-5">

              <a href={`tel:${PHONE}`} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-500"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl">☎</span><span><span className="block text-sm text-slate-500">Give us a call</span><span className="mt-1 block font-bold">{PHONE_DISPLAY}</span></span></a>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-cyan-500"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-xl">✉</span><span><span className="block text-sm text-slate-500">Send an email</span><span className="mt-1 block break-all font-bold">{EMAIL}</span></span></a>

            </div>

          </div>



          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
            <h3 className="text-2xl font-black">Request a Free Quote</h3>
            <p className="mt-3 leading-7 text-slate-600">Our online enquiry service is temporarily being set up. Please call us to discuss your property and request a quote.</p>
            <a href={`tel:${PHONE}`} className="mt-6 flex w-full items-center justify-center rounded-full bg-cyan-700 px-7 py-4 text-center font-bold text-white transition hover:bg-cyan-800">Call {PHONE_DISPLAY} to Request a Quote</a>
            <p className="mt-4 text-xs leading-5 text-slate-500">Online enquiries will be available once the company confirms its official email address.</p>
          </div>

        </div>

      </section>



      <section className="bg-cyan-800 px-5 py-16 text-white sm:py-20">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">

          <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">Ready for a fresh start?</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Make your property shine.</h2></div>

          <a href="#contact" className="rounded-full bg-white px-7 py-4 font-bold text-cyan-900 transition hover:bg-cyan-100">Request Your Quote →</a>

        </div>

      </section>



      <footer className="bg-slate-950 px-5 py-12 text-white">

        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">

          <div><a href="#home" className="text-xl font-black tracking-tight">VIRTUOUS</a><p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Pressure &amp; Window Washing</p><p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">Professional window cleaning and pressure washing for residential and commercial properties.</p></div>

          <div><h3 className="font-bold">Quick Links</h3><div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-400"><a href="#home" className="hover:text-white">Home</a><a href="#services" className="hover:text-white">Our Services</a><a href="#about" className="hover:text-white">About Us</a><a href="#contact" className="hover:text-white">Request a Quote</a></div></div>

          <div><h3 className="font-bold">Contact</h3><div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-400"><a href={`tel:${PHONE}`} className="hover:text-white">{PHONE_DISPLAY}</a><a href={`mailto:${EMAIL}`} className="break-all hover:text-white">{EMAIL}</a></div></div>

        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500"><p>© 2026 Virtuous Pressure and Window Washing. All rights reserved.</p><p className="mt-2 text-xs">Website demonstration. Confirm business details and service claims with the business owner before publishing.</p></div>

      </footer>



      <a href={`tel:${PHONE}`} aria-label="Call Virtuous Pressure and Window Washing" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-cyan-700 px-5 py-4 font-bold text-white shadow-2xl transition hover:bg-cyan-800 sm:hidden">☎ Call Us</a>

      <ChatAssistant />

    </main>

  );

}
