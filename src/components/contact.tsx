import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-black px-4 md:px-8 bg-gray-100">
      <h2 className="text-3xl  font-bold text-center mb-8">Contact Us</h2>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4 ">
          <div className="flex items-center">
            <Phone className="w-6 h-6 mr-2 text-primary" />
            <span>0192254456</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 mr-2 text-primary" />
            <span>booking@rumahkebun.com.my</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-primary" />
            <span>Kampung Bukit Badong, Kuala Selangor</span>
          </div>
        </div>
        {/* <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border border-gray-300 rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-300"
          >
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  )
}