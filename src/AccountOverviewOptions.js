import React,  {Component} from 'react';
import { Image } from 'react-native';
import { View, List, ListItem, Icon, Thumbnail, Text } from 'native-base';


const optionsArray = [{
	imgSrc: require('../img/bar-chart.png'),
	optionNmae: 'balance overview',
},{
	imgSrc: require('../img/da.png'),
	optionNmae: 'Spending Report',
},{
	imgSrc: require('../img/bar-chart.png'),
	optionNmae: 'Loan Calculator',
},{
	imgSrc: require('../img/da.png'),
	optionNmae: 'contact us',
}]
class AccountOverviewOptions extends Component {
	render() {
		const { styleListItem, thumbnail } = styles;
    return (
			<View>
				<List>
					{
						optionsArray.map( item => {
							let src = item.imgSrc;
							return(
								<ListItem style={styleListItem}>
									<View style={{flexDirection: 'row', alignItems: 'center'}}>
										<Image square style={thumbnail} source={item.imgSrc} />
										<Text style={{fontSize: 19, textTransform: 'capitalize'}}> {item.optionNmae} </Text>
									</View>
									<View>
										<Icon style={{color: '#3c86f2', fontSize: 21}} name='arrow-forward' />
									</View>
								</ListItem>
							)
						})
					}
				</List>
			</View>
    );
  }
};
const styles = {
	thumbnail: {
		width: 32,
		height: 32,
		marginRight: 20
		// borderBottomWidth: 1,
	},
	styleListItem: {
		justifyContent: 'space-between',
		alignItems: 'center',
	}
}
export default AccountOverviewOptions;