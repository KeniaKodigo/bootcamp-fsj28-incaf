**Inicializando nuestro repositorio**
```bash
git init
``` 

**verificar el estado de los archivos**
```bash
git status
git status -s
```

**agregando los archivos al repositorio**
```bash
git add <nombrearchivo>
git add .
git add --all
```

**agregamos los cambios al repositorio LOCAL y un comentario del cambio**
```bash
git commit -m <comentario>
```

**subiendo los cambios al repositorio remoto**
```bash
git push origin <ramaprincipal>
```

### Comandos Adicionales
**configuracion de usuario**
```bash
git config user.name
git config user.email
git config user.name <usuariogithub>
git config user.email <correogithub>
```

**verificando repositorio remoto**
```bash
git remote -v
```

**agregando repositorio remoto**
```bash
git remote add origin <enlacerepositoriogithub>
```

### Comando sobre ramas
```bash
git branch
git branch <nuevarama>
```

**creando una nueva rama y accediendo a ella**
```bash
git checkout -b <nuevarama>
git checkout <rama>
```
