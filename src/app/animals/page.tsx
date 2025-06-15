"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, MapPin, Clock, Heart } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Mock animals data
const animals = [
    {
        id: 1,
        name: "African Lion",
        scientificName: "Panthera leo",
        category: "Big Cats",
        habitat: "African Savanna",
        status: "Vulnerable",
        description: "The king of the jungle, known for its majestic mane and powerful roar.",
        image: "/placeholder.svg?height=300&width=400&text=African+Lion",
        feedingTime: "2:00 PM",
        location: "Zone A - African Savanna",
        facts: ["Can roar up to 5 miles away", "Sleep 16-20 hours per day", "Live in groups called prides"],
    },
    {
        id: 2,
        name: "Asian Elephant",
        scientificName: "Elephas maximus",
        category: "Mammals",
        habitat: "Asian Forest",
        status: "Endangered",
        description: "The largest land mammal, known for its intelligence and complex social structure.",
        image: "/placeholder.svg?height=300&width=400&text=Asian+Elephant",
        feedingTime: "11:00 AM",
        location: "Zone B - Asian Forest",
        facts: ["Can weigh up to 5 tons", "Have excellent memory", "Use trunk for communication"],
    },
    {
        id: 3,
        name: "Red Panda",
        scientificName: "Ailurus fulgens",
        category: "Endangered",
        habitat: "Asian Forest",
        status: "Endangered",
        description: "A small, arboreal mammal native to the eastern Himalayas and southwestern China.",
        image: "/placeholder.svg?height=300&width=400&text=Red+Panda",
        feedingTime: "10:30 AM",
        location: "Zone B - Asian Forest",
        facts: ["Also called 'firefox'", "Excellent climbers", "Mostly eat bamboo"],
    },
    {
        id: 4,
        name: "Komodo Dragon",
        scientificName: "Varanus komodoensis",
        category: "Reptiles",
        habitat: "Desert",
        status: "Vulnerable",
        description: "The largest living lizard species, known for its venomous bite and powerful tail.",
        image: "/placeholder.svg?height=300&width=400&text=Komodo+Dragon",
        feedingTime: "1:00 PM",
        location: "Zone E - Desert",
        facts: ["Can grow up to 10 feet long", "Excellent swimmers", "Have venomous saliva"],
    },
    {
        id: 5,
        name: "Emperor Penguin",
        scientificName: "Aptenodytes forsteri",
        category: "Birds",
        habitat: "Arctic Zone",
        status: "Near Threatened",
        description: "The tallest and heaviest of all penguin species, known for their incredible parenting.",
        image: "/placeholder.svg?height=300&width=400&text=Emperor+Penguin",
        feedingTime: "12:00 PM",
        location: "Zone D - Arctic Zone",
        facts: ["Can dive up to 500 meters deep", "Males incubate eggs", "Can withstand -40°C temperatures"],
    },
    {
        id: 6,
        name: "Bengal Tiger",
        scientificName: "Panthera tigris tigris",
        category: "Big Cats",
        habitat: "Asian Forest",
        status: "Endangered",
        description: "One of the most iconic big cats, known for their distinctive orange coat with black stripes.",
        image: "/placeholder.svg?height=300&width=400&text=Bengal+Tiger",
        feedingTime: "3:30 PM",
        location: "Zone B - Asian Forest",
        facts: ["Each tiger has unique stripe patterns", "Excellent swimmers", "Can leap up to 30 feet"],
    },
    {
        id: 7,
        name: "Giant Panda",
        scientificName: "Ailuropoda melanoleuca",
        category: "Endangered",
        habitat: "Asian Forest",
        status: "Vulnerable",
        description: "Beloved black and white bears known for their bamboo diet and playful nature.",
        image: "/placeholder.svg?height=300&width=400&text=Giant+Panda",
        feedingTime: "9:00 AM",
        location: "Zone B - Asian Forest",
        facts: ["Eat 12-38 kg of bamboo daily", "Have a pseudo-thumb", "Cubs are born pink and hairless"],
    },
    {
        id: 8,
        name: "Giraffe",
        scientificName: "Giraffa camelopardalis",
        category: "Mammals",
        habitat: "African Savanna",
        status: "Vulnerable",
        description: "The tallest mammal on Earth, known for their long necks and distinctive spotted pattern.",
        image: "/placeholder.svg?height=300&width=400&text=Giraffe",
        feedingTime: "10:00 AM",
        location: "Zone A - African Savanna",
        facts: ["Can grow up to 18 feet tall", "Hearts weigh 25 pounds", "Only need 5-30 minutes of sleep per day"],
    },
]

