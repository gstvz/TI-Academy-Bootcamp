import { Link } from "react-router-dom"
import { Button, Container, Form, FormGroup, Label, Input } from "reactstrap"

export const ServicoCadastrar = () => {

    const cadServico = async => {
        console.log("Cadastrar");
    };

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastrar Serviço</h1>
                </div>
                <div className="p-2">
                    <Link
                        to="/servicos"
                        className="btn btn-outline-success btn-sm"
                    >
                        Serviços
                    </Link>
                </div>
            </div>

            <hr className="m-1" />
            <Form className="p-2" onSubmit={cadServico}>
                <FormGroup className="p-2">
                    <Label>Nome</Label>
                    <Input type="text" name="nome" placeholder="Nome do serviço" />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Descrição</Label>
                    <Input type="text" name="descricao" placeholder="Descrição do serviço" />
                </FormGroup>                
                <Button className="m-2" type="submit" outline color = "success">Cadastrar</Button>
            </Form>
        </Container>
    )
}