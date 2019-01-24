import React from 'react';
import styled from 'styled-components';

const StyledEquipment = styled.section`
    position: absolute;
    top: 10px;
    right: 5%;
    width: 25%;
    display: flex;
    flex-direction: column;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;

        img {
            cursor: pointer;
        }
    }
`;

class Equipment extends React.Component {
    state = {
        mainHand: { 
            item: {
                name: 'Main Hand Item', icon: ''
            }
        },
        offHand: { 
            item: { 
                name: 'Off Hand Item', icon: '' 
            } 
        },
        head: { 
            item: { 
                name: 'Head Item', icon: '' 
            } 
        },
        body: { 
            item: { 
                name: 'Body Item', icon: '' 
            } 
        },
        hands: {
            item: {
                name: 'Hands Item', icon: ''
            }
        },
        waist: { 
            item: { 
                name: 'Waist Item', icon: '' 
            } 
        },
        legs: { 
            item: { 
                name: 'Legs Item', icon: '' 
            } 
        },
        feet: { 
            item: { 
                name: 'Feet Item', icon: '' 
            } 
        },
        earrings: { 
            item: { 
                name: 'Earrings', icon: '' 
            } 
        },
        necklace: { 
            item: { 
                name: 'Necklace', icon: '' 
            } 
        },
        bracelets: { 
            item: { 
                name: 'Bracelets', icon: '' 
            } 
        },
        ring1: { 
            item: { 
                name: 'Ring', icon: '' 
            } 
        },
        ring2: { 
            item: { 
                name: 'Ring', icon: '' 
            } 
        },
        crystal: { 
            item: { 
                name: 'Soul Crystal', icon: '' 
            } 
        },
    };
    componentDidMount(){
        for (let key in this.props){
            if (this.props[key])
                this.setState({ [key]: this.props[key] });
        }
    }
    render(){
        return (
            <StyledEquipment>
                <div>
                    <img 
                        src={`https://xivapi.com${this.state.mainHand.item.icon}`} 
                        alt={this.state.mainHand.item.name}
                        title={this.state.mainHand.item.name}
                    />
                </div>
                <div>
                    <img 
                        src={`https://xivapi.com${this.state.head.item.icon}`}
                        alt={this.state.head.item.name}
                        title={this.state.head.item.name}
                    />
                    <img 
                        src={`https://xivapi.com${this.state.offHand.item.icon}`} 
                        alt={this.state.offHand.item.name}
                        title={this.state.offHand.item.name}
                    />
                </div>
                <div>
                    <img 
                        src={`https://xivapi.com${this.state.body.item.icon}`} 
                        alt={this.state.body.item.name}
                        title={this.state.body.item.name}
                    />
                    <img 
                        src={`https://xivapi.com${this.state.earrings.item.icon}`} 
                        alt={this.state.earrings.item.name}
                        title={this.state.earrings.item.name}
                    />
                </div>
                <div>
                    <img 
                        src={`https://xivapi.com${this.state.hands.item.icon}`} 
                        alt={this.state.hands.item.name}
                        title={this.state.hands.item.name}
                    />
                    <img 
                        src={`https://xivapi.com${this.state.necklace.item.icon}`} 
                        alt={this.state.necklace.item.name}
                        title={this.state.necklace.item.name}
                    />
                </div>
                <div>
                    <img 
                        src={`https://xivapi.com${this.state.waist.item.icon}`} 
                        alt={this.state.waist.item.name}
                        title={this.state.waist.item.name}
                    />
                    <img 
                        src={`https://xivapi.com${this.state.bracelets.item.icon}`}
                        alt={this.state.bracelets.item.name}
                        title={this.state.bracelets.item.name} 
                    />
                </div>
                <div>
                    <img 
                        src={`https://xivapi.com${this.state.legs.item.icon}`} 
                        alt={this.state.legs.item.name}
                        title={this.state.legs.item.name}
                    />
                    <img 
                        src={`https://xivapi.com${this.state.ring1.item.icon}`}
                        alt={this.state.ring1.item.name}
                        title={this.state.ring1.item.name} 
                    />
                </div>
                <div>
                    <img 
                        src={`https://xivapi.com${this.state.feet.item.icon}`} 
                        alt={this.state.feet.item.name}
                        title={this.state.feet.item.name}
                    />
                    <img 
                        src={`https://xivapi.com${this.state.ring2.item.icon}`} 
                        alt={this.state.ring2.item.name}
                        title={this.state.ring2.item.name}
                    />
                </div>
                <div style={ { justifyContent: 'flex-end' } }>
                    <img 
                        src={`https://xivapi.com${this.state.crystal.item.icon}`} 
                        alt={this.state.crystal.item.name}
                        title={this.state.crystal.item.name}
                    />
                </div>
            </StyledEquipment>
        );
    }
}

export default Equipment;