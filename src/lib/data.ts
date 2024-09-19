export interface StudyPlan {
  id: number
  name: string
  sections: Section[]
}

export interface Section {
  id: number
  name: string
  requiredCreditHours: number
  courseIds: number[]
}

export interface Course {
  id: number
  code: string
  name: string
  creditHours: number
}

export interface Flowsheet {
  id: number
  name: string
  years: { [key: number]: Year }
}

export interface Year {
  id: number
  name: string
  semesters: { [key: number]: Semester }
}

export interface Semester {
  id: number
  name: string
  courseIds: number[]
}

export const studyPlan: StudyPlan = {
  id: 1,
  name: 'Computer Science 2023/2024 - General Track',
  sections: [
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
  ],
}

export const courses: { [key: number]: Course } = {
  1: {
    id: 1,
    code: 'ARB100',
    name: 'Arabic',
    creditHours: 3,
  },
  2: {
    id: 2,
    code: 'ENGL1001',
    name: 'Upper-Intermediate English',
    creditHours: 3,
  },
  3: {
    id: 3,
    code: 'ENGL1002',
    name: 'Advanced English',
    creditHours: 3,
  },
  4: {
    id: 4,
    code: 'GERL101B1',
    name: 'German I B1-Track',
    creditHours: 3,
  },
  5: {
    id: 5,
    code: 'GERL102B1',
    name: 'German II B1-Track',
    creditHours: 3,
  },
  6: {
    id: 6,
    code: 'GERL102B2',
    name: 'German II B2-Track',
    creditHours: 3,
  },
  7: {
    id: 7,
    code: 'MILS100',
    name: 'Military Science',
    creditHours: 3,
  },
  8: {
    id: 8,
    code: 'NE101',
    name: 'National Education',
    creditHours: 3,
  },
  9: {
    id: 9,
    code: 'NEE101',
    name: 'National Education in English',
    creditHours: 3,
  },
  10: {
    id: 10,
    code: 'GERL201B1',
    name: 'German III B1-Track',
    creditHours: 3,
  },
  11: {
    id: 11,
    code: 'GERL201B2',
    name: 'German III B2-Track',
    creditHours: 3,
  },
  12: {
    id: 12,
    code: 'GERL202B1',
    name: 'German IV B1-Track',
    creditHours: 3,
  },
  13: {
    id: 13,
    code: 'GERL202B2',
    name: 'German IV B2-Track',
    creditHours: 3,
  },
  14: {
    id: 14,
    code: 'MATH101',
    name: 'Calculus I',
    creditHours: 3,
  },
  15: {
    id: 15,
    code: 'MATH102',
    name: 'Calculus II',
    creditHours: 3,
  },
  16: {
    id: 16,
    code: 'CS116',
    name: 'Computing Fundamentals',
    creditHours: 3,
  },
  17: {
    id: 17,
    code: 'CS1160',
    name: 'Computing Fundamentals Lab',
    creditHours: 1,
  },
  18: {
    id: 18,
    code: 'CS117',
    name: 'Object-Oriented Programming',
    creditHours: 3,
  },
  19: {
    id: 19,
    code: 'CS1170',
    name: 'Object-Oriented Programming Lab',
    creditHours: 1,
  },
  20: {
    id: 20,
    code: 'CE212',
    name: 'Digital Systems',
    creditHours: 3,
  },
  21: {
    id: 21,
    code: 'CE2120',
    name: 'Digital Systems Lab',
    creditHours: 1,
  },
  22: {
    id: 22,
    code: 'EE317',
    name: 'Linear Algebra',
    creditHours: 3,
  },
  23: {
    id: 23,
    code: 'GERL301B1',
    name: 'German V B1-Track',
    creditHours: 3,
  },
  24: {
    id: 24,
    code: 'GERL301B2',
    name: 'German V B2-Track',
    creditHours: 3,
  },
  25: {
    id: 25,
    code: 'GERL302B1',
    name: 'German VI B1-Track',
    creditHours: 3,
  },
  26: {
    id: 26,
    code: 'GERL302B2',
    name: 'German VI B2-Track',
    creditHours: 3,
  },
  27: {
    id: 27,
    code: 'IE0121',
    name: 'Probability and Statistics',
    creditHours: 3,
  },
  28: {
    id: 28,
    code: 'CS201',
    name: 'Discrete Structures',
    creditHours: 3,
  },
  29: {
    id: 29,
    code: 'CE201',
    name: 'Computer Architecture and Organization',
    creditHours: 3,
  },
  30: {
    id: 30,
    code: 'CS222',
    name: 'Theory of Algorithms',
    creditHours: 3,
  },
  31: {
    id: 31,
    code: 'CS223',
    name: 'Data Structures',
    creditHours: 3,
  },
  32: {
    id: 32,
    code: 'CS264',
    name: 'Visual Programming',
    creditHours: 3,
  },
  33: {
    id: 33,
    code: 'CS263',
    name: 'Database Management Systems',
    creditHours: 3,
  },
  34: {
    id: 34,
    code: 'CS323',
    name: 'Computational Theory',
    creditHours: 3,
  },
  35: {
    id: 35,
    code: 'CS342',
    name: 'Software Engineering',
    creditHours: 3,
  },
  36: {
    id: 36,
    code: 'CE352',
    name: 'Computer Networks',
    creditHours: 3,
  },
  37: {
    id: 37,
    code: 'CS355',
    name: 'Web Technologies',
    creditHours: 3,
  },
  38: {
    id: 38,
    code: 'CS356',
    name: 'Information Security',
    creditHours: 3,
  },
  39: {
    id: 39,
    code: 'CE357',
    name: 'Operating Systems',
    creditHours: 3,
  },
  40: {
    id: 40,
    code: 'CE3570',
    name: 'Operating Systems Lab',
    creditHours: 1,
  },
  41: {
    id: 41,
    code: 'CS391',
    name: 'Field Training',
    creditHours: 0,
  },
  42: {
    id: 42,
    code: 'CS416',
    name: 'Systems Programming',
    creditHours: 3,
  },
  43: {
    id: 43,
    code: 'CS451',
    name: 'Artificial Intelligence',
    creditHours: 3,
  },
  44: {
    id: 44,
    code: 'CS491',
    name: 'International Internship 20 weeks',
    creditHours: 12,
  },
  45: {
    id: 45,
    code: 'CS492',
    name: 'Senior Project',
    creditHours: 3,
  },
  46: {
    id: 46,
    code: 'CS330',
    name: 'Image Understanding',
    creditHours: 3,
  },
  47: {
    id: 47,
    code: 'CS332',
    name: 'Computer Graphics',
    creditHours: 3,
  },
  48: {
    id: 48,
    code: 'CS419',
    name: 'Compiler Construction',
    creditHours: 3,
  },
  49: {
    id: 49,
    code: 'CS477',
    name: 'Mobile Computing',
    creditHours: 3,
  },
}

