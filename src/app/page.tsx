'use client'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'

const App = () => (
  <div className="flex p-12 h-screen w-full">
    <Flowsheet {...flowsheet} />
  </div>
)
export default App

interface flowsheetProps extends flowsheetData {}

const Flowsheet = ({ id, name, years }: flowsheetProps) => {
  return (
    <main>
      <header className="text-2xl font-semibold py-2">{name}</header>
      <div className="flex gap-1">
        {years.map((year) => (
          <Year key={year.id} {...year} />
        ))}
      </div>
    </main>
  )
}

interface yearProps extends yearData {}

const Year = ({ name, semesters }: yearData) => {
  return (
    <section>
      <p className="text-center font-semibold p-2 border rounded-lg border-neutral-700">
        {name}
      </p>
      <div className="flex gap-1 my-1">
        {semesters.map((semester) => (
          <Semester key={semester.id} {...semester} />
        ))}
      </div>
    </section>
  )
}

interface semesterProps extends semesterData {}

const getCourseByIdFromStudyPlan = (courseId: number) => {
  const section = studyPlan.sections.find((section) =>
    section.courses.some((course) => course.id === courseId)
  )

  return section
    ? section.courses.find((course) => course.id === courseId)
    : null
}

const Semester = ({ id, name, courseIds }: semesterProps) => {
  const removedCourses = []

  const courses: courseData[] = courseIds
    .map((id) => getCourseByIdFromStudyPlan(id))
    .filter((course): course is courseData => course !== null)

  const totalCreditHours = courses.reduce(
    (total, course) => total + course.creditHours,
    0
  )

  return (
    <>
      <section className="flex flex-col gap-1 w-36">
        <header className=" text-center">
          <h1>{name}</h1>
          <p className="font-semibold text-xs text-neutral-500">
            {totalCreditHours} Cr Hr
          </p>
        </header>
        {courses.map((course) => (
          <Course key={course.id} {...course} />
        ))}
        <StudyPlan {...studyPlan} />
      </section>
    </>
  )
}

import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
interface studyPlanProps extends studyPlanData {}

const StudyPlan = ({ name, major, degree, sections }: studyPlanProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="ghost" className="w-full">
          <Plus
            className={`transition-transform duration-300 ${
              isHovered ? 'scale-100' : 'scale-75'
            }`}
          />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Study Plan Courses</DialogTitle>
          <DialogDescription>
            Add available courses to first semester (first year)
          </DialogDescription>
        </DialogHeader>
        <section>
          <ScrollArea className="w-full h-64">
            <div className="flex flex-wrap">
              {sections.map((section) =>
                section.courses.map((course) => (
                  <Course key={course.id} {...course} />
                ))
              )}
            </div>
          </ScrollArea>
        </section>
        <DialogFooter>
          <DialogClose>
            <Button type="submit">Confirm</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// interface sectionProps extends sectionData {}

// const Section = ({ id, name, requiredCreditHours, courses }: sectionProps) => {
//   return (
//     <AccordionItem value={`item-${id}`} className="px-4 border-neutral-700">
//       <AccordionTrigger>
//         <div className="text-left">
//           <h1 className="font-normal text-start pr-4">{name}</h1>
//           <p className="mt-1 font-semibold text-muted-foreground text-xs">
//             {requiredCreditHours} Cr Hr required
//           </p>
//         </div>
//       </AccordionTrigger>
//       <AccordionContent>
//         <div className="grid grid-cols-2 gap-1">
//           {courses.map((course) => (
//             <Course key={course.id} {...course} />
//           ))}
//         </div>
//       </AccordionContent>
//     </AccordionItem>
//   )
// }

interface CourseProps extends courseData {}

const Course = ({ id, code, name, creditHours }: CourseProps) => {
  return (
    <div className="p-2 h-36 w-36 transition-all border border-neutral-700 rounded-md flex flex-col hover:bg-purple-500/30">
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
          courseIds: [1, 2],
        },
        {
          id: 4,
          name: 'Second',
          courseIds: [4, 6],
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
          courseIds: [],
        },
        {
          id: 4,
          name: 'Second',
          courseIds: [5],
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
