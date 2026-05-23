import React, { useState, useEffect } from "react";
import { 
  Clock, 
  FileCheck, 
  Zap, 
  Sparkles, 
  RefreshCw, 
  Award, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  ShieldCheck, 
  Smartphone, 
  Download, 
  BookOpen, 
  ArrowRight, 
  Lock, 
  ThumbsUp,
  Flame,
  MousePointerClick,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BENEFITS_DATA, LEARNING_DATA, TESTIMONIALS_DATA, FAQ_DATA } from "./data";

export default function App() {
  // Sticky Header state
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Countdown timer for scarcity-based conversion (14m 52s sequence)
  const [timeLeft, setTimeLeft] = useState(892); // 14 mins, 52 secs
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 892));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // State to simulate Certificate generation in real time
  const [studentName, setStudentName] = useState("Nome do Professor");

  // State to expand FAQ items
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  // State for active notebook tab inside the mockup
  const [activeTab, setActiveTab] = useState<"aulas" | "atividades" | "jogos">("aulas");

  // State to simulate high conversion: "Alguém comprou agora há pouco" notifications
  const [notification, setNotification] = useState<string | null>(null);
  const citiesArray = [
    "Marcos Silva de São Paulo - SP",
    "Juliana Rocha de Porto Alegre - RS",
    "Carla Dias de Belo Horizonte - MG",
    "Rodrigo Santos de Salvador - BA",
    "Fernanda Lima de Curitiba - PR",
    "Claudio Souza de Niterói - RJ"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomCity = citiesArray[Math.floor(Math.random() * citiesArray.length)];
      setNotification(`${randomCity} acabou de adquirir o Material Completo 🎉`);
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    }, 18000); // Trigger notification every 18 seconds
    return () => clearInterval(interval);
  }, []);

  const handleFaqToggle = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleBookRedirect = () => {
    window.open("https://pay.wiapy.com/A1SqD3glTi", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-yellow-400 selection:text-slate-950 scroll-smooth overflow-x-hidden relative">
      
      {/* Dynamic Background Layer from style theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0b1a4a] to-[#020617] opacity-60 pointer-events-none"></div>

      {/* Dynamic Purchase Notifications */}
      <AnimatePresence>
        {notification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-4 left-4 z-50 bg-[#0f172a]/95 border border-[#2563eb]/30 text-slate-100 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 backdrop-blur-md max-w-sm"
          >
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping absolute top-2 right-2"></div>
            <div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400">
              <Zap size={18} className="animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium">Acesso Liberado!</p>
              <p className="text-xs font-semibold text-slate-200">{notification}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modern Brazilian Infoproduct Style Glow Accents */}
      <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>
      <div className="absolute top-[70%] left-[20%] w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"></div>

      {/* HEADER SECTION */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : "bg-transparent py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-display text-white font-black italic shadow-lg shadow-blue-500/20">
              E
            </div>
            <span className="font-display text-xl tracking-tighter text-white">
              EDU<span className="text-blue-500">CALIZE</span>
            </span>
          </div>

          {/* Menu navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
            <a href="#conteudo" className="hover:text-white transition-colors">Conteúdo</a>
            <a href="#certificado" className="hover:text-white transition-colors">Certificado</a>
            <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-white transition-colors">Dúvidas</a>
          </nav>

          {/* Header CTA */}
          <div className="flex items-center gap-4">
            <a 
              href="https://pay.wiapy.com/A1SqD3glTi" 
              className="px-5 py-2.5 rounded-full border border-white/10 text-xs font-bold text-slate-400 hover:text-white hover:bg-white/5 transition-all focus:outline-none hidden sm:block"
            >
              Área de Membros
            </a>
            <a 
              href="https://pay.wiapy.com/A1SqD3glTi" 
              id="header_cta"
              className="bg-yellow-400 text-slate-950 font-bold px-6 py-2.5 rounded-full text-xs xs:text-sm hover:scale-105 transition-all transform hover:-translate-y-0.5 focus:outline-none active:translate-y-0 text-center glow-yellow"
            >
              Quero Acessar
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="pt-28 md:pt-40 pb-20 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* HERO LEFT SIDE */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Material para Professores</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6.5xl leading-[1.05] text-white mb-4 uppercase tracking-tighter italic">
              Material Completo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Educação Física</span> Escolar
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Tenha acesso imediato a atividades práticas, jogos, planos de aula e conteúdos prontos para aplicar com seus alunos do Ensino Infantil ao Fundamental.
            </p>

            {/* Checklist of key benefits styled like the theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 mb-10 text-slate-200">
              <div className="flex items-center gap-2.5 text-sm">
                <span className="text-yellow-400 font-extrabold text-lg">✅</span> Atividades prontas para imprimir
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="text-yellow-400 font-extrabold text-lg">✅</span> Planos de aula em PDF (BNCC)
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="text-yellow-400 font-extrabold text-lg">✅</span> Jogos educativos e recreativos
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <span className="text-yellow-400 font-extrabold text-lg">✅</span> Certificado válido de 80h
              </div>
              <div className="flex items-center gap-2.5 text-sm sm:col-span-2">
                <span className="text-yellow-400 font-extrabold text-lg animate-pulse">✅</span> Liberado imediatamente no seu e-mail (Acesso Vitalício)
              </div>
            </div>

            {/* Interactive CTAs styled like Bold Theme */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="https://pay.wiapy.com/A1SqD3glTi"
                id="hero_cta_primary"
                className="bg-yellow-400 text-slate-950 px-8 py-4 rounded-xl font-black text-lg hover:bg-yellow-300 transition-all glow-yellow uppercase text-center flex flex-col justify-center"
              >
                Quero Acessar Agora
                <span className="block text-[10px] text-slate-900 font-semibold uppercase tracking-wider mt-0.5">
                  Apenas R$19,90 • Compra 100% Segura
                </span>
              </a>
              <a 
                href="#conteudo"
                className="border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all text-slate-200 hover:text-white flex items-center justify-center gap-2"
              >
                Ver Conteúdo Included
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Statistics Row updated from Bold Typography */}
            <div className="mt-12 flex gap-10 items-center border-t border-white/5 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black text-white">8.400+</div>
                <div className="text-[10px] uppercase text-slate-500 tracking-widest">Alunos Satisfeitos</div>
              </div>
              <div className="border-x border-white/5 px-8 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black text-white flex items-center justify-center sm:justify-start gap-1">
                  4.9 <Star size={16} fill="currentColor" stroke="none" className="text-yellow-400 inline" />
                </div>
                <div className="text-[10px] uppercase text-slate-500 tracking-widest text-yellow-400">Avaliação Média</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-black text-white">80h</div>
                <div className="text-[10px] uppercase text-slate-500 tracking-widest">Certificado Válido</div>
              </div>
            </div>

          </div>

          {/* HERO RIGHT SIDE - DIGITAL MOCKUPS PREVIEWS */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 z-10">
            
            {/* Ambient Background Gradient Aura behind the mockup */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-[40px] pointer-events-none transform scale-90"></div>

            {/* Floating 80h Certificate Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-3 sm:-right-6 z-20 bg-yellow-400 text-slate-950 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-yellow-300/30 font-bold glow-yellow"
            >
              <Award size={28} className="animate-pulse" />
              <div>
                <p className="text-[10px] leading-3 uppercase text-slate-900 font-black tracking-wide">Certificado</p>
                <p className="text-sm font-black leading-none uppercase">80 Horas</p>
              </div>
            </motion.div>

            {/* Laptop / Tablet Workspace Mockup transformed into Glass floating panel */}
            <div className="relative bg-slate-950/40 border border-white/10 rounded-2xl shadow-2xl p-4 overflow-hidden pt-6 backdrop-blur-md floating">
              
              {/* Device Header line to look like an interface */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 bg-slate-900/60 px-3 py-1 rounded-full border border-white/5">
                  educalize_area_membros_v2.0
                </div>
                <div className="text-yellow-400 text-xs font-bold leading-none animate-pulse">
                  ● ATIVO
                </div>
              </div>

              {/* Mockup Navigation Tabs */}
              <div className="flex gap-1.5 mb-4 text-xs font-semibold bg-slate-950/60 p-1 rounded-xl border border-white/5">
                <button 
                  onClick={() => setActiveTab("aulas")}
                  className={`flex-1 py-2 text-center rounded-lg transition-all ${
                    activeTab === "aulas" ? "bg-yellow-400 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Planejamentos
                </button>
                <button 
                  onClick={() => setActiveTab("atividades")}
                  className={`flex-1 py-2 text-center rounded-lg transition-all ${
                    activeTab === "atividades" ? "bg-yellow-400 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  E-books
                </button>
                <button 
                  onClick={() => setActiveTab("jogos")}
                  className={`flex-1 py-2 text-center rounded-lg transition-all ${
                    activeTab === "jogos" ? "bg-yellow-400 text-slate-950 font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Jogos BNCC
                </button>
              </div>

              {/* Simulated active tab view */}
              <div className="h-56 overflow-y-auto pr-1 custom-scrollbar">
                
                {activeTab === "aulas" && (
                  <div className="space-y-2">
                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-yellow-400/10 text-yellow-400 rounded-lg"><BookOpen size={14} /></span>
                        <div>
                          <p className="text-xs font-bold text-slate-200">Plano Anual - Educação Infantil</p>
                          <p className="text-[10px] text-slate-400">BNCC • Alinhado por Código</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-black">PDF</span>
                    </div>

                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-blue-500/10 text-blue-400 rounded-lg"><BookOpen size={14} /></span>
                        <div>
                          <p className="text-xs font-bold text-slate-200">Cronograma de Atividades Práticas</p>
                          <p className="text-[10px] text-slate-400">Jogos e Atividades Psicomotoras</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-black text-center">BAIXAR</span>
                    </div>

                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-[#0e204c] text-yellow-400 rounded-lg"><Award size={14} /></span>
                        <div>
                          <p className="text-xs font-bold text-slate-200">Planos de Aula - Ensino Fundamental 1</p>
                          <p className="text-[10px] text-slate-400">Atividades de Agilidade e Equilíbrio</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-black text-center">PDF COMPLETO</span>
                    </div>

                    <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 bg-blue-500/10 text-blue-400 rounded-lg"><RefreshCw size={14} /></span>
                        <div>
                          <p className="text-xs font-bold text-slate-200">Inclusão e Acessibilidade na Educação Física</p>
                          <p className="text-[10px] text-slate-400">Dinâmicas e Jogos Inclusivos</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-black">BNCC</span>
                    </div>
                  </div>
                )}

                {activeTab === "atividades" && (
                  <div className="space-y-3">
                    <p className="text-[10px] text-yellow-400 uppercase tracking-wider font-semibold">Volume Digital Incluso:</p>
                    
                    {/* Ebook Mockup */}
                    <div className="flex gap-4 items-center bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="relative w-16 h-20 rounded-md bg-gradient-to-br from-blue-700 to-blue-900 text-white p-2 border-r-4 border-yellow-400 flex flex-col justify-between shadow-lg">
                        <div className="text-[8px] font-bold text-slate-300">EDUCAÇÃO FÍSICA</div>
                        <div className="text-[10px] font-black tracking-tight leading-none text-yellow-300">100+ BRINCADEIRAS</div>
                        <div className="text-[70%] font-black text-right text-emerald-400">✓ BNCC</div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-100">E-Book: 100+ Brincadeiras e Jogos</h4>
                        <p className="text-[11px] text-slate-400">Estratégias detalhadas passo a passo com diagramação ilustrada e clara.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-center bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="relative w-16 h-20 rounded-md bg-gradient-to-br from-[#121b3d] to-[#1e2d67] text-white p-2 border-r-4 border-yellow-400 flex flex-col justify-between shadow-lg">
                        <div className="text-[8px] font-bold text-slate-300">BNCC PRÁTICA</div>
                        <div className="text-[9px] font-black tracking-tight leading-none text-slate-100">AVALIAÇÃO PRÁTICA</div>
                        <div className="text-[8px] text-yellow-400 font-bold">PDF</div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-100">Guia de Avaliação Objetiva</h4>
                        <p className="text-[11px] text-slate-400">Formatos prontos de fichas diagnósticas para avaliação motora dos alunos.</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "jogos" && (
                  <div className="space-y-2">
                    <div className="bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-xl flex items-start gap-2.5">
                      <span className="p-1 px-2 bg-emerald-500/20 text-emerald-300 rounded font-bold text-xs">A</span>
                      <div>
                        <h5 className="text-xs font-bold text-emerald-400">Futebol de Pano e Caçadores</h5>
                        <p className="text-[11px] text-slate-300 mt-0.5">Espetacular jogo lúdico que ensina posicionamento defensivo e coordenação espacial de forma recreativa.</p>
                      </div>
                    </div>
                    <div className="bg-rose-500/5 border border-rose-500/10 p-3 rounded-xl flex items-start gap-2.5">
                      <span className="p-1 px-2 bg-rose-500/20 text-rose-300 rounded font-bold text-xs">B</span>
                      <div>
                        <h5 className="text-xs font-bold text-rose-300">Estafetas Motricidade Ativa</h5>
                        <p className="text-[11px] text-slate-300 mt-0.5">Gincanas rápidas e enérgicas com uso de cones, bambolês e cordas para o aquecimento inicial.</p>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* Mockup visual footer */}
              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs text-slate-400">
                <span>Material Organizado e Didático</span>
                <span className="text-yellow-400 font-bold font-display">Apenas R$ 19,90</span>
              </div>

            </div>

            {/* floating security trust seal card adapted with glass style */}
            <div className="absolute -bottom-6 left-4 z-20 bg-[#090d26]/90 border border-white/10 p-2.5 px-4 rounded-xl shadow-lg flex items-center gap-2 backdrop-blur-md">
              <ShieldCheck className="text-emerald-500" size={16} />
              <span className="text-[11px] text-slate-300 font-bold">Garantia Incondicional de 7 Dias</span>
            </div>

          </div>

        </div>
      </section>

      {/* BENEFÍCIOS SECTION */}
      <section id="beneficios" className="py-23 bg-[#050920]/40 relative border-y border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-yellow-400 text-xs font-black uppercase tracking-widest bg-yellow-400/10 px-3.5 py-1 rounded-full border border-yellow-400/20">
              Foco na Aplicação Prática
            </span>
            <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tighter italic text-white flex items-center justify-center gap-2">
              Por que usar o Material <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Educalize</span>?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              A solução ideal desenvolvida para professores que desejam otimizar a rotina de trabalho e guiar aulas engajadoras.
            </p>
          </div>

          {/* Grid of Benefits with dynamic react components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS_DATA.map((benefit, idx) => {
              // Custom map icons for React runtime
              return (
                <div 
                  key={benefit.id}
                  className="bg-slate-950/40 border border-white/5 hover:border-white/10 p-6 rounded-2xl shadow-md transition-all duration-300 group hover:-translate-y-1 backdrop-blur-md"
                >
                  <div className="inline-flex bg-yellow-400/10 text-yellow-400 p-3.5 rounded-xl group-hover:scale-110 transition-transform duration-300 mb-4 border border-yellow-400/20 shadow-inner">
                    {benefit.iconName === "Clock" && <Clock size={22} />}
                    {benefit.iconName === "FileCheck" && <FileCheck size={22} />}
                    {benefit.iconName === "Zap" && <Zap size={22} />}
                    {benefit.iconName === "Sparkles" && <Sparkles size={22} />}
                    {benefit.iconName === "RefreshCw" && <RefreshCw size={22} />}
                    {benefit.iconName === "Award" && <Award size={22} />}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER SECTION */}
      <section id="conteudo" className="py-20 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-yellow-400 text-xs font-black uppercase tracking-widest bg-yellow-400/10 px-3.5 py-1 rounded-full border border-yellow-400/20">
              Currículo Completo
            </span>
            <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tighter italic text-white">
              O que você vai receber no Kit <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Educalize</span>?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Explore o leque de diretrizes estruturadas e prontinhas para você levar debaixo do braço para a quadra física.
            </p>
          </div>

          {/* Grid structure for Learning Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEARNING_DATA.map((item, idx) => {
              return (
                <div 
                  key={item.id} 
                  className="bg-slate-950/40 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:shadow-[0_0_20px_rgba(253,224,71,0.05)] transition-all backdrop-blur-md relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 text-[9px] font-black uppercase tracking-wider text-yellow-400 bg-yellow-400/5 rounded-bl-xl border-l border-b border-white/5">
                    {item.count}
                  </div>
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-yellow-400/5 flex items-center justify-center text-yellow-400 border border-yellow-400/15 mb-4 text-xs font-bold font-display italic">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-base font-extrabold text-slate-100 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.description}</p>
                  </div>
                  <div className="border-t border-white/5 pt-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1 text-yellow-400">
                      <Check size={12} strokeWidth={3} /> Alinhado BNCC
                    </span>
                    <span className="opacity-60 text-[10px]">Acesso Imediato</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://pay.wiapy.com/A1SqD3glTi" 
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black px-10 py-4 rounded-xl shadow-lg hover:scale-105 transition-all outline-none glow-yellow uppercase"
            >
              Quero Receber Todos os Materiais
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* CERTIFICADO INTERATIVO SECTION */}
      <section id="certificado" className="py-20 relative border-b border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Certificado Left Side */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-6">
              <span className="text-yellow-400 text-xs font-black uppercase tracking-widest bg-yellow-400/10 px-3.5 py-1 rounded-full border border-yellow-400/20">
                Valide Sua Capacidade
              </span>
              <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tighter italic text-white leading-none">
                Certificado Autêntico de <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">80 Horas</span> Incluso
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Potencialize seus títulos, some horas em sua faculdade, adicione ao seu currículo profissional ou apresente na coordenação para evolução salarial em concursos públicos municipais e estaduais.
              </p>

              {/* Dynamic Interactive Input Feature for High Conversion */}
              <div className="bg-slate-950/40 p-5 rounded-2xl border border-white/10 space-y-3 backdrop-blur-md">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-200">
                  ⚡ Recurso de Exibição - Digite seu nome completo para simular:
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={studentName}
                    maxLength={32}
                    onChange={(e) => setStudentName(e.target.value || "Nome do Professor")}
                    className="flex-1 bg-slate-900/60 border border-white/10 focus:border-yellow-400 px-4 py-2.5 rounded-xl text-sm focus:outline-none text-slate-100 transition-colors focus:ring-1 focus:ring-yellow-400"
                    placeholder="Seu nome no certificado..."
                  />
                </div>
                <p className="text-[11px] text-slate-400">
                  Veja imediatamente abaixo como ficará o seu certificado original de 80h ao finalizar a leitura.
                </p>
              </div>

              {/* Bullet advantages of certificate */}
              <div className="space-y-2 text-xs text-slate-400">
                <p className="flex items-center gap-2"><span className="text-yellow-400">✅</span> CNPJ ativo e credenciais válidas em território nacional</p>
                <p className="flex items-center gap-2"><span className="text-yellow-400">✅</span> Chave de autenticidade única para validação no site oficial</p>
                <p className="flex items-center gap-2"><span className="text-yellow-400">✅</span> Ideal para evolução profissional em secretarias estaduais</p>
              </div>
            </div>

            {/* Certificado Right Side (Live Interactive Preview Mockup) */}
            <div className="lg:col-span-12 xl:col-span-7">
              
              <div className="w-full bg-[#050818] p-4 sm:p-8 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                
                {/* Background watermarks of high fidelity */}
                <div className="absolute inset-0 bg-[radial-gradient(#121c42_2px,transparent_2px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
                
                {/* Frame border inside certificate */}
                <div className="border border-double border-yellow-500/40 p-6 sm:p-10 rounded-lg flex flex-col justify-between relative bg-slate-950/80 backdrop-blur-sm">
                  
                  {/* Top Header of Certificate */}
                  <div className="text-center space-y-2">
                    <span className="text-[#bf955d] text-xs font-black uppercase tracking-widest block font-display italic">MINISTÉRIO DA EDUCAÇÃO • RESOLUÇÃO CNE Nº 1</span>
                    <h3 className="text-xl sm:text-2xl font-serif text-amber-100 italic tracking-wide">Certificado de Conclusão</h3>
                    <div className="inline-block h-0.5 w-16 bg-yellow-500/60 my-2"></div>
                  </div>

                  {/* Body Text */}
                  <div className="text-center mt-6 space-y-4">
                    <p className="text-[10px] sm:text-xs text-slate-400 tracking-wide uppercase">Certificamos por mérito pessoal que</p>
                    
                    {/* Synchronized dynamic Name preview */}
                    <div className="text-lg sm:text-2xl font-serif text-[#ecc98a] font-semibold border-b border-white/5 pb-2 max-w-md mx-auto truncate uppercase tracking-widest px-2">
                      {studentName}
                    </div>

                    <p className="text-[11px] sm:text-xs text-slate-300 max-w-xl mx-auto leading-relaxed">
                      concluiu com êxito o curso de Capacitação Docente em <strong className="text-slate-100 font-bold">Educação Física Escolar</strong>, perfazendo carga horária total de <strong className="text-[#bf955d]">80 horas</strong>, alinhado às diretrizes oficiais da Base Nacional Comum Curricular (BNCC).
                    </p>
                  </div>

                  {/* Stamp Signature Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                    
                    {/* Seal / Emblem */}
                    <div className="flex items-center justify-center sm:justify-start gap-2.5">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-yellow-500/30 bg-yellow-500/10 flex items-center justify-center text-[#ecc98a] flex-shrink-0 animate-pulse">
                        <Award size={20} />
                      </div>
                      <div className="text-left text-[9px] text-slate-400 font-mono">
                        <p className="font-bold text-slate-300">EDUCAÇÃO ESCALAR</p>
                        <p>CNPJ: 42.109.910/0001-92</p>
                        <p className="text-yellow-500/70">Código: AUTH-901AX</p>
                      </div>
                    </div>

                    {/* Authorized signature */}
                    <div className="text-center sm:text-right mt-4 sm:mt-0">
                      <p className="font-serif italic text-sm text-[#ecc98a] font-semibold">Educalize Team</p>
                      <div className="inline-block h-px w-28 bg-[#ecc98a]/35 my-1"></div>
                      <p className="text-[8px] uppercase tracking-wider text-slate-400">Coordenação Pedagógica Diretriz</p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DEPOIMENTOS SECTION */}
      <section id="depoimentos" className="py-20 relative border-b border-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-yellow-400 text-xs font-black uppercase tracking-widest bg-yellow-400/10 px-3.5 py-1 rounded-full border border-yellow-400/20">
              Opinião dos Docentes
            </span>
            <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tighter italic text-white">
              O que dizem os professores de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Educação Física</span>?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Compre de quem já testou e transformou a qualidade lúdica de suas turmas letivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.map((item) => (
              <div 
                key={item.id}
                className="bg-slate-950/40 border border-white/5 p-6 rounded-2xl shadow-lg flex flex-col justify-between backdrop-blur-md hover:border-white/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                    "{item.text}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 font-extrabold text-xs flex items-center justify-center">
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">{item.name}</h4>
                      <p className="text-[11px] text-slate-400">{item.role}</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 bg-slate-950 px-2.5 py-1 rounded-full border border-white/5 font-mono">
                    {item.city}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OFERTA SECTION (LOW TICKET focus, visually maximum-compelling) */}
      <section className="py-20 relative border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          
          <div className="bg-[#050818]/90 border-2 border-yellow-400 rounded-3xl p-6 sm:p-12 shadow-[0_0_50px_rgba(250,204,21,0.15)] relative overflow-hidden backdrop-blur-md">
            
            {/* Stamp highlight ribbon */}
            <div className="absolute top-6 right-[-45px] rotate-45 bg-yellow-400 text-slate-950 font-black text-[9px] uppercase tracking-widest text-center py-1.5 w-40 border border-yellow-300 shadow">
              Mais Vendido 🎖️
            </div>

            {/* Glowing spot */}
            <div className="absolute top-[20%] left-[50%] -translate-x-[50%] h-32 w-32 bg-yellow-400/20 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="text-center space-y-4">
              
              <div className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-yellow-400 bg-yellow-400/15 p-1 px-3 rounded-full animate-pulse border border-yellow-400/20">
                <Flame size={13} fill="currentColor" /> OFERTA POR TEMPO LIMITADO
              </div>

              <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tighter italic text-white leading-none">
                Acesso Completo por Apenas <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">R$19,90</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto">
                Não gaste fortunas com mensalidades caras. Tenha em mãos o maior acervo estruturado de Educação Física Escolar do país por um valor simbólico de pizza rápida.
              </p>

              {/* Price Block */}
              <div className="py-6 space-y-1">
                <p className="text-slate-400 text-sm line-through uppercase tracking-wider font-semibold">De R$ 97,00</p>
                <div className="inline-flex items-baseline gap-2">
                  <span className="text-slate-300 text-base font-bold">Por apenas</span>
                  <span className="text-4xl sm:text-6xl font-black text-yellow-400 tracking-tight font-display italic">R$ 19,90</span>
                </div>
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mt-1">
                  🎉 Valor único • Sem Mensalidades ou Cobranças Extras!
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  ou em até 2x de R$ 10,38 no cartão de crédito
                </p>
              </div>

              {/* Dynamic countdown visual badge */}
              <div className="inline-flex items-center gap-2 bg-[#050818] border border-red-500/30 px-4 py-2 rounded-xl text-xs text-red-400 font-extrabold max-w-sm mx-auto shadow-inner">
                <Clock size={14} className="animate-pulse" />
                <span>O desconto expira em: </span>
                <span className="font-mono text-base">{formatTime(timeLeft)}</span>
              </div>

              {/* Action Bullets included */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto text-left text-xs text-slate-200 bg-white/5 p-6 rounded-2xl border border-white/10 mt-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span><strong>Acesso Vitalício</strong> para baixar quando quiser</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span><strong>Certificado 80h</strong> com chave autêntica</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span><strong>Material Completo</strong> (Infantil e Fund.)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-yellow-400 font-bold">✓</span>
                  <span><strong>Atualizações Futuras</strong> inclusas totalmente grátis</span>
                </div>
              </div>

              {/* GIANT PURCHASING BUTTON */}
              <div className="pt-6">
                <a 
                  href="https://pay.wiapy.com/A1SqD3glTi"
                  id="checkout_cta_premium"
                  className="block w-full sm:w-auto sm:inline-block bg-yellow-400 text-slate-950 font-display italic uppercase tracking-tighter text-xl font-bold py-5 px-12 rounded-2xl shadow-[0_0_35px_rgba(250,204,21,0.25)] hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 outline-none glow-yellow"
                >
                  QUERO ACESSAR AGORA!
                  <span className="block text-[10px] text-slate-900 font-extrabold uppercase tracking-widest mt-1 not-italic">
                    👉 Clique para abrir o pagamento seguro e imediato
                  </span>
                </a>
              </div>

              {/* Security trust badges row */}
              <div className="pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400 mt-6 font-medium">
                <div className="flex items-center justify-center gap-1.5">
                  <Lock size={14} className="text-yellow-400" />
                  <span>Compra 100% Criptografada</span>
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>Selo de Satisfação Consumidor</span>
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5">
                  <Smartphone size={14} className="text-blue-400" />
                  <span>Leitura Fácil em Geral</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 relative scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-yellow-400 text-xs font-black uppercase tracking-widest bg-yellow-400/10 px-3.5 py-1 rounded-full border border-yellow-400/20">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-2xl sm:text-4xl uppercase tracking-tighter italic text-white">
              Perguntas e Respostas <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Rápidas</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Tiramos suas principais dúvidas sobre o recebimento, segurança e formato dos materiais.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((item) => {
              const isExpanded = expandedFaq === item.id;
              return (
                <div 
                  key={item.id}
                  className="bg-slate-950/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md hover:border-white/10"
                >
                  <button 
                    onClick={() => handleFaqToggle(item.id)}
                    className="w-full text-left px-6 py-4.5 font-bold text-slate-100 flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                  >
                    <span>{item.question}</span>
                    <span className={`text-yellow-400 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-2 bg-slate-950/20">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 text-center relative">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tighter italic text-white max-w-2xl mx-auto leading-none">
            Comece Agora e Tenha Material Pronto Para Suas Aulas
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Tenha a segurança e o profissionalismo de um material planejado de acordo com a BNCC em segundos no seu e-mail.
          </p>

          <div className="pt-4">
            <a 
              href="https://pay.wiapy.com/A1SqD3glTi" 
              id="final_cta_button"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-display italic uppercase tracking-tighter text-lg sm:text-xl font-bold py-5 px-14 rounded-2xl shadow-[0_0_35px_rgba(250,204,21,0.25)] hover:scale-105 transition-all duration-300 focus:outline-none glow-yellow animate-bounce"
            >
              QUERO ACESSAR EM MINUTOS
            </a>
          </div>

          <div className="flex justify-center items-center gap-6 pt-6 text-xs text-slate-500 font-mono">
            <span>Selo de Criptografia Ativo</span>
            <span>•</span>
            <span>Acesso Permanente e Seguro</span>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020512] border-t border-white/5 py-10 px-4 text-center text-slate-500 text-xs space-y-4">
        
        <div className="flex justify-center items-center gap-2">
          <span className="font-display italic text-lg tracking-tighter text-white">
            EDU<span className="text-yellow-400">CALIZE</span>
          </span>
        </div>

        <p className="max-w-xl mx-auto leading-relaxed">
          Educalize — Educação Física Escolar — Todos os direitos reservados • 2026. <br />
          CNPJ: 42.109.910/0001-92 - Contato suporte: suporte@educalize.com.br
        </p>

        <p className="max-w-2xl mx-auto text-[10px] leading-relaxed text-slate-600">
          Aviso Legal: Os dados expostos nessa página são de finalidade exclusivamente facilitadora e didática profissional. Não prometemos facilidades financeiras, milagres corporais, ou resultados instantâneos de terceiros. Seu êxito depende de sua dedicação e rigor profissional.
        </p>

      </footer>
    </div>
  );
}
