# Map Performance comparison

Just a simple thing to test in isolation different map implementations.

Interesting results:
At least in windows 10, no matter the size of the list to be mapped over, ramda and lodash/map is dramatically
faster than built in methods.  Even after for...of optimizations in the latest v8, using node 10.1.0

## 8.11.1
```
nativeMap x 6.28 ops/sec ±2.92% (19 runs sampled)
nativeFor x 14.64 ops/sec ±5.28% (29 runs sampled)
lodash x 27.89 ops/sec ±3.81% (35 runs sampled)
lodash/map x 34.50 ops/sec ±3.99% (36 runs sampled)
ramda x 35.91 ops/sec ±4.31% (30 runs sampled)
Fastest is ramda,lodash/map
nativeMap: 159.34 ± 0.09 ms
nativeFor: 68.29 ± 0.09 ms
lodash: 35.85 ± 0.02 ms
lodash/map: 28.99 ± 0.01 ms
ramda: 27.85 ± 0.01 ms
```

## 10.1.0

```
nativeMap x 6.40 ops/sec ±2.02% (20 runs sampled)
nativeFor x 16.26 ops/sec ±7.31% (35 runs sampled)
lodash x 27.78 ops/sec ±3.11% (39 runs sampled)
lodash/map x 38.65 ops/sec ±4.37% (52 runs sampled)
ramda x 39.23 ops/sec ±4.14% (43 runs sampled)
Fastest is ramda,lodash/map
nativeMap: 156.35 ± 0.05 ms
nativeFor: 61.49 ± 0.18 ms
lodash: 36.00 ± 0.01 ms
lodash/map: 25.87 ± 0.02 ms
ramda: 25.49 ± 0.01 ms

```

