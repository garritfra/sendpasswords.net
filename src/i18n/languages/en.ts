import { Translation, TranslationKey } from "../keys";

// prettier-ignore
const translation: Translation = {
  [TranslationKey.AppSubTitle]: "Share passwords safely - like passing a note that only your friend can read!",
  [TranslationKey.AppTitle]: "Send Passwords Safely",
  [TranslationKey.FAQTitle]: "Common Questions",
  [TranslationKey.SendInstructions1]: "1. Share this secure link with your friend:",
  [TranslationKey.SendInstructions2]: "2. Your friend will send you their unlock code. Paste it here:",
  [TranslationKey.SendInstructions3]: "3. Type in the password or secret message you want to share:",
  [TranslationKey.SendInstructions4]: "4. Share this protected message with your friend:",
  [TranslationKey.Send]: "Share Safely",
  [TranslationKey.ShareLinkButton]: "Share Link",
  [TranslationKey.ShareLinkButtonCopied]: "Link Copied!",
  [TranslationKey.CopyProtectedMessage]: "Copy Protected Message",
  [TranslationKey.CopyProtectedMessageCopied]: "Protected Message Copied!",
  [TranslationKey.ProtectedMessageLabel]: "Your protected message (only your friend can read this):",
  [TranslationKey.UnlockCodePlaceholder]: "Paste your friend's unlock code here...",
  [TranslationKey.SecretMessagePlaceholder]: "Type your secret message here...",

  // FAQ Translations
  [TranslationKey.FAQWhatIsThisTitle]: "What is this website for?",
  [TranslationKey.FAQWhatIsThis]: "This is a safe way to share passwords with friends and family - like passing a note that only they can read. It's perfect when you need to share login details or other private information with someone you trust.",
  
  [TranslationKey.FAQIsSafeTitle]: "Is this safe to use?",
  [TranslationKey.FAQIsSafe]: "Yes! This tool is designed with your privacy in mind. When you share a password:",
  [TranslationKey.FAQIsSafePoint1]: "Everything happens right here in your browser - we never see your passwords",
  [TranslationKey.FAQIsSafePoint2]: "Only the person you choose can read your message",
  [TranslationKey.FAQIsSafePoint3]: "We don't store anything - your message disappears once sent",
  [TranslationKey.FAQIsSafeVerify]: "Want to verify this? Our code is open for anyone to check! 🙂",
  
  [TranslationKey.FAQHowToUseTitle]: "How do I use this?",
  [TranslationKey.FAQHowToUse]: "It's as simple as sharing a secret note:",
  [TranslationKey.FAQHowToUseStep1]: "Share the website link with your friend",
  [TranslationKey.FAQHowToUseStep2]: "Your friend will create their personal unlock code and send it to you",
  [TranslationKey.FAQHowToUseStep3]: "Type in your password or secret message",
  [TranslationKey.FAQHowToUseStep4]: "Share the protected message with your friend - only they can read it!",
  
  [TranslationKey.FAQUnlockCodeTitle]: "What's an unlock code?",
  [TranslationKey.FAQUnlockCode]: "An unlock code is like a special key that only your friend has. It comes in two parts:",
  [TranslationKey.FAQUnlockCodePoint1]: "A public part they share with you (safe to share)",
  [TranslationKey.FAQUnlockCodePoint2]: "A private part they keep secret (never share this!)",
  [TranslationKey.FAQUnlockCodeExplanation]: "When you get a new unlock code from your friend, your message will be automatically protected so only they can read it.",
  
  [TranslationKey.FAQHowLongTitle]: "How long can I use this?",
  [TranslationKey.FAQHowLong]: "Your unlock codes are saved in your browser and work for as long as you need them. If you think someone else might have gotten access to your codes, you should create new ones to stay safe.",
  
  [TranslationKey.FAQTechnicalTitle]: "I'm curious - how does this work technically?",
  [TranslationKey.FAQTechnical]: "For the technically curious: We use OpenPGP.js, which is a JavaScript implementation of PGP (Pretty Good Privacy) encryption. All encryption happens locally in your browser - we operate completely stateless, meaning no data touches our servers.",
  [TranslationKey.FAQTechnicalStorage]: "The public/private keypair is stored in your browser's local storage. If you suspect your private key might have been compromised, you should generate a new keypair immediately.",
  
  [TranslationKey.FAQHelpTitle]: "Need help or found an issue?",
  [TranslationKey.FAQHelp]: "You can contact me through my website or report issues on GitHub.",
};

const en = {
  translation,
};

export default en;