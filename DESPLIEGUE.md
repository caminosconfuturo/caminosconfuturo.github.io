# Subir el borrador a GitHub Pages

Web estática pura: HTML, CSS y una imagen. Sin build, sin dependencias, sin Node. GitHub Pages sirve la carpeta tal cual.

---

## Primera vez

**1. Crea el repositorio**

En GitHub, nuevo repositorio público llamado `caminosconfuturo` (o el nombre que prefieras). Sin README, sin .gitignore, sin licencia — vacío.

**2. Sube el contenido de esta carpeta**

Todo lo que hay dentro de `prototipo/` va a la **raíz** del repositorio, no dentro de una subcarpeta. `index.html` tiene que quedar en la raíz.

Por terminal:

```bash
cd ruta/a/prototipo
git init
git add -A
git commit -m "Borrador inicial de la web"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/caminosconfuturo.git
git push -u origin main
```

O arrastrando los archivos en la interfaz web de GitHub (*Add file → Upload files*). Si lo haces así, sube también los archivos ocultos: `.nojekyll` es importante.

**3. Activa Pages**

*Settings → Pages → Build and deployment → Source: **Deploy from a branch***
Branch: `main`, carpeta `/ (root)`. Guardar.

En 1–2 minutos estará en:

```
https://TU-USUARIO.github.io/caminosconfuturo/
```

Ese es el enlace que le pasas a Sira. Funciona en móvil, que es donde lo va a abrir.

---

## Publicar cambios después

```bash
git add -A
git commit -m "Lo que hayas cambiado"
git push
```

Un minuto y está actualizado. Si no ves el cambio, recarga con `Ctrl+F5` (o `Cmd+Shift+R`): el navegador cachea el CSS.

---

## Versiones para comparar

Si quieres enseñarle dos propuestas a la vez, crea una rama y publícala como carpeta:

```bash
git checkout -b version-b
# haces los cambios
git push -u origin version-b
```

O más simple: duplica la carpeta dentro del repo (`/v1/`, `/v2/`) y le pasas los dos enlaces. Las rutas del proyecto son todas relativas, así que funciona desde cualquier subcarpeta sin tocar nada.

---

## Qué lleva puesto el borrador

| | |
|---|---|
| `noindex, nofollow` en las 11 páginas | Google no lo indexará mientras esté en revisión |
| `robots.txt` con `Disallow: /` | Segunda barrera, por si acaso |
| Banner superior de "Borrador de trabajo" | Explica a Sira qué está viendo y qué son los recuadros amarillos. Se puede cerrar |
| `.nojekyll` | Evita que GitHub Pages procese los archivos con Jekyll |
| `404.html` | Página de error con el mismo diseño |

Sin esto, un borrador con textos provisionales puede acabar indexado en Google asociado al nombre de la asociación. No es un detalle menor cuando el negocio aún no existe en buscadores.

---

## Al pasar a producción

Cuando la web sea la definitiva y tenga dominio propio:

1. Quitar `<meta name="robots" content="noindex, nofollow">` de las 11 páginas.
2. Cambiar `robots.txt` a `Allow: /`.
3. Devolver el `<link rel="canonical">` a cada página con el dominio real.
4. Borrar el bloque `.borrador` de `styles.css` y la función `bannerBorrador()` de `main.js` (están marcados con un comentario).
5. Si usáis dominio propio: crear un archivo `CNAME` en la raíz con `caminosconfuturo.org` dentro y apuntar los DNS a GitHub Pages.

---

## Aviso sobre el formulario

GitHub Pages sirve archivos estáticos: **no puede enviar correos**. El formulario de contacto ahora mismo solo muestra un mensaje de confirmación, no envía nada. Para que funcione de verdad hará falta un servicio externo tipo Formspree o Web3Forms (tienen plan gratuito y es un cambio de una línea), o mover la web a un hosting con backend.

Para el borrador no importa: los canales reales son WhatsApp y teléfono, y esos sí funcionan.
