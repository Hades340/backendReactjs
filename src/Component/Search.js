import React, { Component } from 'react'
//get information from App.js
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GetValue : ""
        }
    }
    //check event state and show button
    HienThi = ()=>{
        if(this.props.ButtonActive === true)
        {
            return (<button type="button" onClick = {()=>this.props.active()} name id className="btn btn-outline-success mt-3  ml-3 bentrai" btn-lg btn-block>Đóng lại</button>) 
        }
        else
        {
            return (<button  type="button" onClick = {()=>this.props.active()} name id className="btn  btn-outline-warning mt-3  ml-3 bentrai" btn-lg btn-block>Thêm mới</button>)
        }
    }
    // get data and sent to App.js
    ischange = (event) =>{
    console.log(event.target.value)
        this.setState({
            GetValue : event.target.value
        })
    {/*this.props.GetData(this.state.GetValue) cách để quick search mà ko cần ấn nút search*/}
    }

    render() {
        return (
           
                <div>
        <div className="container">
          <div className="form-group">
            <label htmlFor> Nhập tên cần tìm kiếm</label>
            <input onChange= {(event) => this.ischange(event)} type="text" name="txt_TimKiem" id className="form-control bentrai" placeholder="Nhập tên cần tìm kiếm" aria-describedby="helpId" />
            <button onClick = {(dl) => this.props.GetData(this.state.GetValue)}type="button" name id className="btn btn-primary mt-3 ml-3 bentrai" btn-lg btn-block> Tìm kiếm</button>
           {this.HienThi()}
            
          </div>
        </div>
        <hr />
      </div>
        )
    }
}
