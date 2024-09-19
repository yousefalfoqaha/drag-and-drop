export type studyPlanData = {
  id: number
  name: string
  sectionIds: number[]
}

export type sectionData = {
  id: number
  name: string
  requiredCreditHours: number
  courseIds: number[]
}

export type courseData = {
  id: number
  code: string
  name: string
  creditHours: number
}

export type flowsheetData = {
  id: number
  name: string
  yearIds: number[]
}

export type yearData = {
  id: number
  name: string
  semesterIds: number[]
}

export type semesterData = {
  id: number
  name: string
  courseIds: number[]
}

export const studyPlan: studyPlanData = {
  id: 1,
  name: 'Computer Science 2023/2024 - General Track',
  sectionIds: [1, 2, 3, 4],
}

export const courses: courseData[] = [
    {
      id: 1,
      code: 'ARB100',
      name: 'Arabic',
      creditHours: 3,
    },
    {
      id: 2,
      code: 'ENGL1001',
      name: 'Upper-Intermediate English',
      creditHours: 3,
    },
    {
      id: 3,
      code: 'ENGL1002',
      name: 'Advanced English',
      creditHours: 3,
    },
    {
      id: 4,
      code: 'GERL101B1',
      name: 'German I B1-Track',
      creditHours: 3,
    },
    {
      id: 5,
      code: 'GERL102B1',
      name: 'German II B1-Track',
      creditHours: 3,
    },
    {
      id: 6,
      code: 'GERL102B2',
      name: 'German II B2-Track',
      creditHours: 3,
    },
    {
      id: 7,
      code: 'MILS100',
      name: 'Military Science',
      creditHours: 3,
    },
    {
      id: 8,
      code: 'NE101',
      name: 'National Education',
      creditHours: 3,
    },
    {
      id: 9,
      code: 'NEE101',
      name: 'National Education in English',
      creditHours: 3,
    },
    {
      id: 10,
      code: 'GERL201B1',
      name: 'German III B1-Track',
      creditHours: 3,
    },
    {
      id: 11,
      code: 'GERL201B2',
      name: 'German III B2-Track',
      creditHours: 3,
    },
    {
      id: 12,
      code: 'GERL202B1',
      name: 'German IV B1-Track',
      creditHours: 3,
    },
    {
      id: 13,
      code: 'GERL202B2',
      name: 'German IV B2-Track',
      creditHours: 3,
    },
    {
      id: 14,
      code: 'MATH101',
      name: 'Calculus I',
      creditHours: 3,
    },
    {
      id: 15,
      code: 'MATH102',
      name: 'Calculus II',
      creditHours: 3,
    },
    {
      id: 16,
      code: 'CS116',
      name: 'Computing Fundamentals',
      creditHours: 3,
    },
    {
      id: 17,
      code: 'CS1160',
      name: 'Computing Fundamentals lab',
      creditHours: 1,
    },
    {
      id: 18,
      code: 'CS117',
      name: 'Object-Oriented Programming',
      creditHours: 3,
    },
    {
      id: 19,
      code: 'CS1170',
      name: 'Object-Oriented Programming Lab',
      creditHours: 1,
    },
    {
      id: 20,
      code: 'CE212',
      name: 'Digital Systems',
      creditHours: 3,
    },
    {
      id: 21,
      code: 'CE2120',
      name: 'Digital Systems Lab',
      creditHours: 1,
    },
    {
      id: 22,
      code: 'EE317',
      name: 'Linear Algebra',
      creditHours: 3,
    },
    {
      id: 23,
      code: 'GERL301B1',
      name: 'German V B1-Track',
      creditHours: 3,
    },
    {
      id: 24,
      code: 'GERL301B2',
      name: 'German V B2-Track',
      creditHours: 3,
    },
    {
      id: 25,
      code: 'GERL302B1',
      name: 'German VI B1-Track',
      creditHours: 3,
    },
    {
      id: 26,
      code: 'GERL302B2',
      name: 'German VI B2-Track',
      creditHours: 3,
    },
    {
      id: 27,
      code: 'IE0121',
      name: 'Probability and Statistics',
      creditHours: 3,
    },
    {
      id: 28,
      code: 'CS201',
      name: 'Discrete Structures',
      creditHours: 3,
    },
    {
      id: 29,
      code: 'CE201',
      name: 'Computer Architecture and Organization',
      creditHours: 3,
    },
    {
      id: 30,
      code: 'CS222',
      name: 'Theory of Algorithms',
      creditHours: 3,
    },
    {
      id: 31,
      code: 'CS223',
      name: 'Data Structures',
      creditHours: 3,
    },
    {
      id: 32,
      code: 'CS264',
      name: 'Visual Programming',
      creditHours: 3,
    },
    {
      id: 33,
      code: 'CS263',
      name: 'Database Management Systems',
      creditHours: 3,
    },
    {
      id: 34,
      code: 'CS323',
      name: 'Computational Theory',
      creditHours: 3,
    },
    {
      id: 35,
      code: 'CS342',
      name: 'Software Engineering',
      creditHours: 3,
    },
    {
      id: 36,
      code: 'CE352',
      name: 'Computer Networks',
      creditHours: 3,
    },
    {
      id: 37,
      code: 'CS355',
      name: 'Web Technologies',
      creditHours: 3,
    },
    {
      id: 38,
      code: 'CS356',
      name: 'Information Security',
      creditHours: 3,
    },
    {
      id: 39,
      code: 'CE357',
      name: 'Operating Systems',
      creditHours: 3,
    },
    {
      id: 40,
      code: 'CE3570',
      name: 'Operating Systems Lab',
      creditHours: 1,
    },
    {
      id: 41,
      code: 'CS391',
      name: 'Field Training',
      creditHours: 0,
    },
    {
      id: 42,
      code: 'CS416',
      name: 'Systems Programming',
      creditHours: 3,
    },
    {
      id: 43,
      code: 'CS451',
      name: 'Artificial Intelligence',
      creditHours: 3,
    },
    {
      id: 44,
      code: 'CS491',
      name: 'International Internship 20 weeks',
      creditHours: 12,
    },
    {
      id: 45,
      code: 'CS492',
      name: 'Senior Project',
      creditHours: 3,
    },
    {
      id: 46,
      code: 'CS330',
      name: 'Image Understanding',
      creditHours: 3,
    },
    {
      id: 47,
      code: 'CS332',
      name: 'Computer Graphics',
      creditHours: 3,
    },
    {
      id: 48,
      code: 'CS419',
      name: 'Compiler Construction',
      creditHours: 3,
    },
    {
      id: 49,
      code: 'CS477',
      name: 'Mobile Computing',
      creditHours: 3,
    },
  ]

