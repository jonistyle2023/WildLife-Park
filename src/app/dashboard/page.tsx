"use client"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CreditCard, LogOut, Settings, Ticket, User, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "January 2023",
    membershipType: "Annual Pass",
    membershipExpires: "January 2024",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  }

  // Mock visit history
  const visitHistory = [
    { date: "2023-12-15", time: "10:30 AM", ticketType: "Annual Pass" },
    { date: "2023-11-20", time: "1:15 PM", ticketType: "Annual Pass" },
    { date: "2023-10-05", time: "11:00 AM", ticketType: "Annual Pass" },
  ]

  // Mock upcoming events
  const upcomingEvents = [
    {
      id: 1,
      name: "Night Safari",
      date: "2024-01-20",
      time: "7:00 PM",
      description: "Experience the zoo after dark with our guided night safari tour.",
      image: "/placeholder.svg?height=100&width=200&text=Night+Safari",
    },
    {
      id: 2,
      name: "Conservation Talk",
      date: "2024-01-25",
      time: "2:00 PM",
      description: "Join our experts for an educational talk about wildlife conservation efforts.",
      image: "/placeholder.svg?height=100&width=200&text=Conservation+Talk",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-10 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user.name.split(" ")[0]}</h1>
                <p className="text-gray-600">Member since {user.memberSince}</p>
                <div className="flex items-center mt-1">
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                    {user.membershipType}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Settings className="h-4 w-4" />
                Account Settings
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid grid-cols-3 md:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tickets">My Tickets</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Membership Status</CardTitle>
                    <CardDescription>Details about your zoo membership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Membership Type:</span>
                        <span className="font-medium">{user.membershipType}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Valid Until:</span>
                        <span className="font-medium">{user.membershipExpires}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Benefits:</span>
                        <span className="font-medium">Unlimited Visits, 10% Discount</span>
                      </div>
                      <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">Renew Membership</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Recent Visits</CardTitle>
                    <CardDescription>Your recent zoo visits</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {visitHistory.map((visit, index) => (
                        <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Calendar className="h-5 w-5 text-green-700" />
                          </div>
                          <div>
                            <div className="font-medium">
                              {new Date(visit.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                            <div className="text-sm text-gray-600 flex items-center gap-2">
                              <Clock className="h-3 w-3" /> {visit.time}
                            </div>
                          </div>
                          <Badge variant="outline" className="ml-auto">
                            {visit.ticketType}
                          </Badge>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full">
                        View All Visits
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Events you might be interested in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="flex gap-4 p-3 border rounded-lg">
                        <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{event.name}</h3>
                          <div className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </div>
                          <div className="text-sm text-gray-600 flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {event.time}
                          </div>
                          <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                            Register
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tickets" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Tickets</CardTitle>
                  <CardDescription>Manage your tickets and passes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg bg-green-50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-green-100 p-2 rounded-full">
                            <Ticket className="h-5 w-5 text-green-700" />
                          </div>
                          <div>
                            <div className="font-medium">Annual Pass</div>
                            <div className="text-sm text-gray-600">Valid until {user.membershipExpires}</div>
                          </div>
                        </div>
                        <Badge className="bg-green-600">Active</Badge>
                      </div>
                      <div className="border-t pt-4 flex justify-between items-center">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Member ID:</span> ZOO-12345-JD
                        </div>
                        <Button size="sm" variant="outline">
                          View QR Code
                        </Button>
                      </div>
                    </div>

                    <div className="text-center p-6 border rounded-lg border-dashed">
                      <h3 className="font-medium mb-2">Purchase Additional Tickets</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Buy tickets for friends and family to join you at the zoo
                      </p>
                      <Button className="bg-green-600 hover:bg-green-700">Buy Tickets</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Special Experiences</CardTitle>
                  <CardDescription>Book special zoo experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Behind the Scenes Tour",
                        description: "Get exclusive access to staff-only areas and learn how we care for our animals.",
                        price: "$45",
                        image: "/placeholder.svg?height=100&width=200&text=Behind+Scenes",
                      },
                      {
                        title: "Feed the Giraffes",
                        description:
                          "Hand-feed our gentle giants and take memorable photos during this unique experience.",
                        price: "$30",
                        image: "/placeholder.svg?height=100&width=200&text=Feed+Giraffes",
                      },
                    ].map((experience, index) => (
                      <div key={index} className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-gray-200">
                          <img
                            src={experience.image || "/placeholder.svg"}
                            alt={experience.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium">{experience.title}</h3>
                          <p className="text-sm text-gray-600 mt-1 mb-2">{experience.description}</p>
                          <div className="flex justify-between items-center">
                            <span className="font-bold">{experience.price}</span>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Book Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your account details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" defaultValue={user.name} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={user.email} />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                      </div>
                      <div>
                        <Label htmlFor="birthdate">Date of Birth</Label>
                        <Input id="birthdate" type="date" defaultValue="1990-01-01" />
                      </div>
                    </div>
                    <Button className="bg-green-600 hover:bg-green-700">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5 text-gray-600" />
                          <div>
                            <div className="font-medium">Visa ending in 4242</div>
                            <div className="text-sm text-gray-600">Expires 12/25</div>
                          </div>
                        </div>
                        <Badge>Default</Badge>
                      </div>
                      <Button variant="outline" className="w-full">
                        Add Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Manage your account preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <User className="h-5 w-5 text-gray-600" />
                          <div>
                            <div className="font-medium">Change Password</div>
                            <div className="text-sm text-gray-600">Update your password</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Change
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-gray-600" />
                          <div>
                            <div className="font-medium">Family Members</div>
                            <div className="text-sm text-gray-600">Manage family access</div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Manage
                        </Button>
                      </div>
                      <div className="pt-4 border-t">
                        <Button variant="destructive" className="w-full">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

