import clsx from "clsx"
import {
  Children,
  PropsWithChildren,
  cloneElement,
  isValidElement,
  useCallback,
  useState,
} from "react"

interface BaseProps {
  step?: number
  isActive?: boolean
  isFirst?: boolean
  isLast?: boolean
  title?: string
  description?: string
  activeStep?: number
  handleNext?: VoidFunction
  handlePrev?: VoidFunction
}

type TitleProps = Pick<
  BaseProps,
  "step" | "title" | "description" | "isActive" | "activeStep"
>

const StepTitle = ({
  step = 1,
  title,
  description,
  isActive,
  activeStep = 1,
}: TitleProps) => {
  const isCompleted = activeStep > step
  return (
    <div className="mb-6 flex items-center gap-4">
      <span
        className={clsx(
          "flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold transition-all duration-150",
          isCompleted && "bg-gray-600",
          isActive && "bg-gray-600",
          !isActive && "bg-gray-600"
        )}
      >
        {step}
      </span>
      <div>
        <h3 className="text-xl">{title}</h3>
        <p className="text-xs leading-none text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export const StepFooter = ({ children }: PropsWithChildren) => {
  return <div className="my-4 w-full flex justify-end gap-4">{children}</div>
}

export interface StepProps
  extends Pick<BaseProps, "step" | "isActive" | "title" | "description">,
    PropsWithChildren {}

export const Step = ({
  step = 1,
  isActive,
  children,
  ...titleProps
}: StepProps) => {
  return (
    <>
      <StepTitle step={step} isActive={isActive} {...titleProps} />
      {isActive && <div className="relative z-50 pl-12">{children}</div>}
    </>
  )
}

const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="relative">
      <div className="relative z-10">{children}</div>
      <div className="absolute left-5 top-0 z-0 h-full w-0.5 bg-gray-600"></div>
    </div>
  )
}

export interface StepperProps
  extends PropsWithChildren,
    Omit<BaseProps, "handleChange"> {}

export const Stepper = ({ children, ...stepProps }: StepperProps) => {
  const totalSteps = Children.count(children)
  return (
    <Wrapper>
      {Children.map(children, (child, key) => {
        const currentStep = Number(key + 1)
        if (isValidElement(child))
          return cloneElement(child, {
            step: currentStep,
            isActive: stepProps.activeStep === currentStep,
            isFirst: currentStep === 1,
            isLast: currentStep === totalSteps,
            ...child.props,
            ...stepProps,
          })
      })}
    </Wrapper>
  )
}

interface UseStepperProps {
  defaultActiveStep?: number
}

interface UseStepperReturn {
  active: number
  next: VoidFunction
  prev: VoidFunction
  activate: (step: number) => void
}

export const useStepper = (props?: UseStepperProps): UseStepperReturn => {
  const { defaultActiveStep = 1 } = props ? props : {}
  const [activeStep, setActiveStep] = useState(defaultActiveStep)

  const handleNext = useCallback(() => {
    setActiveStep((current) => {
      return Number(current + 1)
    })
  }, [setActiveStep])

  const handlePrev = useCallback(() => {
    setActiveStep((current) => (current > 1 ? Number(current - 1) : current))
  }, [setActiveStep])

  const handleActivate = useCallback(
    (step: number) => {
      setActiveStep(step)
    },
    [setActiveStep]
  )

  return {
    active: activeStep,
    next: handleNext,
    prev: handlePrev,
    activate: handleActivate,
  }
}
