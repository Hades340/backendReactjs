import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Search from './Search';
import AddUser from './AddUser';
import Table from './Table';
import { Component } from 'react'
import Footer from './Footer';
import data from '../data.json'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm:false,
      dulieu :[],
      activeEdit:false,
      txt_Search :"",
      user:{}
    }
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  //Constructor Data if data don't have and set data (we use database Local Storage)
  componentWillMount() {
    if(localStorage.getItem("UserData") == null)
    {
      localStorage.setItem("UserData",JSON.stringify(data));
    }
    else{
      var tem =  JSON.parse(localStorage.getItem("UserData"))
      this.setState({
        dulieu:tem
      })
     
    }
  }
  // Get data id and delete object by fuction filter
  GetIdDelete =(data)=>
  {
     var tempdata = this.state.dulieu// constructor database 
     tempdata = tempdata.filter(item => item.STT != data) 
     console.log(tempdata)
       this.setState({
        dulieu : tempdata // save new database
       })
        localStorage.setItem("UserData",JSON.stringify(tempdata)); // Update database
  }
  //Get information from Search.js and check data  
  getUserinfo =(info)=>
  {
    this.state.dulieu.forEach((value,key)=>{
      if(value.STT ===  info.STT)
      {
        value.Name = info.Name;
        value.SDT = info.SDT;
        value.quyen = info.quyen;
      }
    })
     localStorage.setItem("UserData",JSON.stringify(this.state.dulieu));
  }
  //get information users
  users = (item)=>
  {
    console.log(item)
    this.setState({
      user:item
    })
  }
  //change state for active form
  Hienthi = ()=>
  {
    this.setState({
      activeEdit : !this.state.activeEdit
    })
    
  }
  Active = () =>{
    this.setState({
      activeForm : !this.state.activeForm
    })
  }
  //Get information to add user to Table.js
  GetUser = (STT,Name,SDT,quyen) =>
  {
    var iem = {};
    iem.STT = STT;
    iem.Name = Name;
    iem.SDT = SDT;
    iem.quyen = quyen;
    var listItem = this.state.dulieu;
    listItem.push(iem);
    this.setState({
      dulieu:listItem
    })
    localStorage.setItem("UserData",JSON.stringify(listItem));

  }
  //Get information from search 
  ValueGet=(dl) =>{ 
    
    this.setState({
     txt_Search : dl,
    
    })
  }
  
  render() {
    //check information id and return the user has the same id
      var ketqua = [];
      this.state.dulieu.forEach((item)=>{
        if(item.Name.indexOf(this.state.txt_Search) !== -1)// check 
        {
          ketqua.push(item);
        }
      })
    return (
      <div className="App">
      <Header/>
      <Search 
      active={()=>this.Active()} 
      ButtonActive={this.state.activeForm}
      GetData={(dl)=>this.ValueGet(dl)}
      />
      <div className="container">
        <div className="row">
        
        <Table 
        Information={ketqua} // show database
        Hienthi1 = {()=>this.Hienthi()} 
        getus ={(item) => this.users(item)}
        GetIdDelete ={(data)=>this.GetIdDelete(data)}
        />
          

          <AddUser
          getUserinfo={(info)=>this.getUserinfo(info)}
          user ={this.state.user} 
          form = {this.state.activeForm} 
          ADD={(STT,name,SDT,quyen)=>this.GetUser(STT,name,SDT,quyen)}
          activeEdit1 = {this.state.activeEdit}
          Hienth = {()=>this.Hienthi()}
          />
        </div>
        </div>
      <Footer/>
    </div>
    )
  }
}


