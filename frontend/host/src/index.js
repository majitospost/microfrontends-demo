// Module Federation needs its shared-module scope initialized before
// any component tree renders, so the actual app entry is deferred
// behind a dynamic import. Importing App/bootstrap synchronously here
// would risk resolving shared deps (react, react-dom) before webpack
// has negotiated versions with the remotes.
import('./bootstrap');
