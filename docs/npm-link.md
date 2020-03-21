# How to test your new NPM module

We can and should write some tests in the viking module project
itself, but at some point, it’s probably a good idea to open up a
new NPM project (with `>npm init`), and install the viking module
which is currently in development on your local machine. Let’s call
this secondary project, which is designed to directly test our
viking project, `Tudor`. tudor depends on the viking project.

The problem in general, for the naïve observer, is that you would
then have to publish the viking module, and then use `npm install
viking` in the tudor project. Not only that, but every time you
make any changes to viking, you will have to publish it to NPM and
then re-install/update it in tudor. Not pleasant to say the least.

## Using `npm link`

Now, using absolute paths to develop local modules is actually just
a step towards understanding what’s going on a little better. It’s
really not a good solution. Why? Well, for the obvious reason that
you currently have a path in your codebase that won’t work for
anyone else but you and your local machine. You really don’t want
to be changing the require path back-and-forth every time you go
through a develop and publish cycle. 

```bash
#!/usr/local/env bash
set -e;
cd <viking-project-root>
npm link # create a global symlink to the local "viking" project
cd <tudor-project-root>
npm link viking # create a symlink locally to global viking symlink

# voila! now we can develop the two projects side-by-side without   
# having to worry about publishing either of them
```

First,  `npm  link`  in a package folder will create a symlink in the global
folder `{prefix}/lib/node_modules/<package>`  that links to the package where
the  `npm  link`  command  was  executed. It will also link any  bins  in  the  package  to  `{pre-fix}/bin/{name}`.


NPM link works fairly magically, but that it will update the relevant directories in a project’s node_modules directory. Note that you cannot install a project as dependency of itself, but you *can* symlink a project to itself. Doing the latter makes for testing a module very easy, because you can avoid relative paths, etc.

A third solution is that we can use npm pack to pack the other local project, 

For  anything that's installable (that is, a package folder, tarball, tar-
ball url, name@tag, name@version, name, or scoped name), this command will
fetch  it  to  the cache, and then copy the tarball to the current working
directory as <name>-<version>.tgz, and then write  the  filenames  out  to
stdout.

and then we install it with:

```
npm install /absolute/path/to/project/<viking-version>.tgz
```
