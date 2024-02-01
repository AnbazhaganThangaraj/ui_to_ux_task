module.exports = {
    apps: [
        {
            name: "FDB",
            exec_mode: "fork",
            ignore_watch: ["logs"],
            watch_options: {
                followSymlinks: false,
            },
            env: {
                NODE_ENV: "development",
            },
            args: "start",
            script: "app.js",
        },
    ],
};
