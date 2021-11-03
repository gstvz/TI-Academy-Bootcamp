import axios from "axios";
import { api } from "../../../config";
import { Alert, Container, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Pedidos = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getPedidos = async () => {
        await axios.get(api + "/pedidos")
            .then((response) => {
                setData(response.data.pedidos);
            })
            .catch((response) => {
                setStatus({
                    type: 'error',
                    message: response.data.message
                });
            });
    };

    const excluirPedido = async(id) => {
        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.get(api + "/pedidos/" + id + "/excluir", {headers})
        .then((response) => {
            setStatus({
                type: 'success',
                message: response.data.message
            });
            getPedidos();
        })
        .catch((response) => {
            setStatus({
                type: 'error',
                message: response.data.message
            });
        });
    };

    useEffect(() => {
        getPedidos();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex justify-content-between">
                    <div className="p-2">
                        <h1>Pedidos</h1>
                    </div>
                    <div className="d-flex align-items-center p-2">
                        <Link
                            to="/pedidos/cadastrar"
                            className="btn btn-outline-primary btn-sm"
                        >
                            Cadastrar pedido
                        </Link>
                    </div>
                </div>

                <hr className="m-1" />
                
                {status.type == 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <Table striped>
                    <thead>
                        <tr>
                            <th>Pedido</th>
                            <th className="text-center">Cliente</th>
                            <th className="text-center">Data</th>
                            <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td className="text-center">{item.ClienteId}</td>
                                <td className="text-center">{item.data}</td>
                                <td className="d-flex justify-content-around">
                                    <Link
                                        to={"/pedidos/" + item.id}
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Consultar
                                    </Link>
                                    <Link
                                        to={"/pedidos/" + item.id + "/editar"}
                                        className="btn btn-outline-warning btn-sm"
                                    >
                                        Editar
                                    </Link>
                                    <span                                        
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => excluirPedido(item.id)}
                                    >
                                        Excluir
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};