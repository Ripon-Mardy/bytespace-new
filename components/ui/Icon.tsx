import {
  Signal,
  Check,
  Menu,
  X,
  ChevronDown,
  Funnel,
  ChartColumnStacked,
  ChevronLeft,
  ChevronRight,
  Star,
  UsersRound,
  Share2,
  FolderBookmark,
  Video,
  StickyNote,
  GlobeLock,
} from "lucide-react";

type IconName =
  | "signal"
  | "check"
  | "menu"
  | "x"
  | "ChevronDown"
  | "Funnel"
  | "ChartColumnStacked"
  | "ChevronLeft"
  | "ChevronRight"
  | "Star"
  | "UsersRound"
  | "Share2"
  | "FolderBookmark"
  | "Video"
  | "StickyNote"
  | "GlobeLock";

const icons = {
  signal: Signal,
  check: Check,
  menu: Menu,
  x: X,
  ChevronDown: ChevronDown,
  Funnel: Funnel,
  ChartColumnStacked: ChartColumnStacked,
  ChevronLeft: ChevronLeft,
  ChevronRight: ChevronRight,
  Star: Star,
  UsersRound: UsersRound,
  Share2: Share2,
  FolderBookmark: FolderBookmark,
  Video: Video,
  StickyNote: StickyNote,
  GlobeLock: GlobeLock,
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

const Icon = ({ name, size = 14, className }: IconProps) => {
  const IconComponent = icons[name];
  return <IconComponent size={size} className={className} />;
};

export default Icon;
