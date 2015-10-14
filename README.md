# TouchTimePicker
Simple input to choosing time.
Can be used as a module with universe:modules package or as a global `CristoTouchTimePicker`

### [Demo](http://cristo-touch-time-picker.meteor.com)

## Installation

```
    meteor add cristo:touch-time-picker
```

## Example

```
import CristoTouchTimePicker from 'cristo:touch-time-picker'
// in your react component:
//(...)
render () {
        return (
            <div>
                Pick time:
                <CristoTouchTimePicker startFromTimeStr='03:30' defaultValue='05:00'/>
            </div>
        );
    }
//(...)    
```

## Styling 

This field is prepared to work with semantic ui,
but only need styles for button and icon from semantic ui (meteor packages: semantic:ui-button, semantic:ui-icon )

Other way:
If you want, you can make own css styles for this component.

## Props

- step = 15  - in minutes
- showLimit = 8  - how many buttons will be shown
- startFromTimeStr (e.g. '08:00') - time from which should start
- minTimeStr (e.g. '01:30') - min time to show
- maxTimeStr (e.g. '23:30') - max time to show
- defaultValue (e.g. '12:00') - default selected time
- disabledValues (e.g. ['11:15', '13:30', '16:00'])
- onChange - callback, which is called when user pick time
