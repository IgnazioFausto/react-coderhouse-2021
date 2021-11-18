import React from "react";
import { useHistory } from "react-router";
import { CardTitle } from "../ItemListContainer/StyledComponents/Card.Title";
import { Boton } from "../ItemListContainer/StyledComponents/Boton";
import { CardItemDetail } from "../ItemListContainer/StyledComponents/CardItemDetail";
import { Loading } from "../../helpers/loadingLogo";

export const CartListEmpty = () => {

    const { push } = useHistory()

    return ( //Cuando el cart está vacío mostramos gráfico de loading y boton para ir al home (ItemListContainer)
        <div className="container mt-5 text-center">
            <CardItemDetail>
                <div className="card-body">
                    <Loading/>
                    <CardTitle className="text-center m-2">Cesta vacía : (</CardTitle>
                    <Boton onClick={() => push("/home")} className="btn btn-success btn-lg m-3">Ver productos : )</Boton>
                </div>
            </CardItemDetail>
        </div>
    )

}