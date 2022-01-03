react-native-aspect-view
========================

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


Install
-------

```
npm install @hashiprobr/react-native-aspect-view
```
