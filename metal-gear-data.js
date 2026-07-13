// ============================================================
// STENIICHI BUNKO — Dati saga Metal Gear
// ============================================================
// Ogni oggetto rappresenta un gioco della saga.
// - videoId: l'ID del video YouTube (la parte dopo "v=" nell'URL).
//            Es: https://www.youtube.com/watch?v=bXRADSlAteY -> "bXRADSlAteY"
//            Lascialo "" se non hai ancora caricato il video.
// - introOriginale / introTraduzione: testo dell'introduzione del gioco,
//            in giapponese e nella tua traduzione. Puoi usare <br> per gli a capo.
// - personaggi: array di { nome, immagine, descrizione }.
//            "immagine" è il percorso del file (consiglio una cartella img/metal_gear/).
//
// Per aggiungere un nuovo gioco, copia un intero blocco { ... } e modificalo.
// ============================================================

const giochiMetalGear = [
  {
    id: "mg1",
    titolo: "Metal Gear",
    sottotitolo: "メタルギア",
    anno: "1987",
    piattaforma: "MSX2",
    icona: "img/metal_gear/Metal_Gear.webp",
    videoId: "bXRADSlAteY", // ESEMPIO — verifica che sia il video giusto per questo gioco e correggi se serve
    introOriginale: "",
    introTraduzione: `Nell'entroterra del Sudafrica, a 200 chilometri a nord di Galzburg, si trova Outer Heaven.
Uno stato fortificato e armato, nato alla fine degli anni '80 grazie alle azioni di un mercenario considerato sia un eroe che un folle...
In questo momento, qualcosa sta accadendo ad Outer Heaven.
Pare che stiano sviluppando un'arma di sterminio, in grado di riscrivere la storia della guerra di tutto il mondo.
Gray Fox, uno dei membri di Fox Hound, è stato invito per raccogliere informazioni su quell'arma definitiva.
Tuttavia, pochi giorni dopo, si è perso ogni contatto in seguito al suo ultimo messaggio "Metal Gear…".
La scomparsa di Gray Fox potrebbe confermare le voci sull'arma definitiva...?
<br><br>
L'unità Fox Hound ha ricevuto ancora una volta una missione!
Stavolta l'incursore è Solid Snake, un soldato alle prime armi che si è appena arruolato in Fox Hound.
La sua missione è rintracciare Gray Fox e investigare sull'identità di Metal Gear per poi distruggerlo.
Solid Snake si dirige da solo verso il suo primo campo di battaglia, armato solo della sua radio.
Ad Outer Heaven si sono riuniti i mercenari migliori di tutto il mondo.
Riuscirà davvero Solid Snake a portare a termine la sua missione?!
Dalla radio si sente la voce di Big Boss, comandante in capo di Fox Hound.
"Solid Snake! Questa non è un'esercitazione, sei in servizio. Ti auguro buona fortuna..."
Nella mente del soldato cominciano già a riecheggiare gli spari...`,
    personaggi: [
      {
        nome: "Solid Snake",
        immagine: "img/metal_gear/Solid_Snake.webp",
        descrizione: `Nome in codice: Solid Snake (Serpente Solido).<br>
		È una recluta che si è appena arruolata nell'unità Fox Hound.<br>
		La sua prima missione sarà l'Operation Intrude N313.`
      },
	  {
        nome: "Diane",
        immagine: "img/metal_gear/Diane.webp",
        descrizione: `Membro della resistenza.<br>
		Ex cantante della band positive punk "Thin Wall".<br>
		Svolge attività di spionaggio sfruttando il proprio fascino femminile.<br>
		Conosce bene i mercenari di Outer Heaven.`
      },
	  {
        nome: "Big Boss",
        immagine: "img/metal_gear/Big_Boss.webp",
        descrizione: `.`
      },
	  {
        nome: "Dottor Petrović",
        immagine: "img/metal_gear/Petrovich.webp",
        descrizione: `.`
      },
	  {
        nome: "Jennifer",
        immagine: "img/metal_gear/Jennifer.webp",
        descrizione: `.`
      },
	  {
        nome: "Gray Fox",
        immagine: "img/metal_gear/Gray_Fox.webp",
        descrizione: `.`
      },
	  {
        nome: "Schneider",
        immagine: "img/metal_gear/Schneider.webp",
        descrizione: `.`
      },
	  {
        nome: "Ellen Petrović",
        immagine: "img/metal_gear/Ellen.webp",
        descrizione: `.`
      },
    ]
  },
];