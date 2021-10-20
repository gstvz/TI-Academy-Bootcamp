import axios from "axios";
import { api } from "../../../config";
import { Container, Table } from "reactstrap";
import { useEffect, useState } from "react";

export const ListarServico = () => {

    const [data, setData] = useState([]);

    const getServicos = async () => {
        await axios.get(api + "/servicos/lista")
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);
            })
            .catch(() => {
                console.log("Erro: sem conexão com a API.");
            });
    };

    useEffect(() => {
        getServicos();
    }, []);

    return (
        <div>
            <Container>
                <h1>Visualizar informações do serviço</h1>
                <Table striped>
                    <thead>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Ação</th>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <th>{item.id}</th>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center/">Botão</td>
                            </tr>
                        ))};
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};