export const sections: sectionData[] = [
  {
    id: 1,
    name: 'University Requirements',
    requiredCreditHours: 16,
    courseIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 2,
    name: 'School Requirements',
    requiredCreditHours: 21,
    courseIds: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  },
  {
    id: 3,
    name: 'Program Requirements',
    requiredCreditHours: 86,
    courseIds: [
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45,
    ],
  },
  {
    id: 4,
    name: 'Special Program Requirements (General Track)',
    requiredCreditHours: 12,
    courseIds: [46, 47, 48, 49],
  },
]

export const initialFlowsheet: flowsheetData = {
  id: 1,
  name: 'Computer Science 2023/2024 - General Track',
  yearIds: [1, 2, 3, 4, 5],
}

export const years: yearData[] = [
  {
    id: 1,
    name: 'First',
    semesterIds: [1, 2],
  },
  {
    id: 2,
    name: 'First',
    semesterIds: [3, 4],
  },
  {
    id: 3,
    name: 'First',
    semesterIds: [5, 6],
  },
  {
    id: 4,
    name: 'First',
    semesterIds: [7, 8],
  },
  {
    id: 5,
    name: 'First',
    semesterIds: [9, 10],
  },
]

export const semesters: semesterData[] = [
  {
    id: 1,
    name: 'First',
    courseIds: [],
  },
  {
    id: 2,
    name: 'Second',
    courseIds: [],
  },
  {
    id: 3,
    name: 'First',
    courseIds: [],
  },
  {
    id: 4,
    name: 'Second',
    courseIds: [],
  },
  {
    id: 5,
    name: 'First',
    courseIds: [],
  },
  {
    id: 6,
    name: 'Second',
    courseIds: [],
  },
  {
    id: 7,
    name: 'First',
    courseIds: [],
  },
  {
    id: 8,
    name: 'Second',
    courseIds: [],
  },
  {
    id: 9,
    name: 'First',
    courseIds: [],
  },
  {
    id: 10,
    name: 'Second',
    courseIds: [],
  },
]
