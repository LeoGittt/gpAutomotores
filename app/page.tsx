"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Star,
  PenToolIcon as Tool,
  Shield,
  Car,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Menu,
  X,
  ArrowUp,
  MessageSquare,
  DollarSign,
  Repeat,
  Tag,
  Filter,
  Search,
  ChevronDown,
  CheckCircle2,
  BarChart3,
  Calendar,
  Sparkle,
  CheckCircle,
  Settings,
  Heart,
  Eye,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState("todos");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const sectionRefs = {
    inicio: useRef(null),
    servicios: useRef(null),
    vehiculos: useRef(null),
    nosotros: useRef(null),
    testimonios: useRef(null),
    contacto: useRef(null),
  };

  // Handle scroll events and section detection
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      // Determine active section
      const scrollPosition = window.scrollY + 100;

      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // // Close menu when clicking a link
  // const handleNavClick = (section) => {
  //   setIsMenuOpen(false);
  //   setActiveSection(section);

  //   // Smooth scroll to section
  //   const element = sectionRefs[section].current;
  //   if (element) {
  //     const offsetTop = element.offsetTop;
  //     window.scrollTo({
  //       top: offsetTop - 80, // Account for header height
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // Featured cars data
  const featuredCars = [
    {
      id: 1,
      name: "Mercedes-Benz AMG GT",
      year: "2023",
      mileage: "10,000 km",
      price: "$85,000",
      image: "/placeholder.svg?height=300&width=500&text=Mercedes",
      condition: "usado",
      featured: true,
      financing: true,
    },
    {
      id: 2,
      name: "BMW M4 Competition",
      year: "2023",
      mileage: "15,000 km",
      price: "$75,000",
      image: "/placeholder.svg?height=300&width=500&text=BMW",
      condition: "usado",
      featured: true,
      financing: true,
    },
    {
      id: 3,
      name: "Audi RS7 Sportback",
      year: "2022",
      mileage: "20,000 km",
      price: "$95,000",
      image: "/placeholder.svg?height=300&width=500&text=Audi",
      condition: "consignacion",
      featured: true,
      financing: true,
    },
    {
      id: 4,
      name: "Toyota Corolla Cross",
      year: "2024",
      mileage: "0 km",
      price: "$45,000",
      image: "/placeholder.svg?height=300&width=500&text=Toyota",
      condition: "0km",
      featured: false,
      financing: true,
    },
    {
      id: 5,
      name: "Volkswagen Taos",
      year: "2024",
      mileage: "0 km",
      price: "$42,000",
      image: "/placeholder.svg?height=300&width=500&text=Volkswagen",
      condition: "0km",
      featured: false,
      financing: true,
    },
    {
      id: 6,
      name: "Ford Ranger Limited",
      year: "2023",
      mileage: "5,000 km",
      price: "$55,000",
      image: "/placeholder.svg?height=300&width=500&text=Ford",
      condition: "consignacion",
      featured: false,
      financing: true,
    },
  ];

  // Filter cars based on active tab
  const filteredCars =
    activeTab === "todos"
      ? featuredCars
      : featuredCars.filter((car) => car.condition === activeTab);

  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      title:
        "Redefine tu <span class='text-red-500'>experiencia</span> al volante",
      subtitle:
        "Descubre nuestra exclusiva colección de vehículos de alta gama con garantía y financiamiento personalizado",
      image: "/placeholder.svg?height=1080&width=1920&text=Luxury+Car+1",
      cta: "Explorar vehículos",
    },
    {
      id: 2,
      title:
        "Vehículos <span class='text-red-500'>0KM</span> con las mejores condiciones",
      subtitle:
        "Encuentra tu auto nuevo con financiación a medida y entrega inmediata",
      image: "/placeholder.svg?height=1080&width=1920&text=New+Cars",
      cta: "Ver 0KM",
    },
    {
      id: 3,
      title:
        "Consigna tu vehículo con <span class='text-red-500'>expertos</span>",
      subtitle:
        "Maximiza el valor de tu auto con nuestro servicio de consignación profesional",
      image: "/placeholder.svg?height=1080&width=1920&text=Consignment",
      cta: "Consignar ahora",
    },
  ];

  // Services data
  const services = [
    {
      title: "Compra",
      description:
        "Adquiere el vehículo de tus sueños con asesoramiento personalizado y las mejores condiciones del mercado",
      icon: <DollarSign className="h-10 w-10 text-red-500" />,
      features: [
        "Tasación justa",
        "Financiación flexible",
        "Trámites incluidos",
      ],
    },
    {
      title: "Venta",
      description:
        "Vendemos tu vehículo al mejor precio posible con un proceso transparente y sin complicaciones",
      icon: <Tag className="h-10 w-10 text-red-500" />,
      features: [
        "Marketing profesional",
        "Amplia red de compradores",
        "Asesoramiento de precio",
      ],
    },
    {
      title: "Consignación",
      description:
        "Dejá tu vehículo en nuestras manos y nosotros nos encargamos de todo el proceso de venta",
      icon: <Repeat className="h-10 w-10 text-red-500" />,
      features: [
        "Sin costos iniciales",
        "Exhibición destacada",
        "Gestión de ofertas",
      ],
    },
  ];

  // Get condition badge
  const getConditionBadge = (condition: any) => {
    switch (condition) {
      case "0km":
        return <Badge className="bg-green-500">0KM</Badge>;
      case "usado":
        return <Badge className="bg-blue-500">USADO</Badge>;
      case "consignacion":
        return <Badge className="bg-purple-500">CONSIGNACIÓN</Badge>;
      default:
        return null;
    }
  };

  function handleNavClick(id: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/90 backdrop-blur-lg supports-[backdrop-filter]:bg-black/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-white bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                  Auto
                </span>
                <span className="text-2xl font-bold text-white">Web</span>
                <span className="ml-1 text-sm text-zinc-400">San Juan</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "#servicios", label: "Servicios" },
                { id: "vehiculos", label: "Vehículos" },
                { id: "nosotros", label: "Nosotros" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 relative group",
                    activeSection === item.id
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  {item.label}
                  {activeSection === item.id ? (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full" />
                  ) : (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors duration-200 rounded-full"
                // onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                {/* <Search className="h-4 w-4" />
                <span className="sr-only">Buscar</span> */}
              </Button>

              <Button
                variant="default"
                className="hidden sm:flex items-center gap-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-lg shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>Contactar</span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-colors duration-200 rounded-full"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menú</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Search Bar - Mejorado con animación */}
        <div
          className={cn(
            "w-full bg-gradient-to-b from-zinc-900 to-black border-b border-zinc-800 transition-all duration-300 ease-out overflow-hidden",
            isSearchOpen ? "h-16 opacity-100" : "h-0 opacity-0"
          )}
        >
          <div className="mx-auto max-w-7xl px-6 h-full flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-zinc-400" />
              </div>
              <Input
                placeholder="Buscar por marca, modelo o año..."
                className="block w-full bg-zinc-800/50 border border-zinc-700 text-white pl-10 pr-4 py-2.5 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-zinc-500 transition-all duration-200"
              />
              <kbd className="absolute right-2.5 top-2.5 px-2 py-1 text-xs font-medium text-zinc-400 bg-zinc-800 rounded border border-zinc-700 hidden md:inline-flex">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/95 backdrop-blur-md transition-transform duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container h-full flex flex-col py-8">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-red-600 to-red-700">
                <div className="font-bold text-white flex items-center justify-center h-full text-xl">
                  GP
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight">
                GP Automotores
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col gap-6 text-center">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "servicios", label: "Servicios" },
              { id: "vehiculos", label: "Vehículos" },
              { id: "nosotros", label: "Nosotros" },
              { id: "testimonios", label: "Testimonios" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "text-xl font-medium py-3",
                  activeSection === item.id
                    ? "text-red-500"
                    : "text-zinc-200 hover:text-red-500"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <Input
                placeholder="Buscar por marca, modelo o año..."
                className="w-full bg-zinc-800 border-zinc-700 text-white pl-10 h-12 focus:border-red-500"
              />
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 py-6 text-lg">
              Contactar
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section with Slider */}
        <section
          id="inicio"
          ref={sectionRefs.inicio}
          className="relative bg-black text-gray-200 border-b border-zinc-800 overflow-hidden"
        >
          {/* Fondo con efecto de profundidad */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
            <Image
              src="/hero-car.jpg" // Reemplaza con tu imagen
              alt="Vehículo premium en AutoWeb San Juan"
              fill
              className="object-cover object-center"
              quality={100}
              priority
            />
          </div>

          {/* Contenido principal */}
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="min-h-[80vh] flex flex-col justify-center py-24">
              <div className="max-w-2xl mx-auto lg:mx-0">
                {/* Badge premium */}
                <div className="inline-flex items-center rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/10 px-4 py-1.5 text-sm text-red-400 mb-6">
                  <Sparkle className="h-4 w-4 mr-2" />
                  <span>Experiencia Premium</span>
                </div>

                {/* Título principal */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight sm:leading-tight md:leading-tight mb-4">
                  <span className="bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                    Descubre excelencia automotriz
                  </span>
                </h1>

                {/* Subtítulo */}
                <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-lg">
                  En AutoWeb San Juan conectamos pasión con rendimiento. Tu
                  vehículo ideal está a solo un clic de distancia.
                </p>

                {/* Grupo de botones */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/30">
                    <Car className="h-5 w-5 mr-2" />
                    Ver modelos
                  </button>
                  <button className="flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 hover:border-zinc-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300">
                    <Phone className="h-5 w-5 mr-2" />
                    Contactar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sección inferior (solo desktop) */}
          <div className="hidden lg:block absolute bottom-8 left-0 right-0 z-10">
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-500">
                  AutoWeb San Juan · Concesionario premium
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-zinc-400 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </button>
                  <button className="text-zinc-400 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="text-zinc-400 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicios"
          ref={sectionRefs.servicios}
          className="py-24 bg-black relative overflow-hidden border-t border-zinc-800"
        >
          {/* Fondo decorativo */}
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-500 to-transparent"></div>
          </div>

          <div className="container relative z-10 px-4 sm:px-6">
            {/* Encabezado */}
            <div className="flex flex-col items-center text-center mb-20">
              <span className="inline-flex items-center rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/10 px-4 py-1.5 text-sm text-red-400 mb-6">
                <Settings className="h-4 w-4 mr-2" />
                Soluciones Integrales
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent mb-4">
                Nuestros <span className="text-red-500">Servicios</span>
              </h2>
              <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed">
                Ofrecemos soluciones completas para todas tus necesidades
                automotrices con la más alta calidad y profesionalismo
              </p>
            </div>

            {/* Grid de Servicios */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-red-500/30 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden"
                >
                  {/* Efecto hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icono */}
                  <div className="mb-6 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/10 p-4 w-16 h-16 flex items-center justify-center border border-red-500/20 group-hover:border-red-500/40 transition-colors duration-300">
                    {service.icon}
                  </div>

                  {/* Contenido */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Lista de características */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-zinc-300"
                      >
                        <CheckCircle2 className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Proceso de Trabajo */}
            <div className="mt-32">
              <div className="text-center mb-20">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                  Nuestro <span className="text-red-500">Proceso</span>
                </h3>
                <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">
                  Un enfoque estructurado para garantizar la mejor experiencia
                  en cada paso
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Línea de conexión */}
                <div className="hidden lg:block absolute top-[60px] left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

                {[
                  {
                    step: "01",
                    title: "Consulta Inicial",
                    description:
                      "Evaluamos tus necesidades con asesoramiento personalizado para entender exactamente lo que buscas",
                    icon: <MessageSquare className="h-6 w-6 text-red-500" />,
                  },
                  {
                    step: "02",
                    title: "Selección Precisa",
                    description:
                      "Te guiamos para encontrar el vehículo ideal que se ajuste a tus preferencias y presupuesto",
                    icon: <Search className="h-6 w-6 text-red-500" />,
                  },
                  {
                    step: "03",
                    title: "Financiamiento",
                    description:
                      "Opciones flexibles adaptadas a tu situación económica con las mejores condiciones del mercado",
                    icon: <DollarSign className="h-6 w-6 text-red-500" />,
                  },
                  {
                    step: "04",
                    title: "Entrega Final",
                    description:
                      "Gestionamos todos los trámites y te entregamos tu vehículo listo para disfrutar",
                    icon: <CheckCircle className="h-6 w-6 text-red-500" />,
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:bg-zinc-900/80 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Número del paso */}
                      <div className="w-20 h-20 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center mb-6 group-hover:border-red-500/50 transition-colors duration-300">
                        <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                          {step.step}
                        </span>
                      </div>

                      {/* Icono */}
                      <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        {step.icon}
                      </div>

                      {/* Contenido */}
                      <h4 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-200">
                        {step.title}
                      </h4>
                      <p className="text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cars */}
        {/* Featured Cars Section */}
        <section
          id="vehiculos"
          ref={sectionRefs.vehiculos}
          className="py-24 bg-zinc-950 relative overflow-hidden border-t border-zinc-800"
        >
          {/* Efecto de fondo decorativo */}
          <div className="absolute inset-0 z-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')]"></div>
          </div>

          <div className="container relative z-10 px-4 sm:px-6">
            {/* Encabezado */}
            <div className="flex flex-col items-center text-center mb-20">
              <span className="inline-flex items-center rounded-full border border-red-500/30 bg-gradient-to-r from-red-500/10 to-red-600/10 px-4 py-1.5 text-sm text-red-400 mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Colección Exclusiva
              </span>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
                Nuestros <span className="text-red-500">Vehículos</span>
              </h2>

              <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed mb-8">
                Descubre nuestra selección premium de vehículos con las mejores
                condiciones del mercado
              </p>

              {/* Pestañas de categorías */}
              <Tabs
                defaultValue="todos"
                className="w-full max-w-2xl"
                onValueChange={setActiveTab}
              >
                <TabsList className="grid grid-cols-4 h-14 gap-1 bg-zinc-900/50 border border-zinc-800 rounded-xl p-1">
                  {[
                    { value: "todos", label: "Todos" },
                    { value: "0km", label: "0 KM" },
                    { value: "usado", label: "Usados" },
                    { value: "consignacion", label: "Consignación" },
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="data-[state=active]:bg-gradient-to-br data-[state=active]:from-red-600 data-[state=active]:to-red-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-red-500/20 rounded-lg transition-all duration-200"
                    >
                      {tab.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Barra de búsqueda y filtros */}
            <div className="mb-16 p-6 bg-zinc-900/50 backdrop-blur-md rounded-xl border border-zinc-800 shadow-lg">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Buscador */}
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
                    <Input
                      placeholder="Buscar por marca, modelo, año..."
                      className="w-full bg-zinc-800/50 border-zinc-700 text-white pl-12 h-12 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 rounded-lg"
                    />
                  </div>
                </div>

                {/* Filtros */}
                <div className="flex gap-3 w-full md:w-auto">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700 hover:text-white h-12 px-4 rounded-lg gap-2"
                      >
                        <Filter className="h-4 w-4" />
                        Filtros
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-zinc-900 border-zinc-800">
                      <DropdownMenuLabel className="text-zinc-400">
                        Filtrar por
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-zinc-800" />
                      <DropdownMenuCheckboxItem
                        checked
                        className="hover:bg-zinc-800"
                      >
                        Marca
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        checked
                        className="hover:bg-zinc-800"
                      >
                        Modelo
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem className="hover:bg-zinc-800">
                        Año
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem className="hover:bg-zinc-800">
                        Precio
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-zinc-700 bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700 hover:text-white h-12 px-4 rounded-lg gap-2"
                      >
                        <BarChart3 className="h-4 w-4" />
                        Ordenar
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-zinc-900 border-zinc-800">
                      <DropdownMenuLabel className="text-zinc-400">
                        Ordenar por
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-zinc-800" />
                      <DropdownMenuRadioItem
                        value="recientes"
                        className="hover:bg-zinc-800"
                      >
                        Más recientes
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="precio-asc"
                        className="hover:bg-zinc-800"
                      >
                        Precio: menor a mayor
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="precio-desc"
                        className="hover:bg-zinc-800"
                      >
                        Precio: mayor a menor
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="km"
                        className="hover:bg-zinc-800"
                      >
                        Menor kilometraje
                      </DropdownMenuRadioItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            {/* Grid de vehículos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10"
                >
                  {/* Imagen del vehículo */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={car.image || "/car-placeholder.jpg"}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={100}
                    />

                    {/* Badges */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                      {getConditionBadge(car.condition)}
                      {car.featured && (
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-red-600 to-red-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                          DESTACADO
                        </span>
                      )}
                    </div>

                    {/* Efecto hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button
                        variant="outline"
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 border-zinc-600 hover:border-red-500 hover:bg-red-500/10 text-white w-full"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Ver detalles
                      </Button>
                    </div>
                  </div>

                  {/* Detalles del vehículo */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-200 mb-2">
                      {car.name}
                    </h3>

                    <div className="flex items-center text-sm text-zinc-400 mb-4">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center">
                        <Gauge className="h-4 w-4 mr-1" />
                        <span>{car.mileage}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
                          {car.price}
                        </span>
                        {car.financing && (
                          <p className="text-xs text-zinc-500">
                            Financiamiento disponible
                          </p>
                        )}
                      </div>

                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-zinc-400 hover:text-red-500 hover:bg-transparent"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón Ver Todos */}
            <div className="mt-20 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-medium px-10 py-6 rounded-xl shadow-lg hover:shadow-red-500/30 transition-all duration-300"
              >
                Explorar todos los vehículos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="nosotros"
          ref={sectionRefs.nosotros}
          className="py-24 bg-black relative overflow-hidden"
        >
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-red-500 z-10" />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-red-500 z-10" />
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=600&text=Nuestro+Equipo"
                    alt="Equipo GP Automotores"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-500 mb-4">
                  Nuestra Historia
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Sobre GP Automotores
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Con más de 15 años de experiencia en el mercado automotriz,
                  nos hemos consolidado como una de las agencias más confiables
                  y prestigiosas del país, especializada en{" "}
                  <span className="text-red-500 font-semibold">
                    compra, venta, consignación de vehículos usados y 0KM
                  </span>
                  .
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Nuestro compromiso es ofrecer vehículos de la más alta
                  calidad, con garantía extendida y el mejor servicio post-venta
                  para asegurar tu satisfacción total.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold hover:text-red-500">
                        Garantía extendida
                      </h3>
                      <p className="mt-2 text-zinc-400">
                        Todos nuestros vehículos incluyen garantía
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <Tool className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold hover:text-red-500">
                        Servicio técnico
                      </h3>
                      <p className="mt-2 text-zinc-400">
                        Mantenimiento y reparación especializada
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-black via-zinc-900 to-black relative overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                ¿Listo para encontrar tu vehículo ideal?
              </h2>
              <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Visita nuestro showroom y descubre por qué somos la mejor opción
                en el mercado automotriz
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-base px-8 h-14 rounded-md"
                >
                  Agendar visita
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-zinc-700 hover:bg-zinc-800 text-base px-8 h-14 rounded-md"
                >
                  Ver catálogo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contacto"
          ref={sectionRefs.contacto}
          className="py-24 bg-black"
        >
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-500 mb-4">
                  Ponte en Contacto
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                  Contáctanos
                </h2>
                <p className="text-zinc-400 text-lg mb-10">
                  Estamos aquí para responder todas tus preguntas. Completa el
                  formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold hover:text-red-500">
                        Ubicación
                      </h3>
                      <p className="text-zinc-400">
                        Av. Principal 1234, Ciudad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold hover:text-red-500">
                        Teléfono
                      </h3>
                      <p className="text-zinc-400">+123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold hover:text-red-500">
                        Horario
                      </h3>
                      <p className="text-zinc-400">Lun - Sáb: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-zinc-300"
                      >
                        Nombre
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-zinc-300"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-red-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium text-zinc-300"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      className="w-full bg-zinc-800 border-zinc-700 text-white rounded-md h-10 focus:border-red-500"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="compra-0km">Compra 0KM</option>
                      <option value="compra-usado">Compra Usado</option>
                      <option value="venta">Venta</option>
                      <option value="consignacion">Consignación</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-zinc-300"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escribe tu mensaje aquí"
                      rows={4}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-red-500"
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 h-12 text-base">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-950 py-16 border-t border-zinc-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-red-600 to-red-700">
                  <div className="font-bold text-white flex items-center justify-center h-full text-xl">
                    GP
                  </div>
                </div>
                <span className="text-2xl font-bold tracking-tight">
                  GP Automotores
                </span>
              </div>
              <p className="text-zinc-400">
                Tu mejor opción en vehículos nuevos y seminuevos con la mejor
                garantía del mercado.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-zinc-500 hover:text-red-500">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-red-500">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-zinc-500 hover:text-red-500">
                  <Twitter className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Enlaces rápidos</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#inicio"
                    className="text-zinc-400 hover:text-red-500"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicios"
                    className="text-zinc-400 hover:text-red-500"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#vehiculos"
                    className="text-zinc-400 hover:text-red-500"
                  >
                    Vehículos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#nosotros"
                    className="text-zinc-400 hover:text-red-500"
                  >
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Servicios</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-500">
                    Compra 0KM
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-500">
                    Compra Usados
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-500">
                    Venta
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-red-500">
                    Consignación
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <span className="text-zinc-400">
                    Av. Principal 1234, Ciudad
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <span className="text-zinc-400">+123 456 7890</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-red-500" />
                  <span className="text-zinc-400">Lun - Sáb: 9:00 - 18:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500">
            <p>
              © {new Date().getFullYear()} GP Automotores. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="icon"
          className="h-14 w-14 rounded-full bg-red-600 hover:bg-red-700"
          aria-label="Contactar"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      {/* Scroll to Top Button */}
      <div
        className={cn(
          "fixed bottom-6 left-6 z-40 transition-all duration-300",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <Button
          size="icon"
          className="h-12 w-12 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800"
          aria-label="Volver arriba"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
