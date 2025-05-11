import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WildLife Zoo</h3>
            <p className="mb-4 text-green-100">
              Connecting people with wildlife through immersive experiences and conservation education.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-green-100 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-green-100 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/animals" className="text-green-100 hover:text-white">
                  Animals
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-green-100 hover:text-white">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/conservation" className="text-green-100 hover:text-white">
                  Conservation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-green-100 hover:text-white">
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-green-100 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-green-300" />
                <span>
                  123 Wildlife Avenue
                  <br />
                  Nature City, NC 28000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-green-300" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-green-300" />
                <span>info@wildlifezoo.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4 text-green-100">
              Subscribe to our newsletter for updates on events, new animals, and conservation efforts.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-green-800 border-green-700 text-white placeholder:text-green-300"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-12 pt-6 text-center text-green-300 text-sm">
          <p>© {new Date().getFullYear()} WildLife Zoo. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

