import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { api } from "../../../config";

export const PedidoEditar = (props) => {

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });
    const [PedidoId, setPedidoId] = useState(props.match.params.id);
    const [pedido, setPedido] = useState({
        id: '',
        ClienteId: '',
        data: ''
    });

    const valorInput = e => setPedido({
        ...pedido,
        [e.target.name]: e.target.value
    });

    const limparInput = () => setPedido({
        data: ''
    });

    const getPedido = async () => {
        await axios.get(api + "/pedidos/" + PedidoId)
            .then((response) => {
                setPedido(response.data.ped);
            })
            .catch((response) => {
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            });
    };

    const editarPedido = async e => {
        e.preventDefault();

        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.put(api + "/pedidos/" + PedidoId + "/editar", pedido, { headers })
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
        getPedido();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex justify-content-between">
                    <div className="p-2">
                        <h1>Editar Pedido</h1>
                    </div>
                    <div className="d-flex align-items-center p-2">
                        <Link
                            to="/pedidos"
                            className="btn btn-outline-success btn-sm"
                        >
                            Pedidos
                        </Link>
                    </div>
                </div>

                <hr className="m-1" />

                {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ''}
                {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ''}

                <Form className="p-2" onSubmit={editarPedido}>
                    <FormGroup className="p-2">
                        <Label>ID</Label>
                        <Input type="text" name="id" placeholder="ID do pedido" value={pedido.id} onChange={valorInput} disabled />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Cliente Id</Label>
                        <Input type="text" name="ClienteId" placeholder="ID do Cliente" value={pedido.ClienteId} onChange={valorInput} disabled />
                    </FormGroup>
                    <FormGroup className="p-2">
                        <Label>Data do pedido</Label>
                        <Input type="date" name="data" placeholder="Data do pedido" value={pedido.data} onChange={valorInput} />
                    </FormGroup>
                    <Button type="submit" className="m-2" outline color="warning">Salvar</Button>
                    <Button type="button" className="m-2" type="button" outline color="secondary" onClick={limparInput}>Limpar</Button>
                </Form>
            </Container>
        </div>
    )
}