"use client";

import Image from "next/image";
import { useState } from "react";

const EMAIL = "woodproject33@gmail.com";
const COMPANY = "Projet Bois 33 / woodproject33";

// ——— IMAGES ———
// Place tous les fichiers dans /public/images
const gallery = [
  { file: "meuble-bois-sur-mesure.png", alt: "Meuble en bois sur mesure — réalisation artisanale" },
  { file: "escalier-sur-mesure-en-bois.png", alt: "Escalier sur mesure en bois — conception et fabrication" },
  { file: "meuble-sous-escalier-tirroir-ferme.png", alt: "Meuble sous escalier — tiroirs fermés" },
  { file: "terrasse-jardin-piscine.jpg", alt: "Terrasse en bois — jardin avec piscine" },
  { file: "terrasse-piscine-vue-zoom.png", alt: "Terrasse piscine — vue détaillée" },
  { file: "terrasse-en-plein-travaux.jpeg", alt: "Terrasse en construction — travaux en cours" },
  { file: "interieur-van.png", alt: "Aménagement intérieur van — optimisation espace" },
  { file: "cloture-jardin.png", alt: "Clôture de jardin en bois — réalisation extérieure" },
  // ➕ 9e image demandée : le meuble TV fini
  { file: "meuble-tele-reel-finis.png", alt: "Meuble TV suspendu fini — finitions premium" },
];

