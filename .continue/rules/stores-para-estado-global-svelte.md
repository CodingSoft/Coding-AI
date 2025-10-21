---
description: Centralizar el estado compartido en stores para facilitar su
  gestión, reactividad y depuración.
---

Usar stores de Svelte (`writable`, `readable`, o `derived`) para manejar el estado global de la aplicación. Evitar el uso de variables reactivas sueltas o estados locales en componentes que requieren sincronización global.