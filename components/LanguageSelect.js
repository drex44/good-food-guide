class LanguageSelect extends React.Component {
    state = {"lang": "english"};
    componentWillMount(){
      let lang = window.navigator.language;
      localStorage.setItem("lang", lang);
      lang = localStorage.getItem("lang");
      this.setState({"lang": lang});
    }
    render(){
      return (<div>
      <select>
        <option value="english">English</option>
        <option value={this.state.lang}>{this.state.lang}</option>
      </select></div>
      );
    }
  }

  export default LanguageSelect;