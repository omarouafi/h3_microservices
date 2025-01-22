# Configuration de l'application avec Docker

## Prérequis

- Docker installé sur votre machine  
- Docker Compose installé sur votre machine  

## Étapes

1. **Cloner le dépôt** :  
    ```sh
    git clone https://github.com/omarouafi/h3_microservices.git
    cd h3_microservices

    ```

2. **Construire et exécuter les conteneurs Docker** :  
    ```sh
    docker-compose up --build
    cd northwindclient
    docker build -t northwindclient
    docker run -d -p 3333:3344 northwindclient
    ```



3. **Accéder à l'application** :  
    - L'application backend sera disponible à `http://localhost:8085`  
    - La documentation du api
    `http://localhost:8085/docs`  
    - L'application frontend (northwindclient) sera disponible à `http://localhost:3333`  

## Informations supplémentaires

- L'application backend est définie dans le [Dockerfile](http://_vscodecontentref_/0).  
- L'application frontend (northwindclient) est construite et poussée en tant qu'image Docker distincte, comme défini dans le workflow GitHub Actions.  

## Arrêter les conteneurs  

Pour arrêter les conteneurs en cours d'exécution, utilisez :  
    ```sh
    docker-compose down
    ```
