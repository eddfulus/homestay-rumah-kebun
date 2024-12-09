import Amenities from "@/components/amenities";
import Contact from "@/components/contact";
import WhatsAppButton from "@/components/whatsappbutton";
import { Gallery } from "@/components/gallery";
import GCalendar from "@/components/calendar";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100 ">
        <div><Navbar />
        <div pt-10>
          <section className="h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 md:px-8">
            <div className="max-w-2xl text-center">
              <h1 className="text-xl md:text-6xl font-bold text-green-800 mb-6">
                Rumah Kebun
              </h1>
              <div className="bg-green-50">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Nikmati masa berkualiti bersama keluarga tercinta di homestay
                  kami yang selesa dan luas, sesuai untuk perhimpunan keluarga
                  dan percutian bersama yang tersayang.
                </p>
                <br></br>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Terletak di lokasi yang tenang, homestay ini menyediakan ruang
                  tamu yang luas, bilik tidur yang selesa, serta kemudahan dapur
                  lengkap untuk menyediakan hidangan bersama keluarga. Homestay
                  ini adalah tempat yang sempurna untuk mencipta kenangan indah
                  bersama orang tersayang. Nikmati pengalaman berkumpul bersama
                  dan suasana tenang yang pasti membuatkan anda berasa seperti
                  di rumah sendiri.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* <div className="flex items-center text-large rounded-lg px-6 py-4 bg-blue-500 text-white font-bold">
          <h1>Hi. This is hero section</h1>
        </div> */}
        <section id="gallery" className="py-16 px-4 md:px-8">
          <Gallery />
        </section>

        <div>
          <p>feature</p>
        </div>
        <section id="amenities" className="py-16 px-4 md:px-8 bg-white">
          <Amenities />
        </section>
        
        <section id="calendar" className="py-16 px-4 md:px-8 bg-white">
        <div>
      <h1>Calendar</h1>
      <GCalendar />
    </div>
        </section>

        <div>
          <section
            id="contact"
            className="py-16 text-black px-4 md:px-8 bg-gray-100"
          >
            <div>
              <WhatsAppButton
                phoneNumber="+60192254456"
                message="Homestay Rumah Kebun"
              />
            </div>
            <Contact />
          </section>
        </div>
        </div>
      </main>
    </div>
    
  );
}
