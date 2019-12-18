const FilePond = require('filepond');

FilePond.setOptions({
    server: {
        url: 'http://localhost:8081',
        process: {
            url: './process',
            method: 'POST',
            headers: {
                'x-customheader': 'Hello World'
            },
            withCredentials: false,
            onload: (response) => response.key,
            onerror: (response) => response.data,
            ondata: (formData) => {
                formData.append('Hello', 'World');
                return formData;
            }
        },
        revert: './revert',
        restore: './restore/',
        load: './load/',
        fetch: './fetch/'
    }
})





// const tus = require('tus-node-server')
// const EVENTS = require('tus-node-server').EVENTS;
// const path = require('path');
// const fs = require('fs');

// const Server = tus.Server;
// const FileStore = tus.FileStore;

// const server = new Server();

// const fileNameFromUrl = (req) => {
//     console.log(req.filename)
//     return req.url.replace(/\//g, '-');
// }

// server.datastore = new FileStore({
//     path: '/files',
//     //namingFunction: fileNameFromUrl
// });

// const host = '127.0.0.1';
// const port = 1080;
// server.listen({ host, port }, () => {
//     console.log(`[${new Date().toLocaleTimeString()}] tus server listening at http://${host}:${port}`);
// });

// server.get('/uploads', (req, res) => {
//     console.log(server.datastore.path)

//     const files_path = path.join(process.cwd(), server.datastore.path);
//     fs.readdir(files_path, (err, filenames) => {
//         const files = filenames.map((filename) => {
//             return {
//                 name: filename,
//                 url: `http://${host}:${port}/${filename}`,
//             };
//         });

//         const file = filenames.filter(filename => filename === "9cc671cdbb1fb38e53cac55dd5552ff3")[0]

//         res.writeHead(200);
//         res.write(file);
//         res.end();
//         //9cc671cdbb1fb38e53cac55dd5552ff3
//     });
// });

// // server.on(EVENTS.EVENT_UPLOAD_COMPLETE, (event) => {
// //     console.log(`Upload complete for file ${event.file.upload_metadata}`);
// // })





// const tus = require('tus-node-server');
// const cors = require('cors')
// const express = require('express')

// const server = new tus.Server();
// server.datastore = new tus.FileStore({
//     path: 'C:/Users/Aljohn/Desktop/files'
// });

// server.use(cors())
// const host = 'localhost';
// const port = 8081;
// server.listen({ host, port }, () => {
//     console.log(`[${new Date().toLocaleTimeString()}] tus server listening at http://${host}:${port}`);
// });




// const server = new tus.Server();
// server.datastore = new tus.FileStore({
//     path: 'C:/Users/Aljohn/Desktop/files'
// });

// const app = express();
// app.use(cors())
// const uploadApp = express();
// uploadApp.all('*', server.handle.bind(server));
// app.use('/uploads', uploadApp);

// const host = 'localhost';
// const port = 8081;
// app.listen(port, host);




// var express = require('express')
// var bodyParser = require('body-parser')
// var session = require('express-session')
// var companion = require('@uppy/companion')

// var app = express()
// app.use(bodyParser.json())
// app.use(session({ secret: 'some secrety secret' }))

// // be sure to place this anywhere after app.use(bodyParser.json()) and app.use(session({...})
// const options = {
//     // providerOptions: {
//     //     google: {
//     //         key: 'GOOGLE_KEY',
//     //         secret: 'GOOGLE_SECRET'
//     //     }
//     // },
//     server: {
//         host: 'localhost:8081',
//         protocol: 'http',
//     },
//     filePath: 'C:/Users/Aljohn/Desktop/files'
// }

// //app.use(companion.app(options))

// const server = app.listen(8081)
// companion.socket(server, options)

//helpful issues
//https://github.com/tus/tus-node-server/issues/160
//https://github.com/tus/tus-node-server/issues/25
//https://github.com/tus/tus-node-server/issues/46
//https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/