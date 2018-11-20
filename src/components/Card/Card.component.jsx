import React,{ Component } from 'react';
//import {MyC} from '@types/react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import CardUI from '../../presentational/Card/CardUI';

import {AddCards,DeleteCard,UpdateCard} from '../../actions/card.action';

import {cards} from '../../utils/constants';
import {guidGenerator} from '../../utils/helper';

class Card extends Component {
    
    constructor() {
        super();
    }

    componentDidMount() {
        if(!this.props.allCards.length) {
            const {AddCards: addCards}  = this.props;
            cards.forEach(item => item.id = guidGenerator());
            addCards(cards);
        }
    }

    deleteCard(id) {
        const {DeleteCard} = this.props;
        DeleteCard(id);
    }
    
    render() {
        const {allCards} = this.props; 
        
        return(
            <div id='grid'>
                <CardUI deleteCard={this.deleteCard.bind(this)} data={allCards}/>
            </div>

        )
    }
}

const mapStateToProps = ({Card = {}}) =>(
    {   
        allCards: Card.collection || []
    }
)

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        AddCards,
        UpdateCard,
        DeleteCard
    },dispatch)
);

export default connect(mapStateToProps,mapDispatchToProps)(Card);