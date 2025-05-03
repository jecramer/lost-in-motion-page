
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Timeline = () => {
  const [activeWeek, setActiveWeek] = useState<number>(1);

  const backgroundStyle = {
    backgroundImage: `url('/bg.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  const weeks = [
    {
      number: 1,
      title: "Core Identity & Navigation",
      hours: 13,
      tasks: [
        {
          title: "User Profile (8h)",
          details: [
            "Avatar, bio, lists, stats",
            "Editable profile with tabs for Books & Lists",
            "Follow/unfollow logic",
            "Book lists displayed with background images"
          ]
        },
        {
          title: "Bottom Navigation UI (2h)",
          details: []
        },
        {
          title: "Start Social Features (3h of 4h)",
          details: [
            "Follow system foundation for activity feed"
          ]
        }
      ]
    },
    {
      number: 2,
      title: "Clubs & Lists",
      hours: 13,
      tasks: [
        {
          title: "Finish Social Features (1h)",
          details: [
            "Finalise follow-related feed mechanics"
          ]
        },
        {
          title: "Book Clubs (8h)",
          details: [
            "Join/leave functionality",
            "Club overview page"
          ]
        },
        {
          title: "Begin Book Lists (4h of 6h)",
          details: [
            "Create & save lists, background image support"
          ]
        }
      ]
    },
    {
      number: 3,
      title: "Discussions & Lists Wrap-up",
      hours: 13,
      tasks: [
        {
          title: "Finish Book Lists (2h)",
          details: []
        },
        {
          title: "Book Club Discussions (8h)",
          details: [
            "Start, reply, and render discussions",
            "Discussion feed experience"
          ]
        },
        {
          title: "Start Feed Page (3h of 12h)",
          details: [
            "Suggested lists infrastructure"
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Feed Finalisation & Polish",
      hours: 13,
      tasks: [
        {
          title: "Complete Feed Page (9h)",
          details: [
            "Item interactions, refinement"
          ]
        },
        {
          title: "Polish & Bug Fixes (4h)",
          details: [
            "QA, UX tweaks, prepare for soft launch"
          ]
        }
      ]
    }
  ];

  const milestones = [
    "Fully functional user profile & follow system",
    "Book clubs and discussions live",
    "List creation with background imagery",
    "Curated, interactive feed experience",
    "Navigational UI in place"
  ];

  return (
    <div className="min-h-screen animate-fade-in" style={backgroundStyle}>
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-newsreader text-4xl md:text-6xl text-white font-semibold mb-4">
            MVP Delivery Timeline
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-newsreader">
            4 Weeks Development Roadmap
          </p>
        </div>

        {/* Week selector */}
        <div className="flex justify-center mb-8 overflow-x-auto pb-4">
          {weeks.map(week => (
            <Button
              key={week.number}
              onClick={() => setActiveWeek(week.number)}
              variant={activeWeek === week.number ? "default" : "outline"}
              className={`mx-2 transition-all font-newsreader ${
                activeWeek === week.number 
                  ? "bg-white text-black hover:bg-white/90" 
                  : "bg-black/30 text-white hover:bg-black/50 border-white/30"
              }`}
            >
              Week {week.number}
            </Button>
          ))}
        </div>
        
        {/* Active week content */}
        {weeks.map(week => (
          week.number === activeWeek && (
            <div key={week.number} className="animate-fade-in">
              <Card className="bg-black/50 border-white/10 backdrop-blur-sm text-white mb-12">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-newsreader text-2xl md:text-3xl mb-4 pb-2 border-b border-white/10">
                    Week {week.number}: {week.title} ({week.hours}h)
                  </h2>
                  
                  <div className="space-y-6">
                    {week.tasks.map((task, index) => (
                      <div key={index} className="hover:bg-white/5 p-4 rounded-lg transition-all">
                        <h3 className="text-xl md:text-2xl font-newsreader mb-2 text-white">
                          {task.title}
                        </h3>
                        {task.details.length > 0 && (
                          <ul className="pl-5 text-white/80 space-y-1">
                            {task.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="list-disc text-sm md:text-base">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        ))}
        
        {/* Milestones section */}
        <Card className="bg-black/50 border-white/10 backdrop-blur-sm text-white mt-12">
          <CardContent className="p-6 md:p-8">
            <h2 className="font-newsreader text-2xl md:text-3xl mb-4 pb-2 border-b border-white/10 flex items-center">
              <Check className="mr-2 text-green-400" /> Key Milestones by End of Month
            </h2>
            <ul className="space-y-3">
              {milestones.map((milestone, index) => (
                <li key={index} className="flex items-start">
                  <Check className="min-w-5 h-5 text-green-400 mt-1 mr-2" />
                  <span className="text-white/90 font-newsreader text-lg">{milestone}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Timeline;
