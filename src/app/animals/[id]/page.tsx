"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, MapPin, Clock, Heart, Share2, Calendar, Users, Thermometer, Ruler, Weight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock animal data (in a real app, this would come from an API)
const getAnimalById = (id: string) => {
    const animals = [
        {
            id: 1,
            name: "African Lion",
            scientificName: "Panthera leo",
            category: "Big Cats",
            habitat: "African Savanna",
            status: "Vulnerable",
            description:
                "The king of the jungle, known for its majestic mane and powerful roar. Lions are social cats that live in groups called prides, consisting of related females, their cubs, and a few adult males.",
            image: "/placeholder.svg?height=400&width=600&text=African+Lion",
            feedingTime: "2:00 PM",
            location: "Zone A - African Savanna",
            facts: [
                "Can roar up to 5 miles away",
                "Sleep 16-20 hours per day",
                "Live in groups called prides",
                "Males can weigh up to 420 pounds",
                "Females do most of the hunting",
            ],
            physicalInfo: {
                weight: "265-420 lbs",
                length: "4.5-6.5 ft",
                height: "3.5-4 ft",
                lifespan: "10-14 years in wild",
                diet: "Carnivore",
            },
            conservationInfo: {
                population: "~20,000 in wild",
                threats: ["Habitat loss", "Human-wildlife conflict", "Poaching"],
                efforts: ["Protected reserves", "Anti-poaching patrols", "Community education"],
            },
            gallery: [
                "/placeholder.svg?height=300&width=400&text=Lion+1",
                "/placeholder.svg?height=300&width=400&text=Lion+2",
                "/placeholder.svg?height=300&width=400&text=Lion+3",
                "/placeholder.svg?height=300&width=400&text=Lion+4",
            ],
        },
        // Add more animals as needed
    ]

    return animals.find((animal) => animal.id === Number.parseInt(id)) || animals[0]
}

