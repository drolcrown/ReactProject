// import React, { Component } from 'react';
// import './css/Apartamento.css';
// import { Card, CardImg, CardBody, CardTitle, CardSubtitle, 
//         Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import LogoImg from './logo.svg';

// class Listas extends Component {
//     constructor(props) {
//         super(props);
//         console.log(this.props.lista);
//     }

//     render() {
//             return ( <h1>Hello</h1>);
//             }
//                         <Listas lista={this.state.apartamentos}/>

//     {this.state.apartamentos.map((ape, index) => ( 
//         <div key={ape._id} className="ml-3 mt-3 mb-3">
//             <Card id={index} className="Apartamento-cartao" onClick={this.toggle} > 
//                 <CardBody id={index}>
//                     <CardImg id={index} src={LogoImg} alt={ape.nome} className="Apartamento-img"/>
//                 </CardBody>
//                 <CardBody id={index}>
//                     <CardTitle id={index} className="fonteG">{ape.nome}</CardTitle>
//                     <CardTitle id={index} className="fonteP">R$ {ape.preco}</CardTitle>
//                     <CardSubtitle id={index} className="fonteM">{ape.local}</CardSubtitle>
//                 </CardBody>
//             </Card>
//             <Modal isOpen={this.state.modal} toggle={this.toggle}>
//                 <ModalHeader toggle={this.toggle}>
//                     <img src={this.state.imgModal} alt={this.state.nomeModal}/>
//                 </ModalHeader>
//                 <ModalBody>
//                     <p className="textCenter">{this.state.nomeModal}</p>
//                     <p>Preço: {this.state.precoModal}</p>
//                     <p>Descrição: {this.state.descricaoModal}</p>
//                     <p>Local: {this.state.localModal}</p>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button color="primary" onClick={this.toggle}>Negociar</Button>
//                 </ModalFooter>
//             </Modal>
//         </div>   
//     )}                     
    
// }   

// export default Listas;

// resposta = await axios.post('http://localhost:3333/apartamento/buscar', {
//     preco: this.state.preco,
// })
// const respostaLocal = ((await axios.post(url, {
//     local: this.state.local,
// })).data);
// const respostaNome = ((await axios.post(url, {
//     nome: this.state.nome,
// })).data);
// const respostaDesc = ((await axios.post(url, {
//     descricao: this.state.descricao,
// })).data);

// resposta = resposta.concat(respostaPreco, respostaNome, respostaDesc, respostaLocal);
// resposta.forEach((item, index) => {
//     if(!respostaAux.includes(item)){
//         respostaAux.push(item);
//     }
// });
// console.log(respostaAux);
// resposta = respostaAux;

    // verificarInputs(valor, tipo){
    //     switch(tipo){
    //         case "preco":
    //         this.setState({ preco: valor});
    //         this.validarInputs();
    //         break;
    //         case "descricao":
    //         this.setState({ descricao: valor});
    //         this.validarInputs();
    //         break;
    //         case "local":
    //         this.setState({ local: valor});
    //         break;
    //         case "nome":
    //         this.setState({ nome: valor});
    //         break;
    //         default:
    //         break
    //     }
    //     if (valor === '') {
    //         console.log("valor vazio")
    //         // this.validarInputs();
    //     }
    // }
        //    <div className="justify-content-center Apartamento-flex">
        //                     <input className="Apartamento-input col-8" type="number" name="preco" value={this.state.preco} 
        //                         onChange={e => this.setState({preco: this.verificarInputs(e.target.value)})} placeholder="Preço"/>
        //                     <input className="Apartamento-input col-8" type="text" name="nome" value={this.state.nome} 
        //                         onChange={e => this.setState({nome: this.verificarInputs(e.target.value)})} placeholder="Nome"/>
        //                     <input className="Apartamento-input col-8" type="text" name="local" value={this.state.local} 
        //                         onChange={e => this.setState({local: this.verificarInputs(e.target.value)})} placeholder="Local"/>
        //                     <input className="Apartamento-input col-8" type="text" name="descricao"  value={this.state.descricao} 
        //                         onChange={e => this.setState({descricao: this.verificarInputs(e.target.value)})} placeholder="descricao"/>
        //                     <div className="mt-3">
        //                         <Button color="primary" type="submit">Pesquisar</Button>
        //                     </div>
        //                 </div>


