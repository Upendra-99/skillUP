// documents.js
const { SaveMixin, LoadMixin } = require('./mixins');

// Base Document class
class Document {
  constructor(name) {
    this.name = name;
  }
}

// Apply mix-ins
Object.assign(Document.prototype, SaveMixin, LoadMixin);

// TextDocument class
class TextDocument extends Document {
  constructor(name, text) {
    super(name);
    this.text = text;
  }

  // Specific method for text documents
  displayText() {
    console.log(`Text Document Content: ${this.text}`);
  }
}

// SpreadsheetDocument class
class SpreadsheetDocument extends Document {
  constructor(name, cells) {
    super(name);
    this.cells = cells;
  }

  // Specific method for spreadsheet documents
  displayCells() {
    console.log(`Spreadsheet Document Cells: ${JSON.stringify(this.cells)}`);
  }
}

module.exports = { TextDocument, SpreadsheetDocument };
