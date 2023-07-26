
export const auth = async (req, res, next) => {
    if (req.session?.user && req.session.user.username === 'adminCoder@coder.com') {
        return next()
    }
    return res.status(401).json({ status: 'fail', message: 'Auth error' })

}