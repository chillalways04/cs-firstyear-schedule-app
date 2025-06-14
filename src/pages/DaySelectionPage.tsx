
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>

          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <Calendar className="h-6 w-6" />
                Select Day
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Choose a day to view your class schedule
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {daysOfWeek.map((day) => (
                  <Button
                    key={day}
                    variant="outline"
                    className="h-16 text-lg font-medium hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-200"
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
