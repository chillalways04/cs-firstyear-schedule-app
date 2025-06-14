
import { GraduationCap } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <GraduationCap size={32} />
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold">Class Schedule</h1>
            <p className="text-blue-100 text-sm md:text-base">Faculty of Science - Computer Science</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
