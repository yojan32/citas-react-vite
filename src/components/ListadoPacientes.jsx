import Pacientes from "./Pacientes";

export default function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
    return (
        <div className="md:w-1/2 lg:w-3/5 mt-5 md:mt-0">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Administra tus
                        <span className="text-indigo-600 font-bold"> Pacientes y Citas</span>
                    </p>
                    <div className="md:h-screen overflow-y-scroll">
                        {pacientes.map(paciente => (
                            <Pacientes
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Añade un
                        <span className="text-indigo-600 font-bold"> Paciente</span>
                    </p>
                </>
            )}
        </div>
    );
}
