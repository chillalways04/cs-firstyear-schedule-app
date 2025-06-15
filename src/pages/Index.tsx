
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState("Science");
  const [major, setMajor] = useState("Computer Science");
  const [year, setYear] = useState("Year 1");

  const handleContinue = () => {
    navigate("/day-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="px-4 py-4 md:py-8">
        <div className="max-w-sm mx-auto">
          <Card className="shadow-2xl border-0 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl overflow-hidden">
            <CardHeader className="text-center pb-6 pt-8 px-6">
              <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100">
                Student Information
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Select your academic details to view your schedule
              </p>
            </CardHeader>
            
            <CardContent className="space-y-6 px-6 pb-8">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 block">Faculty</label>
                <Select value={faculty} onValueChange={setFaculty}>
                  <SelectTrigger className="w-full h-12 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-700/80 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-700 transition-all duration-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-0 shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl">
                    <SelectItem value="Science" className="rounded-xl">Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 block">Major</label>
                <Select value={major} onValueChange={setMajor}>
                  <SelectTrigger className="w-full h-12 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-700/80 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-700 transition-all duration-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-0 shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl">
                    <SelectItem value="Computer Science" className="rounded-xl">Computer Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 block">Year</label>
                <Select value={year} onValueChange={setYear}>
                  <SelectTrigger className="w-full h-12 rounded-2xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-700/80 focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-gray-700 transition-all duration-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-0 shadow-2xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl">
                    <SelectItem value="Year 1" className="rounded-xl">Year 1</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={handleContinue} 
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-700 dark:to-purple-700 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all duration-300 rounded-2xl font-semibold text-base shadow-lg hover:shadow-xl active:scale-95"
                  size="lg"
                >
                  Continue to Schedule
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
