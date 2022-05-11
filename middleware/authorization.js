function authorization(req, res, next) {
  const session = req.session.user;

  if (!session) {
    res.redirect("/login");
  } else {
    res.set(
      "Cache-Control",
      "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
    );
    next();
  }
}

module.exports = authorization;
