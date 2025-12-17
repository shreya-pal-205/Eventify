import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white">
      
      {/* HERO SECTION */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#FFB22C] to-[#FFD56B] bg-clip-text text-transparent">
              Us
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Have questions, feedback, or want to collaborate with us?  
            We’d love to hear from you.
          </p>
        </div>

        {/* GLOW */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-[#FFB22C]/20 blur-[140px] rounded-full"></div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 bg-[#F7F7F7] text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          {/* LEFT INFO */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Let’s Start a Conversation
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Whether you're an event organizer, attendee, or business partner,
              our team is here to assist you. Reach out to us for support,
              inquiries, or collaboration opportunities.
            </p>

            {/* INFO CARDS */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFB22C]/20 flex items-center justify-center">
                  <Mail className="text-[#FFB22C]" />
                </div>
                <span className="text-gray-800 font-medium">
                  support@eventify.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFB22C]/20 flex items-center justify-center">
                  <Phone className="text-[#FFB22C]" />
                </div>
                <span className="text-gray-800 font-medium">
                  +91 98765 43210
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFB22C]/20 flex items-center justify-center">
                  <MapPin className="text-[#FFB22C]" />
                </div>
                <span className="text-gray-800 font-medium">
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT FORM (GLASS CARD) */}
          <Card className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-center">
                Send Us a Message
              </h3>

              <Input
                placeholder="Your Name"
                className="h-11"
              />

              <Input
                type="email"
                placeholder="Your Email"
                className="h-11"
              />

              <Textarea
                placeholder="Your Message"
                rows={5}
              />

              <Button className="w-full bg-[#FFB22C] text-black hover:bg-[#e6a51f] flex items-center gap-2">
                <Send size={18} />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-16 px-6 text-center">
        <p className="text-gray-400 text-lg">
          We typically respond within 24 hours. Your message matters to us.
        </p>
      </section>
    </div>
  );
};

export default Contact;
