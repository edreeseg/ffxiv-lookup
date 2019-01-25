import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { searchFetch, changePage } from '../redux/actions';

import Loading from './Loading';
import SearchResult from './SearchResult';

const StyledSearch = styled.section`
    position: relative;
    padding: 0 10px;
    padding-top: 30px;
    min-height: 80%;
    width: 50%;
    margin: 50px auto;
    background: #eee;
`;

const SearchForm = styled.form`
    margin: 0 auto;
    margin-bottom: 20px;
    width: 75%;
`;

const Results = styled.div`

    a {
        display: table;
        margin: 0 auto;
        margin-bottom: 20px;
        width: 90%;
        border: 0.5px solid black;

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

const Prev = styled.span`
    position: fixed;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #eee;
    font-size: 5rem;

    &:active {
        transform: translateY(calc(-50% + 2px));
    }
`;

const Next = styled.span`
    position: fixed;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #eee;
    font-size: 5rem;

    &:active {
        transform: translateY(calc(-50% + 2px));
    }
`;

const PageCount = styled.span`
    position: absolute;
    top: 5px;
    right: 50%;
    transform: translateX(-50%);
`;

class Search extends React.Component {
    state = {
        nameInput: '',
        serverInput: '',

    };
    fetchCharacter = e => {
        e.preventDefault();
        const [name, server] = [this.state.nameInput, this.state.serverInput];
        if (!name) return alert('Please enter a name.');
        this.setState({ nameInput: '', serverInput: '' });
        this.props.searchFetch(name, server);
    }
    handlePageChange = e => {
        e.persist();
        const direction = e.target.getAttribute('direction');
        if (!this.props.searchMax) return;
        else if (direction === 'prev' && this.props.searchPage === 1) return;
        else if (direction === 'next' && this.props.searchPage === this.props.searchMax) return;
        else this.props.changePage(direction, this.props.searchName, this.props.searchServer, this.props.searchPage);
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render(){
        return (
            <StyledSearch>
                {this.props.searchMax
                    ? <PageCount>{this.props.searchPage}/{this.props.searchMax}</PageCount>
                    : null}
                <SearchForm onSubmit={this.fetchCharacter}>
                    <input 
                        type="text" 
                        placeholder="Name"
                        name="nameInput"
                        value={this.state.nameInput}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Server" 
                        name="serverInput"
                        value={this.state.serverInput}
                        onChange={this.handleChange}    
                    />
                    <button type="submit">Search</button>
                </SearchForm>
                <Results>
                <Prev className="fas fa-arrow-circle-left" direction="prev" onClick={this.handlePageChange}></Prev>
                    {this.props.loading ? <Loading />
                    : this.props.searchResults.map(char => <SearchResult key={char.id} data={char} />)}
                    <Next className="fas fa-arrow-circle-right" direction="next" onClick={this.handlePageChange}></Next>
                </Results>
            </StyledSearch>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        searchResults: state.searchResults,
        searchPage: state.searchPage,
        searchMax: state.searchMax,
        searchName: state.searchName,
        searchServer: state.searchServer,
    };
}

export default connect(
    mapStateToProps,
    {
        searchFetch,
        changePage,
    }
)(Search);