export default function AnimalDetailPage() {
    const params = useParams()
    const animal = getAnimalById(params.id as string)
    const [activeImage, setActiveImage] = useState(0)

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Endangered":
                return "bg-red-100 text-red-800 border-red-200"
            case "Vulnerable":
                return "bg-orange-100 text-orange-800 border-orange-200"
            case "Near Threatened":
                return "bg-yellow-100 text-yellow-800 border-yellow-200"
            default:
                return "bg-green-100 text-green-800 border-green-200"
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Breadcrumb */}
                <div className="bg-green-50 py-4">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-2 text-sm">
                            <Link href="/" className="text-green-600 hover:text-green-700">
                                Home
                            </Link>
                            <span className="text-gray-400">/</span>
                            <Link href="/animals" className="text-green-600 hover:text-green-700">
                                Animals
                            </Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-gray-600">{animal.name}</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-4 mb-6">
                            <Link href="/animals">
                                <Button variant="outline" size="sm">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back to Animals
                                </Button>
                            </Link>
                            <div className="flex gap-2 ml-auto">
                                <Button variant="outline" size="sm">
                                    <Heart className="h-4 w-4 mr-2" />
                                    Save
                                </Button>
                                <Button variant="outline" size="sm">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Image Gallery */}
                            <div className="space-y-4">
                                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                                    <img
                                        src={animal.gallery?.[activeImage] || animal.image}
                                        alt={animal.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {animal.gallery && (
                                    <div className="grid grid-cols-4 gap-2">
                                        {animal.gallery.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setActiveImage(index)}
                                                className={`aspect-square rounded-lg overflow-hidden border-2 ${
                                                    activeImage === index ? "border-green-500" : "border-transparent"
                                                }`}
                                            >
                                                <img
                                                    src={image || "/placeholder.svg"}
                                                    alt={`${animal.name} ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Animal Info */}
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Badge variant="outline">{animal.category}</Badge>
                                        <Badge className={getStatusColor(animal.status)}>{animal.status}</Badge>
                                    </div>
                                    <h1 className="text-4xl font-bold mb-2">{animal.name}</h1>
                                    <p className="text-xl text-gray-600 italic mb-4">{animal.scientificName}</p>
                                    <p className="text-gray-700 leading-relaxed">{animal.description}</p>
                                </div>

                                {/* Quick Info */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <MapPin className="h-5 w-5 text-green-600" />
                                                <span className="font-medium">Location</span>
                                            </div>
                                            <p className="text-gray-600">{animal.location}</p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Clock className="h-5 w-5 text-green-600" />
                                                <span className="font-medium">Feeding Time</span>
                                            </div>
                                            <p className="text-gray-600">{animal.feedingTime}</p>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        Book Experience
                                    </Button>
                                    <Button variant="outline" className="flex-1">
                                        <Users className="h-4 w-4 mr-2" />
                                        Adopt This Animal
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Detailed Information Tabs */}
                <section className="py-12 bg-green-50">
                    <div className="container mx-auto px-4">
                        <Tabs defaultValue="facts" className="space-y-6">
                            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto">
                                <TabsTrigger value="facts">Fun Facts</TabsTrigger>
                                <TabsTrigger value="physical">Physical Info</TabsTrigger>
                                <TabsTrigger value="conservation">Conservation</TabsTrigger>
                                <TabsTrigger value="habitat">Habitat</TabsTrigger>
                            </TabsList>

                            <TabsContent value="facts" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Amazing Facts About {animal.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {animal.facts.map((fact, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-700">{fact}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="physical" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Physical Characteristics</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <Weight className="h-5 w-5 text-green-600" />
                                                    <div>
                                                        <span className="font-medium">Weight:</span>
                                                        <span className="ml-2 text-gray-600">{animal.physicalInfo?.weight}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Ruler className="h-5 w-5 text-green-600" />
                                                    <div>
                                                        <span className="font-medium">Length:</span>
                                                        <span className="ml-2 text-gray-600">{animal.physicalInfo?.length}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <Thermometer className="h-5 w-5 text-green-600" />
                                                    <div>
                                                        <span className="font-medium">Height:</span>
                                                        <span className="ml-2 text-gray-600">{animal.physicalInfo?.height}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div>
                                                    <span className="font-medium">Lifespan:</span>
                                                    <span className="ml-2 text-gray-600">{animal.physicalInfo?.lifespan}</span>
                                                </div>
                                                <div>
                                                    <span className="font-medium">Diet:</span>
                                                    <span className="ml-2 text-gray-600">{animal.physicalInfo?.diet}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="conservation" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Conservation Status & Efforts</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <h4 className="font-medium mb-2">Current Population</h4>
                                            <p className="text-gray-600">{animal.conservationInfo?.population}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2">Main Threats</h4>
                                            <ul className="space-y-1">
                                                {animal.conservationInfo?.threats.map((threat, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                                        <span className="text-gray-600">{threat}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium mb-2">Conservation Efforts</h4>
                                            <ul className="space-y-1">
                                                {animal.conservationInfo?.efforts.map((effort, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                        <span className="text-gray-600">{effort}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="habitat" className="space-y-4">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Natural Habitat: {animal.habitat}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <p className="text-gray-700">
                                                {animal.habitat === "African Savanna"
                                                    ? "The African savanna is a vast grassland ecosystem characterized by scattered trees and seasonal rainfall. This habitat supports a diverse array of wildlife and is home to some of Africa's most iconic species."
                                                    : "This habitat provides the perfect environment for our animals, carefully designed to mimic their natural living conditions."}
                                            </p>
                                            <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                                                <img
                                                    src={`/placeholder.svg?height=300&width=500&text=${animal.habitat.replace(" ", "+")}`}
                                                    alt={animal.habitat}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Related Animals */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">More Animals You Might Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <Card key={i} className="overflow-hidden">
                                    <div className="h-48 bg-gray-200">
                                        <img
                                            src={`/placeholder.svg?height=200&width=300&text=Animal+${i}`}
                                            alt={`Related Animal ${i}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="font-bold text-lg mb-2">
                                            {i === 1 ? "Bengal Tiger" : i === 2 ? "Giraffe" : "Red Panda"}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {i === 1
                                                ? "One of the most iconic big cats with distinctive stripes."
                                                : i === 2
                                                    ? "The tallest mammal on Earth with a gentle nature."
                                                    : "A small, adorable mammal known for its playful behavior."}
                                        </p>
                                        <Link href={`/animals/${i + 1}`}>
                                            <Button variant="outline" className="w-full">
                                                Learn More
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
