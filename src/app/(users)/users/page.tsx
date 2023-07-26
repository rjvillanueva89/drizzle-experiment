import { Menu } from "@/components/Menu"
import { UsersTable } from "@/components/users-table"

const UsersPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Menu label="Users" />
      </div>
      <UsersTable />
    </>
  )
}

export default UsersPage
