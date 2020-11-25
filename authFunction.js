let authorized = true

function checkAuth(req, res, next) {
  if (authorized) {
    next()
  } else {
    res.status(403).send('Unauthorized!')
    return
  }
}