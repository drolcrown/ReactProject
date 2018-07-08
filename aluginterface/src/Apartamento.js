import React, { Component } from 'react';
import Logo from './Logo';
import './css/Apartamento.css';
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, 
        Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LogoImg from './img/logo.svg';

class Apartamento extends Component {
    constructor() {
        super();
        this.state = { preco: '', local: '', descricao: '',
            nome: '', apartamentos: [], modal: false, 
            precoModal: '', localModal: '', descricaoModal: '',
            nomeModal: '', imgModal: '', apartamentoListaBackup: [],
            noItem: {display: 'none'},
        };
        this.toggle = this.toggle.bind(this);
        this.verificarInputs = this.verificarInputs.bind(this);
        this.postarNoBanco = this.postarNoBanco.bind(this);
    }

    //Executado quando o componente é renderizado
    async componentDidMount(){
        const resposta = await axios.get('http://localhost:3333/apartamento/todos');
        this.setState({ apartamentos: resposta.data, apartamentoListaBackup: resposta.data});
    }

    toggle = async (e) => {
        if(this.state.apartamentos[e.target.id]){
            var objeto = this.state.apartamentos[e.target.id];
            this.setState({
                precoModal: objeto.preco,
                nomeModal: objeto.nome,
                localModal: objeto.local,
                descricaoModal: objeto.descricao,
                imgModal: objeto.imagem,
            });
        }
        this.setState({ modal: !this.state.modal});
    }

    enviarResposta = async (e) =>{
        e.preventDefault();
        this.postarNoBanco(true);
    }

    postarNoBanco = async (enviarResposta) => {
        const url = 'http://localhost:3333/apartamento/buscar';
        if (!this.state.preco && !this.state.local && !this.state.descricao && !this.state.nome) {
            this.setState({ apartamentos: this.state.apartamentoListaBackup});
            console.log("Sem nada");
            return;
        }
        const resposta = ((await axios.post(url, {
            $or : [
                {$or : [{preco: {$lte : this.state.preco}}]},
                {$or : [{nome : this.state.nome}]},
                {$or : [{local : this.state.local}]},
                {$or : [{descricao : this.state.descricao}]}
            ]
        })).data);
        if (resposta.length > 0) {
            this.setState({ apartamentos: resposta});
            this.setState({noItem: {display: 'none'}});
        }else{
            if(enviarResposta) {
                this.setState({ apartamentos: []});
                this.setState({noItem: {display: 'flex'}});
            }else{
                this.setState({ apartamentos: this.state.apartamentoListaBackup});
            }
        }
    }

    verificarInputs(valor){
        if(valor === ''){
            this.postarNoBanco(false);
        }
    }

    render() {
        const apartamentoLista = {
            height: (window.innerHeight - 150),
            overflowY: 'scroll',
        };
        return ( 
            <div>
                <Logo/>
                <div className="Apartamento">
                    <form className="row col-4 col-sm-4 text-center" onSubmit={this.enviarResposta} onChange={e => {this.verificarInputs(e.target.value)}}>
                        <div className="justify-content-center Apartamento-flex">
                            <input className="Apartamento-input col-8" type="number" name="preco" value={this.state.preco} 
                                onChange={e => this.setState({preco: e.target.value})} placeholder="Preço"/>
                            <input className="Apartamento-input col-8" type="text" name="nome" value={this.state.nome} 
                                onChange={e => this.setState({nome: e.target.value})} placeholder="Nome"/>
                            <input className="Apartamento-input col-8" type="text" name="local" value={this.state.local} 
                                onChange={e => this.setState({local: e.target.value})} placeholder="Local"/>
                            <input className="Apartamento-input col-8" type="text" name="descricao"  value={this.state.descricao} 
                                onChange={e => this.setState({descricao: e.target.value})} placeholder="descricao"/>
                            <div className="mt-3">
                                <Button color="primary" type="submit">Pesquisar</Button>
                            </div>
                        </div>
                    </form> 
                    <div className="row col-8 text-center" style={apartamentoLista} >
                        {this.state.apartamentos.map((ape, index) => ( 
                            <div key={ape._id} className="ml-3 mt-3 mb-3">
                                <Card id={index} className="Apartamento-cartao" onClick={this.toggle} > 
                                    <CardBody id={index}>
                                        <CardImg id={index} src={LogoImg} alt={ape.nome} className="Apartamento-img"/>
                                    </CardBody>
                                    <CardBody id={index}>
                                        <CardTitle id={index} className="fonteG">{ape.nome}</CardTitle>
                                        <CardTitle id={index} className="fonteP">R$ {ape.preco}</CardTitle>
                                        <CardSubtitle id={index} className="fonteM">{ape.local}</CardSubtitle>
                                    </CardBody>
                                </Card>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>
                                        <img src={this.state.imgModal} alt={this.state.nomeModal}/>
                                    </ModalHeader>
                                    <ModalBody>
                                        <p className="textCenter">{this.state.nomeModal}</p>
                                        <p>Preço: {this.state.precoModal}</p>
                                        <p>Descrição: {this.state.descricaoModal}</p>
                                        <p>Local: {this.state.localModal}</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Negociar</Button>
                                    </ModalFooter>
                                </Modal>    
                            </div>                                 
                        ))}
                        <div style={this.state.noItem} className="center">
                            <h1>Nenhum Item Encontrado!!</h1>
                        </div>  
                    </div>                      
                </div> 
            </div>
        );
    }
}

export default Apartamento;