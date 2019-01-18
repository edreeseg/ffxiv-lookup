import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Loading from './Loading';
import SearchResult from './SearchResult';
import * as privateVar from '../private';

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
        currentName: '',
        currentServer: '',
        loading: false,
        response: [],
        page: '1',
        maxPages: '',

    };
    fetchCharacter = e => {
        e.preventDefault();
        const name = this.state.nameInput.replace(/\s/, '+').trim().toLowerCase();
        const server = this.state.serverInput.trim();
        if (!name) return alert('Please enter a character name.');
        this.setState((prevState) => {
            return {
                nameInput: '',
                serverInput: '',
                currentName: prevState.nameInput,
                currentServer: prevState.serverInput,
                loading: true,
                page: '1',
            };
        });
        axios.get('https://xivapi.com/character/search?'
            + `name=${name}`
            + `&server=${server}`
            + `&key=${privateVar.API_Key}`
            + '&page=1'
            + '&snake_case=1')
            .then(res => this.setState(
                { 
                    response: res.data.results.sort((a, b) => {
                        if (a.name === b.name) return a.server > b.server ? 1 : -1;
                        else return 0;
                        }), 
                    loading: false,
                    maxPages: res.data.pagination.page_total,
                }))
            .catch(err => console.log(err));
    }
    handlePageChange = e => {
        e.persist();
        const name = e.target.getAttribute('name');
        if (!this.state.maxPages) return;
        else if (name === 'prev' && this.state.page === '1') return;
        else if (name === 'next' && this.state.page === String(this.state.maxPages)) return;
        this.setState((prevState) => {
            const nextPage = name === 'next' ? Number(prevState.page) + 1 : Number(prevState.page) - 1;
            return {
                page: String(nextPage),
                loading: true,
            };
        }, () => {
            axios.get('https://xivapi.com/character/search?'
            + `name=${this.state.currentName}`
            + `&server=${this.state.currentServer}`
            + `&key=${privateVar.API_Key}`
            + `&page=${this.state.page}`
            + '&snake_case=1')
                .then(res => {
                    this.setState({
                        response: res.data.results.sort((a, b) => {
                            if (a.name === b.name) return a.server > b.server ? 1 : -1;
                            else return 0;
                            }),
                        loading: false,
                    })
                })
                .catch(err => console.log(err));
        });
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render(){
        return (
            <StyledSearch>
                {this.state.maxPages 
                ? <PageCount>{this.state.page}/{this.state.maxPages}</PageCount>
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
                    <button>Search</button>
                </SearchForm>
                <Results>
                    <Prev className="fas fa-arrow-circle-left" name="prev" onClick={this.handlePageChange}></Prev>
                    {this.state.loading ? <Loading />
                    : this.state.response.map(char => <SearchResult key={char.id} data={char} />)}
                    <Next className="fas fa-arrow-circle-right" name="next" onClick={this.handlePageChange}></Next>
                </Results>
            </StyledSearch>
        )
    }
}

export default Search;