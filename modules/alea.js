module.exports = function(msg, config){

    //conversion du message en chaine pour la traiter
    var message = msg.toString();
    var i = 0; // compteur pour les boucles

    //stockes le nombre de dé et la valeur du dé demandé
    var dicenb_string = [];
    var dice_string= [];

    //message de notification sous forme ecrite
    var notif;


    //savoir et verifie si on a passer d ou D
    var dpass = false;

    //enleve le "nomDuBot lance" et les espaces pour le calcul apres le lancer de dé ainsi que les espace blanc
    message = message.replace(config.prefix+'lance',"");
    message = message.replace(/\s/g,"");

    //cherche le nombre de dé 
    while(message[i] != 'd' && message[i] != 'D'){
        dicenb_string += message[i];
        i += 1;
    }

    //passe le d ou D
    i += 1;


    //cherche la valeur du dé
    while((message[i] >= 0 && message[i] <= 9)){
        dice_string += message[i];
        i += 1;
    }

    notif =  'vous avez demandé '+dicenb_string+' dé '+dice_string;

    //reset du compteur
    i = 0;

    //stockes respectivement le message affiché, le tableau de dé, et la somme des dé
    var rand_msg = '(';
    var rand = new Array(parseFloat(dicenb_string));
    var rand_sum = 0;

    //enregistre les valeur aléatoire dans le tableau de dé
    while( i < (parseFloat(dicenb_string))) {
    rand[i] = Math.floor(Math.random()*(parseFloat(dice_string)) + 1);
    i += 1;
    }

    i = 0;

    //calcul la somme et crée le message jusqu'a l'avant denrière valeur
    while(i < rand.length - 1) {
        rand_sum += parseFloat(rand[i]);
        rand_msg += rand[i] +'+';
        i += 1;
    }
    rand_msg += rand[rand.length - 1] + ')';
    message = message.replace((dicenb_string+"d"+dice_string),"");
    while(message.length != 0) {
        switch(message[0]) {
            case '+': 
                notif += " bonus " + message[0]+message[1];
                rand_msg += message[0] + message[1];
                rand_sum += parseFloat(message[1]);
                break;
            case '-': 
                notif += " malus " + message[0]+message[1];
                rand_msg += message[0] + message[1];
                rand_sum -= parseFloat(message[1]);
                break;
            default:
                notif += " opérateur non reconnu";
        }
        message = message.substr(2,);
    }
    //calcul la dernière valeur et traite la fin du message
    rand_sum += rand[rand.length - 1];
    rand_msg += ' = ' + rand_sum;

    //repond a l'utilisateur qui a demandé la valeur demandé
    msg.reply(notif+'\n'+ rand_msg);
    
 }
