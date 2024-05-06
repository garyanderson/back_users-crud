const catchError = controller => {
    return (req, res, next) => {
        controller(req, res, next)
            .catch(console.log(next));
    }
}

module.exports = catchError