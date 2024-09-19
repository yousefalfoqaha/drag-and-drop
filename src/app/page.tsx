'use client'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
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
import {
  studyPlan,
  courses,
  sections,
  initialFlowsheet,
  years,
  semesters,
} from '@/lib/data'
import { useState } from 'react'

const App = () => {
  return (
    <div className="flex p-12 h-screen w-full">
      <Flowsheet />
    </div>
  )
}

export default App

const Flowsheet = () => {
  const [flowsheet, setFlowsheet] = useState(initialFlowsheet)

  return (
    <main>
      <header className="text-2xl font-semibold py-2">{flowsheet.name}</header>
      <div className="flex gap-1">
        {flowsheet.yearIds.map((id) => (
          <Year key={id} id={id} />
        ))}
      </div>
    </main>
  )
}

interface yearProps {
  id: number
}

const Year = ({ id }: yearProps) => {
  const year = years.find((year) => year.id === id)
  if (!year) return null

  return (
    <section>
      <p className="text-center font-semibold p-2 border rounded-lg border-neutral-400">
        {year.name}
      </p>
      <div className="flex gap-1 my-1">
        {year.semesterIds.map((id) => (
          <Semester key={id} id={id} />
        ))}
      </div>
    </section>
  )
}

interface semesterProps {
  id: number
}

const Semester = ({ id }: semesterProps) => {
  const semester = semesters.find((semester) => semester.id === id)
  if (!semester) return null
  // const totalCreditHours = courses.reduce(
  //   (total, course) => total + course.creditHours,
  //   0
  // )

  return (
    <>
      <section className="flex flex-col gap-1 w-36">
        <header className="text-center">
          <h1>{semester.name}</h1>
          {/* <p className="font-semibold text-xs text-neutral-500">
            {totalCreditHours} Cr Hr
          </p> */}
        </header>
        {semester.courseIds.map((id) => (
          <CourseCard key={id} id={id} />
        ))}
      </section>
    </>
  )
}

// interface studyPlanProps extends studyPlanData {
//   setFlowsheet: React.Dispatch<React.SetStateAction<flowsheetData>>
//   selectedSemester: semesterData
// }

// const StudyPlan = ({
//   name,
//   sections,
//   selectedSemester,
//   setFlowsheet,
// }: studyPlanProps) => {
//   const handleAddCourse = (courseId: number) => {
//     setFlowsheet((prevFlowsheet) => {
//       const updatedSemesters = prevFlowsheet.semesters.map((semester) =>
//         semester.id === selectedSemester.id
//           ? { ...semester, courseIds: [...semester.courseIds, courseId] }
//           : semester
//       )

//       return {
//         ...prevFlowsheet,
//         semesters: updatedSemesters,
//       }
//     })
//   }

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button
//           variant="ghost"
//           className="w-full hover:h-36 transition-all hover:border border-neutral-400"
//         >
//           <Plus className="transition-transform text-neutral-700 duration-300 scale-75" />
//         </Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>{name}</DialogTitle>
//           <DialogDescription>
//             Add available courses to {selectedSemester.name.toLowerCase()}{' '}
//             semester
//           </DialogDescription>
//         </DialogHeader>
//         <section>
//           <ScrollArea>
//             <div className="grid grid-cols-3 gap-1 h-72">
//               {sections.map((section) =>
//                 section.courses.map((course) => (
//                   <Course
//                     onClick={() => handleAddCourse(course.id)}
//                     key={course.id}
//                     {...course}
//                   />
//                 ))
//               )}
//             </div>
//           </ScrollArea>
//         </section>
//         Courses selected: 0
//         <DialogFooter>
//           <DialogClose asChild>
//             <Button type="submit">Add Courses</Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }

interface courseCardProps {
  id: number
}

const CourseCard = ({ id }: courseCardProps) => {
  const course = courses.find((course) => course.id === id)
  if (!course) return null

  return (
    <div className="p-2 h-36 w-36 transition-all border border-neutral-400 shadow-md bg-neutral-200 rounded-md flex flex-col hover:bg-purple-500/30">
      <header className="font-semibold">{course.code}</header>
      <p className="line-clamp-3">{course.name}</p>
      <footer className="text-right mt-auto text-neutral-500">
        {course.creditHours} Cr Hr
      </footer>
    </div>
  )
}

// interface courseProps extends courseData {
//   onClick: any
// }

// const Course = ({ id, code, name, creditHours, onClick }: courseProps) => {
//   return (
//     <div
//       onClick={onClick}
//       className="p-2 h-36 w-36 transition-all border border-neutral-400 shadow-md bg-neutral-200 rounded-md flex flex-col hover:bg-purple-500/30"
//     >
//       <header className="font-semibold">{code}</header>
//       <p className="line-clamp-3">{name}</p>
//       <footer className="text-right mt-auto text-neutral-500">
//         {creditHours} Cr Hr
//       </footer>
//     </div>
//   )
// }
