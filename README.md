react + es6 + gulp + webpack

#start
cd react-base
cnpm install
cnpm install -g babel-core
cnpm install gulp -g 
gulp -v

#dev
gulp

#producation
gulp webpack:build

#webpack.config.js
For those using babel-loader 6.2.0 or greater I needed to take the loaders out of the array.you need alone.