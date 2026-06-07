export interface Slide {
  id: string;
  section: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  body?: string[];
  /** Vollständiger Sprechertext zum Vortragen / Vorlesen */
  speech: string;
}

export const PRESENTATION = {
  bookTitle: "Die Verwandlung",
  bookAuthor: "Franz Kafka",
  bookYear: "1915",
};

export const SLIDES: Slide[] = [
  {
    id: "cover",
    section: "Titel",
    kicker: "Buchpräsentation",
    title: "Die Verwandlung",
    subtitle: "Franz Kafka · Erzählung, 1915",
    speech:
      "Herzlich willkommen zu meiner Buchpräsentation. Ich stelle euch heute die Erzählung „Die Verwandlung“ von Franz Kafka vor, erschienen im Jahr 1915. Ich werde zuerst auf den Autor und die Entstehung eingehen, dann die wichtigsten Figuren vorstellen, anschließend die gesamte Handlung zusammenfassen und mit einer Interpretation abschließen.",
  },
  {
    id: "agenda",
    section: "Überblick",
    kicker: "Gliederung",
    title: "Was euch erwartet",
    body: [
      "1.  Der Autor — Franz Kafka",
      "2.  Entstehung und historischer Kontext",
      "3.  Die wichtigsten Figuren",
      "4.  Handlung — die drei Kapitel",
      "5.  Analyse und Interpretation",
      "6.  Textstelle und Diskussion",
    ],
    speech:
      "Mein Vortrag gliedert sich in sechs Teile: Zuerst der Autor Franz Kafka, dann Entstehung und historischer Kontext, danach die wichtigsten Figuren, anschließend die Handlung der drei Kapitel, dann meine Analyse und Interpretation, und zum Schluss lese ich eine kurze Textstelle vor.",
  },

  // AUTOR
  {
    id: "author-1",
    section: "Der Autor",
    kicker: "1 · Der Autor",
    title: "Franz Kafka",
    subtitle: "1883 in Prag — 1924 in Kierling bei Wien",
    body: [
      "Deutschsprachiger Jude im Vielvölkerstaat Österreich-Ungarn",
      "Studierte Jura, arbeitete in einer Arbeiter-Unfallversicherung",
      "Schrieb fast ausschließlich nachts, neben dem Brotberuf",
      "Veröffentlichte zu Lebzeiten nur wenig — bestimmte vor seinem Tod, alles zu verbrennen",
      "Sein Freund Max Brod ignorierte diesen Wunsch — dem verdanken wir die meisten Werke",
    ],
    speech:
      "Franz Kafka wurde 1883 in Prag geboren und starb 1924 mit nur 40 Jahren an Tuberkulose. Er war deutschsprachiger Jude im damaligen Vielvölkerstaat Österreich-Ungarn — eine Außenseiterposition, die sein gesamtes Werk prägt. Hauptberuflich arbeitete er als Jurist in einer Arbeiter-Unfallversicherung; geschrieben hat er fast ausschließlich nachts. Zu Lebzeiten veröffentlichte er kaum etwas. Kurz vor seinem Tod bat er seinen Freund Max Brod, alle unveröffentlichten Manuskripte zu verbrennen. Brod hielt sich nicht daran — sonst wären „Der Process“ und „Das Schloss“ heute verloren.",
  },
  {
    id: "author-2",
    section: "Der Autor",
    kicker: "1 · Der Autor",
    title: "Das Schatten-Thema: der Vater",
    body: [
      "Hermann Kafka — autoritärer, dominanter Geschäftsmann",
      "Franz fühlte sich zeitlebens klein, schuldig, nicht genügend",
      "1919 schreibt er den „Brief an den Vater“ — über 100 Seiten Abrechnung",
      "Der Brief wurde nie abgeschickt",
      "Konflikt mit dem Vater ist der psychologische Motor fast aller Werke",
    ],
    speech:
      "Ein zentrales biografisches Thema ist der Konflikt mit seinem Vater Hermann Kafka, einem autoritären, lauten Geschäftsmann. Franz fühlte sich neben ihm sein Leben lang klein und wertlos. 1919 schrieb er den berühmten „Brief an den Vater“ — über hundert Seiten lang, eine Abrechnung mit der Kindheit. Der Brief wurde nie abgeschickt. Diese Vater-Sohn-Spannung ist der psychologische Motor fast aller seiner Werke — und besonders der Verwandlung.",
  },

  // ENTSTEHUNG
  {
    id: "context-1",
    section: "Entstehung",
    kicker: "2 · Entstehung",
    title: "Geschrieben in drei Wochen",
    subtitle: "November / Dezember 1912",
    body: [
      "Entstanden in einer kreativen Hochphase parallel zum Roman „Der Verschollene“",
      "Geschrieben während einer schwierigen Verlobung mit Felice Bauer",
      "Erschien erst 1915 in der Zeitschrift „Die Weißen Blätter“",
      "Im selben Jahr als Buch im Kurt Wolff Verlag",
    ],
    speech:
      "Kafka schrieb die Verwandlung in nur drei Wochen, im November und Dezember 1912. Er befand sich in einer kreativen Hochphase und arbeitete gleichzeitig am Roman „Der Verschollene“. Privat war es eine schwierige Zeit: Er war gerade in einer komplizierten Verlobung mit Felice Bauer, die ihn psychisch stark belastete. Veröffentlicht wurde die Erzählung erst 1915, zuerst in der Zeitschrift „Die Weißen Blätter“ und im selben Jahr als Buch.",
  },
  {
    id: "context-2",
    section: "Entstehung",
    kicker: "2 · Entstehung",
    title: "Warum gerade so eine Geschichte?",
    body: [
      "Kafka empfand sich selbst als „Ungeziefer“ in der Familie",
      "Druck des Brotberufs, Schuldgefühle gegenüber den Eltern",
      "Industrialisierung: Mensch als ersetzbares Rädchen",
      "Krise des Individuums um 1900 — auch Freud, Musil, Schnitzler arbeiten daran",
      "Die Verwandlung verdichtet das alles in einem einzigen, monströsen Bild",
    ],
    speech:
      "Warum schreibt jemand so eine Geschichte? Kafka beschrieb sich selbst in Tagebüchern und Briefen mehrfach als „Ungeziefer“ innerhalb seiner Familie — er fühlte sich als Belastung. Dazu kam der Druck des verhassten Brotberufs und die Schuldgefühle gegenüber den Eltern, die finanziell von ihm abhängig waren. Historisch gesehen entsteht der Text in einer Zeit der Industrialisierung, in der der Mensch zunehmend als austauschbares Rädchen wahrgenommen wird. Es ist die große Krise des Individuums um 1900 — Freud, Musil, Schnitzler arbeiten parallel an ähnlichen Themen. Kafka verdichtet das alles in ein einziges, monströses Bild: Ein Mensch wird über Nacht zum Käfer.",
  },

  // FIGUREN
  {
    id: "fig-overview",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Vier Menschen in einer Wohnung",
    subtitle: "Die Familie Samsa und ihr verwandelter Sohn",
    body: [
      "Gregor Samsa — Sohn, Handlungsreisender, „Ungeziefer“",
      "Vater Samsa — der gescheiterte, dann wieder erstarkende Patriarch",
      "Mutter Samsa — schwach, kränklich, hin- und hergerissen",
      "Grete Samsa — die jüngere Schwester, anfangs liebevoll, am Ende hart",
      "Nebenfiguren: der Prokurist, drei Zimmerherren, die Bedienerin",
    ],
    speech:
      "Die Erzählung kommt mit wenigen Figuren aus — fast die gesamte Handlung spielt in einer einzigen Wohnung. Im Zentrum steht die vierköpfige Familie Samsa: Gregor, der verwandelte Sohn; sein Vater, ein gescheiterter, später wieder erstarkender Patriarch; die kränkliche Mutter; und die jüngere Schwester Grete, deren Entwicklung besonders interessant ist. Dazu kommen Nebenfiguren wie der Prokurist, die drei skurrilen Zimmerherren und die handfeste Bedienerin.",
  },
  {
    id: "fig-gregor",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Gregor Samsa",
    subtitle: "Der Sohn, der zum Käfer wird",
    body: [
      "Handlungsreisender für Stoffe — hasst seinen Job, macht ihn trotzdem",
      "Tilgt mit seinem Gehalt die Schulden des Vaters",
      "Pflichtbewusst, opfert sich für die Familie auf",
      "Behält nach der Verwandlung sein menschliches Denken — verliert aber Sprache und Körper",
      "Stirbt am Ende einsam, ausgehungert, von der Familie verstoßen",
    ],
    speech:
      "Gregor Samsa ist der Protagonist. Er arbeitet als Handlungsreisender für Stoffe, hasst diesen Beruf, hält ihn aber durch, weil er mit seinem Gehalt die Schulden seines Vaters abbezahlt. Er ist der typische pflichtbewusste Sohn, der sich für die Familie aufopfert. Nach der Verwandlung behält er sein menschliches Denken und Fühlen — er verliert aber Stück für Stück seine Sprache, die Kontrolle über seinen Körper und schließlich auch den Willen zu leben. Am Ende stirbt er einsam und ausgehungert.",
  },
  {
    id: "fig-vater",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Der Vater",
    subtitle: "Vom Pantoffelhelden zum Tyrannen",
    body: [
      "Zu Beginn: bequem, dick, scheinbar gebrochen vom Bankrott",
      "Hatte Gregor jahrelang die Verantwortung überlassen",
      "Nach der Verwandlung: blüht regelrecht auf, wird Bankdiener",
      "Bewirft Gregor mit Äpfeln — eine davon bleibt stecken und vereitert",
      "Steht für die patriarchale Macht, die zurückkehrt",
    ],
    speech:
      "Der Vater ist die spannendste Wandlung neben Gregor selbst. Zu Beginn erleben wir ihn als bequemen, dicken alten Mann, der nach seinem Bankrott resigniert hat und Gregor die ganze Verantwortung überließ. Sobald Gregor aber ausfällt, blüht der Vater regelrecht auf — er nimmt eine Stelle als Bankdiener an, trägt wieder Uniform und tritt selbstbewusst auf. Er ist es auch, der die brutalste Szene des Buches verursacht: Er bewirft Gregor mit Äpfeln, und eine bleibt in dessen Panzer stecken, verfault dort und führt letztlich zu seinem Tod. Der Vater steht für die patriarchale Macht, die mit der Schwäche des Sohnes zurückkehrt.",
  },
  {
    id: "fig-grete",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Grete Samsa",
    subtitle: "Die Schwester — die heimliche Hauptfigur?",
    body: [
      "Anfangs siebzehn, fürsorglich, bringt Gregor Essen",
      "Lernt, sein Zimmer zu pflegen, will Möbel ausräumen",
      "Übernimmt schrittweise die Deutungshoheit über Gregor",
      "Spricht am Ende den Satz aus, der ihn tötet: „Es muss weg.“",
      "Schlussbild: Sie streckt sich — sie ist erwachsen geworden",
    ],
    speech:
      "Grete, die siebzehnjährige Schwester, ist für viele Interpreten die heimliche Hauptfigur. Sie ist anfangs liebevoll, bringt Gregor heimlich Essen, lernt sein Zimmer zu pflegen. Mit der Zeit übernimmt sie die Deutungshoheit darüber, was Gregor eigentlich ist und was er braucht. Und am Ende ist sie es, die den entscheidenden Satz ausspricht: „Es muss weg.“ Im allerletzten Bild der Erzählung streckt sich Grete — sie ist auf Kosten ihres Bruders zu einer jungen Frau geworden.",
  },
  {
    id: "fig-mutter",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Die Mutter & die Nebenfiguren",
    body: [
      "Mutter Samsa: asthmatisch, schwach, zwischen Mitleid und Ekel",
      "Prokurist: Gregors Vorgesetzter, taucht morgens auf, flieht entsetzt",
      "Drei Zimmerherren: bürokratische, lächerliche Untermieter",
      "Die Bedienerin: handfest, nennt Gregor „alter Mistkäfer“, entsorgt ihn am Ende",
    ],
    speech:
      "Die Mutter ist eine schwache, asthmatische Figur, hin- und hergerissen zwischen Mitleid für ihren Sohn und blanker Angst vor seinem Anblick. Bei den Nebenfiguren ist der Prokurist wichtig — Gregors Vorgesetzter, der am ersten Morgen erscheint, um ihn zur Arbeit zu drängen, und beim Anblick des Käfers panisch flieht. Später ziehen drei lächerlich-bürokratische Zimmerherren ein, weil die Familie Geld braucht. Und schließlich die Bedienerin, eine handfeste alte Frau, die Gregor furchtlos „alter Mistkäfer“ nennt — und ihn am Ende mit dem Besen entsorgt.",
  },

  // HANDLUNG
  {
    id: "plot-incipit",
    section: "Handlung",
    kicker: "4 · Handlung",
    title: "Der berühmteste erste Satz",
    subtitle: "„Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt.“",
    speech:
      "Bevor ich die Handlung erzähle, ein Wort zum berühmtesten ersten Satz der deutschen Literatur: „Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt.“ Bemerkenswert: Es gibt keine Vorgeschichte, keine Erklärung. Das Ungeheuerliche ist einfach da, und der Text behandelt es so nüchtern wie eine Erkältung. Das ist die berühmte „kafkaeske“ Erzählhaltung.",
  },
  {
    id: "plot-1",
    section: "Handlung",
    kicker: "4 · Handlung — Kapitel I",
    title: "Kapitel 1 — Die Entdeckung",
    body: [
      "Gregor erwacht als Käfer und sorgt sich zuerst um seinen Zug",
      "Die Familie klopft an die Tür, dann erscheint der Prokurist",
      "Mühsam öffnet Gregor die Tür — alle weichen entsetzt zurück",
      "Der Vater treibt Gregor mit einem Stock zurück ins Zimmer",
      "Verletzt verklemmt sich Gregor in der Tür — das alte Leben ist vorbei",
    ],
    speech:
      "Kapitel 1: Gregor erwacht als Käfer. Bezeichnend ist, dass seine erste Sorge nicht der eigene Körper ist, sondern dass er den Zug zur Arbeit verpassen könnte. Die Familie klopft an die verschlossene Tür, dann erscheint sogar sein Vorgesetzter, der Prokurist, persönlich. Mühsam schafft Gregor es, die Tür zu öffnen. Die Reaktion ist Entsetzen — der Prokurist flieht, die Mutter sinkt ohnmächtig zusammen, der Vater treibt Gregor mit einem Stock zurück ins Zimmer. Dabei verletzt er sich schwer in der Türzarge. Sein altes Leben ist nach diesem Morgen vorbei.",
  },
  {
    id: "plot-2",
    section: "Handlung",
    kicker: "4 · Handlung — Kapitel II",
    title: "Kapitel 2 — Das neue Arrangement",
    body: [
      "Grete übernimmt die Versorgung — bringt Essen, das ihm jetzt schmeckt: Verfaultes",
      "Gregor versteckt sich unter dem Sofa, wenn jemand kommt",
      "Die Familie räumt sein Zimmer leer, damit er besser krabbeln kann",
      "Gregor klammert sich an ein Bild — die Mutter sieht ihn, fällt in Ohnmacht",
      "Der Vater bewirft ihn mit Äpfeln — einer bleibt im Panzer stecken",
    ],
    speech:
      "Kapitel 2: Die Familie richtet sich notdürftig mit der neuen Situation ein. Grete übernimmt die Versorgung — interessanterweise schmeckt Gregor jetzt verfaultes Essen besser als frisches. Er versteckt sich unter dem Sofa, wenn jemand das Zimmer betritt, um niemanden zu erschrecken. Schwester und Mutter beschließen, seine Möbel auszuräumen, damit er besser krabbeln kann. Aber Gregor will an einem Bild festhalten, einem letzten Stück seines Menschseins, und klammert sich daran. Die Mutter erblickt ihn und fällt in Ohnmacht. Der Vater kommt heim, gerät außer sich und bewirft Gregor mit Äpfeln aus dem Obstkorb. Einer dringt in seinen Panzer ein und bleibt dort stecken — eine Wunde, die nicht heilt.",
  },
  {
    id: "plot-3",
    section: "Handlung",
    kicker: "4 · Handlung — Kapitel III",
    title: "Kapitel 3 — Das Ende",
    body: [
      "Die Familie muss arbeiten — Vater Bankdiener, Mutter näht, Grete Verkäuferin",
      "Sie nehmen drei Zimmerherren auf, Gregor wird zur Belastung",
      "Eines Abends spielt Grete Geige — Gregor kriecht angezogen hervor",
      "Die Zimmerherren entdecken ihn, kündigen empört",
      "Grete: „Es muss weg.“ — Gregor zieht sich zurück und stirbt",
      "Die Familie atmet auf, macht einen Ausflug, plant die Zukunft",
    ],
    speech:
      "Kapitel 3: Mehrere Monate sind vergangen, die Wunde im Panzer eitert, Gregor wird immer schwächer. Die Familie muss jetzt selbst arbeiten — der Vater als Bankdiener, die Mutter näht für ein Modegeschäft, Grete arbeitet als Verkäuferin. Aus Geldnot vermieten sie Zimmer an drei skurrile Herren. Gregor wird mehr und mehr zur Belastung, sein Zimmer zur Rumpelkammer. Eines Abends spielt Grete für die Untermieter Geige. Gregor wird von der Musik angezogen und kriecht aus seinem Zimmer hervor. Die Zimmerherren entdecken ihn entsetzt und kündigen. In diesem Moment kippt etwas: Grete erklärt entschieden, das „Untier“ müsse weg, es sei nicht mehr ihr Bruder. Gregor versteht das — er zieht sich in sein Zimmer zurück und stirbt in dieser Nacht. Am nächsten Morgen entsorgt die Bedienerin den Körper. Die Familie atmet auf, macht zum ersten Mal seit Monaten einen Ausflug aufs Land und stellt fest, dass Grete ein schönes junges Mädchen geworden ist, das man bald verheiraten kann.",
  },

  // ANALYSE
  {
    id: "ana-1",
    section: "Interpretation",
    kicker: "5 · Interpretation",
    title: "Was ist „die Verwandlung“ wirklich?",
    body: [
      "Eine biografische Lesart: Kafkas Selbstbild als Belastung der Familie",
      "Eine sozialkritische Lesart: Mensch nur wertvoll, solange er funktioniert",
      "Eine existenzialistische Lesart: das absurde Dasein, ohne Erklärung geworfen",
      "Eine psychoanalytische Lesart: Aufstand gegen den Vater, der scheitert",
      "Wichtig: Der Text gibt keine Erklärung — er weigert sich, eindeutig zu sein",
    ],
    speech:
      "Jetzt zur Interpretation. Was bedeutet die Verwandlung wirklich? Es gibt nicht die eine richtige Antwort — und genau das macht den Text so stark. Vier Lesarten haben sich durchgesetzt: Erstens biografisch — Kafka empfand sich selbst als Belastung der Familie, der Käfer ist ein Selbstporträt. Zweitens sozialkritisch — der Mensch ist nur etwas wert, solange er funktioniert und Geld verdient; in dem Moment, wo Gregor ausfällt, wird er entsorgt. Drittens existenzialistisch — wir werden ohne Erklärung in ein absurdes Dasein geworfen, und niemand sagt uns, warum. Viertens psychoanalytisch — die Verwandlung als Aufstand gegen den Vater, der scheitert: Der Vater erstarkt, der Sohn stirbt. Entscheidend ist: Kafka selbst weigert sich, eine Erklärung zu liefern. Der Text bleibt offen.",
  },
  {
    id: "ana-2",
    section: "Interpretation",
    kicker: "5 · Interpretation",
    title: "Was macht den Text so unheimlich?",
    body: [
      "Nüchterner, beamtenhafter Erzählton bei monströsem Inhalt",
      "Personale Erzählperspektive — wir sehen alles durch Gregor",
      "Käfer wird nie genau beschrieben — die Fantasie tut es",
      "Die Familie ist das eigentliche Ungeheuer, nicht der Käfer",
      "Spiegelstruktur: Während Gregor schrumpft, wächst die Familie",
    ],
    speech:
      "Was macht den Text so unheimlich? Vor allem der Stil. Kafka erzählt das Ungeheuerliche in einem nüchternen, beamtenhaften Ton, fast wie einen Versicherungsbericht. Die personale Erzählperspektive zwingt uns, alles durch Gregors Augen zu sehen — wir leiden mit. Wichtig: Der Käfer wird nie genau beschrieben. Kafka hat sogar dem Verleger ausdrücklich verboten, ihn abzubilden. Unsere Vorstellung soll die Arbeit tun. Bei genauem Lesen merkt man: Das eigentliche Ungeheuer ist nicht der Käfer, sondern die Familie. Und der Text hat eine perfekte Spiegelstruktur — während Gregor immer mehr schrumpft, wächst die Familie wirtschaftlich, sozial und körperlich. Sein Tod ist ihre Befreiung.",
  },
  {
    id: "ana-3",
    section: "Interpretation",
    kicker: "5 · Interpretation",
    title: "Warum lesen wir das heute noch?",
    body: [
      "„Kafkaesk“ ist ins Wörterbuch eingegangen — der Text hat einen Begriff geschaffen",
      "Burnout, Leistungsdruck, Funktionieren-Müssen — alles topaktuell",
      "Die Angst, plötzlich aus dem Leben herauszufallen",
      "Familien, die so lange lieben, wie es nicht weh tut",
      "Ein Text, der in 90 Seiten mehr sagt als viele Romane in 900",
    ],
    speech:
      "Warum lesen wir die Verwandlung über hundert Jahre später immer noch? Erstens hat der Text einen eigenen Begriff geschaffen — „kafkaesk“ steht im Duden. Zweitens sind die Themen erschreckend aktuell: Burnout, Leistungsdruck, der Zwang zu funktionieren. Drittens spricht er eine sehr moderne Angst an: plötzlich aus dem Leben herauszufallen — durch Krankheit, Arbeitslosigkeit, Depression — und zu merken, dass das Umfeld einen dann nicht mehr trägt. Und viertens ist es eine ehrliche Geschichte über Familien, die so lange lieben, wie es nicht weh tut. Kafka schafft das auf gerade einmal neunzig Seiten — ein Text, der mehr sagt als viele Romane in neunhundert.",
  },

  // TEXTSTELLE
  {
    id: "quote",
    section: "Textstelle",
    kicker: "6 · Textstelle",
    title: "Eine Stelle zum Vorlesen",
    subtitle: "Vorschlag: Kapitel 3 — Gretes Worte",
    body: [
      "„Ich will vor diesem Untier nicht den Namen meines Bruders aussprechen,",
      "und sage daher bloß: wir müssen versuchen, es loszuwerden. […]",
      "Weg muss es, das ist das einzige Mittel.“",
      "",
      "(Alternative: der erste Satz · oder die Apfel-Szene aus Kap. 2)",
    ],
    speech:
      "An dieser Stelle würde ich euch jetzt eine kurze Textstelle vorlesen. Ich schlage Gretes entscheidende Worte aus dem dritten Kapitel vor — den Moment, in dem sie ihren Bruder verstößt: „Ich will vor diesem Untier nicht den Namen meines Bruders aussprechen, und sage daher bloß: wir müssen versuchen, es loszuwerden. Weg muss es, das ist das einzige Mittel.“ Alternativ eignen sich auch der berühmte erste Satz oder die Apfel-Szene aus Kapitel zwei.",
  },
  {
    id: "outro",
    section: "Schluss",
    kicker: "Danke",
    title: "Fragen?",
    subtitle: "Vielen Dank für eure Aufmerksamkeit.",
    speech:
      "Damit bin ich am Ende meiner Präsentation. Vielen Dank für eure Aufmerksamkeit — ich freue mich auf eure Fragen.",
  },
];
