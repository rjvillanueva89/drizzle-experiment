import { ApplicationForm } from "@/components/application-form"

interface Props {
  params: { id: string }
}
const ApplicationPage = ({ params }: Props) => {
  return <ApplicationForm />
}

export default ApplicationPage
