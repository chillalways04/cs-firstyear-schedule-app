
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { mockScheduleData, ClassSchedule } from "@/data/scheduleData";
import { ArrowLeft, Clock, MapPin, Building, Calendar } from "lucide-react";

const SchedulePage = () => {
  const { day } = useParams<{ day: string }>();
  const dayName = day ? day.charAt(0).toUpperCase() + day.slice(1) : "";
  const schedule = mockScheduleData[dayName] || [];

  const ClassCard = ({ classInfo }: { classInfo: ClassSchedule }) => (
    <Card className="mb-4 border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {classInfo.subject}
            </h3>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{classInfo.time}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-sm">
              <Building className="h-4 w-4 text-blue-600" />
              <span className="font-medium">{classInfo.building}</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs">
                {classInfo.floor}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {classInfo.room}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/day-selection">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Days
              </Button>
            </Link>
          </div>

          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6" />
                {dayName} Schedule
              </CardTitle>
              <p className="text-gray-600 text-sm">
                Your classes for {dayName}
              </p>
            </CardHeader>
            
            <CardContent>
              {schedule.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Calendar className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No Classes Today
                  </h3>
                  <p className="text-gray-500">
                    Enjoy your free day! 🎉
                  </p>
                </div>
              ) : (
                <div className="space-y-0">
                  {schedule.map((classInfo, index) => (
                    <ClassCard key={index} classInfo={classInfo} />
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
