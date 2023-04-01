import '../../assets/styles/Admin.css';

//  The side-bar of the admin panel
function RightBar() {
  return (
    <div id="rightBar" className='col-2'>
      <div className="col-2 col-md-3 col-xl-2 px-sm-2 px-0" id="sidebar">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
               
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="../index.php" className="nav-link align-middle px-0">
                            <i className="fs-4 mdi mdi-home-city text-white"></i> <span className="ms-1 d-none d-sm-inline" id="panelcon">Home</span>
                        </a> 
                    </li>
                    <li>
                        <a href="admin.php"  className="nav-link px-0 align-middle">
                            <i className="fs-4 mdi mdi-speedometer text-white"></i> <span className="ms-1 d-none d-sm-inline"  id="panelcon">Dashboard</span> </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-4 mdi mdi-face text-white"></i> <span className="ms-1 d-none d-sm-inline"  id="panelcon">Co-Admins</span></a>
                        <li className="nav-item dropdown"> 
                            <ul className="dropdown-menu dropdown-menu-end collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="register.php">Add Co-admin</a></li>
                                <li><a className="dropdown-item" href="manageusers.php">Manage co-admins</a></li> 
                            </ul> 
                        </li>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-4 mdi mdi-bell-ring-outline text-white"></i> <span className="ms-1 d-none d-sm-inline"  id="panelcon">Messages</span></a>
                        <li className="nav-item dropdown"> 
                            <ul className="dropdown-menu dropdown-menu-end collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="message.php">Unread Messages</a></li> 
                            </ul> 
                        </li>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                        <i className="fs-4 mdi mdi-podcast   text-white"></i> <span className="ms-1 d-none d-sm-inline"  id="panelcon">Posts</span></a>
                        <li className="nav-item dropdown"> 
                            <ul className="dropdown-menu dropdown-menu-end collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="add-post.php">Add Post</a></li>
                                <li><a className="dropdown-item" href="managepost.php">Manage Posts</a></li> 
                            </ul> 
                        </li>
                    </li>
                    <li>
                        <a href="/" className="nav-link px-0 align-middle">
                            <i className="fs-4 mdi mdi-chart-line text-white"></i> <span className="ms-1 d-none d-sm-inline"  id="panelcon">Ads Performance</span>
                            </a>
                    </li>
                </ul> 
            </div>
        </div>
    </div>
  )
}

export default RightBar;

 
 

