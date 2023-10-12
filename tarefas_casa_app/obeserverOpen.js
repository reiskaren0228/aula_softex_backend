const prompt = require('prompt');

class Editor {
    constructor() {
        this.text = [];
        this.open = [];
        this.save = [];
    }

    insertLine(lineNumber, text) {
        this.text.splice(lineNumber, 0, text);
    }

    removeLine(lineNumber) {
        this.text.splice(lineNumber, 1);
    }

    on(event, callback) {
        if (event === 'open') {
            this.open.push(callback);
        } else if (event === 'save') {
            this.save.push(callback);
        }
    }

    trigger(event, data) {
        if (event === 'open') {
            this.open.forEach(callback => callback(data));
        } else if (event === 'save') {
            this.save.forEach(callback => callback(data));
        }
    }
}
class TextEditor extends Editor {
    onOpen() {
        let lineNumber = 0;
        while (true) {
            const text = prompt("Digite uma linha de texto (ou 'EOF' para sair):");
            if (text === 'EOF') {
                break;
            }
            this.insertLine(lineNumber, text);
            lineNumber++;
        }
    }

    onSave(filename) {
       
        if (typeof require !== 'undefined') {
            const fs = require('fs');
            fs.writeFileSync(filename, this.text.join('\n'));
        } else {
            console.log("***Salvamento não suportado pelo navegador.***");
        }
    }
}

const editor = new TextEditor();
editor.on('open', () => editor.onOpen());
editor.on('save', filename => editor.onSave(filename));
editor.trigger('open');
editor.trigger('save', 'meuArquivo.txt');
