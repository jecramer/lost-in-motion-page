
import { useMemo } from "react";
import { WeekType } from "@/types/timeline";

export const useTimelineData = () => {
  const weeks = useMemo<WeekType[]>(() => [
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
  ], []);

  const milestones = useMemo<string[]>(() => [
    "Fully functional user profile & follow system",
    "Book clubs and discussions live",
    "List creation with background imagery",
    "Curated, interactive feed experience",
    "Navigational UI in place"
  ], []);

  return { weeks, milestones };
};
