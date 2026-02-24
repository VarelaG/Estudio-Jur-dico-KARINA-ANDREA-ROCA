/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  Scale,
  Menu,
  X,
  CheckCircle,
  Home,
  Users,
  Accessibility,
  ScrollText,
  Gavel,
  MapPin,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Áreas de Práctica', href: '#areas' },
    { name: 'Valores', href: '#valores' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <div className="min-h-screen bg-background-dark text-slate-100 font-body selection:bg-primary selection:text-secondary">
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? 'bg-secondary/95 backdrop-blur-md border-b border-tertiary py-2 shadow-lg'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Scale className="text-primary h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-wider text-white">DRA. ROCA</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">Estudio Jurídico</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/5493329528537"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar cita por WhatsApp"
            className="hidden md:flex items-center gap-2 rounded-sm border border-primary bg-transparent px-5 py-2 text-sm font-semibold uppercase tracking-wider text-primary hover:bg-primary hover:text-secondary transition-all duration-300"
          >
            <span>Agendar Cita</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-secondary border-b border-tertiary p-6 flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-white hover:text-primary py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5493329528537"
              aria-label="Agendar cita por WhatsApp"
              className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-secondary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Cita
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/80 to-secondary/95 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="mb-8 h-px w-24 bg-primary"></div>
            <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
              Karina A. Roca <br className="sm:hidden" /> Estudio Jurídico
            </h1>
            <p className="mb-8 font-display text-xl font-medium tracking-wide text-primary sm:text-2xl">
              Abogada
            </p>
            <p className="max-w-2xl text-base font-light leading-relaxed text-gray-300 sm:text-lg mb-12">
              Doctoranda en Ciencias Jurídicas | <span className="text-white font-medium">20 años de experiencia</span> y ética profesional con atención personalizada y virtual.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="flex min-w-[180px] items-center justify-center rounded-sm bg-primary px-8 py-3 text-sm font-bold uppercase tracking-widest text-secondary hover:bg-white hover:text-secondary transition-all duration-300"
              >
                Consulta Legal
              </a>
              <a
                href="#areas"
                className="flex min-w-[180px] items-center justify-center rounded-sm border border-gray-600 bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-widest text-white hover:border-primary hover:text-primary transition-all duration-300"
              >
                Áreas de Práctica
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="bg-white py-20 lg:py-32 text-slate-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Image Grid */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/9] w-full overflow-hidden rounded-sm shadow-lg">
                <img
                  src="/dra-roca-1.jpg"
                  alt="Dra. Karina A. Roca"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square w-full overflow-hidden rounded-sm bg-gray-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?q=80&w=800&auto=format&fit=crop"
                  alt="Mazo de la justicia en el estudio jurídico Roca de San Pedro"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square w-full overflow-hidden rounded-sm bg-secondary flex items-center justify-center p-6 text-center shadow-lg">
                <div className="flex flex-col items-center justify-center">
                  <span className="font-display text-5xl font-bold text-primary">20</span>
                  <span className="mt-2 text-sm font-medium uppercase tracking-widest text-white">Años de<br />Experiencia</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-2 font-display text-lg font-bold tracking-widest text-primary uppercase">Sobre el Estudio</h2>
              <h3 className="mb-6 font-display text-4xl font-bold leading-tight text-secondary">
                Trayectoria Académica y Excelencia Jurídica
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Con una sólida formación como Doctoranda en Ciencias Jurídicas, la Dra. Karina Andrea Roca ha dedicado dos décadas a la práctica del derecho con un enfoque riguroso y humano.
              </p>
              <p className="mb-8 text-base leading-relaxed text-gray-600">
                El estudio se distingue por un compromiso inquebrantable con la ética profesional. Entendemos que detrás de cada expediente hay una historia de vida, una familia o un patrimonio que merece la máxima dedicación y transparencia.
              </p>

              <ul className="space-y-4">
                {[
                  "Doctoranda en Ciencias Jurídicas",
                  "Atención personalizada y virtual"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section id="areas" className="bg-secondary py-20 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold text-white sm:text-4xl">Áreas de Práctica</h2>
            <div className="mx-auto h-1 w-20 bg-primary"></div>
            <p className="mt-4 text-gray-400">Soluciones legales integrales con trayectoria</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Home,
                title: "Derechos Reales",
                desc: "Asesoramiento integral en compraventas, alquileres, desalojos y regularización dominial."
              },
              {
                icon: Users,
                title: "Derecho de Familia",
                desc: "Divorcios, cuota alimentaria, regímenes de comunicación y filiaciones con absoluta discreción."
              },
              {
                icon: Accessibility,
                title: "Discapacidad",
                desc: "Reclamos y defensa de derechos de personas con discapacidad."
              },
              {
                icon: ScrollText,
                title: "Sucesiones",
                desc: "Trámites sucesorios ágiles, declaratoria de herederos y partición de bienes."
              }
            ].map((area, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center border border-tertiary bg-[#1a2333] p-8 text-center transition-all hover:border-primary hover:-translate-y-1 duration-300"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-primary ring-1 ring-primary/30 group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                  <area.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-white">{area.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valores" className="relative overflow-hidden bg-background-oxford py-24">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-2 inline-flex items-center gap-2 border-b border-primary pb-1">
                <Gavel className="text-primary h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Nuestra Filosofía</span>
              </div>
              <h2 className="mb-6 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ética Profesional y Transparencia
              </h2>
              <p className="mb-6 text-lg font-light text-gray-300 italic">
                "La abogacía no es solo una profesión, es un ministerio público de justicia. Mi compromiso es brindar un servicio legal de excelencia, donde la honestidad y la claridad son los pilares fundamentales de cada asesoramiento."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-600 border border-primary/30">
                  <img
                    src="/dra-roca-2.jpg"
                    alt="Dra. Karina Roca"
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
                <div>
                  <p className="font-display text-lg font-bold text-white">Karina A. Roca</p>
                  <p className="text-sm text-primary">Abogada Fundadora</p>
                </div>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative h-64 w-64 md:h-80 md:w-80 border border-primary/20 p-4">
                <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-primary"></div>
                <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-primary"></div>
                <div
                  className="h-full w-full bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop')" }}
                  title="Libros de derecho y mazo de madera"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="bg-white dark:bg-[#0f141e] pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-8 font-display text-3xl font-bold text-white">Contacto</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-secondary text-primary border border-tertiary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white">Ubicación</h3>
                    <p className="text-gray-400">General Alvarado 90</p>
                    <p className="text-gray-400">San Pedro, Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-secondary text-primary border border-tertiary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white">Teléfono</h3>
                    <p className="text-gray-400">+54 9 3329 52-8537</p>
                    <p className="text-sm text-gray-500 mt-1">Lunes a Viernes de 9:00 a 17:00 hs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-secondary text-primary border border-tertiary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">estudiokarinaroca@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/5493329528537"
                  className="inline-flex items-center gap-3 rounded-sm bg-[#25D366] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-900/20"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enviar Mensaje por WhatsApp
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <a
              href="https://maps.app.goo.gl/g4rWpEjYArVxLCCH6"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[400px] w-full overflow-hidden rounded-sm border border-tertiary bg-secondary relative group block"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop"
                alt="Mapa de ubicación del Estudio Jurídico Karina A. Roca en General Alvarado 90, San Pedro"
                className="h-full w-full object-cover opacity-60 group-hover:opacity-70 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded bg-secondary/90 p-4 text-center shadow-xl backdrop-blur-sm border border-tertiary">
                  <MapPin className="mx-auto mb-2 text-4xl text-primary h-8 w-8" />
                  <p className="font-display font-bold text-white">General Alvarado 90</p>
                  <p className="text-xs text-gray-400">San Pedro (Click para ver en Google Maps)</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-tertiary bg-secondary py-8 text-center">
          <p className="font-display text-sm text-gray-500">
            © 2024 Dra. Karina Andrea Roca. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex justify-center gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-primary transition-colors">Aviso Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5493329528537"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 hover:shadow-2xl hover:shadow-green-900/50"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </div>
  );
}
