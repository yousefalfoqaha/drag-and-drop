'use client'

import { useState } from 'react'

const App = () => (
  <div className="flex p-12 bg-neutral-900 h-screen w-full text-zinc-100">
    <Flowsheet />
  </div>
)
export default App

const Flowsheet = () => {
  const [courses, setCourses] = useState<CourseData[]>(courseList)

  return (
    <>
      <div className="flex h-full w-full gap-1 mr-1">
        <Semester
          name="First"
          id={1}
          courses={courses}
          setCourses={setCourses}
        />
        <Semester
          name="Second"
          id={2}
          courses={courses}
          setCourses={setCourses}
        />
      </div>
      <StudyPlan name="Study Plan" courses={courses} setCourses={setCourses} />
    </>
  )
}

type SemesterProps = {
  id: number
  name: string
  courses: CourseData[]
  setCourses: React.Dispatch<React.SetStateAction<CourseData[]>>
}

const Semester = ({ id, name, courses, setCourses }: SemesterProps) => {
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
        c.id.toString() === courseId ? { ...c, semesterId: id } : c
      )
    )

    setIsActive(false)
  }

  const semesterCourses = courses.filter((c) => c.semesterId === id)

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
        {semesterCourses.map((c) => (
          <Course key={c.id} {...c} />
        ))}
      </div>
    </div>
  )
}

type StudyPlanProps = {
  name: string
  courses: CourseData[]
  setCourses: React.Dispatch<React.SetStateAction<CourseData[]>>
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

interface CourseProps extends CourseData {}

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

type CourseData = {
  id: number
  code: string
  name: string
  creditHours: number
  sectionId: number
  semesterId: number | null
}

const courseList: CourseData[] = [
  {
    id: 1,
    code: 'CS116',
    name: 'Computing Fundamentals',
    creditHours: 3,
    sectionId: 1,
    semesterId: null,
  },
  {
    id: 2,
    code: 'CS263',
    name: 'Database Management Systems',
    creditHours: 3,
    sectionId: 2,
    semesterId: null,
  },
]
