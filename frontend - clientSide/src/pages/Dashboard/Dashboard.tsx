import { useAppSelector } from "../../utils/redux-toolkit/hooks";


const Dashboard = () => {
    const user = useAppSelector((state) => state.userInfo.userInfo);


  return (
    <div className="Dashboard-Page main-page  my-[60px]">
        <div className="container">
            <h1>Dashboard of {user.role}</h1>
        </div>
    </div>
  )
}

export default Dashboard