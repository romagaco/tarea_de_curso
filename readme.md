# Tarea de Curso: Prueba de Conocimientos en JavaScript Vanilla

[![GitHub Pages](https://github.com/romagaco/tarea_de_curso/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/romagaco/tarea_de_curso/actions/workflows/pages/pages-build-deployment)

¡Bienvenido a mi repositorio de ejercicios para poner a prueba mis habilidades en **JavaScript vanilla**! Este proyecto es parte de una tarea de curso donde exploro conceptos básicos y avanzados de JS sin frameworks, como manipulación del DOM, eventos, funciones y más. Todo se aloja de forma gratuita en **GitHub Pages** para una demo interactiva.

## 📋 Descripción

- **Objetivo**: Demostrar conocimientos en JS puro mediante mini-ejercicios interactivos, como calculadoras simples, validadores de formularios y animaciones básicas.
- **Tecnologías usadas**:
  - HTML5
  - CSS3 (estilos vanilla)
  - JavaScript ES6+
- **Estado**: En desarrollo. ¡Agrego más features semanalmente!

Visita la [demo en GitHub Pages](https://romagaco.github.io/tarea_de_curso/) para probarlo en vivo.

## 🚀 Instalación

No necesitas nada complicado, ya que es un sitio estático. Sigue estos pasos:

1. Clona el repositorio:
https://github.com/romagaco/tarea_de_curso

2. Abre la carpeta en tu editor de código (VS Code recomendado).
3. Para desarrollo local: Abre `index.html` en tu navegador.
4. Para deploy en GitHub Pages: Ve a **Settings > Pages** en el repo y selecciona la rama `main`.

## 📖 Uso

1. **Ejecuta localmente**: Doble-clic en `index.html` o usa un servidor local como Live Server en VS Code.
2. **Pruebas interactivas**: Navega por las secciones del sitio y experimenta con los scripts JS.
3. **Ejemplo rápido de JS vanilla** (del archivo `script.js`):
```javascript
// Ejemplo: Manipulación del DOM y evento click
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    boton.addEventListener('click', function() {
        alert('¡JS vanilla funciona perfectamente en GitHub Pages!');
    });
});

🗂️ Estructura del Proyecto

tarea_de_curso/
├── index.html          # Página principal con enlaces a ejercicios
├── styles.css          # Estilos CSS vanilla
├── script.js           # Código JS principal (agrega tus funciones aquí)
├── ejercicios/         # Carpeta con mini-proyectos
│   ├── calculadora.html
│   └── validador.js
└── README.md           # ¡Este archivo!