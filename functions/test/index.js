module.exports = async function (context, req) {
    context.log('function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + "."
        : "Whats your name?";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
