import React from "react";
import { Loading } from '../../helpers/loading'
import { useHistory } from "react-router";
import { CardTitle } from "../ItemListContainer/StyledComponents/Card.Title";
import { Boton } from "../ItemListContainer/StyledComponents/Boton";
import { CardItemDetail } from "../ItemListContainer/StyledComponents/CardItemDetail";

export const CartListEmpty = () => {

    const { push } = useHistory()

    return (
        <div className="container m-5 text-center">
            <CardItemDetail>
                <div className="card-body">
                    <Loading/ >
                    <CardTitle className="text-center mt-2">Cesta vacía :(</CardTitle>
                    <Boton onClick={() => push("/home")} className="btn btn-success btn-lg m-3">Comienza a comprar :)</Boton>
                </div>
            </CardItemDetail>
        </div>
    )

}