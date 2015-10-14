TouchTimePicker = React.createClass({
    displayName: 'TouchTimePicker',
    getInitialState () {
        let {step=15, showLimit=8, startFromTimeStr, minTimeStr, maxTimeStr, defaultValue, disabledValues = []} = this.props;
        let current = moment(startFromTimeStr, 'HH:mm');
        current = current.isValid() ? current : moment();
        let min = moment(minTimeStr, 'HH:mm');
        min = min.isValid() ? min : moment().startOf('day');
        let max = moment(maxTimeStr, 'HH:mm');
        max = max.isValid() ? max : moment().endOf('day');
        return {step, showLimit, current, min, max, disabledValues, value: defaultValue};
    },
    componentWillReceiveProps(nextProps){
        if(nextProps.value){
            this.setState({value: nextProps.value});
        }
    },
    render () {
        const {step, showLimit, current, disabledValues, value, max, min} = this.state;
        const buttons = [];
        for (let i = 0; i < showLimit; i++) {
            let date = moment(current).add(i * step, 'm');
            let label = date.format('HH:mm');
            buttons.push(
                <button key={i} onClick={()=>{this.select(label, date.valueOf())}}
                        className={
                        'ui button' + (disabledValues.indexOf(label)!== -1? ' disabled': '')
                        + (value === label? ' active' : '')
                        }>
                    { label }
                </button>
            );
        }
        return (
            <div className="touch-time-picker">
                <div className="ui buttons basic">
                    <button className={
                    'ui labeled icon button left empty'
                    + (moment(current).subtract(this.step, 'm').isBefore(min)? ' disabled': '')
                    } onClick={this.subtract}>
                        <i className="left chevron icon"></i>
                    </button>
                    {buttons}
                    <button className={
                        'ui labeled right icon button empty'
                        + (moment(current).add((showLimit + 1) * this.state.step, 'm').isAfter(max)?' disabled': '')
                    } onClick={this.add}>
                        <i className="right chevron icon"></i>
                    </button>
                </div>
            </div>
        );
    },
    subtract () {
        let newCurrent = moment(this.state.current).subtract(1 * this.state.step, 'm');
        newCurrent = moment.max(newCurrent, this.state.min);
        this.setState({
            current: newCurrent
        });
    },
    add(){
        let newCurrent = moment(this.state.current).add(1 * this.state.step, 'm');
        if(moment(newCurrent).add((this.state.showLimit - 1) * this.state.step, 'm').isBefore(this.state.max)){
            this.setState({
                current: newCurrent
            });
        }
    },
    select (label,ts) {
        this.setState({value: label});
        if(typeof this.props.onChange === 'function'){
            this.props.onChange(label,ts);
        }
    }
});


if(typeof System !== 'undefined'){
    System.set(System.normalizeSync('{cristo:touch-time-picker}'), System.newModule({ default: TouchTimePicker }));
}

CristoTouchTimePicker = TouchTimePicker;