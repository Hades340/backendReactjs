import React, { Component } from 'react'
// get information from AddUser.js
export default class EditNV extends Component {
  constructor(props) {
    super(props);
    this.state={
      STT : this.props.AcUser.STT,
      Name : this.props.AcUser.Name,
      SDT : this.props.AcUser.SDT,
      quyen : this.props.AcUser.quyen
    }
  }
  //get data by event onchange 
  getdata = (event)=>
  {
      var name = event.target.name
      var value = event.target.value
      this.setState({
        [name] : value
      })
  }
  GetData1 =()=>
  {
    var info={};
    info.STT = this.state.STT;
    info.Name = this.state.Name;
    info.SDT = this.state.SDT;
    info.quyen = this.state.quyen;
    this.props.getdata2(info);
    this.props.removeEdit();
  }
  //AcUser
    render() {
        return (
            <form action>
            <div className="form-group bg-secondary text-black">
              <h4>Sửa nhân viên</h4>
              <input defaultValue={this.props.AcUser.Name} onChange={(event)=>this.getdata(event)} type="text" name="Name" id className="form-control mt-1" placeholder="Tên nhân viên" aria-describedby="helpId" />
              <input defaultValue={this.props.AcUser.SDT} onChange={(event)=>this.getdata(event)} type="text" name="SDT" id className="form-control mt-1" placeholder="Số điện thoại" aria-describedby="helpId" />
              <label className="mt-1" htmlFor> Quyền truy cập</label>
              <select defaultValue={this.props.AcUser.quyen} onChange={(event)=>this.getdata(event)} className="form-control form-control-sm" name="quyen" id>
                <option value={1}>Admin</option>
                <option value={3}>User</option>
                <option value={2}>Manager</option>
              </select>
              <input onClick = {()=>this.GetData1()} type="button" name id className="btn btn-primary mt-2" btn-lg btn-block defaultValue="Sửa" />
            </div>
          </form>
        )
    }
}
