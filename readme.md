# ANPR Real Time Result Demographic Page

A demographic page to serve ANPR real time result

## Getting started

Open Terminal > node index.js

If it is not working > npm i > node index.js

Open another Terminal > cd client > npm start

If it is not working > npm i > npm start


If there is no livestream,try search mnt/anpr in '/' folder.

If there is no mnt/anpr,
Open Terminal > mkdir /mnt/anpr

Open another Terminal > sudo nano /etc/fstab

Add 2 lines to the last line >  #anpr sharefolder > //172.17.0.143/anpr  /mnt/anpr  cifs  username=rnd,password=recogine,uid=1000,gid=1000,iocharset=utf8,x-systemd.mount-timeout=10,x-systemd.device-timeout=10  0  0
