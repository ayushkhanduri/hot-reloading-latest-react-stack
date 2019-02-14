import * as React from 'react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import CardUI from '../../presentational/Card/CardUI';
import CounterComponent from '../Counter/Counter.component';

import {AddCards,DeleteCard} from '../../actions/card.action';

import { cards } from '../../utils/constants';
import { guidGenerator } from '../../utils/helper';


interface IPropCardComponent {
    allCards:Array<CardType.ICard> ,
    AddCards(cards:Array<CardType.ICard>):Card ,
    DeleteCard(id:string):CardType.ICardAction
}

class Card extends React.Component<IPropCardComponent ,{}>{
    
    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.allCards.length) {
            const {AddCards: addCards}  = this.props;
            cards.forEach(item => item.id = guidGenerator());
            addCards(cards);
        }
    }

    deleteCard(id:string) {
        const { DeleteCard } = this.props;
        DeleteCard(id);
    }
    
    render():React.ReactNode {
        const { allCards } = this.props; 
        console.log('cards render');
        return(
            <div id='grid'>
                <CardUI deleteCard={this.deleteCard.bind(this)} data={allCards}/>
                <CounterComponent></CounterComponent>
            </div>

        )
    }
}

interface IStateToProps {
    allCards: Array<CardType.ICard>
}

interface IDispatchToProps{
    AddCards: (cards: CardType.ICard) => void,
    DeleteCard: (id: string) => void
}

const mapStateToProps = ({Card}:{Card:CardType.ICardStore}):any =>(
    {   
        allCards: Card.collection || []
    }
)

const mapDispatchToProps = (dispatch:any):IDispatchToProps => (
    bindActionCreators({
        AddCards,
        DeleteCard
    },dispatch)
);

export default connect<IPropCardComponent>(mapStateToProps,mapDispatchToProps)(Card);