import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "remix-run-snippets-and-commands" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "remix-run-snippets-and-commands.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from remix-run-snippets-and-commands!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
