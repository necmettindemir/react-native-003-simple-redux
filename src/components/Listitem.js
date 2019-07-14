import React, { Component } from 'react';
import { 
        View, 
        Text, 
        TouchableWithoutFeedback,
        LayoutAnimation
     } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';
//import { selectLibrary }  from '../actions';


class Listitem extends Component {


    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {

             /*             
        const { library, selectedLibraryId} = this.props;
        
        //if (this.props.library.id === this.props.selectedLibraryId)
        //if (library.id.toString() === selectedLibraryId.toString())
        //if (library.id === selectedLibraryId)
        
        if 
        (
            selectedLibraryId !== null
            && 
            (library.id.toString() === selectedLibraryId.toString())            
        )
        {            
            return  (
                <Text>{library.description}</Text>
            );
            
        }
        */

       const { library, expanded} = this.props;
        
 
       if (expanded)
       {            
           return  (
               <CardSection>
                <Text style={{flex:1}}>
                    {library.description}
                </Text>
               </CardSection>
           );
           
       }

    }

    render() {

        const { titleStyle} = styles;
        const {id, title } = this.props.library;
        
        //console.log(this.props);

        return (

            <TouchableWithoutFeedback
                onPress={ () => 
                    { this.props.selectLibrary(id); }
                }
            >
                <View>
                <CardSection>
                    <Text style={titleStyle}>
                        { title }
                    </Text>
                </CardSection>
                {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>    

        );
        
    }

}

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15
    }
}


//export default Listitem;

//export default connect(null, actions)(Listitem);
/*
const mapStateToProps = (state) => {   
    return { selectedLibraryId: state.selectedLibraryId };
};
*/


//when state in store is changed mapStateToProps runs
const mapStateToProps = (state, ownProps) => {   

    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};

export default connect(mapStateToProps,actions)(Listitem);




