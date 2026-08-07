# Subir el borrador a GitHub Pages

Web estática pura: HTML, CSS y una imagen. Sin build, sin dependencias, sin Node. GitHub Pages sirve la carpeta tal cual.

---

## Estado actual

**El repositorio ya está inicializado y con el primer commit hecho** en esta misma carpeta: rama `main`, 25 archivos, historial limpio. Solo falta conectarlo con GitHub y empujarlo.

## Primera vez

**1. Conecta con tu repositorio y sube**

Desde una terminal, dentro de esta carpeta:

```bash
git push -u origin main
```

El remoto ya está configurado a `caminosconfuturo/caminosconfuturo.github.io`. Git te pedirá autenticarte: en la contraseña **no vale la de tu cuenta**, hay que usar un *personal access token* (GitHub → Settings → Developer settings → Personal access tokens). Si prefieres evitar eso, **GitHub Desktop** hace login con el navegador y es más cómodo: *File → Add local repository* → eliges esta carpeta → *Publish repository*.

> Si el repositorio que creaste tiene ya un README, el push será rechazado. Se arregla con:
> `git pull --rebase origin main` y vuelves a hacer `git push`.

**2. Activa Pages**

Al llamarse el repositorio `caminosconfuturo.github.io`, GitHub lo reconoce como **sitio de usuario** y suele activar Pages solo. Compruébalo en *Settings → Pages*: Source debe estar en **Deploy from a branch**, branch `main`, carpeta `/ (root)`.

En 1–2 minutos estará en:

```
https://caminosconfuturo.github.io/
```

Sin subcarpeta, directamente en la raíz. Ese es el enlace que le pasas a Sira — funciona en móvil, que es donde lo va a abrir.

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
5. Si usáis dominio propio: crear un archivo `CNAME` en la raíz con `caminosconfuturo.org` dentro y apuntar los DNS a GitHub Pages. Como el repositorio es un sitio de usuario, el dominio sustituirá a `caminosconfuturo.github.io` sin más cambios en el código.

> **Ojo con este repositorio en concreto.** Al servir en la raíz de `caminosconfuturo.github.io`, el borrador queda en una URL que parece definitiva y que Google puede descubrir con más facilidad que una subcarpeta. El `noindex` de las 12 páginas y el `robots.txt` (que solo tiene efecto en la raíz del dominio, y aquí lo está) son los que lo impiden. No los quites hasta que el contenido sea el bueno.

---

## Aviso sobre el formulario

GitHub Pages sirve archivos estáticos: **no puede enviar correos**. El formulario de contacto ahora mismo solo muestra un mensaje de confirmación, no envía nada. Para que funcione de verdad hará falta un servicio externo tipo Formspree o Web3Forms (tienen plan gratuito y es un cambio de una línea), o mover la web a un hosting con backend.

Para el borrador no importa: los canales reales son WhatsApp y teléfono, y esos sí funcionan.
