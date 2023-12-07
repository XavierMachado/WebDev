export default function NavBar({title}){
    function open_sidebar() {
      document.getElementById("sidebar").style.width = "250px";
    }
  
    function close_sidebar() {
      document.getElementById("sidebar").style.width = "0px";
    }
  
    return(
    <div>
      <div id="sidebar" class="sidenav">
        <button class="closebtn" onClick={close_sidebar}>&times;</button>
        <a href="/">Home</a>
        <a href="/inventory">Inventory</a>
        <a href="/search">Search</a>
      </div>
      <span style={{fontSize:'30px', cursor: 'pointer', padding: '15px' }} onClick={open_sidebar}>&#9776;</span>
      <h1 class="htitle">{title}</h1>
    </div>);
  }
  