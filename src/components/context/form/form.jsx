import React, { Component } from 'react'
import './form.css'
import firebase from 'firebase';
import {Icon, Input, Button, Select, DatePicker} from 'antd';
import { toast } from 'react-toastify';
const { Option } = Select;
const { TextArea } = Input;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
class form extends Component {
    constructor(props){
        super(props)
        this.state = {
          newDates: {
            Nombre: null,
            Descripcion: null,
            Image: null,
            Ocupacion: null,
            Born: null,
            Sexo: null,
            Direccion: null,
          },
          changeImage: null,
          percentage: null,
        }
}

// Action in Inputs
updateName=(e)=>{
  let { newDates } = this.state
  newDates.Nombre = e.target.value
  this.setState(newDates)
}
updateOcup=(e)=>{
  let { newDates } = this.state
  newDates.Ocupacion = e.target.value
  this.setState(newDates)
}
updateSex=(value)=>{
  let { newDates } = this.state
  newDates.Sexo = value;
  this.setState(newDates)
    console.log(value);
}
updateBorn=(date, dateString)=>{
  let { newDates } = this.state
  newDates.Born = dateString;
  this.setState(newDates)
    console.log(dateString);
}
updateAdress=(e)=>{
  let { newDates } = this.state
  newDates.Direccion = e.target.value
  this.setState(newDates)
}
updateDes=(e)=>{
  let { newDates } = this.state
  newDates.Descripcion = e.target.value
  this.setState(newDates)
}
changeImage = (e) => {
  let image = e.target.files[0]
  this.setState({changeImage: image})
}


// Action Button
action=(e)=>{
  const{Nombre, Ocupacion, Image, Descripcion, Direccion, Sexo, Born} = this.state.newDates;
  firebase.firestore().collection('cards').add({
    Nombre: Nombre,
    Ocupacion: Ocupacion,
    Image: Image,
    Descripcion: Descripcion,
    Direccion: Direccion,
    Sexo: Sexo,
    Born: Born,
    })
                .then(()=>{
                    toast.success("Datos registrados! 😎")
                    let { newDates } = this.state
                    newDates.Nombre = ""
                    newDates.Ocupacion = ""
                    newDates.Image = ""
                    newDates.Descripcion = ""
                    newDates.Direccion = ""
                    newDates.Sexo = "Sexo"
                    newDates.Born = ""
                    this.setState(newDates)
                })
                .catch((err)=>{
                  toast.error("Datos no registrados 😲");
                    console.log(err)
                })
}

// Go up image to Storage
UpImage = () => {
  const storageRef = firebase.storage().ref(`images/${this.state.changeImage.name}`)
  const task = storageRef.put(this.state.changeImage)

  task.on('state_changed', snapshot => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      this.setState({percentage})
  },
  err=>{
      alert("Hubo un error al subir la imagen")
      console.log(err)
  },
  ()=>{
      task.snapshot.ref.getDownloadURL()
      .then((url)=>{
          debugger
          let { newDates } = this.state
          newDates.Image = url
          this.setState({newDates})
          this.action()
      })
  }
  )

}

render(){
        return(
            <div>
             <h2 className="tittle-form">- Ingresa tus datos -</h2> 
             <Input
              className="size"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Nombre"
              onChange={(e)=>this.updateName(e)} 
              value={this.state.newDates.Nombre} 
            />
            <Input
              className="size"
              prefix={<Icon type="contacts" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Ocupación"
              onChange={(e)=>this.updateOcup(e)} 
              value={this.state.newDates.Ocupacion}
            />
            <Input
              className="size"
              prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="¿En dondé vives?"
              onChange={(e)=>this.updateAdress(e)} 
              value={this.state.newDates.Direccion}
            />
            <Select 
            className="size" placeholder="Sexo" onChange={this.updateSex}
            >
              <Option value="Masculino">Masculino</Option>
              <Option value="Femenino">Femenino</Option>
              <Option value="Otro">Otro</Option>
            </Select>
            <DatePicker className="size" placeholder="Fecha de nacimiento" onChange={this.updateBorn} format={dateFormatList} />
            <TextArea rows={4} 
              placeholder="Describéte"
              className="size"
              onChange={(e)=>this.updateDes(e)} 
              value={this.state.newDates.Descripcion}            
            />
            <label className="custom-file-upload">
            <input type="file" onChange={(e)=>this.changeImage(e)}/>
            <p className="ant-upload-drag-icon"><Icon className="t-icon" type="picture" /></p>
            ¡Elige una foto!
            </label>
            <Button 
            onClick={this.UpImage}
            type="primary" htmlType="submit" className="login-form-button size">
            Agregar
          </Button>
            </div>
        )
    }
}

export default form;
