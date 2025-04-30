**Inicializando nuestro repositorio**
git init

**verificar el estado de los archivos**
git status
git status -s

**agregando los archivos al repositorio**
git add <nombrearchivo>
git add .
git add --all

**agregamos los cambios al repositorio LOCAL y un comentario del cambio**
git commit -m <comentario>

**subiendo los cambios al repositorio remoto**
git push origin <ramaprincipal>

### Comandos Adicionales
**configuracion de usuario**
git config user.name
git config user.email
git config user.name <usuariogithub>
git config user.email <correogithub>

**verificando repositorio remoto**
git remote -v

**agregando repositorio remoto**
git remote add origin <enlacerepositoriogithub>


### Comando sobre ramas

git branch

git branch <nuevarama>

**creando una nueva rama y accediendo a ella**
git checkout -b <nuevarama>

git checkout <rama>
