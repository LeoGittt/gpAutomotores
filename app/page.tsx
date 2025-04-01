"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeTab, setActiveTab] = useState("todos")
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  const sectionRefs = {
    inicio: useRef(null),
    servicios: useRef(null),
    vehiculos: useRef(null),
    nosotros: useRef(null),
    testimonios: useRef(null),
    contacto: useRef(null),
  }

  // Handle scroll events and section detection
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)

      // Determine active section
      const scrollPosition = window.scrollY + 100

      for (const section in sectionRefs) {
        const element = sectionRefs[section].current
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Close menu when clicking a link
  const handleNavClick = (section) => {
    setIsMenuOpen(false)
    setActiveSection(section)

    // Smooth scroll to section
    const element = sectionRefs[section].current
    if (element) {
      const offsetTop = element.offsetTop
      window.scrollTo({
        top: offsetTop - 80, // Account for header height
        behavior: "smooth",
      })
    }
  }

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
    },
  ]

  // Filter cars based on active tab
  const filteredCars = activeTab === "todos" ? featuredCars : featuredCars.filter((car) => car.condition === activeTab)

  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      title: "Redefine tu <span class='text-red-500'>experiencia</span> al volante",
      subtitle:
        "Descubre nuestra exclusiva colección de vehículos de alta gama con garantía y financiamiento personalizado",
      image: "/placeholder.svg?height=1080&width=1920&text=Luxury+Car+1",
      cta: "Explorar vehículos",
    },
    {
      id: 2,
      title: "Vehículos <span class='text-red-500'>0KM</span> con las mejores condiciones",
      subtitle: "Encuentra tu auto nuevo con financiación a medida y entrega inmediata",
      image: "/placeholder.svg?height=1080&width=1920&text=New+Cars",
      cta: "Ver 0KM",
    },
    {
      id: 3,
      title: "Consigna tu vehículo con <span class='text-red-500'>expertos</span>",
      subtitle: "Maximiza el valor de tu auto con nuestro servicio de consignación profesional",
      image: "/placeholder.svg?height=1080&width=1920&text=Consignment",
      cta: "Consignar ahora",
    },
  ]

  // Services data
  const services = [
    {
      title: "Compra",
      description:
        "Adquiere el vehículo de tus sueños con asesoramiento personalizado y las mejores condiciones del mercado",
      icon: <DollarSign className="h-10 w-10 text-red-500" />,
      features: ["Tasación justa", "Financiación flexible", "Trámites incluidos"],
    },
    {
      title: "Venta",
      description: "Vendemos tu vehículo al mejor precio posible con un proceso transparente y sin complicaciones",
      icon: <Tag className="h-10 w-10 text-red-500" />,
      features: ["Marketing profesional", "Amplia red de compradores", "Asesoramiento de precio"],
    },
    {
      title: "Consignación",
      description: "Dejá tu vehículo en nuestras manos y nosotros nos encargamos de todo el proceso de venta",
      icon: <Repeat className="h-10 w-10 text-red-500" />,
      features: ["Sin costos iniciales", "Exhibición destacada", "Gestión de ofertas"],
    },
  ]

  // Get condition badge
  const getConditionBadge = (condition) => {
    switch (condition) {
      case "0km":
        return <Badge className="bg-green-500">0KM</Badge>
      case "usado":
        return <Badge className="bg-blue-500">USADO</Badge>
      case "consignacion":
        return <Badge className="bg-purple-500">CONSIGNACIÓN</Badge>
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-red-600 to-red-700">
              <div className="font-bold text-white flex items-center justify-center h-full text-xl">GP</div>
            </div>
            <span className="text-2xl font-bold tracking-tight">GP Automotores</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
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
                  "text-sm font-medium relative",
                  activeSection === item.id ? "text-white" : "text-zinc-400 hover:text-white",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                }}
              >
                {item.label}
                {activeSection === item.id && <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-500"></span>}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button variant="default" className="hidden sm:flex bg-red-600 hover:bg-red-700">
              Contactar
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-zinc-800"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div
          className={cn(
            "w-full bg-zinc-900 border-b border-zinc-800 transition-all duration-300 overflow-hidden",
            isSearchOpen ? "h-16" : "h-0",
          )}
        >
          <div className="container h-full flex items-center">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <Input
                placeholder="Buscar por marca, modelo o año..."
                className="w-full bg-zinc-800 border-zinc-700 text-white pl-10 h-10 focus:border-red-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/95 backdrop-blur-md transition-transform duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container h-full flex flex-col py-8">
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-red-600 to-red-700">
                <div className="font-bold text-white flex items-center justify-center h-full text-xl">GP</div>
              </div>
              <span className="text-2xl font-bold tracking-tight">GP Automotores</span>
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
                  activeSection === item.id ? "text-red-500" : "text-zinc-200 hover:text-red-500",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
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

            <Button className="w-full bg-red-600 hover:bg-red-700 py-6 text-lg">Contactar</Button>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section with Slider */}
        <section id="inicio" ref={sectionRefs.inicio} className="relative h-screen max-h-[800px] overflow-hidden">
          {/* Slider */}
          <div className="relative h-full w-full">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeSlide === index ? "opacity-100" : "opacity-0",
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={`Luxury car ${slide.id}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Slider Content */}
          <div className="container absolute inset-0 z-20 flex flex-col items-start justify-center text-left">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-500">
                <span>Experiencia Premium</span>
              </div>

              {heroSlides.map((slide, index) => (
                <h1
                  key={slide.id}
                  className={cn(
                    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-opacity duration-1000",
                    activeSlide === index ? "opacity-100" : "opacity-0 absolute",
                  )}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
              ))}

              {heroSlides.map((slide, index) => (
                <p
                  key={slide.id}
                  className={cn(
                    "text-lg sm:text-xl text-zinc-400 transition-opacity duration-1000",
                    activeSlide === index ? "opacity-100" : "opacity-0 absolute",
                  )}
                >
                  {slide.subtitle}
                </p>
              ))}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {heroSlides.map((slide, index) => (
                  <Button
                    key={slide.id}
                    size="lg"
                    className={cn(
                      "bg-red-600 hover:bg-red-700 text-base px-8 h-14 rounded-md",
                      activeSlide === index ? "opacity-100" : "opacity-0 absolute pointer-events-none",
                    )}
                  >
                    {slide.cta}
                  </Button>
                ))}
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-zinc-700 hover:bg-zinc-800 text-base px-8 h-14 rounded-md"
                >
                  Agendar visita
                </Button>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full",
                  activeSlide === index ? "bg-red-500 w-10" : "bg-zinc-600 hover:bg-zinc-400",
                )}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-10" />
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-zinc-900/50 border-y border-zinc-800/50 backdrop-blur-sm">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Años de experiencia" },
                { number: "500+", label: "Vehículos vendidos" },
                { number: "100%", label: "Clientes satisfechos" },
                { number: "24/7", label: "Soporte al cliente" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-red-500">{stat.number}</div>
                  <div className="mt-2 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" ref={sectionRefs.servicios} className="py-24 bg-black relative overflow-hidden">
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-500 mb-4">
                Soluciones Integrales
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Nuestros Servicios</h2>
              <p className="max-w-[700px] text-zinc-400 text-lg">
                Ofrecemos soluciones completas para todas tus necesidades automotrices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 hover:border-red-500/50 hover:bg-zinc-900/80 h-full"
                >
                  <div className="mb-6 rounded-full bg-red-500/10 p-4 w-16 h-16 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 hover:text-red-500">{service.title}</h3>
                  <p className="text-zinc-400 mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-red-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Service Process */}
            <div className="mt-24">
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold mb-4">Cómo trabajamos</h3>
                <p className="max-w-[700px] mx-auto text-zinc-400">
                  Nuestro proceso está diseñado para brindarte la mejor experiencia posible
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  {
                    step: "01",
                    title: "Consulta inicial",
                    description: "Evaluamos tus necesidades y te brindamos asesoramiento personalizado",
                  },
                  {
                    step: "02",
                    title: "Selección de vehículo",
                    description: "Te ayudamos a encontrar el vehículo perfecto según tus preferencias y presupuesto",
                  },
                  {
                    step: "03",
                    title: "Financiamiento",
                    description: "Ofrecemos opciones de financiamiento flexibles adaptadas a tu situación",
                  },
                  {
                    step: "04",
                    title: "Entrega",
                    description: "Realizamos todos los trámites y te entregamos tu vehículo en perfectas condiciones",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    {index < 3 && (
                      <div className="absolute top-10 left-[calc(50%+2rem)] right-0 h-0.5 bg-gradient-to-r from-red-500 to-transparent hidden md:block"></div>
                    )}
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
                        <span className="text-2xl font-bold text-red-500">{step.step}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-zinc-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cars */}
        <section id="vehiculos" ref={sectionRefs.vehiculos} className="py-24 bg-zinc-950 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-500 mb-4">
                Colección Exclusiva
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Nuestros Vehículos</h2>
              <p className="max-w-[700px] text-zinc-400 text-lg mb-8">
                Descubre nuestra selección de vehículos premium con las mejores condiciones del mercado
              </p>

              {/* Vehicle Type Tabs */}
              <Tabs defaultValue="todos" className="w-full max-w-md" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 h-12">
                  <TabsTrigger value="todos" className="data-[state=active]:bg-red-600">
                    Todos
                  </TabsTrigger>
                  <TabsTrigger value="0km" className="data-[state=active]:bg-red-600">
                    0KM
                  </TabsTrigger>
                  <TabsTrigger value="usado" className="data-[state=active]:bg-red-600">
                    Usados
                  </TabsTrigger>
                  <TabsTrigger value="consignacion" className="data-[state=active]:bg-red-600">
                    Consignación
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Vehicle Search & Filter Bar */}
            <div className="mb-12 p-4 bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />
                    <Input
                      placeholder="Buscar por marca, modelo o año..."
                      className="w-full bg-zinc-800 border-zinc-700 text-white pl-10 h-10 focus:border-red-500"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filtros
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Ordenar
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 hover:border-red-500/50"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      width={500}
                      height={300}
                      className="object-cover hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {getConditionBadge(car.condition)}
                    {car.featured && <Badge className="bg-red-600">DESTACADO</Badge>}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold hover:text-red-500">{car.name}</h3>
                    <div className="mt-2 flex items-center text-sm text-zinc-400">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{car.year}</span>
                      <span className="mx-2">•</span>
                      <Car className="mr-1 h-4 w-4" />
                      <span>{car.mileage}</span>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-2xl font-bold text-red-500">{car.price}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 border-zinc-700 hover:border-red-500 hover:bg-red-500/10"
                      >
                        Ver detalles <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-16 flex justify-center">
              <Button
                size="lg"
                className="bg-zinc-900 hover:bg-red-600 border border-zinc-800 hover:border-red-600 px-8 h-14 rounded-md"
              >
                Ver todos los vehículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" ref={sectionRefs.nosotros} className="py-24 bg-black relative overflow-hidden">
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
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Sobre GP Automotores</h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                  Con más de 15 años de experiencia en el mercado automotriz, nos hemos consolidado como una de las
                  agencias más confiables y prestigiosas del país, especializada en{" "}
                  <span className="text-red-500 font-semibold">
                    compra, venta, consignación de vehículos usados y 0KM
                  </span>
                  .
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                  Nuestro compromiso es ofrecer vehículos de la más alta calidad, con garantía extendida y el mejor
                  servicio post-venta para asegurar tu satisfacción total.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold hover:text-red-500">Garantía extendida</h3>
                      <p className="mt-2 text-zinc-400">Todos nuestros vehículos incluyen garantía</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <Tool className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold hover:text-red-500">Servicio técnico</h3>
                      <p className="mt-2 text-zinc-400">Mantenimiento y reparación especializada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonios" ref={sectionRefs.testimonios} className="py-24 bg-zinc-950 relative overflow-hidden">
          <div className="container relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-500 mb-4">
                Experiencias Reales
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Lo que dicen nuestros clientes</h2>
              <p className="max-w-[700px] text-zinc-400 text-lg">
                La satisfacción de nuestros clientes es nuestra mejor carta de presentación
              </p>
            </div>

            {/* Mobile Testimonial Slider */}
            <div className="relative md:hidden mb-8">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {[
                    {
                      name: "Carlos Rodríguez",
                      position: "Empresario",
                      text: "Excelente atención y servicio. Encontré el auto que buscaba a un precio inmejorable. El proceso de compra fue rápido y sin complicaciones.",
                      rating: 5,
                      service: "Compra 0KM",
                    },
                    {
                      name: "María González",
                      position: "Arquitecta",
                      text: "Muy satisfecha con mi compra. El equipo de GP Automotores me asesoró perfectamente y me ofrecieron un plan de financiamiento que se ajustó a mi presupuesto.",
                      rating: 5,
                      service: "Compra Usado",
                    },
                    {
                      name: "Juan Pérez",
                      position: "Médico",
                      text: "El servicio de consignación es excepcional. Vendieron mi auto en tiempo récord y al precio que esperaba. Siempre están disponibles para resolver cualquier duda.",
                      rating: 4,
                      service: "Consignación",
                    },
                  ].map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 h-full">
                        <div className="flex justify-between items-center mb-6">
                          <div className="flex gap-1">
                            {Array(testimonial.rating)
                              .fill(0)
                              .map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                              ))}
                          </div>
                          <Badge className="bg-zinc-800 text-zinc-300">{testimonial.service}</Badge>
                        </div>
                        <p className="text-lg text-zinc-300 mb-6">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-lg font-bold">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold">{testimonial.name}</p>
                            <p className="text-sm text-zinc-400">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Slider Controls */}
              <div className="flex justify-center gap-3 mt-6">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-3 h-3 rounded-full",
                      activeSlide === index ? "bg-red-500 w-10" : "bg-zinc-600 hover:bg-zinc-400",
                    )}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Testimonials Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Carlos Rodríguez",
                  position: "Empresario",
                  text: "Excelente atención y servicio. Encontré el auto que buscaba a un precio inmejorable. El proceso de compra fue rápido y sin complicaciones.",
                  rating: 5,
                  service: "Compra 0KM",
                },
                {
                  name: "María González",
                  position: "Arquitecta",
                  text: "Muy satisfecha con mi compra. El equipo de GP Automotores me asesoró perfectamente y me ofrecieron un plan de financiamiento que se ajustó a mi presupuesto.",
                  rating: 5,
                  service: "Compra Usado",
                },
                {
                  name: "Juan Pérez",
                  position: "Médico",
                  text: "El servicio de consignación es excepcional. Vendieron mi auto en tiempo récord y al precio que esperaba. Siempre están disponibles para resolver cualquier duda.",
                  rating: 4,
                  service: "Consignación",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 p-8 hover:border-red-500/50 h-full"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-1">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <Badge className="bg-zinc-800 text-zinc-300">{testimonial.service}</Badge>
                  </div>

                  <p className="text-lg text-zinc-300 mb-6">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold hover:text-red-500">{testimonial.name}</p>
                      <p className="text-sm text-zinc-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                Visita nuestro showroom y descubre por qué somos la mejor opción en el mercado automotriz
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-base px-8 h-14 rounded-md">
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
        <section id="contacto" ref={sectionRefs.contacto} className="py-24 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-500 mb-4">
                  Ponte en Contacto
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Contáctanos</h2>
                <p className="text-zinc-400 text-lg mb-10">
                  Estamos aquí para responder todas tus preguntas. Completa el formulario y nos pondremos en contacto
                  contigo a la brevedad.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold hover:text-red-500">Ubicación</h3>
                      <p className="text-zinc-400">Av. Principal 1234, Ciudad</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold hover:text-red-500">Teléfono</h3>
                      <p className="text-zinc-400">+123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-red-500/10 p-3 text-red-500">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold hover:text-red-500">Horario</h3>
                      <p className="text-zinc-400">Lun - Sáb: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-zinc-300">
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
                    <label htmlFor="service" className="text-sm font-medium text-zinc-300">
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
                    <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Escribe tu mensaje aquí"
                      rows={4}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-red-500"
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 h-12 text-base">Enviar mensaje</Button>
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
                  <div className="font-bold text-white flex items-center justify-center h-full text-xl">GP</div>
                </div>
                <span className="text-2xl font-bold tracking-tight">GP Automotores</span>
              </div>
              <p className="text-zinc-400">
                Tu mejor opción en vehículos nuevos y seminuevos con la mejor garantía del mercado.
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
                  <Link href="#inicio" className="text-zinc-400 hover:text-red-500">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="#servicios" className="text-zinc-400 hover:text-red-500">
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="#vehiculos" className="text-zinc-400 hover:text-red-500">
                    Vehículos
                  </Link>
                </li>
                <li>
                  <Link href="#nosotros" className="text-zinc-400 hover:text-red-500">
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
                  <span className="text-zinc-400">Av. Principal 1234, Ciudad</span>
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
            <p>© {new Date().getFullYear()} GP Automotores. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button size="icon" className="h-14 w-14 rounded-full bg-red-600 hover:bg-red-700" aria-label="Contactar">
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      {/* Scroll to Top Button */}
      <div
        className={cn(
          "fixed bottom-6 left-6 z-40 transition-all duration-300",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
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
  )
}

