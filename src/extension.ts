// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { camelCase } from './helpers/data';
import {
	createComponentFileContent,
	createStyledComponentFileContent,
	createIndexFileContent,
	createStoriesFileContent,
} from './templates/component';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "start-component" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		'start-component.start',
		async folder => {
			let wsEdit = new vscode.WorkspaceEdit();

			const componentName = await vscode.window.showInputBox();

			if (componentName === undefined) {
				return;
			}

			const componentFolderName = componentName;
			const styledFileName = componentName;
			console.log(styledFileName);

			const indexFileUri = vscode.Uri.file(
				`${folder.path}/${componentFolderName}/index.tsx`,
			);
			const componentFileUri = vscode.Uri.file(
				`${folder.path}/${componentFolderName}/${componentName}.tsx`,
			);
			const styledFileUri = vscode.Uri.file(
				`${folder.path}/${componentFolderName}/${styledFileName}.styled.tsx`,
			);
			const storiesFileUri = vscode.Uri.file(
				`${folder.path}/${componentFolderName}/${componentName}.stories.tsx`,
			);
			// console.log('FOLDER', folder.path);
			// console.log('URI', fileUri.path);

			const pos = new vscode.Position(0, 0);

			// Create index.tsx
			wsEdit.createFile(indexFileUri, { ignoreIfExists: true });
			wsEdit.insert(indexFileUri, pos, createIndexFileContent(componentName));

			// Create Component.tsx
			wsEdit.createFile(componentFileUri, { ignoreIfExists: true });
			wsEdit.insert(
				componentFileUri,
				pos,
				createComponentFileContent(componentName),
			);

			// Create StyledComponent.tsxcss
			wsEdit.createFile(styledFileUri, { ignoreIfExists: true });
			wsEdit.insert(
				styledFileUri,
				pos,
				createStyledComponentFileContent(componentName),
			);

			// Create Component.stories.tsx
			wsEdit.createFile(storiesFileUri, { ignoreIfExists: true });
			wsEdit.insert(storiesFileUri, pos, createStoriesFileContent(componentName));

			vscode.workspace.applyEdit(wsEdit);

			vscode.window.showInformationMessage(`Component ${componentName} started!`);
		},
	);

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
