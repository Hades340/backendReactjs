import React, { Component } from 'react'
//get information from Table.js
export default class Row extends Component {
    check = ()=>
    {
        if(parseInt(this.props.chucdanh)  === 1)
          {
            return "Admin";
          }
       if(parseInt(this.props.chucdanh) === 2)
        {
            return "Manager";
        }
         if(parseInt(this.props.chucdanh) === 3)
        {
                return "User";
        }
    }

    kiemtra = ()=>
    {
      this.props.Hienthi2();//show form
      this.props.edit();//get information from row
    }
    //get id when button click and sent Table.js
    Delete = ()=>
    {
      this.props.IDDelete(this.props.stt)//when button click Delete ID user sent to Table.js 
    }
    render() {
        return (
            
                <tr>
                  <td scope="row">{this.props.stt} </td>
                  <td> {this.props.ten}</td>
                  <td>{this.props.sdt}</td>
                  <td>
                  {this.check()}
                  </td>
                  <td>
                  <button onClick={()=>this.kiemtra()} type="button"  name id className="btn btn-outline-success  ml-3" btn-lg btn-block>Sửa</button>
                  <button onClick={()=>this.Delete()}type="button"  name id className="btn btn-outline-success  ml-3" btn-lg btn-block>Xóa</button>
                  </td>
                </tr>
            
        )
    }
}
