'use client'

import { Button } from '@/components/ui/button'
import {
  courses,
  initialFlowsheet,
  Year,
  Semester,
  Flowsheet,
} from '@/lib/data'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useImmer, Updater } from 'use-immer'

const App = () => {
  const [flowsheet, updateFlowsheet] = useImmer(initialFlowsheet)

  return (
    <div className="flex p-12 h-screen w-full">
      <Flowsheet
        name={flowsheet.name}
        years={flowsheet.years}
        updateFlowsheet={updateFlowsheet}
      />
    </div>
  )
}

export default App

type flowsheetProps = {
  name: string
  years: Year[]
  updateFlowsheet: Updater<Flowsheet>
}

const Flowsheet = ({ name, years, updateFlowsheet }: flowsheetProps) => {
  return (
    <main>
      <header className="text-2xl font-semibold py-2">{name}</header>
      <div className="flex gap-1">
        {years.map((year) => {
          if (!year) return null
          return (
            <Year
              key={year.id}
              id={year.id}
              name={year.name}
              semesters={year.semesters}
              updateFlowsheet={updateFlowsheet}
            />
          )
        })}
      </div>
    </main>
  )
}

interface yearProps {
  id: number
  name: string
  semesters: Semester[]
  updateFlowsheet: Updater<Flowsheet>
}

const Year = ({ id, name, semesters, updateFlowsheet }: yearProps) => {
  return (
    <section>
      <p className="text-center font-semibold p-2 border rounded-lg border-neutral-400">
        {name}
      </p>
      <div className="flex gap-1 my-1">
        {semesters.map((semester) => {
          if (!semester) return null
          return (
            <Semester
              key={semester.id}
              id={semester.id}
              name={semester.name}
              courseIds={semester.courseIds}
              yearId={id}
              updateFlowsheet={updateFlowsheet}
            />
          )
        })}
      </div>
    </section>
  )
}

interface semesterProps {
  id: number
  name: string
  courseIds: number[]
  yearId: number
  updateFlowsheet: Updater<Flowsheet>
}

const Semester = ({
  id,
  name,
  courseIds,
  yearId,
  updateFlowsheet,
}: semesterProps) => {
  // const totalCreditHours = course.reduce(
  //   (total, course) => total + (course?.creditHours || 0),
  //   0
  // )

  const handleAddCourse = () => {
    updateFlowsheet((draft) => {
      draft.years.semesters[id].courseIds.push(3)
    })
  }

  return (
    <section className="flex flex-col gap-1 w-36">
      <header className="text-center">
        <h1>{name}</h1>
        {/* <p className="font-semibold text-muted-foreground text-sm">
          {totalCreditHours} Cr Hr
        </p> */}
      </header>
      {courseIds.map((id) => {
        const course = courses[id]
        if (!course) return null
        return (
          <CourseCard
            key={course.id}
            code={course.code}
            name={course.name}
            creditHours={course.creditHours}
          />
        )
      })}
      <Button
        onClick={handleAddCourse}
        variant="ghost"
        className="hover:shadow transition-all"
      >
        <Plus className="scale-75" />
      </Button>
    </section>
  )
}

interface courseCardProps {
  code: string
  name: string
  creditHours: number
}

const CourseCard = ({ code, name, creditHours }: courseCardProps) => {
  return (
    <div className="p-2 h-36 w-36 transition-all border border-neutral-200 hover:shadow rounded-md flex flex-col hover:border-none hover:bg-purple-200/30">
      <header className="font-semibold">{code}</header>
      <p className="line-clamp-3">{name}</p>
      <footer className="text-right mt-auto text-neutral-500">
        {creditHours} Cr Hr
      </footer>
    </div>
  )
}
