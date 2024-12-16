export type Translation = Record<TranslationKey, string>;

export enum TranslationKey {
  AppSubTitle = "AppSubTitle",
  AppTitle = "AppTitle",
  FAQTitle = "FAQ",
  Send = "Send",
  SendInstructions1 = "SendInstructions1",
  SendInstructions2 = "SendInstructions2",
  SendInstructions3 = "SendInstructions3",
  SendInstructions4 = "SendInstructions4",
  ShareLinkButton = "ShareLinkButton",
  ShareLinkButtonCopied = "ShareLinkButtonCopied",
  CopyProtectedMessage = "CopyProtectedMessage",
  CopyProtectedMessageCopied = "CopyProtectedMessageCopied",
  ProtectedMessageLabel = "ProtectedMessageLabel",
  UnlockCodePlaceholder = "UnlockCodePlaceholder",
  SecretMessagePlaceholder = "SecretMessagePlaceholder",
}
