import { NextResponse } from "next/server";
import prisma from "@lib/prisma";
import { Usuario } from "@prisma/client";

// Maneja la solicitud GET (para obtener usuarios)
export async function GET() {
  try {
    const usuarios: Usuario[] = await prisma.usuario.findMany();
    return NextResponse.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return NextResponse.json({ error: "Error al obtener usuarios" }, { status: 500 });
  }
}

// Maneja la solicitud POST (para crear un nuevo usuario)
export async function POST(req: Request) {
  try {
    const { nombre, correo } = await req.json(); // Obtenemos los datos enviados en el cuerpo de la solicitud

    // Validamos que los campos no estén vacíos
    if (!nombre || !correo) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    // Creamos un nuevo usuario en la base de datos
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        nombre,
        correo,
      },
    });

    // Retornamos el usuario creado como respuesta
    return NextResponse.json(nuevoUsuario, { status: 201 });
  } catch (error) {
    console.error("Error al crear usuario:", error);
    return NextResponse.json({ error: "Error al crear usuario" }, { status: 500 });
  }
}
