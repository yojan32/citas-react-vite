import { useState, useEffect } from 'react';
import Error from './Error';

export default function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombrePropietario, setNombrePropietario] = useState('');
    const [EmailMascota, setEmail] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect( () => {
        if (Object.keys(paciente).length > 0) {
            setNombreMascota(paciente.nombreMascota);
            setNombrePropietario(paciente.nombrePropietario);
            setEmail(paciente.EmailMascota);
            setFechaAlta(paciente.fechaAlta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente])

    const generarId = () =>{
        const ramdom = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return fecha + ramdom;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validaciones del Formulario
        if ([nombreMascota, nombrePropietario, EmailMascota, fechaAlta, sintomas].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        //Objeto Pacientes
        const objetoPacientes = {
            nombreMascota,
            nombrePropietario,
            EmailMascota,
            fechaAlta,
            sintomas
        }

        if(paciente.id){
            //Editando Registro
            objetoPacientes.id = paciente.id;
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPacientes : pacienteState)
            setPacientes(pacientesActualizados);
            setPaciente({});
        }else{
            //Nuevo Registro
            objetoPacientes.id = generarId();
            setPacientes([...pacientes, objetoPacientes]);            
        }

        //Reiniciar form
        setNombreMascota('');
        setNombrePropietario('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');
    }

    return (
        <div className="md:w-1/2 ld:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y
                <span className="text-indigo-600 font-bold"> Administralos</span>
            </p>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-10 py-5">
                {error && <Error><p className="p-5 text-center">Todos los campos son <strong>obligatorios</strong></p></Error>}
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 font-bold uppercase"
                    >
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={nombreMascota}
                        onChange={(e) => setNombreMascota(e.target.value)}
                    />
                </div>
                <div className=" mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 font-bold uppercase"
                    >
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={nombrePropietario}
                        onChange={(e) => setNombrePropietario(e.target.value)}
                    />
                </div>
                <div className=" mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold uppercase"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="example@example.com"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={EmailMascota}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className=" mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 font-bold uppercase"
                    >
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        value={fechaAlta}
                        onChange={(e) => setFechaAlta(e.target.value)}
                    />
                </div>
                <div className=" mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 font-bold uppercase"
                    >
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                        placeholder="Describe los síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    ></textarea>
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </form>
        </div>
    );
}
