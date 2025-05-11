import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const animals = [
  {
    id: 1,
    name: "African Lion",
    category: "Big Cats",
    description: "The king of the jungle, known for its majestic mane and powerful roar.",
    image: "/placeholder.svg?height=300&width=400&text=Lion",
  },
  {
    id: 2,
    name: "Asian Elephant",
    category: "Mammals",
    description: "The largest land mammal, known for its intelligence and complex social structure.",
    image: "/placeholder.svg?height=300&width=400&text=Elephant",
  },
  {
    id: 3,
    name: "Red Panda",
    category: "Endangered",
    description: "A small, arboreal mammal native to the eastern Himalayas and southwestern China.",
    image: "/placeholder.svg?height=300&width=400&text=Red+Panda",
  },
  {
    id: 4,
    name: "Komodo Dragon",
    category: "Reptiles",
    description: "The largest living lizard species, known for its venomous bite and powerful tail.",
    image: "/placeholder.svg?height=300&width=400&text=Komodo+Dragon",
  },
]

export default function AnimalHighlights() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {animals.map((animal) => (
        <Card key={animal.id} className="overflow-hidden">
          <div className="h-48 bg-gray-200">
            <img src={animal.image || "/placeholder.svg"} alt={animal.name} className="w-full h-full object-cover" />
          </div>
          <CardContent className="p-5">
            <div className="mb-2">
              <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {animal.category}
              </span>
            </div>
            <h3 className="font-bold text-lg mb-2">{animal.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{animal.description}</p>
            <Link href={`/animals/${animal.id}`}>
              <Button variant="link" className="p-0 h-auto text-green-600 hover:text-green-700">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

