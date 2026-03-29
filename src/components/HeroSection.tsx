import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
// kalau error Button, baca catatan di bawah
import { Button } from '@/components/ui/button';
// kalau belum ada, bisa dihapus
import ThreeScene from './ThreeScene';

export default function HeroSection() {

  // default theme = blue
  useEffect(() => {
    document.documentElement.classList.add('theme-blue');
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('theme-pink');
    html.classList.toggle('theme-blue');
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <>
      {/* ===== THEME (INLINE CSS) ===== */}
      <style>
        {`
        /* PUTIH + BIRU (DEFAULT) */
        .theme-blue {
          --bg-gradient: linear-gradient(to bottom right, #ffffff, #bfdbfe, #60a5fa);
          --primary: #2563eb;
          --text: #1f2937;
        }

        /* PINK MODE */
        .theme-pink {
          --bg-gradient: linear-gradient(to bottom right, #ffe4e6, #fce7f3, #f9a8d4);
          --primary: #ec4899;
          --text: #831843;
        }

        body {
          transition: all 0.3s ease;
        }
        `}
      </style>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: 'var(--bg-gradient)' }}
      >
        <ThreeScene />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Toggle Theme */}
            <button
              onClick={toggleTheme}
              className="absolute top-6 right-6 px-4 py-2 rounded-full text-sm backdrop-blur-md"
              style={{ background: '#ffffff30', color: 'var(--primary)' }}
            >
              Ganti Tema
            </button>

            {/* Badge */}
            <motion.span
              className="inline-block px-4 py-2 rounded-full backdrop-blur-md text-sm font-medium mb-6"
              style={{ color: 'var(--primary)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              Hello! Welcome to my portfolio!
            </motion.span>

            {/* Title */}
            <motion.h1
              className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6"
              style={{ color: 'var(--text)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Fullstack Developer
              <br />
              <span style={{ color: 'var(--primary)' }}>
                Creative & Passionate
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: 'var(--text)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Saya membangun aplikasi web yang indah dan fungsional, 
              serta membagikan pengetahuan melalui konten yang inspiratif.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button 
                size="lg"
                className="rounded-full px-8 text-white"
                style={{ backgroundColor: 'var(--primary)' }}
                onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Lihat Projects
              </Button>

              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8"
                style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social */}
            <motion.div className="flex justify-center gap-6">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-3 rounded-full backdrop-blur-md"
                    style={{ backgroundColor: '#ffffff30' }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Icon className="h-5 w-5" style={{ color: 'var(--primary)' }} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Scroll */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full backdrop-blur-md"
          style={{ backgroundColor: '#ffffff30' }}
        >
          <ArrowDown className="h-5 w-5" style={{ color: 'var(--primary)' }} />
        </motion.button>
      </section>
    </>
  );
}