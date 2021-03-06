import React from 'react';
const cc=require('cryptocompare');
export const AppContext=React.createContext();
export class AppProvider extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page:'dashboard',
            ...this.savedSetting(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }

    }
    componentDidMount=()=>{
        this.fetchCoins();

    }
    fetchCoins =async()=>{
        let coinList = (await cc.coinList()).Data;
        this.setState({coinList});
    }
    confirmFavorites=()=>{
        this.setState({
            firstVisit: false,
            page: 'dashboard',
        });
        localStorage.setItem('cryptoApp',JSON.stringify({
            test: 'hello'
        }));
    }
    savedSetting(){
        let cryptoAppData=JSON.parse(localStorage.getItem('cryptoApp'));
        if(!cryptoAppData){
            return {page: 'settings', firstVisit: true}
        }
        return{};
        
    }
    setPage=page=>this.setState({page})
    render(){
        return(
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
                
        )
    }
}
