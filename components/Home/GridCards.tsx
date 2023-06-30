import { CardsEstaciones } from "../Cards/CardsEstaciones"

export const GridCards = () => {

    const Estaciones = [
        {
            nombre: "fuldetodo",
            ubicacion: "bellavista",
            estatus: "Abierta",
            capacidad: "5.000L",
            disponible: "1.000L",
            imagen: "/JPGasolineras-9.jpeg",
            despacho: "asignado",
            gandola: true,
        },
        {
            nombre: "fuldetodo",
            ubicacion: "bellavista",
            estatus: "Abierta",
            capacidad: "6.000L",
            disponible: "2.000L",
            imagen: "/Gasolinera3.jpg",
            despacho: "asignado",
            gandola: false,
        },
        {
            nombre: "fuldetodo",
            ubicacion: "bellavista",
            estatus: "Cerrado",
            capacidad: "7.000L",
            disponible: "3.000L",
            imagen: "/Gasolinera4.jpg",
            despacho: "asignado",
            gandola: false,
        },
        {
            nombre: "fuldetodo",
            ubicacion: "bellavista",
            estatus: "Abierta",
            capacidad: "4.000L",
            disponible: "500L",
            imagen: "/JPGasolineras2.jpeg",
            despacho: "asignado",
            gandola: true,
        },
        {
            nombre: "Nigale",
            ubicacion: "Delicias",
            estatus: "Cerrado",
            capacidad: "10.000L",
            disponible: "8.000L",
            imagen: "/JPGasolineras6.jpeg",
            despacho: "asignado",
            gandola: true,
        },
        {
            nombre: "fuldetodo",
            ubicacion: "bellavista",
            estatus: "Abierta",
            capacidad: "100.000L",
            disponible: "10.000L",
            imagen: "/Gasolinera3.jpg",
            despacho: "asignado",
            gandola: false,
        },
        {
            nombre: "fuldetodo",
            ubicacion: "bellavista",
            estatus: "Abierta",
            capacidad: "5.000L",
            disponible: "1.000L",
            imagen: "/Gasolinera4.jpg",
            despacho: "asignado",
            gandola: true,
        },
        {
            nombre: "Expres",
            ubicacion: "Tierra N.",
            estatus: "Cerrado",
            capacidad: "5.000L",
            disponible: "4.000L",
            imagen: "/JPGasolineras-9.jpeg",
            despacho: "asignado",
            gandola: true,
        },
        {
            nombre: "Las Mujeres",
            ubicacion: "C2",
            estatus: "Abierta",
            capacidad: "5.000L",
            disponible: "5.000L",
            imagen: "/JPGasolineras6.jpeg",
            despacho: "asignado",
            gandola: true,
        },
    ]

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-4 w-[70%] justify-items-center ">
                    <CardsEstaciones data={Estaciones} />
                </div>
            </div>
        </>
    )
}