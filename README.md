# ANPR Demographic Page

A demographic page to serve ANPR real time result

![anpr_demographic1](asset/anpr_demographic1.jpg)
![anpr_demographic2](asset/anpr_demographic2.jpg)

**Table of content**

1. [1. Getting Started](#1-getting-started)
   1. [1.1. Setup share folder](#11-setup-share-folder)
      1. [1.1.1. Setup share folder (window)](#111-setup-share-folder-window)
   2. [1.2. Setup share folder (linux)](#12-setup-share-folder-linux)
   3. [1.3. Run a backend service](#13-run-a-backend-service)
   4. [1.4. Run the frontend service](#14-run-the-frontend-service)
   5. [1.5. Check the server webpage](#15-check-the-server-webpage)
2. [2. Docker](#2-docker)
   1. [2.1. Build the docker images](#21-build-the-docker-images)
   2. [2.2. Configure the docker compose](#22-configure-the-docker-compose)
   3. [2.3. Deployment](#23-deployment)
   4. [2.3. Run the docker container](#23-run-the-docker-container)
3. [3. Technical Specification](#3-technical-specification)
   1. [3.1. Hardware Specification](#31-hardware-specification)
   2. [3.2. Supported Web Browser](#32-supported-web-browser)

## 1. Getting Started

### 1.1. Setup share folder

#### 1.1.1. Setup share folder (window)

1. Press `Win Key + R` to open run command. Type `\\172.17.0.143\anpr`
2. Enter the correct username and password

> Note: You might want to configure the backend environment variable `REACT_APP_DATA_PARENT_DIR` in `docker-compose.yml` to point to the correct path.

### 1.2. Setup share folder (linux)

1. Create a folder with the following command `sudo mkdir -p /mnt/anpr`
2. Open `fstab` with the command `sudo nano /etc/fstab`, then insert the following lines at the end of the file

   ```sh
   #anpr sharefolder
   //172.17.0.143/anpr  /mnt/anpr  cifs  username=rnd,password=recogine,uid=1000,gid=1000,iocharset=utf8,x-systemd.mount-timeout=10,x-systemd.device-timeout=10  0  0

   ```

3. Mount the server share folder with `sudo mount -a`

### 1.3. Run a backend service

1. Open current folder from a terminal, type the following to run the service:

   ```sh
   cd backend/
   npm ci
   npm start
   ```

### 1.4. Run the frontend service

1. Open current folder from a new terminal, type the following to run the service:

   ```sh
   cd frontend/
   npm ci
   npm start
   ```

### 1.5. Check the server webpage

Open <http://localhost:3000> to check the webpage.

<!--
### 1.5. Additional detailed guide

**Step 1**
a. Open Terminal
b. Type in **node index.js**
> **Note:** If *index.js* is not running, type  **npm ci**  and repeat **Step 1.b.**

**Step 2**
a. Open Terminal
b. Type in **cd client**
c. After working directory updated, type in **npm start**
> **Note:** If npm is not running, type  **npm ci**  and repeat **Step 1.c.**

**Step 3**
*only if real time streaming is unavailable*
a. Search *'mnt/anpr'* in '/' folder
b. Open Terminal
c. Type in **mkdir /mnt/anpr**
d. Open another Terminal
e. Type in **sudo nano /etc/fstab**
f. After entering NANO GNU text editor, type in `#anpr sharefolder
//172.17.0.143/anpr  /mnt/anpr  cifs  username=rnd,password=recogine,uid=1000,gid=1000,iocharset=utf8,x-systemd.mount-timeout=10,x-systemd.device-timeout=10  0  0`
g. Type **sudo mount -a** -->

## 2. Docker

To deploy a docker image, you will need to build the docker image first, follow by configure the docker compose parameter to run the docker container as the backend service.

### 2.1. Build the docker images

To build the backend docker image:

```sh
docker build -t recogine/recocloud:backend-v0.1.0-deploy backend/
```

To build the frontend docker image

```sh
docker build -t recogine/recocloud:frontend-v0.1.0-deploy frontend/
```

### 2.2. Configure the docker compose

There are few things neew to be configure in docker compose before running.

sample of docker-compose.yml:

```yaml docker-compose.yml
services:
  backend:
    ...
    volumes:
      - /home/rnd/rnd/product/anpr/anpr-demographic-page/asset:/mnt/data:ro
    ...

  frontend:
    environment:
      REACT_APP_MQTT_SERVER: "ws://${DOCKER_GATEWAY_HOST:-localhost}:8080/"
      REACT_APP_MQTT_DATA_TOPIC: "offloader/GLM-OUT/02/data"
      REACT_APP_BACKEND_FILE_SERVER: "http://${DOCKER_GATEWAY_HOST:-localhost}:20021/"
    ...
```

- **services/backend/volumes**:
  - **`/mnt/anpr:/mnt/data:ro`**: The path of the offloader save vehicle image. The syntax is `/PATH/TO/ANPR/DATA:/mnt/anpr:ro`. For example the offloader vehicle data is store in `/mnt/hdd/home/rnd/anpr`, then your valie should be look like `/mnt/hdd/home/rnd/anpr:/mnt/anpr:ro`
- **services/frontend/environment**:
  - **`REACT_APP_MQTT_DATA_TOPIC`**: The data topic to subscribe offloader data. Syntax is `offloader/`

### 2.3. Deployment

1. Copy over the required files
   - backend docker image tar file
   - frontend docker image tar file
   - docker-compose.yml
   - setup-server.sh
2. Load the docker image tar file in to the server
3. Run the `./setup-server.sh`
4. Up the compose file

### 2.3. Run the docker container

---

## 3. Technical Specification

### 3.1. Hardware Specification
<!-- ### Device Requirements -->
### 3.2. Supported Web Browser

- Firefox
- Google Chrome
