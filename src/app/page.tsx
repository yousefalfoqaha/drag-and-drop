'use client'

import { useState } from 'react'

const App = () => (
  <div className="flex p-12 bg-neutral-900 h-screen w-full text-zinc-100">
    <Flowsheet {...flowsheet} />
  </div>
)
export default App

interface flowsheetProps extends flowsheetData {}

const Flowsheet = ({ id, name, years }: flowsheetProps) => {
  return (
    <>
      <header>{name}</header>
      <div className="flex h-full w-full gap-1 mr-1">
        {years.map((year) => (
          <Year key={year.id} {...year} />
        ))}
      </div>
    </>
  )
}

interface yearProps extends yearData {}

const Year = ({ id, name, semesters }: yearProps) => {
  return (
    <>
      <header>{name}</header>
      <div className="flex gap-1">
        {semesters.map((semester) => (
          <Semester key={semester.id} {...semester} />
        ))}
      </div>
    </>
  )
}

interface semesterProps extends semesterData {}

const Semester = ({ id, name, courseIds }: semesterProps) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={`overflow-clip rounded-lg transition-all border border-neutral-700 shadow-md ${
        isActive ? 'bg-neutral-800' : 'bg-neutral-900'
      }`}
    >
      <header className="text-center font-semibold py-2">{name}</header>
      <div className="min-w-40 flex flex-col gap-2 px-2">
        {courseIds.map((c) => (
          <Course key={c} />
        ))}
      </div>
    </div>
  )
}

type StudyPlanProps = {
  name: string
  courses: courseData[]
  setCourses: React.Dispatch<React.SetStateAction<courseData[]>>
}

const StudyPlan = ({ name, courses, setCourses }: StudyPlanProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsActive(true)
  }

  const handleDragLeave = () => {
    setIsActive(false)
  }

  const handleDragEnd = (e: React.DragEvent) => {
    const courseId = e.dataTransfer.getData('courseId')

    setCourses((courses) =>
      courses.map((c) =>
        c.id.toString() === courseId ? { ...c, semesterId: null } : c
      )
    )

    setIsActive(false)
  }

  const studyPlanCourses = courses.filter((c) => c.semesterId === null)

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDragEnd}
      className={`overflow-clip rounded-lg transition-all border border-neutral-700 shadow-md ${
        isActive ? 'bg-neutral-800' : 'bg-neutral-900'
      }`}
    >
      <header className="text-center font-semibold py-2">{name}</header>
      <div className="min-w-40 flex flex-col gap-2 px-2">
        {studyPlanCourses.map((c) => (
          <Course key={c.id} {...c} />
        ))}
      </div>
    </div>
  )
}

interface CourseProps extends courseData {}

const Course = ({ id, code, name, creditHours }: CourseProps) => {
  const handleDragStart = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData('courseId', id.toString())
  }

  return (
    <div
      draggable="true"
      onDragStart={(e) => handleDragStart(e, id)}
      className="bg-neutral-800 active:cursor-grabbing p-2 shadow h-36 w-36 transition-all border border-neutral-700 rounded-md flex flex-col hover:bg-purple-500/30"
    >
      <header className="font-semibold">{code}</header>
      <p className="line-clamp-3">{name}</p>
      <footer className="text-right mt-auto text-neutral-500">
        {creditHours} Cr Hr
      </footer>
    </div>
  )
}

type studyPlanData = {
  id: number
  name: string
  major: string
  degree: string
  sections: sectionData[]
}

type sectionData = {
  id: number
  name: string
  requiredCreditHours: number
  courses: courseData[]
}

type courseData = {
  id: number
  code: string
  name: string
  creditHours: number
}

