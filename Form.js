import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name:'',
          adhar:'',
          mobile:'',
          preAmount:''
      }
  
      this.handleName = this.handleName.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleAdhar=this.handleAdhar.bind(this)
      this.handleAmount=this.handleAmount.bind(this)
      this.handleMobile=this.handleMobile.bind(this)
    }
  
    handleName(event) {
      this.setState({name: event.target.value});
    }

    handleAdhar(event) {
        this.setState({adhar: event.target.value});
      }

    handleMobile(event) {
        this.setState({mobile: event.target.value});
      }

    handleAmount(event) {
        this.setState({preAmount: event.target.value});
      }
  
    handleSubmit(event) {
      alert(`
      Name: ${this.state.name}
      Mobile: ${this.state.mobile}
      Adhar No: ${this.state.adhar}
      PreAmount: ${this.state.preAmount}
      Thanks For Registeration....Good Health!!!
      `)
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="jumbotron" style={{backgroundColor:"orange" ,marginTop:"30px",color:"red",marginBottom:"30px",marginLeft:"250px",marginRight:"250px",padding:"30px",textAlign:"center"}} onSubmit={this.handleSubmit}>
          <h2 style={{color:"green"}}>Health Insurance Registeration </h2>
          <br/><br/>
          <label>
            Name :
            <input type="text" value={this.state.name} onChange={this.handleName} />
          </label>
            <br/>
            <br/>
          <label>
            Adhar No :
            <input type="text" value={this.state.adhar} onChange={this.handleAdhar} />
          </label>
          <br/>
          <br/>
          <label>
            Mobile No :
            <input type="text" value={this.state.mobile} onChange={this.handleMobile} />
          </label>
          <br/>
          <br/>
          <label>
            PreAmount :
            <input type="text" value={this.state.preAmount} onChange={this.handleAmount} />
          </label><br/><br/>
          <input className="btn btn-lg btn-primary" type="submit" value="Submit" />
        </form>
      );
    }
  }

 export default Form;