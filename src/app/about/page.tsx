"use client"; // 👈 Agrega esta línea arriba de todo

import { useState } from "react";

interface Usuario {
  id: number;
  nombre: string;
  correo: string;
}

export default function Home() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  // Función para obtener usuarios
  const fetchUsuarios = async () => {
    try {
      const response = await fetch("/api/usuarios");
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  // Función para manejar el envío del formulario (POST)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !correo) {
      console.error("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await fetch("/api/usuarios", {
        method: "POST", // Establecemos el método POST
        headers: {
          "Content-Type": "application/json", // Indicamos que estamos enviando JSON
        },
        body: JSON.stringify({ nombre, correo }), // Enviamos el nombre y correo en el cuerpo de la solicitud
      });

      if (response.ok) {
        // Si la creación fue exitosa, recargamos la lista de usuarios
        fetchUsuarios();
        setNombre(""); // Limpiamos los campos del formulario
        setCorreo("");
      } else {
        console.error("Error al crear usuario.");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white text-black shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold">Lista de Usuarios</h1>

        {/* Formulario para agregar un nuevo usuario */}
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-2 border rounded mb-2 w-full"
          />
          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="p-2 border rounded mb-2 w-full"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Agregar Usuario
          </button>
        </form>

        <ul className="mt-6">
          {usuarios.map((usuario) => (
            <li key={usuario.id} className="border-b py-2">
              <span className="font-semibold">{usuario.nombre}</span> -{" "}
              {usuario.correo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
