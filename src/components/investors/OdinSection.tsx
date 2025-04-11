
import React from "react";
import { Card } from "@/components/ui/card";

const OdinSection = () => {
  return <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-newsreader font-semibold text-4xl mb-10 text-center text-black">Join the Deal On</h2>
          
          <div className="flex justify-center mb-12">
            <img alt="ODIN Logo" className="h-10" src="/lovable-uploads/9b485bc4-6f74-40b2-b9be-56ffb78fcbd0.png" />
          </div>
          
          {/* Google Calendar Appointment Scheduling begin */}
          <div className="mb-8">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ03PtFhPh0nDyZ1w1_i_kcSMejp4SjqgX4ltexJdqbi9V882NqYUIRgY8ioAn8F8TCWxe-SsuyJ?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="600" 
              frameBorder="0"
            ></iframe>
          </div>
          {/* end Google Calendar Appointment Scheduling */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Card className="w-full max-w-sm aspect-[4/5] bg-gray-200 border-none shadow-none"></Card>
            </div>
            
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-black">
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
    </div>;
};

export default OdinSection;
