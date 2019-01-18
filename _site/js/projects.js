var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} // Dummy data placeholder. Replace with array of actual data objects to come from Airtable 
var data = [
{
"project": "Container Intrusion Detection",
"stack": ["docker", "kubernetes", "elk", "bluemix", "kafka"],
"description": "Intrusion detection system designed for a cloud environment that flags suspicious activity via machine learning techniques and seamlessly integrates with IBM's security advisor for Kubernetes clusters and docker containers.",
"website": "https://www.google.com",
"github": "https://www.github.com",
"image": "img/projects/docker.png",
"status": "Completed" },

{
"project": "RusticSOM",
"stack": ["rust"],
"description": "A library (crate) for creating and manipulating Self Organizing Maps in the RUST programming language.",
"website": "https://www.google.com",
"github": "https://github.com/avinashshenoy97/RusticSOM",
"image": "img/projects/som.png",
"status": "Completed" },

{
"project": "Crypto-Vinaigrette",
"stack": ["python"],
"description": "A python package for generating quantum resistant signatures and key-pairs using multivariate cryptography, specifically, the rainbow scheme.",
"website": "https://www.google.com",
"github": "https://github.com/aditisrinivas97/Crypto-Vinaigrette",
"image": "img/projects/crypto.png",
"status": "Completed" },
{
"project": "Bitmap4Rust",
"stack": ["rust"],
"description": "A library (crate) for creating and manipulating bitmaps in the Rust programming language.",
"website": "https://www.google.com",
"github": "https://github.com/aditisrinivas97/Bitmap4Rust",
"image": "img/projects/bitmap.png",
"status": "Completed" },

{
"project": "Brownie-Points",
"stack": ["python", "django", "aws"],
"description": "Built and implemented a blockchain based cryptocurrency with quantum resistant signatures.",
"website": "https://www.google.com",
"github": "https://github.com/avinashshenoy97/brownie-points",
"image": "img/projects/brownie.png",
"status": "Completed" },


{
"project": "ARMulate",
"stack": ["nwjs"],
"description": "Web based desktop application to emulate an ARM processor and execute low level ARM assembly code, with an in-built interpreter to monitor the state of the emulated ARM processor, ie., its registers and memory.",
"website": "https://www.google.com",
"github": "https://github.com/avinashshenoy97/ARMulate",
"image": "img/projects/armulate.png",
"status": "Completed" },

{
"project": "MyFS",
"stack": ["clang"],
"description": "Built a file system in user space from scratch using FUSE, in C.",
"website": "https://www.google.com",
"github": "https://github.com/aditisrinivas97/MyFS",
"image": "img/projects/fs.png",
"status": "Completed" },

{
"project": "Pokerman",
"stack": ["jupyter", "python"],
"description": "Designed and built an analytic model for predicting an opponents hand in traditional texas holdem poker.",
"website": "https://www.google.com",
"github": "https://github.com/aditisrinivas97/Pokerman",
"image": "img/projects/poker.png",
"status": "Completed" },

{
"project": "BrewTE",
"stack": ["clang"],
"description": "A minimalistic terminal based text editor.",
"website": "https://www.google.com",
"github": "https://github.com/aditisrinivas97/BrewTE",
"image": "img/projects/brewte.png",
"status": "Completed" },
{
"project": "Gesture Controlled Car",
"stack": ["arduino", "clang"],
"description": "Designed and built a working prototype of a gesture controlled car, using an Arduino board. The movement of the car is controlled via glove, retrofitted with a tiny accelerometer and RF transmitter. The miniature car was capable of moving in all 4 directions.",
"website": "https://www.google.com",
"github": "https://github.com/aditisrinivas97/Gesture-Controlled-Car",
"image": "img/projects/car.png",
"status": "Completed" },
{
"project": "Unsupervised Techniques for Significant Event Detection in Non-Linear Time Series data",
"stack": ["jupyter", "python"],
"description": "Rsearch project that involved designing and building an analytic model for detecting significant events in time series data, independant of the source domain. Tested the model on stock market data, presidential election data, cricket match data, etc.",
"website": "https://www.google.com",
"github": "https://github.com/aditisrinivas97/MyFS",
"image": "img/projects/research.png",
"status": "Completed" },
{
"project": "XV6 - Scanf",
"stack": ["clang"],
"description": "Scanf functionality added to the xv6 operating system.",
"website": "https://www.google.com",
"github": "https://github.com/aditisrinivas97/xv6-with-scanf",
"image": "img/projects/os.png",
"status": "Completed" },

{
"project": "Bitcoin Price Predictor",
"stack": ["jupyter", "python"],
"description": "An application that attempts to predict the closing price of a Bitcoin one day ahead of time.",
"website": "https://www.google.com",
"github": "https://github.com/avinashshenoy97/bitcoin_predictor",
"image": "img/projects/bitcoin.png",
"status": "Completed" },

{
"project": "Pod",
"stack": ["clang"],
"description": "A minimalistic shell build using C.",
"website": "https://www.google.com",
"github": "https://github.com/AkankshaSomayaji/MyShell",
"image": "img/projects/shell.png",
"status": "Completed" }
];



function Layout(props) {
  return (
    React.createElement("div", { className: "row" }, props.children));

}var

Card = function (_React$Component) {_inherits(Card, _React$Component);function Card() {_classCallCheck(this, Card);return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));}_createClass(Card, [{ key: "render", value: function render()
    {
      var style = {
        img: {
          maxWidth: "400px" } };


      return (
        React.createElement("div", { className: "col m4" },
          React.createElement("div", { className: "card hoverable" },
            React.createElement("div", { className: "card-image waves-effect waves-block waves-light" },
              React.createElement("img", { style: style.img, className: "activator", src: this.props.data.image })),

            React.createElement("div", { className: "card-content" },
              React.createElement("div", null,
                React.createElement(StackIcons, { data: this.props.data.stack })),

              React.createElement("span", { className: "card-title activator grey-text text-darken-4" },
                this.props.data.project,
                React.createElement("i", { className: "material-icons right" }, "more_vert")),

              React.createElement("div", null,
                //React.createElement("span", null, React.createElement("a", { href: this.props.data.website }, "Website")), 
                React.createElement("span", null, React.createElement("a", { className: "github", href: this.props.data.github }, "Github")))),


            React.createElement("div", { className: "card-reveal" },
              React.createElement("span", { className: "card-title grey-text text-darken-4" }, this.props.data.project, React.createElement("i", { className: "material-icons right" }, "close")),
              React.createElement("div", null, React.createElement("span", { className: "status", margin: "10%"}, this.props.data.status)),
              React.createElement("p", {style: {color: "black", marginTop: "10%", fontSize: "11pt"}}, this.props.data.description),
              React.createElement("p", null, React.createElement("strong", null, "Need:")),
              React.createElement("p", null, this.props.data.needs)))));




    } }]);return Card;}(React.Component);


// Note: Empty span tag on line 115 is there as placeholder for
// the custom CSS to inject text based on stack item.
function StackIcons(props) {
  var array = props.data;
  var icons = array.map(function (item) {
    return (
      React.createElement("div", { key: item, className: "icon" },
        React.createElement("span", { className: item }, React.createElement("span", null))));


  });
  return (
    React.createElement("div", null, " ", icons, " "));

}

function Projects(props) {
  var projects = [];
  var data = props.data;
  data.forEach(function (item) {projects.push(React.createElement(Card, { data: item }));});
  return (
    React.createElement("div", null, projects));

}

ReactDOM.render(
React.createElement(Layout, { children: React.createElement(Projects, { data: data }) }),
document.getElementById('root'));