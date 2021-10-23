import React from "react";
import { Loading } from '../../helpers/loading'
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { CardTitle } from "../ItemListContainer/StyledComponents/Card.Title";
import { Boton } from "../ItemListContainer/StyledComponents/Boton";

export const CartListEmpty = () => {

    const { push } = useHistory()

    return (
        <div className="container m-3 text-center">
            <Card>
                <div className="card-body">
                    <CardTitle className="text-center mt-5">No has elegido ningún producto aún...</CardTitle>
                    <Loading></Loading>
                    <Boton onClick={() => push("/home")} className="btn btn-success btn-lg">Comienza a comprar!</Boton>
                </div>
            </Card>
        </div>
    )

}