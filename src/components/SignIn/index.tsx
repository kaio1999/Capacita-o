import React, { useState } from "react";
import {
  ContainerRight,
  Title,
  Input,
  Select,
  DivInput,
  ButtonSignUp,
  Formulary,
  ModalSign,
} from "./styled";
import NumberFormat from "react-number-format";
import axios from "axios";

const SignIn = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [church, setChurch] = useState("");
  const [sheperd, setSheperd] = useState("");
  const [city, setCity] = useState("");
  const [oficce, setOficce] = useState("");

  const url =
    "https://capacitacao-b2f17-default-rtdb.firebaseio.com/inscritos.json";
  const Save = (data) => {
    axios.post(url, data).then((res) => {
      window.location.href = "/userlist.html";
      alert("sua inscrição foi efetuada com sucesso");
      console.log(res, "res");
    });
  };

  return (
    <ContainerRight>
      <ModalSign>
        <Title Fsize={30}>
          Faça sua <strong>inscrição</strong> agora
        </Title>
        <Formulary>
          <div className="DivControl">
            <label>Nome:</label>
            <Input type="text" onChange={(e: any) => setName(e.target.value)} />
          </div>
          <DivInput>
            <div className="DivInput">
              <label>Telefone:</label>
              <NumberFormat
                customInput={Input}
                label="Telefone"
                format="(##) # ####-####"
                mask="_"
                minLength={10}
                allowNegative={false}
                fullWidth
                variant="outlined"
                id="phone"
                onChange={(e: any) => setTel(e.target.value)}
              />
            </div>
            <div className="DivControl">
              <label>Cidade:</label>
              <Input
                type="text"
                onChange={(e: any) => setCity(e.target.value)}
              />
            </div>
          </DivInput>
          <div className="DivControl">
            <label>pastor responsavel:</label>
            <Input
              type="text"
              onChange={(e: any) => setSheperd(e.target.value)}
            />
          </div>
          <DivInput>
            <div className="DivInput">
              <label>igreja:</label>
              <Input
                type="text"
                onChange={(e: any) => setChurch(e.target.value)}
              />
            </div>
            <div className="Select">
              <label>cargo:</label>
              <Select onChange={(value) => setOficce(value.target.value)}>
                <option></option>
                <option value="Pastor">Pastor</option>

                <option value="Dicipulador">Dicipulador</option>

                <option value="Lider">Lider</option>

                <option value="Membro de celula">Membro de célula</option>
              </Select>
            </div>
          </DivInput>
        </Formulary>
        <ButtonSignUp
          onClick={(e) =>
            name && tel && church && sheperd && oficce && city
              ? Save({
                  name: name,
                  tel: tel,
                  church: church,
                  sheperd: sheperd,
                  oficce: oficce,
                  city: city,
                })
              : alert("preencha todos os campos")
          }
        >
          Inscreva-se
        </ButtonSignUp>
      </ModalSign>
    </ContainerRight>
  );
};

export default SignIn;
