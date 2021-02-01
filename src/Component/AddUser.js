import React, { Component } from 'react'
import EditNV from './EditNV.js'
//get information from App.js
export default class AddUser extends Component {
   constructor(props) {
    super(props);
    this.state={
        STT:"",
        name:"",
        SDT:"",
        quyen:"",  
    }
  }
  //Get data from textbox by event 
  ischange = (event)=>
  {
     const name = event.target.name
     const value = event.target.value
      this.setState({
        [name] : value
      })
      var namess=this.refs.quyen.value // get infomation with ref
      console.log(namess)
  }

   getdata = (data) =>
  {
    this.props.getUserinfo(data)
  }
  //show form update when activeEdit1 return true
  xuathien = ()=>
  {
    if(this.props.activeEdit1 === true)
    {
       return <EditNV 
       AcUser={this.props.user} 
       removeEdit={()=>this.props.Hienth()}
       getdata2={(data)=>this.getdata(data)}
       />
    }
  }
   //show form ADD USER when form return true
  fromActive = ()=>
  {
    if(this.props.form === true)
    {
      return(
       <div className="col-12">
       <form action>
        <div className="form-group">
          <label htmlFor> Thông tin nhân viên</label>
          <input onChange={(event) => this.ischange(event)} ref="STT" type="text" name="STT" id className="form-control mt-2" placeholder="Mã nhân viên" aria-describedby="helpId" />
          <input onChange={(event) => this.ischange(event)} ref="name" type="text" name="name" id className="form-control mt-2" placeholder="Tên nhân viên" aria-describedby="helpId" />
          <input onChange={(event) => this.ischange(event)} ref="SDT" type="text" name="SDT" id className="form-control mt-2" placeholder="Số điện thoại" aria-describedby="helpId" />
          <label htmlFor> Quyền truy cập</label>
          <select onChange={(event) => this.ischange(event)} ref="quyen" className="form-control form-control-sm" name="quyen" id>
            <option value={1}>Admin</option>
            <option value={3}>User</option>
            <option value={2}>Manager</option>
          </select>
          <input type="reset" onClick = {()=>this.props.ADD(this.state.STT,this.state.name,this.state.SDT,this.state.quyen)}name id className="btn btn-primary mt-3" btn-lg btn-block value="Thêm mới" />
        </div>
      </form>
    </div>
        )
    }
    
  }
    render() {
        return (
         <div>
         {this.fromActive()}
         {this.xuathien()}
         </div>
            
          
        )
    }
}
