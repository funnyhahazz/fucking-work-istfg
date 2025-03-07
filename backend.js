var require = { 
    paths: { 
        vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' 
    } 
};

window.MonacoEnvironment = {
    getWorkerUrl: function(workerId, label) {
        return `data:text/javascript;charset=utf-8,` +
            `importScripts("https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/base/worker/workerMain.js");`;
    }
};

require(["vs/editor/editor.main"], function () {
    monaco.editor.create(document.getElementById('monaco-editor'), {
        value: "-- Your Lua code here",
        language: "lua",
        theme: "vs-dark",
        automaticLayout: true
    });
});
