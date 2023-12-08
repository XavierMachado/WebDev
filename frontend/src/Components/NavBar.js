export default function NavBar({title, isLoggedIn}){
    function open_sidebar() {
      document.getElementById("sidebar").style.width = "250px";
    }
  
    function close_sidebar() {
      document.getElementById("sidebar").style.width = "0px";
    }
  
    return(
    <div>
      <div id="sidebar" className="sidenav">
        <button className="closebtn" onClick={close_sidebar}>&times;</button>
        <a href="/">Home</a>
        {isLoggedIn && (
        <>
          <a href="/inventory">Inventory</a>
        </>
        )}
        {!isLoggedIn && (
        <>
          <a href="/LoginPage">Login</a>
          <a href="/RegistrationPage">Register</a>
        </>
        )}
      </div>
      <span style={{fontSize:'30px', cursor: 'pointer', padding: '15px' }} onClick={open_sidebar}>&#9776;</span>
      <h1 className="htitle">{title}</h1>
    </div>);
  }
  