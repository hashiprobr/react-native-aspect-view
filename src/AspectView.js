import React from 'react';

import { Platform, View } from 'react-native';

import WebAspectView from './WebAspectView';

export default function AspectView(props) {
    let ratio;
    if (Number.isFinite(props.ratio) && props.ratio > 0) {
        ratio = props.ratio;
    } else {
        ratio = 1;
    }

    return Platform.OS === 'web' ? (
        <WebAspectView
            {...props}
            ratio={ratio}
        >
            {props.children}
        </WebAspectView>
    ) : (
        <View
            {...props}
            style={{
                ...props.style,
                aspectRatio: ratio,
            }}
        >
            {props.children}
        </View>
    );
}
