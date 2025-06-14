
export interface ClassSchedule {
  subject: string;
  time: string;
  building: string;
  floor: string;
  room: string;
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
      room: "Room 06"
    },
    {
      subject: "Database Management Systems",
      time: "14:00 - 16:00",
      building: "Building 26506",
      floor: "3rd Floor",
      room: "Room 12"
    }
  ],
  "Tuesday": [
    {
      subject: "Data Structures and Algorithms",
      time: "09:00 - 11:00",
      building: "Building 26507",
      floor: "2nd Floor",
      room: "Room 08"
    },
    {
      subject: "Object-Oriented Programming",
      time: "13:00 - 15:00",
      building: "Building 26506",
      floor: "4th Floor",
      room: "Room 15"
    }
  ],
  "Wednesday": [
    {
      subject: "Computer Networks",
      time: "11:00 - 13:00",
      building: "Building 26508",
      floor: "1st Floor",
      room: "Room 03"
    }
  ],
  "Thursday": [
    {
      subject: "Software Engineering",
      time: "10:00 - 12:00",
      building: "Building 26507",
      floor: "3rd Floor",
      room: "Room 10"
    },
    {
      subject: "Web Development",
      time: "15:00 - 17:00",
      building: "Building 26506",
      floor: "2nd Floor",
      room: "Room 07"
    }
  ],
  "Friday": [
    {
      subject: "Mathematics for Computer Science",
      time: "08:00 - 10:00",
      building: "Building 26509",
      floor: "1st Floor",
      room: "Room 01"
    },
    {
      subject: "Computer Graphics",
      time: "14:00 - 16:00",
      building: "Building 26507",
      floor: "4th Floor",
      room: "Room 18"
    }
  ],
  "Saturday": [],
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
