react-native-aspect-view
========================

**THIS REPOSITORY IS CLOSED** because
[react-native-web](https://github.com/necolas/react-native-web) now [supports
the aspect-ratio](https://github.com/necolas/react-native-web/issues/427)
property.

**A React Native View that keeps a consistent aspect ratio in all platforms**

React Native offers the [`aspectRatio` layout
prop](https://reactnative.dev/docs/layout-props#aspectratio) to control the size
of the undefined dimension of a component. However, [React Native for
Web](https://necolas.github.io/react-native-web/) implements this prop using the
[`aspect-ratio` CSS
property](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio), which
is similar but not equivalent.

The `AspectView` React Component is a `View` that uses `aspectRatio` in Android
and iOS but does not use `aspect-ratio` in the web. Instead, it uses `onLayout`
to emulate the behavior.


Peer dependencies
-----------------

``` json
{
    "react": "^17.0.1",
    "react-native": ">=0.64.3"
}
```


Install
-------

With npm:

```
npm install @hashiprobr/react-native-aspect-view
```

With yarn:

```
yarn add @hashiprobr/react-native-aspect-view
```

If using Expo, add the module to `webpack.config.js`:

``` js
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync({
        ...env,
        babel: {
            dangerouslyAddModulePathsToTranspile: [
                '@hashiprobr/react-native-aspect-view',
            ],
        },
    }, argv);
    return config;
};
```

If `webpack.config.js` does not exist, create it with:

```
expo customize:web
```


Props
-----

| name  | description                                                |
|-------|------------------------------------------------------------|
| ratio | a number representing the width/height ratio (default `1`) |

[...View props](https://reactnative.dev/docs/view#props)


Example
-------

Square view:

``` js
import { Text } from 'react-native';

import AspectView from '@hashiprobr/react-native-aspect-view';

export default function MyComponent() {
    return (
        <AspectView ratio={1}>
            <Text>hello world</Text>
        </AspectView>
    );
}
```

Width larger than height:

``` js
import { Text } from 'react-native';

import AspectView from '@hashiprobr/react-native-aspect-view';

export default function MyComponent() {
    return (
        <AspectView ratio={4/3}>
            <Text>hello world</Text>
        </AspectView>
    );
}
```

Height larger than width:

``` js
import { Text } from 'react-native';

import AspectView from '@hashiprobr/react-native-aspect-view';

export default function MyComponent() {
    return (
        <AspectView ratio={3/4}>
            <Text>hello world</Text>
        </AspectView>
    );
}
```
