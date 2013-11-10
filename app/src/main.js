requirejs.config({
    baseUrl: 'app',
    paths: {
        'jquery' : 'vendor/jquery.min',
        'moment': 'vendor/moment.min',
        'handlebars' : 'vendor/handlebars',
    },
    packages: [
        {
            name: 'text',
            location: 'vendor',
            main: 'text'
        },
        {
            name: 'css',
            location: 'vendor/require-css',
            main: 'css'
        },
        {
            name: 'less',
            location: 'vendor/require-less',
            main: 'less'
        }
    ],
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        'jquery': {
            exports: '$'
        }
    }
});

requirejs(['jquery', 'src/notepad'],
    function ($, Notepad) {
        var notepad = new Notepad('#notepad');
        console.log('Loaded Notepad v' + notepad.version);
    }
);