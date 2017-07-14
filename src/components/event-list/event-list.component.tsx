import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements'
import { AppState } from '../../types';
import { EventListFetchAction } from './event-list.actions';

interface State { [key: string]: any }
interface Props { [key: string]: any }

class EventList extends Component<Props, State> {
    constructor(props) {
       super(props);
       this.state = {};
    }

    componentWillMount() {
        this.props.dispatch(EventListFetchAction());
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    style={{flex: 1}}
                    data={this.props.list}
                    renderItem={({item}) => <ListItem title={item.details.name} />}
                />
            </View>
        );
    }
}

// const styles = StyleSheet.create({
//     label: {
//         fontSize: 18,
//         paddingLeft: 20,
//     }
// } as any);

const mapStateToProps = (state: AppState) => {
    return {...state.events};
};

export default connect(mapStateToProps)(EventList);
