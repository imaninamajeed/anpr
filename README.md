# Introduction
A demographic page to serve ANPR real time result

# Technical Specification
## Hardware Specification
<!-- ### Device Requirements -->
### Supported Web Browser
- Firefox
- Google Chrome

## Software Specification (NPM libraries)
### Front-End
- fontsource/poppins@4.5.10
- testing-library/jest-dom@5.16.5
- testing-library/react@13.4.0
- testing-library/user-event@13.5.0
- bootstrap@5.2.3
- mqtt@4.3.7
- react-dom@18.2.0
- react-router-dom@6.4.4
- react-scripts@5.0.1
- react@18.2.0
<!-- - web-vitals@2.1.4 -->
<!-- - opencv-react@0.0.5 -->

## Back-End
- cors@2.8.5
- express@4.18.2

# Getting Started

**Step 1**   
a. Open Terminal   
b. Type in **index.js**
> **Note:** If *index.js* &nbsp; is not running, type  **npm i**  and repeat **Step 1.b.**

**Step 2**   
a. Open Terminal   
b. Type in **cd client**   
c. After working directory updated, type in **npm start**
> **Note:** If npm is not running, type  **npm i**  and repeat **Step 1.c.**

**Step 3**
*only if real time streaming is unavailable*  
a. Search *'mnt/anpr'* &nbsp; in &nbsp; ' / '&nbsp; &nbsp;folder  
b. Open Terminal   
c. Type in **mkdir /mnt/anpr**   
d. Open another Terminal   
e. Type in **sudo nano /etc/fstab**  
f. After entering NANO GNU text editor, type in <pre>#anpr sharefolder
//172.17.0.143/anpr  /mnt/anpr  cifs  username=rnd,password=recogine,uid=1000,gid=1000,iocharset=utf8,x-systemd.mount-timeout=10,x-systemd.device-timeout=10  0  0</pre>

<!-- # Recommendation -->
<!-- # FAQ -->
