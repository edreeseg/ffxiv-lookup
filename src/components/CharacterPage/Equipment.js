import React from 'react';
import styled from 'styled-components';

const StyledEquipment = styled.section`
    position: absolute;
    top: 40px;
    right: calc(10% - 15px);
    width: 25%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    background: ${props => props.bg};
    background-size: auto 100%;
    padding: 15px;
    border-radius: 5px;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;

        img {
            height: 40px;
            cursor: pointer;
            margin: 0 3%;
            border: 1px solid black;
            border-radius: 6px;

            &:hover {
                border-color: yellow;
            }
        }
    }
`;

const JobDisplay = styled.section`
    position: absolute;
    top: 0;
    transform: translateY(-100%);
    display: flex;
    align-items: center;
    z-index: 2;
    height: 40px;

    img {
        height: 100%;
    }

    h3 {
        font-size: 2rem;
    }
`;

class Equipment extends React.Component {
    state = {
        mainHand: { 
            item: {
                name: 'Main Hand Item', icon: 'https://i.imgur.com/MGsijcO.png'
            }
        },
        offHand: { 
            item: { 
                name: 'Off Hand Item', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        head: { 
            item: { 
                name: 'Head Item', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        body: { 
            item: { 
                name: 'Body Item', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        hands: {
            item: {
                name: 'Hands Item', icon: 'https://i.imgur.com/MGsijcO.png'
            }
        },
        waist: { 
            item: { 
                name: 'Waist Item', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        legs: { 
            item: { 
                name: 'Legs Item', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        feet: { 
            item: { 
                name: 'Feet Item', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        earrings: { 
            item: { 
                name: 'Earrings', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        necklace: { 
            item: { 
                name: 'Necklace', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        bracelets: { 
            item: { 
                name: 'Bracelets', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        ring1: { 
            item: { 
                name: 'Ring', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        ring2: { 
            item: { 
                name: 'Ring', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
        crystal: { 
            item: { 
                name: 'Soul Crystal', icon: 'https://i.imgur.com/MGsijcO.png' 
            } 
        },
    };
    componentDidMount(){
        for (let key in this.props){
            if (key === 'character'){
                this.setState({ [key]: this.props[key] });
            }
            else if (this.props[key]){
                this.props[key].item.icon = `https://xivapi.com${this.props[key].item.icon}`;
                this.setState({ [key]: this.props[key] });
            }
        }
    }
    render(){
        return (
            <StyledEquipment bg={this.state.character ? `url("${this.state.character.portrait}") center no-repeat` : '#272627'}>
            {this.props.character.active_class_job
                ?   <JobDisplay>
                        <img src={`https://xivapi.com${this.props.character.active_class_job.job.icon}`} alt="Job icon" />
                        <h3>{this.props.character.active_class_job.job.name
                            .replace(/^(\w)/, (x, first) => first.toUpperCase())}</h3>
                    </JobDisplay>
                : null }
                <div>
                    <img 
                        src={this.state.mainHand.item.icon} 
                        alt={this.state.mainHand.item.name}
                        title={this.state.mainHand.item.name}
                    />
                </div>
                <div>
                    <img 
                        src={this.state.head.item.icon}
                        alt={this.state.head.item.name}
                        title={this.state.head.item.name}
                    />
                    <img 
                        src={this.state.offHand.item.icon} 
                        alt={this.state.offHand.item.name}
                        title={this.state.offHand.item.name}
                    />
                </div>
                <div>
                    <img 
                        src={this.state.body.item.icon}
                        alt={this.state.body.item.name}
                        title={this.state.body.item.name}
                    />
                    <img 
                        src={this.state.earrings.item.icon}
                        alt={this.state.earrings.item.name}
                        title={this.state.earrings.item.name}
                    />
                </div>
                <div>
                    <img 
                        src={this.state.hands.item.icon} 
                        alt={this.state.hands.item.name}
                        title={this.state.hands.item.name}
                    />
                    <img 
                        src={this.state.necklace.item.icon}
                        alt={this.state.necklace.item.name}
                        title={this.state.necklace.item.name}
                    />
                </div>
                <div>
                    <img 
                        src={this.state.waist.item.icon}
                        alt={this.state.waist.item.name}
                        title={this.state.waist.item.name}
                    />
                    <img 
                        src={this.state.bracelets.item.icon}
                        alt={this.state.bracelets.item.name}
                        title={this.state.bracelets.item.name} 
                    />
                </div>
                <div>
                    <img 
                        src={this.state.legs.item.icon} 
                        alt={this.state.legs.item.name}
                        title={this.state.legs.item.name}
                    />
                    <img 
                        src={this.state.ring1.item.icon}
                        alt={this.state.ring1.item.name}
                        title={this.state.ring1.item.name} 
                    />
                </div>
                <div>
                    <img 
                        src={this.state.feet.item.icon} 
                        alt={this.state.feet.item.name}
                        title={this.state.feet.item.name}
                    />
                    <img 
                        src={this.state.ring2.item.icon}
                        alt={this.state.ring2.item.name}
                        title={this.state.ring2.item.name}
                    />
                </div>
                <div style={ { justifyContent: 'flex-end' } }>
                    <img 
                        src={this.state.crystal.item.icon} 
                        alt={this.state.crystal.item.name}
                        title={this.state.crystal.item.name}
                    />
                </div>
            </StyledEquipment>
        );
    }
}

export default Equipment;