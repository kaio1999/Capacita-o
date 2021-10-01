import React, { useState, useEffect } from "react";
import axios from "axios";
import DivGeneral, {
  ModalSignUp,
  DivName,
  List,
  DivList,
  ListSign,
  Describe,
  ListDescribe,
} from "./userlist.styled";
import Header from "../Home/header";

const UserList = (Data) => {
  const [loading, setLoading] = useState<any>(true);
  const [data, setData] = useState<any>([]);

  const url = `https://capacitacao-b2f17-default-rtdb.firebaseio.com/inscritos.json`;

  useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data) {
        setData(Object.entries(res.data));
        setLoading(false);
      }
    });
  }, []);

  data.sort(function (a, b) {
    if (a[1].name < b[1].name) {
      return -1;
    } else {
      return true;
    }
  });

  const Count = data.map((item: { name: any }[]) => item[1].name);

  return (
    <>
      <Header about={true} />

      <DivGeneral>
        {loading ? (
          <img className="Loading" src="../assets/loading-buffering.gif" />
        ) : (
          <>
            <ListSign>
              <h2>QUANTIDADE DE INSCRITOS: {Count.length}</h2>
            </ListSign>
            <ModalSignUp>
              <DivList>
                <DivName>
                  <Describe marginLeft="25px">Nome</Describe>
                  <Describe>Telefone</Describe>
                  <Describe display="none">Cargo</Describe>
                  <Describe display="none">Pastor</Describe>
                  <Describe>Igreja</Describe>
                  <Describe display="none">Cidade</Describe>
                </DivName>
                {data.map((item: any) => {
                  return (
                    <List>
                      <ListDescribe>{item[1].name}</ListDescribe>
                      <ListDescribe>{item[1].tel}</ListDescribe>
                      <ListDescribe display="none">
                        {item[1].oficce}
                      </ListDescribe>
                      <ListDescribe display="none">
                        {item[1].sheperd}
                      </ListDescribe>
                      <ListDescribe>{item[1].church}</ListDescribe>
                      <ListDescribe display="none">{item[1].city}</ListDescribe>
                    </List>
                  );
                })}
              </DivList>
            </ModalSignUp>
          </>
        )}
      </DivGeneral>
    </>
  );
};

export default UserList;
