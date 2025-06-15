
import { GraduationCap } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white shadow-lg">
      <div className="px-4 py-6 md:py-8 relative">
        <div className="flex items-center justify-center space-x-3 max-w-sm mx-auto">
          <GraduationCap size={28} className="text-white" />
          <div className="text-center">
            <h1 className="text-xl md:text-2xl font-bold leading-tight">Class Schedule</h1>
            <p className="text-blue-100 dark:text-blue-200 text-xs md:text-sm leading-tight">Faculty of Science - Computer Science</p>
          </div>
        </div>
        <div className="absolute top-6 right-4 md:top-8">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
