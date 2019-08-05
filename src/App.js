import React from 'react';
import './App.css';
import classNames from 'classnames';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    selectedIndex: 0,
  };

  handleSelectTab = (index) => {
    this.setState({ selectedIndex: index });
  };

  render() {
    const { tabs, selectedIndex } = this.state;

    return (
      <div className="App">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <div
              className={classNames('tab', { active: selectedIndex === index })}
              onClick={() => this.handleSelectTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <p className="tab__content">{tabs[selectedIndex].content}</p>
      </div>
    );
  }
}

export default App;
