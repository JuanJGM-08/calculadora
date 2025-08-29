Ramificacion:
main (rama principal estable)
develop (rama de integración)
feature/operacion-suma
feature/operacion-resta
feature/operacion-multiplicacion
feature/operacion-division
feature/operacion-factorial
feature/operacion-exponente
feature/operacion-raiz-cuadrada

Comandos para creacion de Ramas
git checkout develop
git checkout -b (crea una nueva rama y entra a la rama)
git branch -a (listar todas las ramas disponibles)
git checkout (cambiar entre ramas existentes)

Ejemplos de comandos de fusion de Ramas
git checkout develop
git merge feature/oepracion-suma (despues de completar el desarrollo en la rama)
git log --oneline -- graph -10

Estructura Tipica de commits por feature
git add .
git commit -m "creacion de codigo para...."

Verificacion del estado antes de fusionar
git status
git log --oneline (verificar estado actual de las ramas"

Proceso paso a paso de sincronizar local con remoto
git remote add origin https://github.com/JuanJGM-08/repositorio.git
git checkout main
git push -u origin main
git checkout -b develop
git push -u origin develop

Retos Enfrentados 
manejo de conflictos de fusion
Errores comunes con los comandos git

Aprendizajes clave
planificaion de las Ramas
sincronizacion frecuente
