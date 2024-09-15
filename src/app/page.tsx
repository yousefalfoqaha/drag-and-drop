'use client'

import { useState } from 'react'

const App = () => (
  <div className="flex p-12 bg-neutral-900 h-screen w-full text-zinc-100">
    <Flowsheet />
  </div>
)
export default App

const Flowsheet = () => {
  const [courses, setCourses] = useState<courseProps[]>(courseData)

  return (
    <>
      <div className="flex h-full w-full gap-1">
        <Semester
          name="First"
          semester="first"
          courses={courses}
          setCourses={setCourses}
        />
        <Semester
          name="Second"
          semester="second"
          courses={courses}
          setCourses={setCourses}
        />
      </div>
      <StudyPlan
        name="Study Plan"
        studyPlan="computerScience"
        courses={courses}
        setCourses={setCourses}
      />
    </>
  )
}

type semesterProps = {
  name: string
  semester: string
  courses: courseProps[]
  setCourses: React.Dispatch<React.SetStateAction<courseProps[]>>
}

const Semester = ({ name, semester, courses, setCourses }: semesterProps) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={`w-36 overflow-clip rounded-lg transition-all ${
        isActive ? 'bg-neutral-800' : 'bg-neutral-900'
      }`}
    >
      <header className="text-center font-semibold py-2">{name}</header>
      <div className="flex flex-col gap-2 px-2">
        {courses.map((c) => (
          <Course key={c.code} {...c} />
        ))}
      </div>
    </div>
  )
}

type studyPlanProps = {
  name: string
  studyPlan: string
  courses: courseProps[]
  setCourses: React.Dispatch<React.SetStateAction<courseProps[]>>
}

const StudyPlan = ({
  name,
  studyPlan,
  courses,
  setCourses,
}: studyPlanProps) => (
  <div className="w-64">
    <header className="text-center font-semibold py-2">{name}</header>
    <div className="grid grid-cols-2 w-full"></div>
  </div>
)

type courseProps = {
  code: string
  name: string
}

const Course = ({ code, name }: courseProps) => {
  return (
    <div
      draggable="true"
      className="active:cursor-grabbing rounded p-2 shadow h-32 bg-neutral-900"
    >
      <header className="font-semibold">{code}</header>
      <p className="line-clamp-3">{name}</p>
    </div>
  )
}

const courseData: courseProps[] = [
  {
    code: 'CS116',
    name: 'Computing Fundamentals',
  },
  {
    code: 'CS263',
    name: 'Database Management Systems',
  },
]