const categories = ["All", "Big Cats", "Mammals", "Birds", "Reptiles", "Endangered"]
const habitats = ["All", "African Savanna", "Asian Forest", "Rainforest", "Arctic Zone", "Desert", "Aquatic World"]

export default function AnimalsPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedHabitat, setSelectedHabitat] = useState("All")
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

    const filteredAnimals = animals.filter((animal) => {
        const matchesSearch =
            animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            animal.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || animal.category === selectedCategory
        const matchesHabitat = selectedHabitat === "All" || animal.habitat === selectedHabitat

        return matchesSearch && matchesCategory && matchesHabitat
    })

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
                {/* Hero Section */}
                <section className="bg-green-600 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Animals</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Discover amazing wildlife from around the world. Learn about their habitats, behaviors, and conservation
                            status.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Input
                                    placeholder="Search animals..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 bg-white text-gray-900"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filters Section */}
                <section className="bg-white border-b py-6">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <div className="flex items-center gap-2">
                                    <Filter className="h-5 w-5 text-gray-600" />
                                    <span className="font-medium">Filters:</span>
                                </div>
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <Select value={selectedHabitat} onValueChange={setSelectedHabitat}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Habitat" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {habitats.map((habitat) => (
                                            <SelectItem key={habitat} value={habitat}>
                                                {habitat}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  Showing {filteredAnimals.length} of {animals.length} animals
                </span>
                                <div className="flex border rounded-lg">
                                    <Button
                                        variant={viewMode === "grid" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setViewMode("grid")}
                                        className="rounded-r-none"
                                    >
                                        Grid
                                    </Button>
                                    <Button
                                        variant={viewMode === "list" ? "default" : "ghost"}
                                        size="sm"
                                        onClick={() => setViewMode("list")}
                                        className="rounded-l-none"
                                    >
                                        List
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Animals Grid/List */}
                <section className="py-12 bg-green-50">
                    <div className="container mx-auto px-4">
                        {filteredAnimals.length === 0 ? (
                            <div className="text-center py-12">
                                <h3 className="text-xl font-medium text-gray-900 mb-2">No animals found</h3>
                                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                            </div>
                        ) : (
                            <div
                                className={
                                    viewMode === "grid"
                                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                                        : "space-y-6"
                                }
                            >
                                {filteredAnimals.map((animal) => (
                                    <Card key={animal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                        {viewMode === "grid" ? (
                                            <>
                                                <div className="relative h-48 bg-gray-200">
                                                    <img
                                                        src={animal.image || "/placeholder.svg"}
                                                        alt={animal.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute top-2 right-2">
                                                        <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                                                            <Heart className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                    <div className="absolute bottom-2 left-2">
                                                        <Badge className={getStatusColor(animal.status)}>{animal.status}</Badge>
                                                    </div>
                                                </div>
                                                <CardContent className="p-4">
                                                    <div className="mb-2">
                                                        <Badge variant="outline" className="text-xs">
                                                            {animal.category}
                                                        </Badge>
                                                    </div>
                                                    <h3 className="font-bold text-lg mb-1">{animal.name}</h3>
                                                    <p className="text-sm text-gray-600 italic mb-2">{animal.scientificName}</p>
                                                    <p className="text-sm text-gray-700 mb-3 line-clamp-2">{animal.description}</p>
                                                    <div className="space-y-2 text-xs text-gray-600">
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-3 w-3" />
                                                            <span>{animal.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-3 w-3" />
                                                            <span>Feeding: {animal.feedingTime}</span>
                                                        </div>
                                                    </div>
                                                    <Link href={`/animals/${animal.id}`} className="block mt-4">
                                                        <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
                                                    </Link>
                                                </CardContent>
                                            </>
                                        ) : (
                                            <div className="flex gap-4 p-4">
                                                <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                                                    <img
                                                        src={animal.image || "/placeholder.svg"}
                                                        alt={animal.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <div>
                                                            <h3 className="font-bold text-xl">{animal.name}</h3>
                                                            <p className="text-gray-600 italic">{animal.scientificName}</p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <Badge variant="outline">{animal.category}</Badge>
                                                            <Badge className={getStatusColor(animal.status)}>{animal.status}</Badge>
                                                        </div>
                                                    </div>
                                                    <p className="text-gray-700 mb-3">{animal.description}</p>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-4 w-4" />
                                                            <span>{animal.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-4 w-4" />
                                                            <span>Feeding: {animal.feedingTime}</span>
                                                        </div>
                                                    </div>
                                                    <Link href={`/animals/${animal.id}`}>
                                                        <Button className="bg-green-600 hover:bg-green-700">Learn More</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-green-600 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Want to Get Closer?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Book special animal experiences and get up close with your favorite animals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                                View Experiences
                            </Button>
                            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                                Adopt an Animal
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
