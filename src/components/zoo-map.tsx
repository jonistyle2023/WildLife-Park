"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const zoneColors = {
  "African Savanna": "bg-amber-500",
  "Asian Forest": "bg-emerald-600",
  Rainforest: "bg-green-700",
  "Arctic Zone": "bg-blue-400",
  Desert: "bg-yellow-600",
  "Aquatic World": "bg-blue-600",
  Aviary: "bg-teal-500",
  "Kids Zone": "bg-purple-500",
  "Food Court": "bg-red-500",
  Entrance: "bg-gray-700",
}

export default function ZooMap() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null)

  const handleZoneClick = (zone: string) => {
    setSelectedZone(zone === selectedZone ? null : zone)
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-green-50 border-b">
        <div className="flex flex-wrap gap-2">
          {Object.entries(zoneColors).map(([zone, color]) => (
            <Button
              key={zone}
              variant="outline"
              size="sm"
              className={`${selectedZone === zone ? "ring-2 ring-offset-2 ring-green-500" : ""}`}
              onClick={() => handleZoneClick(zone)}
            >
              <span className={`w-3 h-3 rounded-full mr-2 ${color}`}></span>
              {zone}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="aspect-[4/3] bg-green-100 relative">
          {/* This would be replaced with an actual SVG map in a real implementation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/placeholder.svg?height=600&width=800&text=Interactive+Zoo+Map"
              alt="Zoo Map"
              className="w-full h-full object-cover"
            />
          </div>

          <TooltipProvider>
            {/* Example map markers - in a real implementation these would be positioned correctly */}
            {Object.entries(zoneColors).map(([zone, color], index) => {
              // Calculate position (this is just for demo purposes)
              const row = Math.floor(index / 4)
              const col = index % 4
              const top = 20 + row * 25
              const left = 20 + col * 25

              return (
                <Tooltip key={zone}>
                  <TooltipTrigger asChild>
                    <button
                      className={`absolute w-6 h-6 rounded-full ${color} border-2 border-white hover:scale-110 transition-transform`}
                      style={{ top: `${top}%`, left: `${left}%` }}
                      onClick={() => handleZoneClick(zone)}
                    >
                      <span className="sr-only">{zone}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{zone}</p>
                  </TooltipContent>
                </Tooltip>
              )
            })}
          </TooltipProvider>
        </div>

        {selectedZone && (
          <div className="p-4 bg-white border-t">
            <h3 className="font-bold text-lg">{selectedZone}</h3>
            <p className="text-gray-600 mt-1">
              {selectedZone === "African Savanna"
                ? "Home to lions, giraffes, zebras, and other African wildlife."
                : selectedZone === "Asian Forest"
                  ? "Explore the habitat of tigers, red pandas, and Asian elephants."
                  : selectedZone === "Rainforest"
                    ? "Discover the diverse species of the tropical rainforest."
                    : "Visit this area to see amazing animals and attractions."}
            </p>
            <Button className="mt-3 bg-green-600 hover:bg-green-700">View Animals in this Zone</Button>
          </div>
        )}
      </div>
    </div>
  )
}

