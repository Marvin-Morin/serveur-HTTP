const moduleHttp = require('http'); // Importation du module http de Node.js

const serveur = moduleHttp.createServer((PORT, resultat) => { // Création d'un serveur avec la fonction createServer du module http - PORT qui va corespondre au paramètre de la fonction d'écoute du serveur et le resultat au message log
    resultat.writeHead(200, { 'Content-Type': 'text/plain' }); // Configuration de l'en-tête de réponse HTTP avec un statut 200 *1 et un type de contenu texte
    resultat.end('Hello world !'); // Envoi du contenu de la réponse au navigateur (dans ce cas, "Hello world !")
});

serveur.listen(3000, () => { // Mise en écoute du serveur sur le port 3000, avec une fonction de rappel pour afficher un message
    console.log(`Serveur en écoute sur le port port 3000`);
});
