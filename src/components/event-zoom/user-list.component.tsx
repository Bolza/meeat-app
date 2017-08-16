import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';

interface State { [key: string]: any };
interface Props { [key: string]: any }

class UserListComponent extends Component<Props, State> {
    render() {
        let listItems;
        if (this.props.items.length) {
            listItems = this.props.items.map((guestId) =>
                <ListItem
                    hideChevron
                    roundAvatar
                    avatar={'http://via.placeholder.com/150x150'}
                    key={guestId}
                    title={guestId}
                />
            );
        } else {
            // listItems = <ListItem title={'No Users'} />
            listItems = <Text>No Users</Text>
        }
        return (
            <List>
                {listItems}
            </List>
        );
    }
}

const styles = StyleSheet.create({

} as any);

export {UserListComponent as UserList};