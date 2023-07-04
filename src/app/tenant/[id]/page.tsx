import { ApplicationForm } from "@/components/application-form"

interface Props {
  params: { id: string }
}
const ApplicationPage = ({ params }: Props) => {
  const property_id = params.id
  return <ApplicationForm property_id={property_id} />
}

export default ApplicationPage
