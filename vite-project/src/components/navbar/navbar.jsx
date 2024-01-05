import './navbar_css.css';
// import './nav'
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar(){



    return(

// <nav classNameName="navbar navbar-expand-lg fixed-top bg-light navbar-light" />
//     <button
//     classNameName="navbar-toggler"
//     type="button"
//     data-mdb-toggle="collapse"
//     data-mdb-target="#navbarSupportedContent"
//     aria-controls="navbarSupportedContent"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <i classNameName="fas fa-bars"></i>
//   </button>
//   <div classNameName="container d-flex justify-content-center">
//     <div classNameName="row">
//       <div classNameName="col-12 d-flex justify-content-center mb-3">
//         <a classNameName="navbar-brand" href="#"
//         ><img
//           id="MDB-logo"
//           src="https://mdbcdn.b-cdn.net/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
//           alt="MDB Logo"
//           draggable="false"
//           height="30"
//       /></a>
//       </div>
//       <div classNameName="col-12 d-flex justify-content-center">
//         <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul classNameName="navbar-nav align-items-center mx-auto">
//             <li classNameName="nav-item">
//               <a classNameName="nav-link mx-2" href="#!"><i classNameName="fas fa-plus-circle pe-2"></i>Post</a>
//             </li>
//             <li classNameName="nav-item">
//               <a classNameName="nav-link mx-2" href="#!"><i classNameName="fas fa-bell pe-2"></i>Alerts</a>
//             </li>
//             <li classNameName="nav-item">
//               <a classNameName="nav-link mx-2" href="#!"><i classNameName="fas fa-heart pe-2"></i>Trips</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
<nav className="navbar navbar-expand-lg navbar-dark p-3 bg-danger" id="headerNav">
<div className="container-fluid">
  <a className="navbar-brand d-block d-lg-none" href="#">
    <img src="/static_files/images/logos/logo_2_white.png" height="80" />
  </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className=" collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav mx-auto ">
      <li className="nav-item">
        <a className="nav-link mx-2 active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link mx-2" href="#">Products</a>
      </li>
      <li className="nav-item d-none d-lg-block">
        <a className="nav-link mx-2" href="#">
          <img src="/static_files/images/logos/logo_2_white.png" height="80" />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link mx-2" href="#">Pricing</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Company
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a className="dropdown-item" href="#">Blog</a></li>
          <li><a className="dropdown-item" href="#">About Us</a></li>
          <li><a className="dropdown-item" href="#">Contact us</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
  
    )

}

export default Navbar;