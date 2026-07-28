"use client";

import { Mail, Linkedin, Github, Instagram, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const socials = [
  { label: "Email", href: "mailto:luiz.siqueira695@gamil.com", Icon: Mail },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luiz-siqueira-dev/",
    Icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/Luiz-FelipeDev", Icon: Github },
  {
    label: "Instagram",
    href: "https://www.instagram.com/luuizfellipe_/",
    Icon: Instagram,
  },
];

const PHASE1_TEXT = "Software Developer";
const PHASE2_TEXT = "Student Computer Engineering";
const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 600;

type Phase = "typing" | "pausing" | "deleting" | "pausing-delete";
const technologies = [
  { name: "React", src: "/icons/react.svg", top: "8%", left: "8%", delay: "0s", size: 44 },
  { name: "Next.js", src: "/icons/nextjs.svg", top: "12%", left: "78%", delay: "1s", size: 40 },
  { name: "TypeScript", src: "/icons/typescript.svg", top: "30%", left: "4%", delay: "2s", size: 38 },
  { name: "Node.js", src: "/icons/nodejs.svg", top: "28%", left: "88%", delay: "0.5s", size: 42 },
  { name: "PostgreSQL", src: "/icons/postgresql.svg", top: "55%", left: "6%", delay: "1.5s", size: 36 },
  { name: "Java", src: "/icons/java.svg", top: "60%", left: "86%", delay: "2.5s", size: 40 },
  { name: "Spring", src: "/icons/spring.svg", top: "80%", left: "12%", delay: "3s", size: 36 },
  { name: "Tailwind", src: "/icons/tailwindcss.svg", top: "78%", left: "80%", delay: "1.2s", size: 38 },
  { name: "Git", src: "/icons/git.svg", top: "90%", left: "50%", delay: "0.8s", size: 34 },
  { name: "Python", src: "/icons/python.svg", top: "45%", left: "90%", delay: "1.8s", size: 40 },
  { name: "Django", src: "/icons/django.svg", top: "88%", left: "18%", delay: "2.2s", size: 36 },
];


export default function Hero( ) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [usePhase1, setUsePhase1] = useState(true);

  const currentText = usePhase1 ? PHASE1_TEXT : PHASE2_TEXT;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentText.slice(0, displayed.length + 1));
        }, TYPE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setPhase("pausing");
        }, PAUSE_AFTER_TYPE);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => {
        if (usePhase1) {
          setPhase("deleting");
        } else {
          setPhase("typing");
          setUsePhase1(true);
          setDisplayed("");
        }
      }, 2500);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, DELETE_SPEED);
      } else {
        timeout = setTimeout(() => {
          setUsePhase1(false);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayed, currentText, usePhase1]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* luz ambiente */}
      <div
        className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent2/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Ícones de tecnologias flutuantes */}
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="absolute hidden md:flex flex-col items-center gap-2 animate-float pointer-events-none opacity-60 hover:opacity-100 transition-opacity"
          style={{
            top: tech.top,
            left: tech.left,
            animationDelay: tech.delay,
          }}
        >
          <Image
            src={tech.src}
            alt={tech.name}
            width={tech.size}
            height={tech.size}
            className="drop-shadow-lg"
            style={{ imageRendering: "auto" }}
          />
        </div>
      ))}

      <div className="relative w-full px-6 md:px-16 text-center">
        <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-muted uppercase mb-4">
          Olá, seja bem-vindo ao meu site pessoal
        </p>

        <h1 className="font-script text-6xl md:text-8xl leading-none mb-4 bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
          Sou o Luiz Felipe 
        </h1>

        <p className="font-mono text-sm md:text-base uppercase tracking-[0.3em] text-muted mb-10 h-[1.5rem]">
          {displayed}
          <span className="inline-block w-[2px] h-[1.1em] bg-accent ml-0.5 align-middle animate-pulse" />
        </p>

        <div className="flex gap-4 mb-16 justify-center">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http" ) ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="h-11 w-11 flex items-center justify-center rounded-full border border-white/15 text-ink hover:border-accent hover:text-accent transition-colors"
            >
              <Icon size={18} strokeWidth={1.75} />
            </a>
          ))}
        </div>

        <a
          href="#sobre"
          aria-label="Rolar para a seção sobre mim"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted hover:text-accent transition-colors animate-bounce"
        >
          <ChevronDown size={22} />
        </a>
      </div>
    </section>
  );
}
