import React, { Component } from "react";
import "./cards.css";
import firebase from "firebase";
import { Card, Icon, Modal, Drawer, Row, Col, Skeleton } from "antd";
const { Meta } = Card;
class cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areDates: false,
      dates: null,
      visibleModal: false,
      visibleDrawer: false,
      drawerDates:{
        name: null,
        ocp: null,
        img: null,
        descr: null,
        dirc: null,
        sex: null,
        brn: null,
      },
      idCard: null,
    };
  }
  
  componentDidMount = () => {
    firebase.firestore().collection('cards')
    .onSnapshot((dates)=>{
      let array_dates = []
      dates.forEach(date=>{
          let dato = date.data()
          dato.id = date.id
          array_dates.push(dato)
      })
      this.setState({dates: array_dates, areDates: true})
  })
  }

  //Methods of Ant Desing
  showDrawer = (e, Nombre, Ocupacion, Descripcion, Image, Direccion, Sexo, Born) => {
    this.setState({
      visibleDrawer: true,
    });
    console.log(" Name: "+Nombre);
    this.setState({drawerDates:{
      name: Nombre, 
      ocp: Ocupacion,
      descr: Descripcion,
      img: Image,
      dirc: Direccion,
      sex: Sexo,
      brn: Born,
  }});
  };

  onClose = () => {
    this.setState({
      visibleDrawer: false,
    });
  };

  showModal = (e, id) => {
    this.setState({visibleModal: true, idCard: id});
  };

  handleOk = e => {
    var ref = this.state.idCard;
    firebase.firestore().collection("cards").doc(ref).delete()
          .then(()=>alert("Producto eliminado correctamente"))            
          .catch((err)=>{
              alert("No se puedo eliminar el producto")
              console.log(err)})
    this.setState({
      visibleModal: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visibleModal: false
    });
  };
  //End

  render() {
    return (
      <div className="content-card">
        <Row>
        { this.state.areDates ?
          this.state.dates.map((date, index)=>(
          <Col span={6}><Card key={index}
          className="card"
          cover={<img alt="example" src={date.Image} />}
          actions={[
            <Icon type="edit"/>,
            <Icon type="heart" onClick={(e)=>this.showDrawer(e, date.Nombre, date.Ocupacion, date.Descripcion, date.Image, date.Direccion, date.Sexo, date.Born)}/>,
            <Icon type="close-circle" onClick={(e)=>this.showModal(e, date.id)}/>
          ]}
        >
          <Meta title={date.Nombre} description={date.Ocupacion} />
        </Card></Col>
        )): <Skeleton active />};
        </Row>

        <Modal
          title="Confirma"
          visible={this.state.visibleModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>¿Deseas eliminar tarjeta?</p>
        </Modal>

        <Drawer
          title={this.state.drawerDates.name}
          placement="right"
          width={300}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visibleDrawer}
        >
          <img className="img-drawer" src={this.state.drawerDates.img}/>
          <p className="txt-description"><span>{this.state.drawerDates.descr}</span></p>
          <table>
            <tr><td><Icon type="home" style={{ display: 'block' }} /> Vive en:</td><td>{this.state.drawerDates.dirc}</td></tr>
          </table>
          <p className="txt"><Icon type="home" style={{ display: 'block' }}/><span className="txt-des">Vive en: </span><span>{this.state.drawerDates.dirc}</span></p>
          <p><Icon type="home" /><span className="txt-des">Sexo: </span><span>{this.state.drawerDates.sex}</span></p>
          <p><Icon type="home" /><span className="txt-des">Nació: </span><span>{this.state.drawerDates.brn}</span></p>
          <p><Icon type="home" /><span className="txt-des">Descripción: </span><span>{this.state.drawerDates.descr}</span></p>
        </Drawer>

      </div>
    );
  }
}

export default cards;
