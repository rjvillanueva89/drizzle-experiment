"use client"

import { createApplicant } from "@/actions/create-applicant"
import { Step, Stepper, useStepper } from "@/components/stepper"
import { useState } from "react"
import { Step1, FormFields as Step1FormFields } from "./step-1"
import { Step2, FormFields as Step2FormFields } from "./step-2"
import { Step3, FormFields as Step3FormFields } from "./step-3"

interface Props {
  property_id: string
}

export const ApplicationForm = ({ property_id }: Props) => {
  const { active, next, prev } = useStepper()
  const [step1Data, setStep1Data] = useState<Step1FormFields>()
  const [step2Data, setStep2Data] = useState<Step2FormFields>()
  const [step3Data, setStep3Data] = useState<Step3FormFields>()

  const handleSubmit = () => {
    const data = { property_id, ...step1Data!, ...step2Data!, ...step3Data! }
    createApplicant(data)
  }

  return (
    <Stepper activeStep={active}>
      <Step title="Tenant Information">
        <Step1 data={step1Data} setData={setStep1Data} next={next} />
      </Step>
      <Step title="Additional Details">
        <Step2
          data={step2Data}
          setData={setStep2Data}
          next={next}
          prev={prev}
        />
      </Step>
      <Step title="Emergency Contact Details">
        <Step3
          data={step3Data}
          setData={setStep3Data}
          prev={prev}
          done={handleSubmit}
        />
      </Step>
    </Stepper>
  )
}