export const sections: { [key: number]: Section } = {
  1: {
    id: 1,
    name: 'University Requirements',
    requiredCreditHours: 16,
    courseIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  2: {
    id: 2,
    name: 'School Requirements',
    requiredCreditHours: 21,
    courseIds: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
  },
  3: {
    id: 3,
    name: 'Program Requirements',
    requiredCreditHours: 86,
    courseIds: [
      23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45,
    ],
  },
  4: {
    id: 4,
    name: 'Special Program Requirements (General Track)',
    requiredCreditHours: 12,
    courseIds: [46, 47, 48, 49],
  },
}

export const initialFlowsheet: Flowsheet = {
  id: 1,
  name: 'Computer Science 2023/2024 - General Track',
  years: {
    1: {
      id: 1,
      name: 'First Year',
      semesters: {
        1: {
          id: 1,
          name: 'First',
          courseIds: [9, 16],
        },
        2: {
          id: 2,
          name: 'Second',
          courseIds: [],
        },
      },
    },
    2: {
      id: 2,
      name: 'Second Year',
      semesters: {
        3: {
          id: 3,
          name: 'First',
          courseIds: [],
        },
        4: {
          id: 4,
          name: 'Second',
          courseIds: [],
        },
      },
    },
    3: {
      id: 3,
      name: 'Third Year',
      semesters: {
        5: {
          id: 5,
          name: 'First',
          courseIds: [],
        },
        6: {
          id: 6,
          name: 'Second',
          courseIds: [],
        },
      },
    },
    4: {
      id: 4,
      name: 'Fourth Year',
      semesters: {
        7: {
          id: 7,
          name: 'First',
          courseIds: [],
        },
        8: {
          id: 8,
          name: 'Second',
          courseIds: [],
        },
      },
    },
  },
}

export const years: { [key: number]: Year } = {
  1: {
    id: 1,
    name: 'First Year',
    semesterIds: [1, 2],
  },
  2: {
    id: 2,
    name: 'Second Year',
    semesterIds: [3, 4],
  },
  3: {
    id: 3,
    name: 'Third Year',
    semesterIds: [5, 6],
  },
  4: {
    id: 4,
    name: 'Fourth Year',
    semesterIds: [7, 8],
  },
}

export const semesters: { [key: number]: Semester } = {
  1: {
    id: 1,
    name: 'First',
    courseIds: [9, 16],
  },
  2: {
    id: 2,
    name: 'Second',
    courseIds: [],
  },
  3: {
    id: 3,
    name: 'First',
    courseIds: [],
  },
  4: {
    id: 4,
    name: 'Second',
    courseIds: [],
  },
  5: {
    id: 5,
    name: 'First',
    courseIds: [],
  },
  6: {
    id: 6,
    name: 'Second',
    courseIds: [],
  },
  7: {
    id: 7,
    name: 'First',
    courseIds: [],
  },
  8: {
    id: 8,
    name: 'Second',
    courseIds: [],
  },
}
