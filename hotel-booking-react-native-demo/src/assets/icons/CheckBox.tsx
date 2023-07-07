import React from 'react';
import {Pressable, View} from 'react-native';

export const Checkbox = (props: any) => {
  return (
    <>
      <Pressable>
        {props.value ? <View>
          <svg
            width={props.width}
            height="80px"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet">
            <path
              fill="#0B8ABB"
              d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z"></path>
            <path
              fill="#FFF"
              d="M29.28 6.362a2.502 2.502 0 0 0-3.458.736L14.936 23.877l-5.029-4.65a2.5 2.5 0 1 0-3.394 3.671l7.209 6.666c.48.445 1.09.665 1.696.665c.673 0 1.534-.282 2.099-1.139c.332-.506 12.5-19.27 12.5-19.27a2.5 2.5 0 0 0-.737-3.458z"></path>
          </svg>
        </View> :
        <View>
          <svg
            fill="#000000"
            width={props.width + 10}
            height="80px"
            viewBox="1 0 14 14"
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg">
            <path d="m 11.666667,2.33333 0,9.33334 -9.3333337,0 0,-9.33334 9.3333337,0 M 11.666667,1 2.3333333,1 C 1.6,1 1,1.6 1,2.33333 l 0,9.33334 C 1,12.4 1.6,13 2.3333333,13 l 9.3333337,0 C 12.4,13 13,12.4 13,11.66667 L 13,2.33333 C 13,1.6 12.4,1 11.666667,1 l 0,0 z" />
          </svg>
        </View>}
      </Pressable>
    </>
  );
};
