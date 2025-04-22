
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const pillarsContent = [
  {
    id: "community",
    title: "Join a community of readers who love books as much as you do",
    image: "/lovable-uploads/079c2a9e-e588-49d0-bd5b-9509f514933f.png",
    description: "Discover a social reading experience unlike any other. Get Lost connects you with fellow readers, authors, and BookTok creators in a space made for authentic conversation. Unlike review platforms built for anonymous ratings or impersonal algorithms, Get Lost encourages meaningful interaction around the books you care about. Whether you're diving into a group discussion, following someone with impeccable taste, or just browsing curated feeds, you're never reading alone. Join the next generation of reading apps that prioritise community over clicks.\n\nKeywords: social reading app, book community, app like Goodreads, reading with friends"
  },
  {
    id: "recommendation",
    title: "Get personalised book recommendations powered by people and AI",
    image: "/lovable-uploads/73a8d19e-44c8-4130-8069-3b7b56ca140b.png",
    description: "Our intelligent book recommendation engine blends human taste with cutting-edge technology. Discover titles recommended by people who share your reading style, as well as algorithmic suggestions tailored to your habits and preferences. Whether you enjoy literary fiction, fantasy epics, or short story collections, Get Lost learns what moves you and introduces books that match. No endless scrolling or sponsored placements — just honest, relevant book suggestions you'll actually want to read.\n\nKeywords: personalised book recommendations, AI book suggestion engine, apps like StoryGraph, book finder app"
  },
  {
    id: "explore",
    title: "Explore curated reading lists from authors, creators, and passionate readers",
    image: "/lovable-uploads/7c258a48-a06e-4dc4-a223-26195a27528c.png",
    description: "Instead of overwhelming bestseller charts, Get Lost offers curated reading lists designed by people who love books. Explore themed collections like 'Books that changed my life', 'Feminist sci-fi', or 'Quiet stories for loud days'. You can follow your favourite curators, browse their shelves, or build and share your own booklists with a community that values thoughtfulness over trend-chasing. It's curation with soul — a discovery experience more meaningful than any algorithm.\n\nKeywords: curated reading lists, book list app, reading list creator, BookTok book recommendations"
  },
  {
    id: "habits",
    title: "Build healthy reading habits with challenges, goals, and gentle encouragement",
    image: "/lovable-uploads/70dd7663-326f-4b0f-a203-2f25cc6570c0.png", // Updated image path
    description: "Get Lost helps you read more, not through pressure, but through purpose. Join reading challenges, set custom goals, and track your progress over time. Unlike other reading tracker apps that focus on numbers alone, we offer a holistic view of your reading life. From monthly prompts to yearly goals, you'll find joy in completing stories — and motivation to pick up the next one. Whether you're starting fresh or rebuilding a reading habit after a long break, this is your gentle push forward.\n\nKeywords: reading challenge app, build reading habit, track reading goals, reading streak tracker"
  },
  {
    id: "subscribe",
    title: "Subscribe to creators for exclusive book content and recommendations",
    image: "/lovable-uploads/a899c28b-e800-4852-b1f6-9b5adf196576.png",
    description: "Support your favourite authors, BookTok influencers, or literary curators by subscribing directly through Get Lost. Unlock exclusive content like behind-the-scenes reading notes, early-access lists, and deep-dive essays into favourite titles. Think of it as Patreon for readers — a new way to connect with the people shaping your literary world, free from the noise of mainstream social media. Your subscription supports their work and brings you closer to the stories and voices you love.\n\nKeywords: exclusive content from authors, subscribe to creators, book content subscriptions, author membership platform"
  },
  {
    id: "review",
    title: "Rate and review books your way — thoughtfully and honestly",
    image: "/lovable-uploads/4b16f998-929c-42ce-b731-e44e6987573a.png",
    description: "At Get Lost, every reader has a voice. Share your perspective in a way that feels personal and true, without the pressure of five-star systems or social scoring. Leave a quote that stayed with you, a short reflection, or a full review — your style is welcome. Each review becomes part of your reading history, helping others discover books and letting you look back on your journey. It's not about influence or visibility, it's about expression.\n\nKeywords: book review app, review books without stars, thoughtful book reviews, reading journal online"
  },
  {
    id: "progress",
    title: "Show off your reading life with beautiful, shareable wrap-ups",
    image: "/lovable-uploads/f3c24ec5-8db2-4786-9adf-0e4b7893a419.png",
    description: "Get Lost turns your reading history into something worth celebrating. With monthly and annual reading wrap-ups, you can see how your habits are evolving and share your milestones with others. Whether you're reading more women authors, exploring translated fiction, or finishing your first book in ages, we help you visualise and reflect on your growth. Our tools are designed to be elegant, inspiring, and easy to share — making your love of books visible to the world.\n\nKeywords: reading wrap-up, track books read, show reading stats, Goodreads alternative with wrap-ups"
  }
];

const GuidingPillars = () => {
  const [activePillar, setActivePillar] = useState("community");

  useEffect(() => {
    const existingScripts = document.querySelectorAll('script[src="https://getlaunchlist.com/js/widget.js"]');
    existingScripts.forEach(script => script.remove());

    const script = document.createElement('script');
    script.src = 'https://getlaunchlist.com/js/widget.js';
    script.defer = true;
    script.onload = () => {
      if (window.LaunchList && typeof window.LaunchList.initializeWidgets === 'function') {
        window.LaunchList.initializeWidgets();
      }
    };
    document.head.appendChild(script);
  }, []);

  const activeContent = pillarsContent.find(pillar => pillar.id === activePillar) || pillarsContent[0];
  const thumbnailPillars = pillarsContent.filter(pillar => pillar.id !== activePillar);

  return (
    <div className="w-full mb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <Card className="w-full aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                <AspectRatio ratio={1/1}>
                  <img 
                    src={activeContent.image} 
                    alt={activeContent.title} 
                    className="w-full h-full object-cover transition-opacity duration-300"
                  />
                </AspectRatio>
              </Card>
              
              <div className="grid grid-cols-3 gap-4">
                {thumbnailPillars.map((pillar) => (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className="relative p-0 border-0 focus:outline-none hover:ring-2 hover:ring-white/50"
                  >
                    <Card className="aspect-square bg-white/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm">
                      <AspectRatio ratio={1/1}>
                        <img 
                          src={pillar.image} 
                          alt={pillar.title} 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </Card>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-start h-full">
              <div className="bg-[#d5d197]/60 backdrop-blur-sm rounded-lg p-8 shadow-lg h-full">
                <h3 className="font-newsreader text-2xl font-medium mb-4">{activeContent.title}</h3>
                <p className="text-base mb-6 opacity-[0.84] font-normal">
                  {activeContent.description}
                </p>
                
                <div className="mt-8 text-center">
                  <h3 className="font-newsreader text-2xl mb-4">Get Early Access</h3>
                  <p className="opacity-[0.84] text-base mb-6">
                    Join our waitlist to be the first to know when we launch
                  </p>
                  <div 
                    className="launchlist-widget"
                    data-key-id="pBBH1O"
                    data-height="180px"
                    style={{
                      '--widget-background': 'rgba(255, 255, 255, 0.1)',
                      '--widget-border': 'none',
                      '--widget-text': 'inherit',
                      '--button-background': '#e0d6ac',
                      '--button-text': '#94af45',
                      '--input-background': 'rgba(255, 255, 255, 0.1)',
                      '--input-border': 'rgba(255, 255, 255, 0.2)',
                      '--input-text': 'inherit',
                    } as React.CSSProperties}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidingPillars;
