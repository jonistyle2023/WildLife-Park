import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, MapPin, Calendar, Ticket } from "lucide-react"
import ZooMap from "@/components/zoo-map"
import AnimalHighlights from "@/components/animal-highlights"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url('/placeholder.svg?height=500&width=1200')",
              backgroundBlendMode: "overlay",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Welcome to WildLife Zoo</h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Discover the wonders of wildlife in our immersive and educational zoo experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Buy Tickets <Ticket className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Plan Your Visit <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className="bg-green-50 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Weekends: 8:00 AM - 8:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Ticket className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Ticket Prices</h3>
                  <p className="text-gray-600">
                    Adults: $25
                    <br />
                    Children (3-12): $15
                    <br />
                    Seniors (65+): $20
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">
                    123 Wildlife Avenue
                    <br />
                    Nature City, NC 28000
                    <br />
                    <Link href="/directions" className="text-green-600 hover:underline inline-flex items-center mt-1">
                      Get Directions <ChevronRight className="h-4 w-4" />
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Featured Animals */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Animals</h2>
          <AnimalHighlights />
          <div className="text-center mt-8">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              View All Animals <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Zoo Map */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Zoo Map</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Plan your visit with our interactive map. Explore different zones and locate your favorite animals.
            </p>
            <ZooMap />
            <div className="text-center mt-8">
              <Button className="bg-green-600 hover:bg-green-700">
                Download Map <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Events & Programs */}
        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img
                    src={`/placeholder.svg?height=200&width=400&text=Event+${i}`}
                    alt={`Event ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-xl">
                      {i === 1 ? "Feeding Time" : i === 2 ? "Conservation Talk" : "Kids Safari Day"}
                    </h3>
                    <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {i === 1 ? "Daily" : i === 2 ? "Weekly" : "Special"}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {i === 1
                      ? "Watch our zookeepers feed the animals and learn about their diets."
                      : i === 2
                        ? "Join our conservation experts for an educational talk about wildlife preservation."
                        : "A special day for kids with face painting, games, and educational activities."}
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

