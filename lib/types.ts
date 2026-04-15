export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type Player = {
  name: string;
  number: string;
  position: string;
  image: string;
  gender?: "M" | "F";
  memberSinceYear?: number;
  bio?: string;
  highlights?: string[];
  details?: {
    team?: string;
    position?: string;
    height?: string;
    birthdate?: string;
    school?: string;
    country?: string;
    experience?: string;
  };
  seasonStats?: {
    ppg: number;
    rpg: number;
    apg: number;
    fgPct: string;
    threePct: string;
    ftPct: string;
  };
  boxScores2026?: Array<{
    date: string;
    opponent: string;
    result: string;
    pts: number;
    reb: number;
    ast: number;
  }>;
};

export type StaffMember = {
  name: string;
  role: string;
  image: string;
};

export type AboutValue = {
  title: string;
  description: string;
  icon: "strategy" | "community" | "development" | "culture";
};

export type AboutMilestone = {
  year: string;
  title: string;
  description: string;
};

export type AboutContent = {
  badge: string;
  headline: string;
  mission: string;
  overview: string;
  vision: string;
  values: AboutValue[];
  milestones?: AboutMilestone[];
};

export type LeadershipMember = {
  name: string;
  role: string;
  image: string;
  bio?: string;
  focus?: string;
  socials?: Array<{
    label: string;
    href: string;
  }>;
};

export type ScheduleGame = {
  date: string;
  time: string;
  matchup: string;
  status: "Scheduled" | "Final";
  result: string;
  winner?: "home" | "away";
};

export type ScheduleMonth = {
  month: string;
  games: ScheduleGame[];
};

export type StatTableData = {
  title: string;
  headers: string[];
  rows: Array<Array<string | number>>;
};

export type MediaItem = {
  title: string;
  type: "video" | "image";
  thumbnail: string;
};

export type Partner = {
  name: string;
  logo: string;
  href?: string;
};

export type Product = {
  name: string;
  price: string;
  image: string;
};

export type ClubData = {
  clubName: string;
  tagline: string;
  description: string;
  about: AboutContent;
  colors: {
    primary: string;
    accent: string;
  };
  navItems: NavItem[];
  socials: SocialLink[];
  roster: Player[];
  staff: StaffMember[];
  leadership: LeadershipMember[];
  schedule: ScheduleMonth[];
  stats: StatTableData[];
  media: MediaItem[];
  partners: Partner[];
  products: Product[];
};