const studyPlan: studyPlanData = {
  id: 19,
  name: 'Computer Science 2023/2024 - General Track',
  major: 'Computer Science',
  degree: 'Bachelor',
  sections: [
    {
      id: 13,
      name: 'University Requirements',
      requiredCreditHours: 16,
      courses: [
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
      ],
    },
    {
      id: 14,
      name: 'School Requirements',
      requiredCreditHours: 21,
      courses: [
        {
          id: 1,
          code: 'GERL201B1',
          name: 'German III B1-Track',
          creditHours: 3,
        },
        {
          id: 2,
          code: 'GERL201B2',
          name: 'German III B2-Track',
          creditHours: 3,
        },
        {
          id: 3,
          code: 'GERL202B1',
          name: 'German IV B1-Track',
          creditHours: 3,
        },
        {
          id: 4,
          code: 'GERL202B2',
          name: 'German IV B2-Track',
          creditHours: 3,
        },
        {
          id: 5,
          code: 'MATH101',
          name: 'Calculus I',
          creditHours: 3,
        },
        {
          id: 6,
          code: 'MATH102',
          name: 'Calculus II',
          creditHours: 3,
        },
        {
          id: 7,
          code: 'CS116',
          name: 'Computing Fundamentals',
          creditHours: 3,
        },
        {
          id: 8,
          code: 'CS1160',
          name: 'Computing Fundamentals lab',
          creditHours: 1,
        },
        {
          id: 9,
          code: 'CS117',
          name: 'Object-Oriented Programming',
          creditHours: 3,
        },
        {
          id: 10,
          code: 'CS1170',
          name: 'Object-Oriented Programming Lab',
          creditHours: 1,
        },
        {
          id: 11,
          code: 'CE212',
          name: 'Digital Systems',
          creditHours: 3,
        },
        {
          id: 12,
          code: 'CE2120',
          name: 'Digital Systems Lab',
          creditHours: 1,
        },
        {
          id: 13,
          code: 'EE317',
          name: 'Linear Algebra',
          creditHours: 3,
        },
      ],
    },
    {
      id: 15,
      name: 'Program Requirements',
      requiredCreditHours: 86,
      courses: [
        {
          id: 1,
          code: 'GERL301B1',
          name: 'German V B1-Track',
          creditHours: 3,
        },
        {
          id: 2,
          code: 'GERL301B2',
          name: 'German V B2-Track',
          creditHours: 3,
        },
        {
          id: 3,
          code: 'GERL302B1',
          name: 'German VI B1-Track',
          creditHours: 3,
        },
        {
          id: 4,
          code: 'GERL302B2',
          name: 'German VI B2-Track',
          creditHours: 3,
        },
        {
          id: 5,
          code: 'IE0121',
          name: 'Probability and Statistics',
          creditHours: 3,
        },
        {
          id: 6,
          code: 'CS201',
          name: 'Discrete Structures',
          creditHours: 3,
        },
        {
          id: 7,
          code: 'CE201',
          name: 'Computer Architecture and Organization',
          creditHours: 3,
        },
        {
          id: 8,
          code: 'CS222',
          name: 'Theory of Algorithms',
          creditHours: 3,
        },
        {
          id: 9,
          code: 'CS223',
          name: 'Data Structures',
          creditHours: 3,
        },
        {
          id: 10,
          code: 'CS264',
          name: 'Visual Programming',
          creditHours: 3,
        },
        {
          id: 11,
          code: 'CS263',
          name: 'Database Management Systems',
          creditHours: 3,
        },
        {
          id: 12,
          code: 'CS323',
          name: 'Computational Theory',
          creditHours: 3,
        },
        {
          id: 13,
          code: 'CS342',
          name: 'Software Engineering',
          creditHours: 3,
        },
        {
          id: 14,
          code: 'CE352',
          name: 'Computer Networks',
          creditHours: 3,
        },
        {
          id: 15,
          code: 'CS355',
          name: 'Web Technologies',
          creditHours: 3,
        },
        {
          id: 16,
          code: 'CS356',
          name: 'Information Security',
          creditHours: 3,
        },
        {
          id: 17,
          code: 'CE357',
          name: 'Operating Systems',
          creditHours: 3,
        },
        {
          id: 18,
          code: 'CE3570',
          name: 'Operating Systems Lab',
          creditHours: 1,
        },
        {
          id: 19,
          code: 'CS391',
          name: 'Field Training',
          creditHours: 0,
        },
        {
          id: 20,
          code: 'CS416',
          name: 'Systems Programming',
          creditHours: 3,
        },
        {
          id: 21,
          code: 'CS451',
          name: 'Artificial Intelligence',
          creditHours: 3,
        },
        {
          id: 22,
          code: 'CS491',
          name: 'International Internship 20 weeks',
          creditHours: 12,
        },
        {
          id: 23,
          code: 'CS492',
          name: 'Senior Project',
          creditHours: 3,
        },
      ],
    },
    {
      id: 16,
      name: 'Special Program Requirements (General Track)',
      requiredCreditHours: 12,
      courses: [
        {
          id: 1,
          code: 'CS330',
          name: 'Image Understanding',
          creditHours: 3,
        },
        {
          id: 2,
          code: 'CS332',
          name: 'Computer Graphics',
          creditHours: 3,
        },
        {
          id: 3,
          code: 'CS419',
          name: 'Compiler Construction',
          creditHours: 3,
        },
        {
          id: 4,
          code: 'CS477',
          name: 'Mobile Computing',
          creditHours: 3,
        },
      ],
    },
  ],
}

type flowsheetData = {
  id: number
  name: string
  years: yearData[]
}

type yearData = {
  id: number
  name: string
  semesters: semesterData[]
}

type semesterData = {
  id: number
  name: string
  courseIds: number[]
}

const flowsheet: flowsheetData = {
  id: 4,
  name: studyPlan.degree + ' in ' + studyPlan.major + ' Flowsheet',
  years: [
    {
      id: 17,
      name: 'First Year',
      semesters: [
        {
          id: 3,
          name: 'First',
          courseIds: [1, 2, 3, 4, 5],
        },
        {
          id: 4,
          name: 'Second',
          courseIds: [6, 7, 8, 9, 10, 11],
        },
        // {
        //   id: 4,
        //   name: "Summer",
        //   courseIds: [12, 13, 14],
        // },
      ],
    },
    {
      id: 17,
      name: 'Second Year',
      semesters: [
        {
          id: 3,
          name: 'First',
          courseIds: [15, 16, 17, 18, 19, 20, 21],
        },
        {
          id: 4,
          name: 'Second',
          courseIds: [22, 23, 24, 25, 27],
        },
        // {
        //   id: 4,
        //   name: "Summer",
        //   courseIds: [],
        // },
      ],
    },
    {
      id: 17,
      name: 'Third Year',
      semesters: [
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
        // {
        //   id: 4,
        //   name: "Summer",
        //   courseIds: [],
        // },
      ],
    },
    {
      id: 17,
      name: 'German Year',
      semesters: [
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
        // {
        //   id: 4,
        //   name: "Summer",
        //   courseIds: [],
        // },
      ],
    },
    {
      id: 17,
      name: 'Fifth Year',
      semesters: [
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
        // {
        //   id: 5,
        //   name: "Summer",
        //   courseIds: [],
        // },
      ],
    },
  ],
}
