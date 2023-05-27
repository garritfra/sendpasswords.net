import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const pgpMessageRegex =
  /-----BEGIN PGP MESSAGE-----[\s\S]+?-----END PGP MESSAGE-----/;

describe("App", () => {
  test("Encrypted message", async () => {
    const mockKey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

xjMEZGxh0xYJKwYBBAHaRw8BAQdApNoo28VzoxfQZ6NQ1BYwECOIsz2LbiB2
0w6VINLUgTvNAMKMBBAWCgA+BYJkbGHTBAsJBwgJkNapHpUMD+jbAxUICgQW
AAIBAhkBApsDAh4BFiEEL1j5KtOXSTWOTFpl1qkelQwP6NsAAFaBAP4mYtud
LOffzFhKcH+Z2+Ye52EnvayGucHAgG+52Ii5gwD/WsK/yjZClq8MTx79LZ59
gZ9FO7UEA5BM0wLfs3YgkAHOOARkbGHTEgorBgEEAZdVAQUBAQdAhbDC7CfG
PNvfUBEq+d4L6o7aouF2RwKApz54VuGxKXADAQgHwngEGBYIACoFgmRsYdMJ
kNapHpUMD+jbApsMFiEEL1j5KtOXSTWOTFpl1qkelQwP6NsAADkgAP9VMOjd
xnfcaX7rHJM28pOKUmp4SNA+4sjVrPyhZy9xvAD+L+vKPjeYoBgZz7bolWcK
xsm44hU85354PPB9IFGMzAs=
=oO99
-----END PGP PUBLIC KEY BLOCK-----
    `;

    const mockMessage = "hello world";

    Object.assign(document, { execCommand: () => null });

    const clipboardMock = jest
      .spyOn(document, "execCommand")
      .mockImplementation();

    const user = userEvent.setup();
    const app = render(<App />);

    const friendKeyField = app.getByLabelText("Friend's Key:");
    friendKeyField.focus();
    await user.keyboard(mockKey);

    expect(friendKeyField.textContent).toBe(mockKey);

    const messageTextField = app.getByLabelText("Text:");
    messageTextField.focus();
    await user.keyboard(mockMessage);

    const copyMessageButton = app.getByText("Copy Encrypted Text");
    copyMessageButton.click();

    expect(clipboardMock).toHaveBeenLastCalledWith(
      "copy",
      true,
      expect.stringMatching(pgpMessageRegex)
    );
  });
});
