import React, { Component } from "react";
import "./info.css";
import Add from '../../../assets/icons/add.svg';
import Dialog from '../../../assets/icons/explorer.svg';
import Users from '../../../assets/icons/users.svg';
import { Row, Col } from 'antd';

class info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: "Inicia",
      dialog: "Explora",
      users: "Conoce",
    };
  }
  render() {
    return (
      <div className="content-info">
        <div className="space-row">
       <Row>
        <Col span={8}><img src={Add} className="icon-info"/>
        <p>{this.state.add}</p></Col>
        <Col span={8}><img src={Dialog} className="icon-info"/>
        <p>{this.state.dialog}</p></Col>
        <Col span={8}><img src={Users} className="icon-info"/>
        <p>{this.state.users}</p></Col>
      </Row></div>
      </div>
    );
  }
}

export default info;