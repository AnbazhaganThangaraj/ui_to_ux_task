const options = {
    explorer: true,
    swaggerOptions: {
        persistAuthorization: false,
        urls: [
            {
                url: "/public/swagger/automobile.json",
                name: "AUTOMOBILE APIs",
            },
        ],
    },
};
module.exports = options;


