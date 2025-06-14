export interface ClassSchedule {
  subject: string;
  time: string;
  building: string;
  floor: string;
  room: string;
  type: "Lecture" | "Practice" | "Study";
}

export interface WeeklySchedule {
  [key: string]: ClassSchedule[];
}

export const mockScheduleData: WeeklySchedule = {
  "Monday": [
    {
      subject: "System Analysis and Design",
      time: "10:00 - 12:00",
      building: "Building 26506",
      floor: "5th Floor",
      room: "Room 06",
      type: "Lecture"
    },
    {
      subject: "System Analysis and Design",
      time: "13:00 - 15:00",
      building: "Building 26506",
      floor: "5th Floor",
      room: "Room 06",
      type: "Practice"
    }
  ],
  "Tuesday": [
    {
      subject: "Software Testing and Verification",
      time: "9:00 - 12:00",
      building: "Building 26303",
      floor: "3rd Floor",
      room: "Room 06",
      type: "Lecture"
    }
  ],
  "Wednesday": [
    {
      subject: "Computer Networks and Cloud Computing Principles",
      time: "13:00 - 16:00",
      building: "Building 26502",
      floor: "5th Floor",
      room: "Room 02",
      type: "Lecture"
    }
  ],
  "Thursday": [
    {
      subject: "Physical Activities for Modern Life",
      time: "13:00 - 16:00",
      building: "Building 17",
      floor: "--",
      room: "--",
      type: "Lecture"
    }
  ],
  "Friday": [
    {
      subject: "Seminar",
      time: "13:00 - 16:00",
      building: "Building 26302",
      floor: "3rd Floor",
      room: "Room 02",
      type: "Lecture"
    }
  ],
  "Saturday": [
    {
      subject: "Project Management and Digital Startup",
      time: "9:00 - 12:00",
      building: "Building 26305",
      floor: "3rd Floor",
      room: "Room 05",
      type: "Study"
    }
  ],
  "Sunday": []
};

export const daysOfWeek = [
  "Monday",
  "Tuesday", 
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
