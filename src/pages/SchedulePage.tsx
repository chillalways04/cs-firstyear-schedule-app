
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
    <Card className="mb-4 border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-5">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <h3 className="font-bold text-lg text-gray-800 leading-tight">
                  {classInfo.subject}
                </h3>
                <Badge 
                  variant={classInfo.type === "Lecture" ? "default" : classInfo.type === "Practice" ? "secondary" : "outline"}
                  className="text-xs font-semibold rounded-full px-3 py-1"
                >
                  {classInfo.type}
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="font-medium">{classInfo.time}</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50/80 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Building className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-gray-800">{classInfo.building}</span>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs font-medium rounded-full">
                {classInfo.floor}
              </Badge>
              <Badge variant="outline" className="text-xs font-medium rounded-full">
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
      
      <div className="px-4 py-4 md:py-8">
        <div className="max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/day-selection">
              <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 bg-white/80 hover:bg-white shadow-md">
                <ArrowLeft className="h-5 w-5 text-gray-700" />
              </Button>
            </Link>
          </div>

          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-8 px-6">
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                {dayName} Schedule
              </CardTitle>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your classes for {dayName}
              </p>
            </CardHeader>
            
            <CardContent className="px-4 pb-6">
              {schedule.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Calendar className="h-16 w-16 mx-auto opacity-50" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-600 mb-2">
                    No Classes Today
                  </h3>
                  <p className="text-gray-500 text-sm">
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
