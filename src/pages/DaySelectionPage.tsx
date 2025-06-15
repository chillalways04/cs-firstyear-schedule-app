
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { daysOfWeek } from "@/data/scheduleData";
import { Calendar, ArrowLeft } from "lucide-react";

const DaySelectionPage = () => {
  const navigate = useNavigate();

  const handleDaySelect = (day: string) => {
    navigate(`/schedule/${day.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="px-4 py-4 md:py-8">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 shadow-md">
                <ArrowLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </Button>
            </Link>
          </div>

          <Card className="shadow-2xl border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-8 px-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center gap-3">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                Select Day
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Choose a day to view your class schedule
              </p>
            </CardHeader>
            
            <CardContent className="px-6 pb-8">
              <div className="grid grid-cols-1 gap-3">
                {daysOfWeek.map((day) => (
                  <Button
                    key={day}
                    variant="ghost"
                    className="h-16 text-lg font-semibold bg-gray-50/80 dark:bg-gray-700/80 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white dark:hover:from-blue-600 dark:hover:to-purple-600 border-2 border-gray-200 dark:border-gray-600 hover:border-transparent transition-all duration-300 rounded-2xl shadow-sm hover:shadow-lg active:scale-95"
                    onClick={() => handleDaySelect(day)}
                  >
                    {day}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DaySelectionPage;
