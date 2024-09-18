'use client'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useState } from 'react'
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
  studyPlanData,
  sectionData,
  courseData,
  yearData,
  semesterData,
  studyPlan,
  courses,
  sections,
  flowsheet,
  years,
  semesters,
  flowsheetData,
} from '@/lib/data'

const App = () => {
  return (
    <div className="flex p-12 h-screen w-full">
      <Flowsheet {...flowsheet} />
    </div>
  )
}

export default App

interface flowsheetProps extends flowsheetData {}

const Flowsheet = ({ id, name, yearIds }: flowsheetProps) => {

  const years = yearIds.map(id)

  return (
    <main>
      <header className="text-2xl font-semibold py-2">{name}</header>
      <div className="flex gap-1">
        {yearIds.map((id) => {
          let year = years.find((year) => year.id === id)
          
          <Year key={year.id} {...year} />
          })}
      </div>
    </main>
  )
}

interface yearProps extends yearData {
  flowsheet: flowsheetData
  setFlowsheet: React.Dispatch<React.SetStateAction<flowsheetData>>
}

const Year = ({ name, semesters, flowsheet, setFlowsheet }: yearProps) => {
  return (
    <section>
      <p className="text-center font-semibold p-2 border rounded-lg border-neutral-400">
        {name}
      </p>
      <div className="flex gap-1 my-1">
        {semesters.map((semester) => (
          <Semester
            key={semester.id}
            {...semester}
            flowsheet={flowsheet}
            setFlowsheet={setFlowsheet}
          />
        ))}
      </div>
    </section>
  )
}

const getCourseByIdFromStudyPlan = (courseId: number) => {
  const section = studyPlanData.sections.find((section) =>
    section.courses.some((course) => course.id === courseId)
  )

  return section
    ? section.courses.find((course) => course.id === courseId)
    : null
}

interface semesterProps extends semesterData {
  setFlowsheet: React.Dispatch<React.SetStateAction<flowsheetData>>
}

const Semester = ({ id, name, courseIds, setFlowsheet }: semesterProps) => {
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
        <header className="text-center">
          <h1>{name}</h1>
          <p className="font-semibold text-xs text-neutral-500">
            {totalCreditHours} Cr Hr
          </p>
        </header>
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
        <StudyPlan
          {...studyPlanData}
          setFlowsheet={setFlowsheet}
          selectedSemester={{ id, name, courseIds }}
        />
      </section>
    </>
  )
}

interface studyPlanProps extends studyPlanData {
  setFlowsheet: React.Dispatch<React.SetStateAction<flowsheetData>>
  selectedSemester: semesterData
}

const StudyPlan = ({
  name,
  sections,
  selectedSemester,
  setFlowsheet,
}: studyPlanProps) => {
  const handleAddCourse = (courseId: number) => {
    setFlowsheet((prevFlowsheet) => {
      const updatedSemesters = prevFlowsheet.semesters.map((semester) =>
        semester.id === selectedSemester.id
          ? { ...semester, courseIds: [...semester.courseIds, courseId] }
          : semester
      )

      return {
        ...prevFlowsheet,
        semesters: updatedSemesters,
      }
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full hover:h-36 transition-all hover:border border-neutral-400"
        >
          <Plus className="transition-transform text-neutral-700 duration-300 scale-75" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            Add available courses to {selectedSemester.name.toLowerCase()}{' '}
            semester
          </DialogDescription>
        </DialogHeader>
        <section>
          <ScrollArea>
            <div className="grid grid-cols-3 gap-1 h-72">
              {sections.map((section) =>
                section.courses.map((course) => (
                  <Course
                    onClick={() => handleAddCourse(course.id)}
                    key={course.id}
                    {...course}
                  />
                ))
              )}
            </div>
          </ScrollArea>
        </section>
        Courses selected: 0
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit">Add Courses</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

interface courseCardProps extends courseData {}

const CourseCard = ({ id, code, name, creditHours }: courseCardProps) => {
  return (
    <div className="p-2 h-36 w-36 transition-all border border-neutral-400 shadow-md bg-neutral-200 rounded-md flex flex-col hover:bg-purple-500/30">
      <header className="font-semibold">{code}</header>
      <p className="line-clamp-3">{name}</p>
      <footer className="text-right mt-auto text-neutral-500">
        {creditHours} Cr Hr
      </footer>
    </div>
  )
}

interface courseProps extends courseData {
  onClick: any
}

const Course = ({ id, code, name, creditHours, onClick }: courseProps) => {
  return (
    <div
      onClick={onClick}
      className="p-2 h-36 w-36 transition-all border border-neutral-400 shadow-md bg-neutral-200 rounded-md flex flex-col hover:bg-purple-500/30"
    >
      <header className="font-semibold">{code}</header>
      <p className="line-clamp-3">{name}</p>
      <footer className="text-right mt-auto text-neutral-500">
        {creditHours} Cr Hr
      </footer>
    </div>
  )
}
