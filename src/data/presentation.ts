export interface Slide {
  id: string;
  section: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  body?: string[];
  /** Vollständiger Sprechertext zum Vortragen */
  speech: string;
}

export const PRESENTATION = {
  bookTitle: "Die Räuber",
  bookAuthor: "Friedrich Schiller",
  bookYear: "1781",
};

export const SLIDES: Slide[] = [
  {
    id: "cover",
    section: "Titel",
    kicker: "Buchpräsentation",
    title: "Die Räuber",
    subtitle: "Friedrich Schiller · Drama, 1781",
    speech:
      "Herzlich willkommen zu meiner Buchpräsentation. Ich stelle euch heute „Die Räuber“ von Friedrich Schiller vor, ein Drama aus dem Jahr 1781. Ich werde euch zunächst etwas über den Autor und die Entstehungsumstände erzählen, dann die wichtigsten Figuren vorstellen, anschließend die gesamte Handlung in fünf Akten zusammenfassen und mit einer Interpretation abschließen.",
  },
  {
    id: "agenda",
    section: "Überblick",
    kicker: "Gliederung",
    title: "Was euch erwartet",
    body: [
      "1.  Der Autor — Friedrich Schiller",
      "2.  Entstehung und historischer Kontext",
      "3.  Die wichtigsten Figuren",
      "4.  Handlung — die fünf Akte",
      "5.  Analyse und Interpretation",
      "6.  Textstelle und Diskussion",
    ],
    speech:
      "Mein Vortrag gliedert sich in sechs Teile: Zuerst der Autor Friedrich Schiller, dann Entstehung und historischer Kontext, danach die wichtigsten Figuren, anschließend die Handlung in fünf Akten, dann meine Analyse und Interpretation, und zum Schluss lese ich eine kurze Textstelle vor.",
  },

  // AUTOR
  {
    id: "author-1",
    section: "Der Autor",
    kicker: "1 · Der Autor",
    title: "Friedrich Schiller",
    subtitle: "1759 in Marbach am Neckar — 1805 in Weimar",
    body: [
      "Sohn eines Wundarztes im Herzogtum Württemberg",
      "Wurde mit 14 zwangsweise auf die Militärakademie „Hohe Karlsschule“ geschickt",
      "Studierte dort zuerst Jura, dann Medizin — unter strenger Aufsicht von Herzog Carl Eugen",
      "Floh 1782 aus Württemberg, lebte jahrelang in Armut",
      "Wurde später Professor in Jena und enger Freund Goethes",
    ],
    speech:
      "Friedrich Schiller wurde 1759 in Marbach am Neckar geboren, im Herzogtum Württemberg. Sein Vater war Wundarzt im Heer des Herzogs Carl Eugen — und das wurde Schiller zum Verhängnis. Mit nur 14 Jahren wurde er gegen seinen Willen auf die Militärakademie „Hohe Karlsschule“ geschickt, eine strenge, kasernenartige Schule des Herzogs. Acht Jahre lang stand er unter ständiger Aufsicht. Heimlich begann er dort zu schreiben — und genau in diesen Jahren entstand „Die Räuber“. Später floh er aus Württemberg, lebte jahrelang in Armut, wurde dann Professor in Jena und schließlich einer der bekanntesten Dichter Deutschlands. Er starb 1805 mit nur 45 Jahren in Weimar.",
  },
  {
    id: "author-2",
    section: "Der Autor",
    kicker: "1 · Der Autor",
    title: "Der junge Schiller",
    body: [
      "Erlebte die Akademie als Gefängnis und absolute Tyrannei",
      "Hasste Willkür, Standesdenken und Unfreiheit",
      "Las heimlich Rousseau, Shakespeare und Sturm-und-Drang-Autoren",
      "„Die Räuber“ entsteht aus persönlicher Wut und Auflehnung",
      "Nach der Uraufführung wird ihm das Schreiben verboten — er flieht",
    ],
    speech:
      "Um die „Räuber“ zu verstehen, muss man wissen, wie Schiller damals lebte. Die Karlsschule war für ihn ein Gefängnis. Der Herzog überwachte alles — Briefe, Lektüre, sogar persönliche Gespräche. Schiller hasste diese Willkür und das Standesdenken seiner Zeit. Heimlich las er Rousseau, Shakespeare und die Autoren des Sturm und Drang. Aus dieser persönlichen Wut und Auflehnung entsteht das Stück. Nach der erfolgreichen Uraufführung verbietet ihm der Herzog jede weitere schriftstellerische Tätigkeit. Schiller entscheidet sich gegen die Sicherheit und für die Kunst — und flieht 1782 aus Württemberg.",
  },

  // ENTSTEHUNG
  {
    id: "context-1",
    section: "Entstehung",
    kicker: "2 · Entstehung",
    title: "Heimlich an der Militärakademie",
    subtitle: "Geschrieben zwischen 1777 und 1781",
    body: [
      "Schiller war 18 bis 21 Jahre alt während des Schreibens",
      "Verfasst heimlich unter der Bettdecke, bei verbotener Kerze",
      "Veröffentlicht 1781 zunächst anonym, auf eigene Kosten",
      "Uraufführung 1782 in Mannheim — riesiger Skandal-Erfolg",
      "Das Publikum tobte, umarmte sich, schrie — eine literarische Sensation",
    ],
    speech:
      "Schiller schrieb „Die Räuber“ zwischen 1777 und 1781, also als 18- bis 21-Jähriger, heimlich an der Militärakademie. Er versteckte die Manuskripte und schrieb angeblich oft nachts unter der Bettdecke, weil offenes Licht verboten war. Veröffentlicht wurde das Stück 1781 zunächst anonym und auf eigene Kosten. Die Uraufführung fand 1782 in Mannheim statt und wurde ein riesiger Skandal-Erfolg. Augenzeugen berichten, das Publikum habe getobt, sich umarmt, geschrien — viele junge Männer wollten danach selbst Räuber werden und in die Wälder ziehen. So eine Wirkung hatte vorher kein deutsches Drama erzielt.",
  },
  {
    id: "context-2",
    section: "Entstehung",
    kicker: "2 · Entstehung",
    title: "Sturm und Drang",
    body: [
      "Literarische Epoche etwa 1765–1785 — von jungen Autoren getragen",
      "Auflehnung gegen Tyrannei, Standesdünkel und kalte Vernunft",
      "Gefühl, Leidenschaft, Genie und Freiheit als höchste Werte",
      "Helden sind oft Außenseiter, Rebellen, Kraftnaturen",
      "„Die Räuber“ ist das berühmteste Stück dieser Epoche",
    ],
    speech:
      "Geschrieben ist das Stück in der Epoche des Sturm und Drang. Das war eine Bewegung junger Autoren zwischen etwa 1765 und 1785, die sich gegen die strenge Vernunft der Aufklärung und gegen die Tyrannei der Fürsten auflehnten. Im Zentrum standen Gefühl, Leidenschaft, Freiheit und das Bild des großen, einzigartigen Genies. Die Helden sind oft Außenseiter und Rebellen — Kraftnaturen, die mit den Verhältnissen kollidieren. „Die Räuber“ ist das berühmteste Stück dieser Epoche und gilt als ihr Höhepunkt.",
  },

  // FIGUREN
  {
    id: "fig-overview",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Zwei Brüder, ein Konflikt",
    subtitle: "Im Zentrum: die Familie Moor",
    body: [
      "Karl Moor — der edle, geliebte ältere Sohn",
      "Franz Moor — der hässliche, missgünstige jüngere Bruder",
      "Maximilian Moor — der alte, schwache Vater (Graf)",
      "Amalia von Edelreich — Karls Verlobte, treu und stark",
      "Spiegelberg, Schweizer, Roller, Schwarz — Karls Räuberbande",
      "Hermann — Franz' Werkzeug, später sein Verräter",
    ],
    speech:
      "Im Mittelpunkt steht die Familie Moor und ein Konflikt zwischen zwei sehr ungleichen Brüdern. Karl, der ältere, ist edel, beliebt, aber auch wild und ungestüm. Franz, der jüngere, ist hässlich, intelligent und voller Hass auf seinen Bruder. Dazu kommt der alte Graf Maximilian Moor, ein schwacher Vater, und Amalia, Karls Verlobte. Im Wald begegnet uns Karls Räuberbande mit Figuren wie Spiegelberg, Schweizer und Roller. Und schließlich Hermann, ein verarmter Edelmann, den Franz für seine Intrigen benutzt.",
  },
  {
    id: "fig-karl",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Karl Moor",
    subtitle: "Der edle Räuber",
    body: [
      "Begeisterter Student, schwärmt von Freiheit und großen Taten",
      "Wird von Franz beim Vater verleumdet und verstoßen",
      "Aus Verzweiflung schwört er der bürgerlichen Welt ab",
      "Wird Hauptmann einer Räuberbande in den böhmischen Wäldern",
      "Will Gerechtigkeit gewaltsam herstellen — und verstrickt sich in Schuld",
    ],
    speech:
      "Karl Moor ist der Hauptheld. Wir lernen ihn als begeisterten Studenten in Leipzig kennen, der von Freiheit und großen Taten schwärmt. Er ist ein bisschen über die Stränge geschlagen, aber im Kern ein guter Mensch. Sein Bruder Franz verleumdet ihn beim Vater so geschickt, dass dieser ihn enterbt und verstößt. Aus Verzweiflung kehrt Karl der bürgerlichen Welt den Rücken und wird Hauptmann einer Räuberbande in den böhmischen Wäldern. Sein Ziel: Gerechtigkeit selbst herstellen, indem er Tyrannen, korrupte Pfaffen und Reiche bestraft. Doch je länger er Räuber ist, desto tiefer verstrickt er sich in Schuld — und merkt, dass man Unrecht nicht mit Mord heilen kann.",
  },
  {
    id: "fig-franz",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Franz Moor",
    subtitle: "Der berechnende Bösewicht",
    body: [
      "Hässlich, ungeliebt — fühlt sich von der Natur und der Familie betrogen",
      "Glaubt an keine Moral: Macht und Vorteil zählen, sonst nichts",
      "Fälscht Briefe, schwärzt Karl an, treibt den Vater scheinbar in den Tod",
      "Sperrt den noch lebenden Vater heimlich in einen Hungerturm",
      "Wird am Ende von seinem schlechten Gewissen wahnsinnig — erhängt sich",
    ],
    speech:
      "Franz Moor ist eine der faszinierendsten Bösewichtfiguren der deutschen Literatur. Er ist hässlich, ungeliebt, fühlt sich vom Vater und der Natur selbst zurückgesetzt. Daraus entwickelt er eine kalte Philosophie: An Moral, Gott und Gewissen glaubt er nicht — es zählen nur Macht und eigener Vorteil. Er fälscht Briefe, schwärzt Karl beim Vater an, erfindet einen angeblichen Tod, und treibt den Vater scheinbar selbst in den Tod, um Erbe und Macht an sich zu reißen. Tatsächlich sperrt er den lebenden Vater heimlich in einen Hungerturm. Am Ende wird Franz von seinem eigenen schlechten Gewissen eingeholt, halluziniert das Jüngste Gericht und erhängt sich selbst.",
  },
  {
    id: "fig-amalia",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Amalia von Edelreich",
    body: [
      "Karls Verlobte und Nichte des alten Grafen",
      "Bleibt Karl trotz aller Gerüchte unerschütterlich treu",
      "Weist Franz' Werbung und seine Drohungen empört zurück",
      "Erkennt Karl am Ende als verkleideten Räuber — und stirbt durch seine Hand",
      "Verkörpert ideale Liebe und reine Empfindung",
    ],
    speech:
      "Amalia ist Karls Verlobte und Nichte des alten Grafen. Sie ist die weibliche Hauptfigur und steht für ideale, treue Liebe. Auch als alle Karl für tot oder verkommen halten, bleibt sie ihm unerschütterlich treu. Franz versucht erst mit Schmeicheleien, dann mit Drohungen, ihre Liebe zu gewinnen — sie weist ihn jedes Mal empört zurück. Am Ende erkennt sie Karl wieder, der als Räuber verkleidet ist. Doch Karl sieht für sich keine Zukunft mehr und tötet sie auf ihre eigene Bitte hin — eine der erschütterndsten Szenen des Stücks.",
  },
  {
    id: "fig-vater",
    section: "Figuren",
    kicker: "3 · Figuren",
    title: "Der alte Moor & die Räuberbande",
    body: [
      "Graf Maximilian Moor: alt, schwach, leichtgläubig — fällt auf Franz' Lügen herein",
      "Wird heimlich in einen Turm gesperrt und fast verhungert",
      "Spiegelberg: eitel, brutal, will selbst Hauptmann werden",
      "Schweizer: Karls treuester Gefolgsmann, opfert sich für ihn",
      "Roller: wird gerettet, brennt aus Dankbarkeit eine ganze Stadt nieder",
    ],
    speech:
      "Der alte Graf Moor ist ein schwacher, leichtgläubiger Vater. Genau deshalb gelingt Franz' Intrige so leicht — er verstößt seinen Lieblingssohn, ohne zu prüfen. Später wird er von Franz heimlich in einen Hungerturm gesperrt und ist beim Wiedersehen nur noch ein Schatten seiner selbst. In der Räuberbande sind besonders drei Figuren wichtig: Spiegelberg, der eitle, brutale Anstifter, der eigentlich selbst Hauptmann werden will; Schweizer, Karls treuester Gefolgsmann, der sich am Ende für ihn opfert; und Roller, der von Karl aus dem Gefängnis gerettet wird und aus Dankbarkeit eine ganze Stadt in Brand steckt — eine Szene, die zeigt, wie schnell die „edle Räuberei“ in Schrecken kippt.",
  },

  // HANDLUNG
  {
    id: "plot-1",
    section: "Handlung",
    kicker: "4 · Handlung — 1. Akt",
    title: "1. Akt — Die Intrige beginnt",
    body: [
      "Schauplatz: Schloss Moor in Franken",
      "Karl studiert in Leipzig, hat Schulden und Streiche begangen",
      "Franz fängt seinen reumütigen Brief ab und fälscht eine furchtbare Version",
      "Der alte Moor glaubt Franz und verstößt Karl per Brief",
      "Karl, am Boden zerstört, schwört der bürgerlichen Welt ab und wird Hauptmann der Räuber",
    ],
    speech:
      "Erster Akt — die Intrige nimmt ihren Lauf. Schauplatz ist das Schloss der Familie Moor in Franken. Karl studiert in Leipzig und hat dort einige Streiche begangen — er schreibt einen reumütigen Brief nach Hause und bittet um Verzeihung. Doch Franz fängt diesen Brief ab und ersetzt ihn durch eine erfundene, viel schlimmere Version, in der Karl als verkommener Verbrecher dargestellt wird. Der alte Moor ist erschüttert. Franz nutzt seine Verzweiflung aus und überredet ihn, einen Verstoßungsbrief zu schicken — den Franz dann selbst formuliert. Als Karl diesen Brief erhält, bricht für ihn eine Welt zusammen. Er glaubt, sein Vater hasse ihn ohne Grund. In dieser Verzweiflung schwört er der bürgerlichen Welt ab und wird Hauptmann einer Räuberbande in den böhmischen Wäldern.",
  },
  {
    id: "plot-2",
    section: "Handlung",
    kicker: "4 · Handlung — 2. Akt",
    title: "2. Akt — Zwei Welten",
    body: [
      "Franz will den Vater endgültig loswerden — Hermann soll Karls „Tod“ melden",
      "Der alte Moor fällt scheinbar tot um, Franz wird Herr des Schlosses",
      "In den böhmischen Wäldern: Karls Bande wächst, Roller wird gerettet",
      "Eine ganze Stadt geht in Flammen auf",
      "Karl wird von Soldaten umzingelt — schwört, die Bande nicht zu verlassen",
    ],
    speech:
      "Zweiter Akt — zwei Welten parallel. Auf dem Schloss will Franz seinen Vater endgültig loswerden. Er stiftet Hermann an, dem alten Moor in einer inszenierten Szene Karls angeblichen Tod im Krieg zu melden. Der Schock ist so groß, dass der Vater scheinbar tot zusammenbricht. Franz lässt ihn ohne weitere Prüfung in der Familiengruft beisetzen — und wird nun selbst Herr des Schlosses. In den böhmischen Wäldern erleben wir parallel Karls neues Leben. Seine Bande wächst, sie befreien Roller aus dem Gefängnis, eine ganze Stadt geht dabei in Flammen auf — viele Unschuldige sterben. Schnell merkt Karl: Diese „Gerechtigkeit“ wird selbst zum Verbrechen. Als die Bande von Soldaten umzingelt wird, hat er trotzdem den Mut, in einer großen Rede den Auftrag der Truppe abzulehnen — und seine Männer schwören ihm Treue auf Leben und Tod.",
  },
  {
    id: "plot-3",
    section: "Handlung",
    kicker: "4 · Handlung — 3. Akt",
    title: "3. Akt — Amalia und der Hungerturm",
    body: [
      "Franz bedrängt Amalia mit Heiratsversuchen, dann mit Drohungen",
      "Amalia weist ihn ab und droht ihm mit einem Dolch",
      "Im Wald: Karl trifft auf Kosinsky, der ein ähnliches Schicksal erlitten hat",
      "Karls Heimweh wird übermächtig — er beschließt, heimlich nach Franken zu reisen",
      "Parallel: der „tote“ alte Moor lebt — in einem heimlichen Turm im Wald",
    ],
    speech:
      "Dritter Akt. Auf dem Schloss bedrängt Franz Amalia: erst mit Heiratsanträgen, dann mit Drohungen. Amalia weist ihn entschieden zurück, droht ihm sogar mit einem Dolch und nennt ihn einen Mörder. Im Wald begegnet Karl einem jungen Mann namens Kosinsky, dessen Geliebte ihm vom Fürsten weggenommen wurde — eine Geschichte, die Karls eigene Wunden wieder aufreißt. Sein Heimweh wird übermächtig. Er beschließt, heimlich nach Franken zu reisen, um sein altes Zuhause noch einmal zu sehen. Parallel dazu enthüllt das Stück ein furchtbares Geheimnis: Der alte Moor ist gar nicht tot. Franz hat ihn heimlich in einen alten Turm im Wald sperren lassen, wo er langsam verhungern soll.",
  },
  {
    id: "plot-4",
    section: "Handlung",
    kicker: "4 · Handlung — 4. Akt",
    title: "4. Akt — Heimkehr in Verkleidung",
    body: [
      "Karl kommt verkleidet als „Graf von Brand“ auf das Schloss",
      "Er trifft Amalia, die ihn nicht erkennt, aber immer noch liebt",
      "Franz schöpft Verdacht und plant heimlich seinen Tod",
      "Karl entdeckt den Hungerturm — und findet seinen lebenden Vater",
      "Er erfährt die ganze Wahrheit und schwört blutige Rache an Franz",
    ],
    speech:
      "Vierter Akt — Karl kehrt heim. Er kommt verkleidet als „Graf von Brand“ auf das Schloss seines Vaters, ohne sich zu erkennen zu geben. Er trifft Amalia, die ihn natürlich nicht erkennt, aber spürt, dass etwas Vertrautes an diesem Fremden ist — sie liebt ihn immer noch. Franz wird misstrauisch und plant heimlich, den unbekannten Gast umzubringen. Nachts kehrt Karl in den Wald zurück. Dort entdeckt er zufällig den alten Turm — und in ihm seinen lebenden, halb verhungerten Vater. Der alte Moor erzählt ihm die ganze furchtbare Wahrheit von Franz' Intrige. In diesem Moment kippt etwas in Karl. Er schwört nicht mehr nur abstrakte Gerechtigkeit, sondern blutige Rache an seinem eigenen Bruder.",
  },
  {
    id: "plot-5",
    section: "Handlung",
    kicker: "4 · Handlung — 5. Akt",
    title: "5. Akt — Die Katastrophe",
    body: [
      "Karl schickt Schweizer, Franz lebend zu fangen — Schweizer scheitert und erschießt sich",
      "Franz wird im Schloss von Gewissensbissen und Höllenvisionen heimgesucht",
      "Er stürzt sich in den Wahnsinn und erhängt sich mit seiner Hutschnur",
      "Karl gibt sich Vater und Amalia zu erkennen — der alte Moor stirbt vor Glück und Schmerz",
      "Amalia bittet um den Tod — Karl ersticht sie und stellt sich der Justiz",
      "„Dem Mann kann geholfen werden“ — Karl liefert sich einem armen Tagelöhner aus",
    ],
    speech:
      "Fünfter Akt — alle Fäden laufen zur Katastrophe zusammen. Karl schickt Schweizer ins Schloss, um Franz lebend zu fangen. Schweizer scheitert, weil Franz sich vorher das Leben nimmt, und erschießt sich aus Scham. Im Schloss wird Franz von furchtbaren Gewissensbissen und Visionen vom Jüngsten Gericht heimgesucht. Der eiskalte Atheist bricht innerlich zusammen, fleht plötzlich um Gnade — und erhängt sich schließlich mit der goldenen Schnur seines Hutes. Im Wald gibt sich Karl seinem Vater und Amalia zu erkennen. Der alte Moor stirbt vor Glück und Schmerz über alles, was geschehen ist. Die Räuber pochen auf Karls Schwur — er gehöre ihnen für immer. Amalia weiß, dass sie ihn nicht halten kann, und bittet Karl, sie zu töten. Verzweifelt ersticht er sie. Im letzten Bild liefert Karl sich nicht heroisch dem Tod aus, sondern stellt sich der irdischen Justiz. Er hat gehört, dass ein armer Tagelöhner für seine Festnahme eine hohe Belohnung bekommen würde — und sagt den berühmten Schlusssatz: „Dem Mann kann geholfen werden.“",
  },

  // ANALYSE
  {
    id: "ana-1",
    section: "Interpretation",
    kicker: "5 · Interpretation",
    title: "Worum geht es eigentlich?",
    body: [
      "Ein Familiendrama: zwei Brüder, ein schwacher Vater, eine Frau",
      "Ein politisches Drama: Auflehnung gegen Tyrannei und korrupte Ordnung",
      "Ein moralisches Drama: Darf man Unrecht mit Gewalt bekämpfen?",
      "Ein religiöses Drama: Gott, Gewissen, Strafe — auch bei Franz, der nicht glaubt",
      "Ein Selbstporträt: Schillers eigener Hass auf den Herzog steckt in jeder Zeile",
    ],
    speech:
      "Jetzt zur Interpretation. „Die Räuber“ ist auf mehreren Ebenen lesbar. Erstens als Familiendrama: zwei ungleiche Brüder, ein schwacher Vater, eine Frau zwischen ihnen — Kain-und-Abel-Motiv in modernem Gewand. Zweitens als politisches Drama: Karl rebelliert gegen eine korrupte Gesellschaftsordnung, in der Tyrannen ungestraft herrschen. Drittens als moralisches Drama: Die zentrale Frage des Stücks lautet, ob man Unrecht mit Gewalt bekämpfen darf. Karls Antwort am Ende lautet eindeutig: Nein. Viertens ist es ein religiöses Drama — selbst der Atheist Franz wird am Ende von einem Gewissen eingeholt, das er nie zugeben wollte. Und fünftens steckt in jeder Zeile Schillers eigener Hass auf seinen Herzog und auf jede Form von Willkür.",
  },
  {
    id: "ana-2",
    section: "Interpretation",
    kicker: "5 · Interpretation",
    title: "Die zwei Brüder als zwei Wege",
    body: [
      "Karl: Auflehnung aus Gefühl, Idealismus, Freiheitsdrang — wird zum Mörder",
      "Franz: Auflehnung aus Verstand, Berechnung, Egoismus — wird zum Wahnsinnigen",
      "Beide stürzen — beide Wege sind keine Lösung",
      "Schillers Botschaft: Freiheit braucht ein moralisches Gesetz im Inneren",
      "Das Stück zeigt die Gefahr des Genies ohne ethische Bindung",
    ],
    speech:
      "Sehr aufschlussreich ist der Spiegel-Charakter der beiden Brüder. Karl lehnt sich aus dem Gefühl heraus auf — aus Idealismus, Freiheitsdrang und Empörung. Er wird trotzdem zum Mörder. Franz lehnt sich aus dem reinen Verstand heraus auf — aus Berechnung, Egoismus und Verachtung der Moral. Er endet im Wahnsinn. Beide Wege scheitern. Schiller zeigt: Weder das pure Gefühl noch die pure Vernunft können einen Menschen retten, wenn ihm das innere moralische Gesetz fehlt. Genau das ist die zentrale Botschaft: Freiheit braucht Verantwortung, sonst kippt sie in Verbrechen. „Die Räuber“ ist deshalb auch eine Warnung vor dem Genie ohne ethische Bindung.",
  },
  {
    id: "ana-3",
    section: "Interpretation",
    kicker: "5 · Interpretation",
    title: "Warum lesen wir das heute noch?",
    body: [
      "Sprache: leidenschaftlich, drastisch, modern — kein verstaubtes Drama",
      "Themen: Familie, Ungleichbehandlung, Rebellion, Radikalisierung",
      "Fragen, die jedes Jahrzehnt neu aktuell werden: Wer darf Gewalt anwenden?",
      "Vorbild für unzählige spätere Werke — von Hugo bis hin zu Filmen",
      "Schiller war 21, als er das schrieb — und hat damit das deutsche Theater verändert",
    ],
    speech:
      "Warum lesen wir „Die Räuber“ über 240 Jahre später immer noch? Erstens wegen der Sprache: Schiller schreibt leidenschaftlich, drastisch und oft erstaunlich modern — das ist kein verstaubtes Drama, da wird geflucht, geschrien und geliebt. Zweitens wegen der Themen: ungerechte Behandlung in der Familie, Rebellion, Radikalisierung, die Frage nach legitimer Gewalt — das sind Themen, die in jedem Jahrzehnt neu aktuell werden. Drittens war das Stück Vorbild für unzählige spätere Werke, von Victor Hugos Romanen bis hin zu modernen Filmen über Rebellen und Outlaws. Und schließlich: Schiller war 21, als er das schrieb. Mit einem einzigen Stück hat ein junger Mann das deutsche Theater verändert.",
  },

  // TEXTSTELLE
  {
    id: "quote",
    section: "Textstelle",
    kicker: "6 · Textstelle",
    title: "Vorschläge zum Vorlesen",
    body: [
      "• Karls große Rede gegen die Welt (1. Akt, 2. Szene)",
      "  „Das Gesetz hat noch keinen großen Mann gebildet, aber die Freiheit brütet Kolosse und Extremitäten aus.“",
      "",
      "• Franz' zynisches Selbstgespräch über Gewissen (1. Akt, 1. Szene)",
      "",
      "• Karls Schlussmonolog mit dem berühmten Satz:",
      "  „O über mich Narren, der ich wähnte, die Welt durch Gräuel zu verschönern.“",
      "  „Dem Mann kann geholfen werden.“",
    ],
    speech:
      "An dieser Stelle würde ich euch jetzt eine kurze Textstelle vorlesen. Drei Stellen eignen sich besonders gut: Erstens Karls große Rede gegen die Welt im ersten Akt, in der er sagt: „Das Gesetz hat noch keinen großen Mann gebildet, aber die Freiheit brütet Kolosse und Extremitäten aus.“ Zweitens Franz' zynisches Selbstgespräch ganz am Anfang, in dem er erklärt, warum er an kein Gewissen glaubt. Oder drittens Karls Schlussmonolog mit dem berühmten Satz „Dem Mann kann geholfen werden.“ — kurz, aber unglaublich stark.",
  },
  {
    id: "read",
    section: "Textstelle",
    kicker: "7 · Lesung",
    title: "Hier lese ich eine Stelle vor",
    subtitle: "Kurze Textstelle aus „Die Räuber“ — im Anschluss: Fragen & Diskussion.",
    body: [
      "Ich lese jetzt die ausgewählte Textstelle laut vor.",
      "Danach: Vielen Dank für eure Aufmerksamkeit — gerne Fragen!",
    ],
    speech:
      "An dieser Stelle lese ich euch jetzt die ausgewählte Textstelle vor. … Damit bin ich am Ende meiner Präsentation. Vielen Dank für eure Aufmerksamkeit — ich freue mich auf eure Fragen.",
  },
];
