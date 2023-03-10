import DashboardHeader from "./DashboardHeader"
import InfoSection from "./InfoSection"
import DashboardMain from "./DashboardMain"
import Blogs from "./Blogs"
function Dashboard() {
  return (
    <div className="m-0 p-0 w-screen">
      <DashboardHeader />
      <InfoSection />
      <DashboardMain />
      <Blogs />
    </div>
  )
}

export default Dashboard