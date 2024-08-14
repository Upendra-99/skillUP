const { TextDocument, SpreadsheetDocument } = require('./documents');

// Create a TextDocument
const textDoc = new TextDocument('MyTextDoc', 'Hello, world!');
textDoc.save(); // From SaveMixin
textDoc.load(); // From LoadMixin
textDoc.displayText();

// Create a SpreadsheetDocument
const sheetDoc = new SpreadsheetDocument('MySheetDoc', [['A1', 'B1'], ['A2', 'B2']]);
sheetDoc.save(); // From SaveMixin
sheetDoc.load(); // From LoadMixin
sheetDoc.displayCells();
