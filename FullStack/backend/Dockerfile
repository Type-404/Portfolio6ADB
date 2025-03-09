#Gebruikt de 18de versie gebaseerd op Alpine Linux van Node.js als de basisimage.
FROM node:18-alpine

# Stelt de werkdirectory op in '/app'.
WORKDIR /app

# Kopieer alleen package.json naar de container.
COPY package.json ./
# Installeer de afhankelijkheden in package.json.
RUN npm install

# Kopieer de rest van de bestanden naar de container.
COPY . .

# Stel poort 5000 open voor toegang naar de container.
EXPOSE 5000

# het commando dat wordt uitgevoerd bij het starten van de container.
CMD ["node", "server.js"]
