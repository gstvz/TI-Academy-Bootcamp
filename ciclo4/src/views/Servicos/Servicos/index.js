import axios from "axios";
import { api } from "../../../config";
import { Alert, Container, Table } from "reactstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Servicos = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/servicos")
            .then((response) => {
                setData(response.data.servicos);
            })
            .catch(() => {
                setStatus({
                    type: 'Error',
                    message: 'Erro: Sem conexão com a API.'
                });
            });
    };

    const excluirServico = async(id) => {
        const headers = {
            'Content-Type': 'application/json'
        };

        await axios.get(api + "/servicos/" + id + "/excluir", {headers})
        .then((response) => {
            setStatus({
                type: 'success',
                message: response.data.message
            });
            getServicos();
        })
        .catch((response) => {
            setStatus({
                type: 'error',
                message: response.data.message
            });
        });
    };

    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div>
            <Container>
                <div className="d-flex justify-content-between">
                    <div className="p-2">
                        <h1>Serviços</h1>
                    </div>
                    <div className="d-flex align-items-center p-2">
                        <Link 
                            to="/servicos/cadastrar"
                            className="btn btn-outline-primary btn-sm"
                        >
                            Cadastrar Serviço
                        </Link>
                    </div>                
                </div>

                <hr className="m-1" />

                {status.type == 'Error' ? <Alert color="danger">{status.message}</Alert> : ""}

                <Table striped>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th className="text-center">Nome</th>
                        <th className="text-center">Descrição</th>
                        <th className="text-center">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th className="text-center">{item.id}</th>
                                <td className="text-center">{item.nome}</td>
                                <td className="text-center">{item.descricao}</td>
                                <td className="d-flex justify-content-around">
                                    <Link 
                                        to={"/servicos/" + item.id} 
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                    Consultar
                                    </Link>
                                    <Link
                                        to={"/servicos/" + item.id + "/editar"}
                                        className="btn btn-outline-warning btn-sm"
                                    >
                                        Editar
                                    </Link>
                                    <span                                        
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => excluirServico(item.id)}
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