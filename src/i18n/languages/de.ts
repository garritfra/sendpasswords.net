import { Translation, TranslationKey } from "../keys";

// prettier-ignore
const translation: Translation = {
  [TranslationKey.AppSubTitle]: "Teile Passwörter sicher - wie eine Nachricht, die nur dein Freund lesen kann!",
  [TranslationKey.AppTitle]: "Passwörter sicher teilen",
  [TranslationKey.FAQTitle]: "Häufige Fragen",
  [TranslationKey.SendInstructions1]: "1. Teile diesen sicheren Link mit deinem Freund:",
  [TranslationKey.SendInstructions2]: "2. Dein Freund schickt dir einen Freigabe-Code. Füge ihn hier ein:",
  [TranslationKey.SendInstructions3]: "3. Gib das Passwort oder die geheime Nachricht ein, die du teilen möchtest:",
  [TranslationKey.SendInstructions4]: "4. Teile diese geschützte Nachricht mit deinem Freund:",
  [TranslationKey.Send]: "Sicher teilen",
  [TranslationKey.ShareLinkButton]: "Link teilen",
  [TranslationKey.ShareLinkButtonCopied]: "Link kopiert!",
  [TranslationKey.CopyProtectedMessage]: "Geschützte Nachricht kopieren",
  [TranslationKey.CopyProtectedMessageCopied]: "Geschützte Nachricht kopiert!",
  [TranslationKey.ProtectedMessageLabel]: "Deine geschützte Nachricht (nur dein Freund kann sie lesen):",
  [TranslationKey.UnlockCodePlaceholder]: "Füge hier den Freigabe-Code deines Freundes ein...",
  [TranslationKey.SecretMessagePlaceholder]: "Gib hier deine geheime Nachricht ein...",

  // FAQ Translations
  [TranslationKey.FAQWhatIsThisTitle]: "Wofür ist diese Website?",
  [TranslationKey.FAQWhatIsThis]: "Dies ist ein sicherer Weg, um Passwörter mit Freunden und Familie zu teilen - wie eine Nachricht, die nur sie lesen können. Perfekt geeignet, wenn du Zugangsdaten oder andere private Informationen mit jemandem teilen möchtest, dem du vertraust.",

  [TranslationKey.FAQIsSafeTitle]: "Ist das sicher?",
  [TranslationKey.FAQIsSafe]: "Ja! Dieses Tool wurde mit dem Fokus auf deine Privatsphäre entwickelt. Wenn du ein Passwort teilst:",
  [TranslationKey.FAQIsSafePoint1]: "Geschieht alles direkt in deinem Browser - wir sehen deine Passwörter nie",
  [TranslationKey.FAQIsSafePoint2]: "Nur die Person, die du auswählst, kann deine Nachricht lesen",
  [TranslationKey.FAQIsSafePoint3]: "Wir speichern nichts - deine Nachricht verschwindet nach dem Senden",
  [TranslationKey.FAQIsSafeVerify]: "Willst du das überprüfen? Unser Code ist öffentlich einsehbar! 🙂",

  [TranslationKey.FAQHowToUseTitle]: "Wie funktioniert das?",
  [TranslationKey.FAQHowToUse]: "Es ist so einfach wie das Teilen einer geheimen Notiz:",
  [TranslationKey.FAQHowToUseStep1]: "Teile den Website-Link mit deinem Freund",
  [TranslationKey.FAQHowToUseStep2]: "Dein Freund erstellt seinen persönlichen Freigabe-Code und sendet ihn dir",
  [TranslationKey.FAQHowToUseStep3]: "Gib dein Passwort oder deine geheime Nachricht ein",
  [TranslationKey.FAQHowToUseStep4]: "Teile die geschützte Nachricht mit deinem Freund - nur er kann sie lesen!",

  [TranslationKey.FAQUnlockCodeTitle]: "Was ist ein Freigabe-Code?",
  [TranslationKey.FAQUnlockCode]: "Ein Freigabe-Code ist wie ein spezieller Schlüssel, den nur dein Freund hat. Er besteht aus zwei Teilen:",
  [TranslationKey.FAQUnlockCodePoint1]: "Ein öffentlicher Teil, den sie mit dir teilen (kann sicher geteilt werden)",
  [TranslationKey.FAQUnlockCodePoint2]: "Ein privater Teil, den sie geheim halten (niemals teilen!)",
  [TranslationKey.FAQUnlockCodeExplanation]: "Wenn du einen neuen Freigabe-Code von deinem Freund erhältst, wird deine Nachricht automatisch so geschützt, dass nur er sie lesen kann.",

  [TranslationKey.FAQHowLongTitle]: "Wie lange kann ich das nutzen?",
  [TranslationKey.FAQHowLong]: "Deine Freigabe-Codes werden in deinem Browser gespeichert und funktionieren so lange du sie brauchst. Wenn du vermutest, dass jemand anderes Zugriff auf deine Codes bekommen haben könnte, solltest du zur Sicherheit neue erstellen.",

  [TranslationKey.FAQTechnicalTitle]: "Ich bin neugierig - wie funktioniert das technisch?",
  [TranslationKey.FAQTechnical]: "Für technisch Interessierte: Wir verwenden OpenPGP.js, eine JavaScript-Implementierung der PGP-Verschlüsselung (Pretty Good Privacy). Die gesamte Verschlüsselung findet lokal in deinem Browser statt - wir arbeiten vollständig zustandslos, das heißt, keine Daten berühren unsere Server.",
  [TranslationKey.FAQTechnicalStorage]: "Das öffentliche/private Schlüsselpaar wird im lokalen Speicher deines Browsers gespeichert. Wenn du vermutest, dass dein privater Schlüssel kompromittiert wurde, solltest du sofort ein neues Schlüsselpaar generieren.",

  [TranslationKey.FAQHelpTitle]: "Brauchst du Hilfe oder hast einen Fehler gefunden?",
  [TranslationKey.FAQHelp]: "Du kannst mich über meine Website kontaktieren oder Probleme auf GitHub melden.",
};

const de = {
  translation,
};

export default de;
