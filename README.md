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
    >git clone https://github.com/BrunoVukasovic/fullstack_web_app_splittrip.git

    # change directory
    >cd fullstack_web_app_splittrip
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

9. U database direktoriju umjesto "postgres" i "loznika" upisat svoj username i lozinku za pristup bazi podataka
   ```shell
    >cd database
	
	# index.js
	
	const Sequelize = require("sequelize");

		const sequelize = new Sequelize("splittrip_db", "postgres", "LOZINKA", {
			host: "localhost",
			dialect: "postgres"
		});

	module.exports = sequelize;
   ```

10. U server/config/config.json pod "development" također upisat username i lozinku na predviđena mjesta
   ```shell
    >cd..
	>cd config
	
	# config.json
	
	{
	"development": {
		"username": "postgres",
		"password": "LOZINKA",
		"database": "splittrip_db",
		"host": "127.0.0.1",
		"dialect": "postgres",
		"operatorsAliases": "false"
	},
	"test": {
		"username": "root",
		"password": null,
		"database": "database_test",
		"host": "127.0.0.1",
		"dialect": "mysql",
		"operatorsAliases": "false"
	},
	"production": {
		"username": "root",
		"password": null,
		"database": "database_production",
		"host": "127.0.0.1",
		"dialect": "mysql",
		"operatorsAliases": "false"
	}
	}
   ```

11. Pozicionirajte se u server direktorij
   ```shell
    >cd ..
   ```

12. Kreirat novu bazu spllittrip_db koristeći naredbu: 
   ```shell
    >npx sequelize-cli db:create spllittrip_db
   ```

13. Pokrenit aplikaciju kako bi se kreirale potrebne tablice:
   ```shell
    >npm run dev
   ```

14. U server direktoriju pokrenite naredbu kako bi se baza napunila inijalnim podacima:
   ```shell
    >npx sequelize-cli db:seed:all
   ```

15. Ponovno pokrenite aplikaciju iz root ili server direktorija naredbom:
   ```shell
    >npm run dev
   ```
