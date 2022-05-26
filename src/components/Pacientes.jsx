export default function Pacientes({paciente, setPaciente, eliminarPaciente}) {
    const {nombreMascota, nombrePropietario, EmailMascota, fechaAlta, sintomas, id} = paciente;
    const handleEliminar = () => {
        const respuesta  = confirm('Desea eliminar al paciente?');

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return (
        <div className="mx-5 mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:
                <span className="font-normal normal-case"> {nombreMascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:
                <span className="font-normal normal-case"> {nombrePropietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:
                <span className="font-normal normal-case"> {EmailMascota}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta:
                <span className="font-normal normal-case"> {fechaAlta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                síntomas:
                <span className="font-normal normal-case"> {sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button 
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold text-white uppercase rounded-lg cursor-pointer"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 font-bold text-white uppercase rounded-lg cursor-pointer"
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}
