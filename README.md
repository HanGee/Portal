# Portal

Portal for HanGee Plan



## Tools you need

* [Node.js](http://nodejs.org/)
* [SASS](http://sass-lang.com/install)


## Quick start

setup

```
$ git clone git@github.com:HanGee/Portal.git && cd Portal && npm start
```


## Deploy

run node server in background

```
grunt deploy
```

when stop

```
grunt forever:server:stop
```

## Troubleshooting

If you got the error like:

```
Running "sass:main" (sass) task
ERROR: Cannot load compass.
ERROR: Cannot load compass.
```

you can try

```
gem install compass --pre
```

Check this [issue at grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass/issues/103)
