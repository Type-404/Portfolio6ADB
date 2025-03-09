# Gebruik een webserver om statische bestanden te serveren
FROM nginx:alpine

# Kopieer de frontend bestanden naar de server directory
COPY . /usr/share/nginx/html

# Stel poort 80 open voor inkomende verzoeken
EXPOSE 80

# Start Nginx en voorkom dat het in de achtergrond draait
CMD ["nginx", "-g", "daemon off;"]