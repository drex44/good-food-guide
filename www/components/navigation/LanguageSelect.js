import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

class LanguageSelect extends React.Component {
  state = { languages: ["en-US"], currentLang: "en-US" };
  componentDidMount() {
    let lang = localStorage.getItem("currentLang");
    if (!lang) {
      lang = window.navigator.language;
      localStorage.setItem("currentLang", lang);
      if (lang !== "en-US") {
        let langs = this.state.languages.append(lang);
        this.setState({ languages: langs });
      }
    }
    this.setState({ currentLang: lang });
  }
  render() {
    const { currentLang, languages } = this.state;
    return (
      <FormControl>
        <InputLabel htmlFor="lang-select">Language</InputLabel>
        <Select
          value={currentLang}
          inputProps={{
            name: "Language",
            id: "lang-select"
          }}
        >
          {languages.map(lang => (
            <MenuItem value={lang}>{lang}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

export default LanguageSelect;
