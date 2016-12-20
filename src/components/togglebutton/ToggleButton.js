import React, {Component} from 'react';
import classNames from 'classnames';

export class ToggleButton extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        if(this.props.onChange) {
            this.props.onChange({
                originalEvent: e,
                value: !this.props.checked
            })
        }
    }

    render() {
        var styleClass = classNames('ui-button ui-togglebutton ui-widget ui-state-default ui-corner-all', this.props.className, {
            'ui-button-text-icon-left': (this.props.onIcon && this.props.offIcon),
            'ui-button-text-only': (!this.props.onIcon && !this.props.offIcon) && (this.props.onLabel || this.props.offLabel),
            'ui-state-active': this.props.checked,
            'ui-state-disabled': this.props.disabled
        }),
        iconStyleClass = null;

        if(this.props.onIcon || this.props.offIcon) {
            iconStyleClass = classNames('ui-c fa fa-fw' , this.props.checked ? this.props.onIcon : this.props.offIcon , {
                'ui-button-icon-only': (this.props.onIcon && this.props.offIcon) && (!this.props.onLabel || !this.props.offLabel),
                'ui-button-icon-left': (this.props.onIcon && this.props.offIcon)
            });
        }

        return (
           <div className={styleClass} style={this.props.style} onClick={this.toggle}>
                <div className="ui-helper-hidden-accessible">
                    <input type="checkbox"/>
                </div>
                {(this.props.onIcon && this.props.offIcon) && <span className={iconStyleClass}></span>}
                <span className="ui-button-text ui-unselectable-text">{this.props.checked ? this.props.onLabel : this.props.offLabel}</span>
            </div>
        );
    }
}

ToggleButton.defaultProps = {
    onIcon: null,
    offIcon: null,
    onLabel: 'Yes',
    offLabel: 'No',
    style: null,
    className: null,
    checked: false,
    onChange: null
};

ToggleButton.propTypes = {
    onIcon: React.PropTypes.string,
    offIcon: React.PropTypes.string,
    onLabel: React.PropTypes.string,
    offLabel: React.PropTypes.string,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func
};