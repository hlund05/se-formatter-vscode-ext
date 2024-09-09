// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "se-formatter" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json

	const emtagCommand = vscode.commands.registerCommand('se-formatter.emtag', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const words = document.getText(selection);

			//Replace text in editor
			editor.edit(editBuilder => {
				editBuilder.replace(selection, "<em>" + words + "</em>");
			});
		}

	});

	const itagCommand = vscode.commands.registerCommand('se-formatter.itag', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const words = document.getText(selection);

			//Replace text in editor
			editor.edit(editBuilder => {
				editBuilder.replace(selection, "<i>" + words + "</i>");
			});
		}

	});

	const btagCommand = vscode.commands.registerCommand('se-formatter.btag', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const words = document.getText(selection);

			//Replace text in editor
			editor.edit(editBuilder => {
				editBuilder.replace(selection, "<b>" + words + "</b>");
			});
		}

	});

	const strongtagCommand = vscode.commands.registerCommand('se-formatter.strongtag', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const words = document.getText(selection);

			//Replace text in editor
			editor.edit(editBuilder => {
				editBuilder.replace(selection, "<strong>" + words + "</strong>");
			});
		}

	});

	const spantagCommand = vscode.commands.registerCommand('se-formatter.spantag', function () {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const words = document.getText(selection);

			//Replace text in editor
			editor.edit(editBuilder => {
				editBuilder.replace(selection, "<span>" + words + "</span>");
			});
		}

	});

	let openDictUrlCommand = vscode.commands.registerCommand('se-formatter.openDictUrl', () => {
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection, add to URL
			const words = document.getText(selection);
			const url = vscode.Uri.parse('https://www.merriam-webster.com/dictionary/' + words); 
			console.log(url);
			vscode.env.openExternal(url);  // Opens the URL in the default browser
		}
	});

	// Push disposables to the context's subscriptions array
	context.subscriptions.push(emtagCommand);
	context.subscriptions.push(itagCommand);
	context.subscriptions.push(btagCommand);
	context.subscriptions.push(strongtagCommand);
	context.subscriptions.push(openDictUrlCommand);
}


// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
