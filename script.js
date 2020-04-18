npm install wolfram-notebook-embedder
import WolframNotebookEmbedder from 'wolfram-notebook-embedder';
WolframNotebookEmbedder.embed('https://www.wolframcloud.com/obj/myusername/myfolder/mynotebook.nb', document.getElementById('notebookContainer'));
embedding.then(function (nb) {
    // This will reset the DynamicModule variable x$$
    // in the first cell of the notebook.
    return nb.getCells().then(function (cells) {
        nb.setDynamicModuleVariable({
            cellId: cells[0].id,
            name: 'x$$',
            value: 0
        });
    });
})
