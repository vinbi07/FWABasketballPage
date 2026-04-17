import { ClubData } from "@/lib/types";

export const clubData: ClubData = {
  clubName: "Forth Worth Arlington Pilots",
  tagline: "Relentless effort. One identity.",
  description:
    "This is a placeholder club overview. Replace this copy with your team mission, culture statement, and season focus.",
  about: {
    badge: "Who We Are",
    headline: "Building A Program That Lasts Beyond The Scoreboard",
    mission:
      "We develop complete athletes and resilient leaders by combining elite competition, disciplined preparation, and community impact.",
    overview:
      "The Pilots are a women-led flag football organization focused on performance, opportunity, and representation. We invest in training environments where athletes can grow their game, build confidence, and lead on and off the field.",
    vision:
      "To become the standard for women's flag football organizations in Texas by creating a culture where preparation, accountability, and joy fuel sustainable excellence.",
    values: [
      {
        title: "Purposeful Preparation",
        description:
          "Every session has intent: skill reps, film, and recovery plans are aligned to game-day execution.",
        icon: "strategy",
      },
      {
        title: "Team-First Accountability",
        description:
          "We commit to clear roles, honest communication, and shared standards that elevate the full roster.",
        icon: "culture",
      },
      {
        title: "Athlete Development",
        description:
          "From rookies to veterans, we provide coaching pathways that expand decision-making and leadership capacity.",
        icon: "development",
      },
      {
        title: "Community Impact",
        description:
          "We mentor youth athletes and partner locally to make women's sports more visible and more accessible.",
        icon: "community",
      },
    ],
    milestones: [
      {
        year: "Milestone Year",
        title: "Milestone Title",
        description:
          "Description of the milestone and its impact on the club's growth, culture, or competitive success.",
      },
      {
        year: "Milestone Year",
        title: "Milestone Title",
        description:
          "Description of the milestone and its impact on the club's growth, culture, or competitive success.",
      },
      {
        year: "Milestone Year",
        title: "Milestone Title",
        description:
          "Description of the milestone and its impact on the club's growth, culture, or competitive success.",
      },
    ],
  },
  colors: {
    primary: "#F7F8FA",
    accent: "#262626",
  },
  navItems: [
    { label: "Club", href: "/" },
    { label: "About", href: "/about" },
    { label: "Schedule", href: "/schedule" },
    { label: "Stats", href: "/stats" },
    { label: "Shop", href: "/shop" },
  ],
  socials: [
    { label: "Instagram", href: "#", icon: "/logos/Instgram.png" },
    { label: "YouTube", href: "#", icon: "/logos/Youtube.png" },
    { label: "Facebook", href: "#", icon: "/logos/Facebook.png" },
    { label: "Twitter / X", href: "#", icon: "/logos/Twitter-X.png" },
  ],
  roster: [
    { name: "Player One", number: "01", position: "Guard", image: "/placeholders/player.svg" },
    { name: "Player Two", number: "03", position: "Guard", image: "/placeholders/player.svg" },
    { name: "Player Three", number: "07", position: "Forward", image: "/placeholders/player.svg" },
    { name: "Player Four", number: "11", position: "Center", image: "/placeholders/player.svg" },
    { name: "Player Five", number: "13", position: "Forward", image: "/placeholders/player.svg" },
    { name: "Player Six", number: "18", position: "Guard", image: "/placeholders/player.svg" },
    { name: "Player Seven", number: "24", position: "Forward", image: "/placeholders/player.svg" },
    { name: "Player Eight", number: "32", position: "Center", image: "/placeholders/player.svg" },
  ],
  staff: [
    { name: "Coach One", role: "Head Coach", image: "/placeholders/staff.svg" },
    { name: "Coach Two", role: "Associate Head Coach", image: "/placeholders/staff.svg" },
    { name: "Coach Three", role: "Defensive Coordinator", image: "/placeholders/staff.svg" },
    { name: "Coach Four", role: "Player Development", image: "/placeholders/staff.svg" },
  ],
  leadership: [
    {
      name: "Marjorie Herrera Lewis",
      role: "Associate General Manager and WFL Commissioner",
      image: "/photos/Marjorie-Lewis.jpg",
      bio: "Leads strategic planning, scheduling, and partner coordination across the full competitive calendar.",
      focus: "League Operations",
      socials: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/marjorie-herrera-lewis-doctor-of-arts-4020222/" }],
    },
    {
      name: "Paden Sickles",
      role: "President and GM and Associate WFL Commissioner",
      image: "/photos/PadenLeader.jpeg",
      bio: "Designs individual progression plans that connect film study, position training, and performance benchmarks.",
      focus: "Executive Leadership",
      socials: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/paden-sickles/" }],
    },
    {
      name: "Insert Name",
      role: "Insert Role",
      image: "/placeholders/staff.svg",
      bio: "Description",
      focus: "Insert Focus",
      socials: [{ label: "LinkedIn", href: "#" }],
    },
    {
      name: "Insert Name",
      role: "Insert Role",
      image: "/placeholders/staff.svg",
      bio: "Description",
      focus: "Insert Focus",
      socials: [{ label: "LinkedIn", href: "#" }],
    },
  ],
  schedule: [
    {
      month: "July",
      games: [
        {
          date: "Jul 12",
          time: "10:00 AM",
          matchup: "Team USA vs Team China",
          status: "Scheduled",
          result: "Scheduled",
        },
        {
          date: "Jul 12",
          time: "11:00 AM",
          matchup: "Dallas Power vs Fort Worth-Arlington Pilots",
          status: "Scheduled",
          result: "Scheduled",
        },
      ],
      events: [
        {
          date: "Jul 12",
          time: "1:00 PM",
          title: "Kids Camp/Youth Clinic Camp",
        },
        {
          date: "Jul 13",
          time: "10:00 AM",
          title: "Youth Camp",
        },
      ],
    },
  ],
  stats: [
    {
      title: "Offensive Stats",
      headers: ["PLAYER", "PPG", "FG%", "3P%", "AST"],
      rows: [
        ["Player One", 22.4, "48.2", "39.8", 6.3],
        ["Player Three", 17.1, "44.5", "35.4", 3.1],
        ["Player Six", 14.8, "42.0", "37.2", 5.7],
      ],
    },
    {
      title: "Defensive Stats",
      headers: ["PLAYER", "REB", "BLK", "STL", "DEF RTG"],
      rows: [
        ["Player Four", 11.2, 2.4, 0.9, 102.3],
        ["Player Seven", 8.5, 1.1, 1.4, 104.7],
        ["Player Two", 4.1, 0.3, 2.2, 107.1],
      ],
    },
  ],
  media: [
    { title: "Game Highlights", type: "video", thumbnail: "/placeholders/media.svg" },
    { title: "Practice Session", type: "image", thumbnail: "/placeholders/media.svg" },
    { title: "Locker Room Moments", type: "video", thumbnail: "/placeholders/media.svg" },
    { title: "Travel Day", type: "image", thumbnail: "/placeholders/media.svg" },
    { title: "Meet the Team", type: "image", thumbnail: "/placeholders/media.svg" },
  ],
  partners: [
    { name: "Wenstin", logo: "/logos/Westin.jpg", href: "https://westin.marriott.com" },
    { name: "HEB ISD", logo: "/logos/HEB-ISD-Logo.jpg", href: "https://www.hebisd.edu" },
    { name: "AlisaLuxe", logo: "/logos/Alisa-Luxe-NEW.jpg", href: "https://alisaluxebeauty.com" },
    { name: "Texas Wesleyan", logo: "/logos/TWU-NEW.jpg", href: "https://txwes.edu" },
    { name: "SportsAhead", logo: "/logos/SportThreads-NEW.jpg", href: "https://sportsthread.com" },
    { name: "SickFit", logo: "/logos/SF-NEW.jpg", href: "https://sickfitofficial.com" },
    { name: "SMU", logo: "/logos/SMU-NEW.jpg", href: "https://smumustangs.com" },
    { name: "O'kra", logo: "/logos/Okra_tm_logo.jpg", href: "https://drinkokra.com" },
    { name: "Big Frog", logo: "/logos/Big-Frog-NEW.jpg", href: "https://www.bigfrog.com" },
    { name: "Rolara", logo: "/logos/ROLARA-NEW.jpg", href: "https://rolarasport.com" },
    { name: "Blitzboard", logo: "/logos/Blitz-Board-NEW.jpg", href: "https://blitzboardstats.com" },
    { name: "Champagne rain", logo: "/logos/ChampagneRain-logo-square.png", href: "https://champagnerain.com" },
  ],
  products: [
    { name: "Pilots Home Jersey", price: "$69.00", image: "/placeholders/placeholder-images-image_large.webp" },
    { name: "Pilots Travel Hoodie", price: "$54.00", image: "/placeholders/placeholder-images-image_large.webp" },
    { name: "Game Day Cap", price: "$28.00", image: "/placeholders/placeholder-images-image_large.webp" },
    { name: "Training Shorts", price: "$32.00", image: "/placeholders/placeholder-images-image_large.webp" },
    { name: "Supporter T-Shirt", price: "$24.00", image: "/placeholders/placeholder-images-image_large.webp" },
    { name: "Sticker Pack", price: "$12.00", image: "/placeholders/placeholder-images-image_large.webp" },
  ],
};
