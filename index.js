// require('filepond/dist/filepond.min.css')
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