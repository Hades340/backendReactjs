import React, { Component } from 'react'
import Row from'./Row.js'
//get information from App.js
export default class Table extends Component {
  //sent information to App.js
  GetDelete = (data)=>{
     this.props.GetIdDelete(data)
  }
  // return data
 Getdata = ()=>(
  this.props.Information.map((value,key)=>(
    <Row 
    edit = {(item) => this.props.getus(value)}
    key = {key} 
    stt = {value.STT} 
    ten={value.Name} sdt={value.SDT}
    chucdanh={value.quyen} 
    Hienthi2={ ()=>this.props.Hienthi1()}
    IDDelete={(data)=>this.GetDelete(data)}// get ID from Row.js and sent to App.js
    />
    )))
 
    render() {
        return (
            <div className="col">
            <table className="table table-striped table-inverse">
              <thead className="thead-inverse">
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Số điện thoại</th>
                  <th>Chức danh</th>
                 <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
              {
                this.Getdata()
              }
              </tbody>
            </table>
          </div>
        )
    }
}
