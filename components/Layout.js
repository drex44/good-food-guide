import Head from "next/head";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import FoodCard from "../components/FoodCard";
import Data from "./dataList";

const PageHead = () => (
  <Head>
    <title>Good Food Guide</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
);


class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      initialItems: Data,
      items: []
    }
  }
  filterList = (event) => {
    let items = this.state.initialItems;
    items = items.filter(item => {
      return item.sick.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: items});
  }
  componentDidMount = () => {
    this.setState({items: this.state.initialItems})
  }
  render() {
    return (
      <div id="layout">
        <PageHead />
        <center>
          <NavigationBar filterList={this.filterList}/>
        </center>
        <div id="content"><FoodCard Data={this.state.items}/></div>
        <Footer />
        <style jsx>{`
          #layout,
          #content {
            margin: 20px;
          }
          color: #625f5f;
        `}</style>
        <style jsx global>
          {`
            a {
              margin: 10px;
              color: #0003ff;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Layout;
