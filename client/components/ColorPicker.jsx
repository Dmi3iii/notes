import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './ColorPicker.less';

const COLORS = ['#FFFFFF', '#80D8FF', '#FFFF8D', '#FF8A80',
	'#CCFF90', '#CFD8DC', '#FFD180', '#C0FFEE'];

class ColorPicker extends PureComponent {
	render() {
		const {value, onChange} = this.props;
		return (
			<div className="ColorPicker">
				{COLORS.map((color, index) => (
					<div
						role="menuItem"
						tabIndex={index === 0 ? 0 : -1}
						key={color}
						className={value === color ? 'ColorPicker__swatch selected' : 'ColorPicker__swatch'}
						style={{backgroundColor: color}}
						onClick={onChange.bind(null, color)}
						onKeyPress={() => {}}
					/>
				))
				}
			</div>
		);
	}
}

ColorPicker.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
};

export default ColorPicker;
