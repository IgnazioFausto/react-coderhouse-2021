import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import { UIContext } from '../../context/UIContext'
import { Redirect } from 'react-router'
import { LoadingFull } from '../../helpers/LoadingFull'
import { CardText } from '../ItemListContainer/StyledComponents/CardText'
import { Badge, Card } from 'react-bootstrap'
import { BrandLogo } from '../NavBar/BrandLogo'
import { useHistory } from 'react-router'
import { generarOrden } from '../../firebase/generarOrden'

export const Checkout = () => {

    const { push } = useHistory()

    const { loading, setLoading } = useContext(UIContext)

    const { cart, calcularTotal, vaciarCarrito } = useContext(CartContext)

    //valores obtenidos desde el form
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        tel: '',
        email: '',
        validation: ''
    })

    //para manejar el cambio al escribir en cada input
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    } //controlamos el submit del form
    const handleSubmit = (e) => {
        e.preventDefault()

        //condicionamos los inputs para evitar campos vacíos
        if (values.nombre.length < 3) {
            return (
                Swal.fire({
                    icon: 'info',
                    iconColor: '#4C6C14',
                    title: 'Debe ingresar su nombre.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#E97333'
                }))
        }
        if (values.apellido.length < 3) {
            return (
                Swal.fire({
                    icon: 'info',
                    iconColor: '#4C6C14',
                    title: 'Debe ingresar su apellido.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#E97333'
                }))
        }
        if (values.email.length < 3) {
            return (
                Swal.fire({
                    icon: 'info',
                    iconColor: '#4C6C14',
                    title: 'Debe ingresar su email.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#E97333'
                }))
        }
        if (values.tel.length < 7) {
            return (
                Swal.fire({
                    icon: 'info',
                    iconColor: '#4C6C14',
                    title: 'Debe ingresar su teléfono.',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: '#E97333'
                }))
        }
        //validamos si coinciden los correos electrónicos ingresados
        if (values.email === values.validation) {

            setLoading(true)
            //mostramos loading mientras se genera la orden de compra
            generarOrden(values, cart, calcularTotal())
                .then((res) => {
                    Swal.fire({
                        icon: 'success',
                        iconColor: '#4C6C14',
                        title: '¡Su compra fue registrada!',
                        confirmButtonText: '¡Qué bien!',
                        confirmButtonColor: '#E97333',
                        text: `Guarde su código de compra ${res}`,
                        willClose: () => {
                            vaciarCarrito() /* al cerrar, limpiamos el cart */
                        }
                    })
                })
                .catch((err) => {
                    /* mapeamos el err que contiene los productos sin stock */
                    Swal.fire({
                        icon: 'error',
                        iconColor: 'red',
                        title: `Items sin stock: ${err.map(el => el.name).join(', ')}`,
                        text: 'Revisa el resumen para comprobar el stock',
                        confirmButtonText: 'Ok.',
                        confirmButtonColor: '#E97333'
                    })
                })
                .finally(() => setLoading(false)) //ocultamos el loading

        } else {
            Swal.fire({
                icon: 'info',
                iconColor: '#E97333',
                title: 'Validación',
                text: 'Debe ingresar nuevamente su correo',
                confirmButtonText: 'Ok.',
                confirmButtonColor: '#E97333'
            })

        }
    }
    return (
        <>
            {cart.length === 0 && <Redirect to="/home" />}

            <Card className="container my-5 mx-auto pb-5 text-center" style={{ width: '60%' }}>
                <CardText style={{ width: '100%', fontSize: '2.5rem', margin: '2rem auto 0 auto', textAlign: 'center' }}>Ingrese sus datos</CardText>
                <hr />
                <div className={`${loading} ? "container mt-3" : "container mt-3 opacity-0"}`}>

                    {/* formulario para la compra */}

                    <form style={{ width: '10rem', margin: '0 auto' }} onSubmit={handleSubmit}>
                        <hr />
                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={values.nombre}
                            onChange={handleInputChange}
                        />
                        {values.nombre.length === 0 && <Badge pill bg="danger">Este campo es obligatorio</Badge>}

                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="Apellido"
                            name="apellido"
                            value={values.apellido}
                            onChange={handleInputChange}
                        />
                        {values.apellido.length === 0 && <Badge pill bg="danger">Este campo es obligatorio</Badge>}
                        <input
                            className="form-control my-2"
                            type="tel"
                            placeholder="Teléfono"
                            name="tel"
                            value={values.tel}
                            onChange={handleInputChange}
                        />
                        {values.tel.length === 0 && <Badge pill bg="danger">Este campo es obligatorio</Badge>}
                        <input
                            className="form-control my-2"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                        />
                        {values.email.length === 0 && <Badge pill bg="danger">Este campo es obligatorio</Badge>}
                        <input
                            className="form-control my-2"
                            type="text"
                            placeholder="Confirme su correo"
                            name="validation"
                            value={values.validation}
                            onChange={handleInputChange}

                        />
                        {values.email.length === 0 && <Badge pill bg="danger">Este campo es obligatorio</Badge>}

                        <hr />
                        <button className={`${loading} ? btn btn-success m-2 btn-lg btn-block: m-2 invisible}`} disabled={loading} type="submit" >Finalizar orden</button>
                    </form>
                    <br />
                    <button className="btn btn-outline-success btn-sm mb-2" onClick={() => push("/cart")}>
                        Revisar el resumen
                    </button>
                    <hr /><br />
                    <BrandLogo />
                    <CardText>Mi Huertapp 2021</CardText>
                </div>
            </Card>
            {loading && <LoadingFull />}
        </>
    )
}