const beforeAfterProjects = [
  {
    title: "Meuble TV sur mesure",
    before: { file: "visu-3d-meuble-tele.jpeg", alt: "Visualisation 3D — meuble TV sur mesure" },
    after: { file: "meuble-tele-reel-finis.png", alt: "Meuble TV suspendu — finitions premium" },
  },
  {
    title: "Meuble sous escalier",
    before: { file: "visu-3d-des tirroir-sous-escalier.jpg", alt: "Visualisation 3D — tiroirs sous escalier" },
    after: { file: "meuble-sous-escalier-tirroir-ouvert.png", alt: "Meuble sous escalier — tiroirs ouverts" },
  },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <main className="min-h-screen">
      {/* ——— HEADER FIXE ——— */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/50">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt="Wood Project Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="font-semibold text-stone-900 text-sm md:text-base">{COMPANY}</span>
            </div>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#realisations" className="hover:text-amber-600 transition">Réalisations</a>
              <a href="#avant-apres" className="hover:text-amber-600 transition">Avant/Après</a>
              <a href="#savoir-faire" className="hover:text-amber-600 transition">Savoir-faire</a>
              <a href="#contact" className="rounded-lg bg-amber-600 px-4 py-2 text-white hover:bg-amber-700 transition">Contact</a>
            </nav>

            {/* Menu Burger Mobile */}
            <button 
              onClick={toggleMenu}
              className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center group"
            >
              <div className={`w-6 h-0.5 bg-stone-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-stone-700 mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-white backdrop-blur-md border-b border-stone-200/50 shadow-lg transition-opacity duration-200 ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' 
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="px-6 py-4 space-y-3">
            <a href="#realisations" onClick={closeMenu} className="block py-2 text-stone-700 hover:text-amber-600 transition">Réalisations</a>
            <a href="#avant-apres" onClick={closeMenu} className="block py-2 text-stone-700 hover:text-amber-600 transition">Avant/Après</a>
            <a href="#savoir-faire" onClick={closeMenu} className="block py-2 text-stone-700 hover:text-amber-600 transition">Savoir-faire</a>
            <a href="#contact" onClick={closeMenu} className="block py-3 px-4 mt-3 text-center rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* ——— HERO ——— */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-100 via-stone-50 to-white" />
        <div className="mx-auto max-w-7xl px-6 pt-32 pb-16 md:pt-36">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-block rounded-full bg-amber-200/70 px-3 py-1 text-xs font-medium text-stone-800">Menuiserie artisanale — 20+ ans d'expérience</span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {COMPANY}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-stone-700">
                L'art du bois allié à l'élégance et au design : agencement intérieur, mobilier sur mesure, cuisines, escaliers, terrasses, et aménagements spéciaux.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=Demande%20de%20devis%20-%20${encodeURIComponent(COMPANY)}`}
                  className="rounded-2xl bg-stone-900 px-6 py-3 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Demander un devis
                </a>
                <a href="#avant-apres" className="rounded-2xl border border-stone-300 px-6 py-3 hover:bg-stone-100 transition">Voir nos projets</a>
              </div>
              <p className="mt-3 text-sm text-stone-600">Contact : <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </div>
            <div className="relative mt-8 w-full max-w-xl md:mt-0">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-amber-900/10">
                <Image
                  src="/images/interieur-van.png"
                  alt="Aménagement intérieur van - Projet Bois 33"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— RÉALISATIONS / GALERIE ——— */}
      <section id="realisations" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">Réalisations</h2>
            <p className="mt-2 max-w-2xl text-stone-700">Une sélection d'images issues de nos chantiers et réalisations terminées.</p>
          </div>
          <a href={`mailto:${EMAIL}`} className="hidden rounded-xl border border-stone-300 px-4 py-2 text-sm hover:bg-stone-100 md:inline-block">Nous contacter</a>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g) => (
            <figure key={g.file} className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/images/${g.file}`}
                  alt={g.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <figcaption className="flex items-center justify-between px-3 py-2 text-xs text-stone-600">
                <span className="truncate" title={g.alt}>{g.alt}</span>
                <span className="text-green-700 font-medium">✓</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ——— AVANT / APRÈS ——— */}
      <section id="avant-apres" className="bg-amber-50/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Avant / Après</h2>
            <p className="mt-2 max-w-2xl mx-auto text-stone-700">
              De la conception 3D à la réalisation finale : découvrez la transformation de vos projets.
            </p>
          </div>
          <div className="mt-12 space-y-16">
            {beforeAfterProjects.map((project) => (
              <div key={project.title} className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">{project.title}</h3>
                <div className="flex justify-center">
                  <div className="grid gap-8 sm:grid-cols-2 max-w-4xl">
                    {/* Avant */}
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-center">Avant : Conception 3D</h4>
                      <figure className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow max-w-sm mx-auto">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={`/images/${project.before.file}`}
                            alt={project.before.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                          />
                        </div>
                        <figcaption className="px-3 py-2 text-xs text-stone-600 text-center">
                          <span className="font-medium">3D</span> — {project.before.alt}
                        </figcaption>
                      </figure>
                    </div>
                    {/* Après */}
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-center">Après : Réalisation finale</h4>
                      <figure className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm hover:shadow-md transition-shadow max-w-sm mx-auto">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={`/images/${project.after.file}`}
                            alt={project.after.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                          />
                        </div>
                        <figcaption className="px-3 py-2 text-xs text-stone-600 text-center">
                          <span className="font-medium text-green-700">✓ Réalisé</span> — {project.after.alt}
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ——— SAVOIR-FAIRE ——— */}
      <section id="savoir-faire" className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold">Notre savoir‑faire</h2>
            <p className="mt-2 max-w-3xl text-stone-700">
              Forts de plus de vingt ans d'expérience, nous réalisons des projets variés et ambitieux, de l'agencement intérieur au mobilier sur mesure.
            </p>
          </div>
          <a
            href={`mailto:${EMAIL}?subject=Demande%20de%20devis`}
            className="hidden rounded-xl border border-stone-300 px-4 py-2 text-sm hover:bg-stone-100 md:inline-block"
          >Obtenir un devis</a>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Dressings personnalisés", desc: "Conçus au millimètre pour optimiser chaque espace." },
            { title: "Meubles d'entrée", desc: "Fonctionnels et élégants : bancs, rangements, patères." },
            { title: "Cuisines sur mesure", desc: "Agencement, plans de travail, façades et finitions premium." },
            { title: "Mobilier intérieur", desc: "Tables, bibliothèques, meubles TV suspendus, etc." },
            { title: "Salles de bain résine époxy", desc: "Résistance, étanchéité et esthétique durable." },
            { title: "Escaliers sur mesure", desc: "Sécurité, esthétisme et harmonie avec votre intérieur." },
            { title: "Extérieurs bois", desc: "Terrasses, bardage, clôtures, abris de terrasse et carports." },
            { title: "Vans & bateaux", desc: "Optimisation des espaces complexes : vans, caravanes, airstream, bateaux." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-stone-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— PROCESS (Devis + 3D) ——— */}
      <section id="process" className="bg-stone-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold">Devis précis + plan 3D</h2>
              <p className="mt-2 text-stone-200">
                Nous relevons des côtes précises et vous fournissons un plan 3D détaillé pour valider ensemble chaque élément avant fabrication.
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${EMAIL}?subject=Demande%20de%20devis%203D`}
                  className="inline-block rounded-2xl bg-white px-6 py-3 text-stone-900 shadow-lg hover:shadow-xl transition"
                >
                  Démarrer mon projet
                </a>
              </div>
            </div>
            <div className="relative w-full max-w-xl">
              <div className="aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-white/20">
                <Image
                  src="/images/visu-3d-meuble-tele.jpeg"
                  alt="Visualisation 3D d'un meuble TV sur mesure"
                  fill
                  className="object-cover rounded-[2rem]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— CONTACT ——— */}
      <section id="contact" className="bg-white py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-stone-200 p-8 shadow-sm">
          <h2 className="text-3xl font-bold">Parlons de votre projet</h2>
          <p className="mt-2 text-stone-700">
            Un besoin précis ? Envoyez-nous quelques photos et dimensions, nous revenons vers vous rapidement avec un premier avis.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${EMAIL}?subject=Contact%20${encodeURIComponent(COMPANY)}`}
              className="rounded-2xl bg-stone-900 px-6 py-3 text-center text-white shadow-lg hover:shadow-xl transition"
            >
              Écrire un e‑mail
            </a>
            <a href="#" className="rounded-2xl border border-stone-300 px-6 py-3 text-center hover:bg-stone-100 transition">Télécharger la plaquette (bientôt)</a>
          </div>
          <p className="mt-3 text-sm text-stone-600">Email : <a className="underline" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
      </section>

      {/* ——— FOOTER ——— */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-stone-600">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} {COMPANY}. Tous droits réservés.</p>
            <nav className="flex gap-4">
              <a href="#savoir-faire" className="hover:underline">Savoir‑faire</a>
              <a href="#avant-apres" className="hover:underline">Avant/Après</a>
              <a href="#realisations" className="hover:underline">Réalisations</a>
              <a href={`mailto:${EMAIL}`} className="hover:underline">Contact</a>
            </nav>
          </div>
        </div>
      </footer>


    </main>
  );
}

// ——— Notes ———
// • Palette bois/atelier : stone + amber, cohérente sur toute la page.
// • Ordre des sections : Hero → Savoir‑faire → Avant/Après → Réalisations → Devis+3D → Contact → Footer.
// • Galerie = 9 images (ajout du meuble TV fini).
// • Vérifie l'orthographe de tes fichiers dans /public/images (sensibles à la casse).
// • SEO : titre + descriptions déjà posés dans metadata.