import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import Listitem from './Listitem';

class LibraryList extends Component {


    renderItem(library) {
        return (
            <Listitem library={library} />
        );
    }


    render() {

        //console.log('LibraryList : ',this.props);

        return(
            <FlatList 
                data={this.props.libraries}                
                renderItem={({item}) => this.renderItem(item)}
                keyExtractor={(item) => item.id.toString()} 
            />
        );
    }
}


const mapStateToProps = (state) => {
    //console.log(state);
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);