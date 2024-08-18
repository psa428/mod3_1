const yargs = require('yargs');
const pkg = require('./package.json');
const {addNote, getNotes, removeNote, printNotes} = require('./notes.controller');
const { demandOption } = require('yargs');

yargs.command({
    command: 'add',
    describe:   'Add new note to list',
    builder:    {
        title:  {
            type: 'string',
            describe:   'Note title',
            demandOption:   true
        }
        
    },
    handler({title}) {
        addNote(title);
    }

})

yargs.command({
    command: 'list',
    describe:   'Print all notes',
    handler() {
        printNotes()
    }
        
    }
)

yargs.command({
    command: 'remove',
    describe:   'Remove note by id',
    handler({id}) {
        removeNote(id);      
    }
})

yargs.parse();