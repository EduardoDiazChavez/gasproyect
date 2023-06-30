import { FC } from "react"
import { Capacidad, Disponible, Gandola, Local, Reloj, Ubicacion } from "../Icons/Icons"

interface propsCards {
    data: any
}

export const CardsEstaciones: FC<propsCards> = ({ data }) => {
    console.log(data)
    return (
        <>
            {
                data.map((item: any, idx: any) => {
                    return (
                        <div key={idx} className="flex flex-col bg-white w-64 h-80 p-4 rounded-lg m-4 space-y-5 shadow-lg">
                            <div className="flex justify-center items-center w-full h-[50%] bg-green-200 rounded-lg   ">
                                <img src={item.imagen} alt="Estation" className="rounded-lg h-full w-full shadow-md" />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <Local />
                                        <span className="cursor-default">
                                            {item.nombre}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-center cursor-pointer gap-0.5">
                                        <Ubicacion />
                                        <span className="">
                                            {item.ubicacion}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Reloj />
                                    <span className="cursor-default">
                                        {item.estatus}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Gandola />
                                    <span className="cursor-default">
                                        {item.gandola ? item.despacho : "sin asignar"}
                                    </span>
                                </div>

                                <div className=" flex justify-between">
                                    <div className="flex items-center gap-2">
                                        <Capacidad />
                                        <span className="cursor-default">
                                            {item.capacidad}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Disponible />
                                        <span className="cursor-default">
                                            {item.disponible}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}