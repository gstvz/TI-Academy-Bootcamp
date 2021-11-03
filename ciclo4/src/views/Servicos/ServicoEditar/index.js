import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const ServicoEditar = (props) => {

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const [ServicoId, setServicoId] = useState(props.match.params.id);
    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const valorInput = e => setServico({
        ...servico,
        [e.target.name]: e.target.value
    });

    const limparInput = () => setServico({
        nome: '',
        descricao: ''
    });

    const getServico = async () => {
        await axios.get(api + "/servicos/" + ServicoId)
            .then((response) => {
                setServico(response.data.serv);
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Erro: Sem conexão com a API.'
                });
            });
    };

    const editarServico = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/servicos/" + ServicoId + "/editar", servico, { headers })
            .then((response) => {
                setStatus({
                    type: 'success',
                    message: response.data.message
                });
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Erro: Sem conexão com a API.'
                });
            });
    };

    useEffect(() => {
        getServico();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex justify-content-between">
                    <div className="p-2">
                        <h1>Editar Serviço</h1>
                    </div>
                    <div className="d-flex align-items-center p-2">
                        <Link
                            to="/servicos"
                            className="btn btn-outline-success btn-sm"
                        >
                            Serviços
                        </Link>
                    </div>
                </div>

                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Form className="p-2" onSubmit={editarServico}>
                    <FormGroup className="p-2">
                        <Label>Nome</Label>
                        <Input type="text" name="nome" placeholder="Nome do serviço" value={servico.nome} onChange={valorInput} />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Descrição</Label>
                        <Input type="text" name="descricao" placeholder="Descrição do serviço" value={servico.descricao} onChange={valorInput} />
                    </FormGroup>                    
                    <Button type="submit" className="m-2" outline color="warning">Salvar</Button>
                    <Button type="button" className="m-2" type="button" outline color="secondary" onClick={limparInput}>Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}