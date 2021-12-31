import React, { useState } from 'react';

import { View } from 'react-native';

export default function WebAspectView(props) {
    const [column, setColumn] = useState(true);
    const [basis, setBasis] = useState(0);

    function onLayout({ nativeEvent }) {
        const style = { ...props.style };
        if ('flexBasis' in style) {
            const parentStyle = getComputedStyle(nativeEvent.target.parentElement);
            if (parentStyle['flex-direction'] === 'column') {
                setColumn(true);
                setBasis(nativeEvent.layout.height);
            } else {
                setColumn(false);
                setBasis(nativeEvent.layout.width);
            }
        } else {
            if ('width' in style) {
                if (!('height' in style)) {
                    setColumn(false);
                    setBasis(nativeEvent.layout.width);
                }
            } else {
                if ('height' in style) {
                    setColumn(true);
                    setBasis(nativeEvent.layout.height);
                }
            }
        }
        if (props.onLayout) {
            props.onLayout({ nativeEvent });
        }
    }

    const style = { ...props.style };
    if (column) {
        style.width = basis * props.ratio;
    } else {
        style.height = basis / props.ratio;
    }

    return (
        <View
            {...props}
            style={style}
            onLayout={onLayout}
        >
            {props.children}
        </View>
    );
}
