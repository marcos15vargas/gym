---

### 📄 `README.md`

```markdown
# 🏋️‍♂️ GYM COSTANERA

Sitio web oficial de **GYM COSTANERA**, un gimnasio ubicado en Villa San Agustín, Valle Fértil. El sitio ofrece información sobre los servicios del gimnasio, horarios, planes, ubicación, y una galería de máquinas con ejemplos de ejercicios.

## 🌐 Demo

🔗 [Ver sitio en producción](https://tusitio.vercel.app) *(modifica este link si ya está publicado)*

---

## 🚀 Tecnologías Utilizadas

- [Astro](https://astro.build/) — Framework moderno para sitios rápidos y optimizados.
- HTML + CSS + TailwindCSS
- Google Analytics (gtag.js)
- FontAwesome (iconos)
- Fuentes personalizadas (Gotham)
- Markdown + contenido dinámico (colección de máquinas)

---

## 📁 Estructura del Proyecto

```bash
src/
├── components/
│   ├── Banner.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   ├── Info.astro
│   ├── Location.astro
│   ├── Maquinas.astro
│   ├── Navbar.astro
│   ├── Plans.astro
│   ├── Threepics.astro
│   └── TimeTable.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   └── maquinas/[id].astro
└── content/
    └── maquinas/
        └── *.md  # Archivos markdown con info de cada máquina
```

---

## ✨ Funcionalidades

- Página principal con secciones: Banner, Info, Planes, Galería, Horarios, Ubicación y Contacto.
- Enrutamiento dinámico para cada máquina (`maquinas/[id]`).
- Carga automática de datos desde Markdown (`content/maquinas`).
- Enlaces con ejemplos de ejercicios para cada máquina.
- Componente `Layout` central con `Navbar` y `Footer`.
- SEO básico y responsive design.

---

## 🧪 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/gym-costanera.git
cd gym-costanera
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### 4. Compilar para producción

```bash
npm run build
```

### 5. Vista previa de producción

```bash
npm run preview
```

---

## 🧩 Contenido dinámico

Las máquinas se cargan desde la colección `content/maquinas`. Cada archivo `.md` debe incluir metadatos como:

```markdown
---
title: Press de Banca
img: press-banca.jpg
description: Ejercicio para pectorales.
links:
  Video 1: https://youtube.com/ejemplo1
  Video 2: https://youtube.com/ejemplo2
---
Aquí podés escribir contenido en Markdown sobre la máquina.
```

---

## 👨‍💻 Autores

- **Maximiliano Burgoa**  
- **Marcos Vargas**

---

## 📬 Contacto

¿Querés entrenar con nosotros? ¡Encontranos en nuestras redes o vení al gimnasio!

---

💪 *Gracias por visitar GYM COSTANERA. ¡A darlo todo en cada entrenamiento!*
```

---