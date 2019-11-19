import React, { Component  } from 'react';
import { withRouter } from "react-router-dom";
import {Redirect} from 'react-router-dom';
class MyWork extends Component{ 
 constructor(props){
   super(props);
   this.handleClick_Dashboard=this.handleClick_Dashboard.bind(this);
   this.handleClick_Profile=this.handleClick_Profile.bind(this);
   this.handleClick_Table=this.handleClick_Table.bind(this);


 }
  handleClick_Dashboard = () => {
 
        return  <Redirect  to="/admin/Dashboard" />
 
 }

 handleClick_Profile= () => {
  console.log('df')  
  this.props.history.push('/admin/Profile');

 }

handleClick_Table= () => {
 console.log('df')
  return  <Redirect  to="/admin/Profile" />

}

render(){
  return (
    <div>
      <nav className="navbar navbar-expand-sm   navbar-white fixed-top " >
      <button className="navbar-brand text-white  " >Navbar</button>
        <button className="navbar-toggler  " type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span  ><svg t="1571839630659" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1402" width="35" height="35"><path d="M102.4 281.6h819.2a51.2 51.2 0 0 0 0-102.4H102.4a51.2 51.2 0 0 0 0 102.4zM921.6 460.8H102.4a51.2 51.2 0 0 0 0 102.4h819.2a51.2 51.2 0 0 0 0-102.4zM921.6 742.4H102.4a51.2 51.2 0 0 0 0 102.4h819.2a51.2 51.2 0 0 0 0-102.4z" p-id="1403"></path></svg></span>
        </button>
        <div className="collapse text-center justify-content-between navbar-collapse" id="navbarNavDropdown">

          <ul className="navbar-nav   ">
            <li className="nav-item  ">
  
              <button onClick={this.handleClick_Dashboard } className=" px-5 ">Login</button>
              </li>

            <li className="nav-item ">
              <button className=" px-5 " onClick={this.handleClick_Table }>Table</button>
            </li>
             
            <li className="nav-item   ">
              <button className=" px-5 " onClick={this.handleClick_Profile }>Profile</button>
            </li>


            <li className="nav-item dropdown"  >
              <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
        </a>
              <div className="dropdown-menu text-center" aria-labelledby="navbarDropdown" style={{background:"#986CDB"}}>
                <button className="  px-5" onClick={this.handleClick_Table }>Table</button>
                <div className="dropdown-divider  "></div>
                <button className="  px-5" onClick={this.handleClick_Table }>Table</button>
                <div className="dropdown-divider  "></div>
                <button className="  px-5" onClick={this.handleClick_Table }>Table</button>
              </div>
            </li>

          </ul>
          <button >Log out</button>
        </div>
      </nav>
      {this.props.child}
 
    
 
     
      <div>11111111111111111111</div>
    </div>
  )
}
}
  
export default withRouter(MyWork);