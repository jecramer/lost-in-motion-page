
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
    <div id="odin-section" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-newsreader font-semibold text-5xl mb-10 text-center text-black">Join the Deal On</h2>
          
          <div className="flex justify-center mb-12">
            <img alt="ODIN Logo" className="h-[28.8]" src="/lovable-uploads/32dc47be-4d3e-4521-9c0f-5ca5dbccfca7.png" />
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-50 text-gray-900 placeholder:text-gray-500 border-gray-300"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="linkedin" className="text-gray-700">LinkedIn Profile URL</Label>
              <Input
                id="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/your-profile"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                required
                className="bg-gray-50 text-gray-900 placeholder:text-gray-500 border-gray-300"
              />
            </div>

            <Button type="submit" className="w-full bg-[#e0d6ac] text-[#94af45] hover:bg-[#e0d6ac]/90">
              Contact Us
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OdinSection;
