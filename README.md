# Extension Engine Summer Camp 2019
## SplitTrip fullstack web app

<!-- markdownlint-disable MD033 -->

1. Provjerite u terminalu imate li instaliran [Node.js](https://nodejs.org/en/) i _package manager_ `npm`. Po potrebi instalirajte.
   ```shell
   >node --version
   v10.13.0

   >npm --version
   6.4.1
   ```

2. Po potrebi instalirajte [Git](https://git-scm.com/downloads).

3. Po potrebi instalirajte [PostgreSQL](https://www.postgresql.org/download/).

4. Instalirajte `sequelize-cli` naredbom
   ```shell
   >npm install sequelize-cli -g

   ```

5. Klonirajte repozitorij i uđite u stvoreni direktorij tako da u terminalu izvršite sljedeće naredbe:

   ```shell
    >git clone https://github.com/BrunoVukasovic/splittrip-v3-node.git

    # change directory
    >cd splittrip-v3-node
   ```

6. U root direktoriju instalirajte potrebne module naredbom:
   ```shell
    >npm install
   ```

7. U client direktoriju instalirajte potrebne module:
   ```shell
    >cd client
	>npm install
   ```

8. Pozicionirajte se u server direktorij:
   ```shell
    >cd..
	>cd server
   ```

9. Preimenujte datoteku .env.example u .env i unesite ime baze, korisničko ime i lozinku za pristup bazi, te proizvoljni secret
   ```shell
	# .env
	
	DB_NAME=
	DB_USERNAME=
	DB_PASSWORD=
	SECRET=
   ```

10. Kreirat novu bazu koristeći naredbu: 
   ```shell
    >npx sequelize-cli db:create
   ```

11. Pokrenit aplikaciju naredbom:
   ```shell
    >npm run dev
   ```

12. U server direktoriju pokrenite naredbu kako bi se baza napunila inijalnim podacima:
   ```shell
    >npx sequelize-cli db:seed:all
   ```
