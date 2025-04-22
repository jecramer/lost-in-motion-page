
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const OdinSection = () => {
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Add me to your deal!");
    const body = encodeURIComponent(`LinkedIn Profile: ${linkedin}`);
    window.location.href = `mailto:james.cramer@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-newsreader font-semibold text-5xl mb-10 text-center text-black">Join the Deal On</h2>
          
          <div className="flex justify-center mb-12">
            <img alt="ODIN Logo" className="h-[28.8]" src="/lovable-uploads/32dc47be-4d3e-4521-9c0f-5ca5dbccfca7.png" />
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
              <Input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/your-profile"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Contact Us
            </Button>
          </form>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Card className="w-full max-w-sm aspect-[4/5] bg-gray-200 border-none shadow-none"></Card>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl leading-relaxed text-black opacity-[0.84] hover:opacity-100 transition-opacity">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                ab illo inventore veritatis et quasi ed ut perspiciatis unde omnis iste natus
                error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdinSection;

