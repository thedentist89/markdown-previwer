import React, { Component } from "react";
import styled, { css } from "styled-components";
import marked from "marked";
import "./App.css";

const Textarea = styled.textarea`
  width: 99%;
  height: 200px;
  background: #1e2431;
  resize: vertical;
  border: none;
  color: #bfc0bb;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const Editor = styled.div`
  margin: 30px auto;
  width: auto;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  width: 700px;
  border: 1px solid grey;
  background: #1e2431;

  @media only screen and (max-width: 768px) {
    width: 600px;
  }

  @media only screen and (max-width: 600px) {
    width: 400px;
  }
`;

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
    width: 600px;
  }

  @media only screen and (max-width: 600px) {
    width: 400px;
  }
`;

const Title = styled.div`
  border-bottom: 1px solid grey;
  background-color: #090e15;
  padding: 5px;
  color: #bfc0bb;

  ${props =>
    props.light &&
    css`
      background-color: #f7f7f7;
      color: #757e88;
      border-radius: 10px 10px 0 0;
      border-bottom: 1px solid #bbb;
    `}
`;

const Content = styled.div`
  background: #f7f7f7;
  padding: 20px;
  height: 100%;
  border-radius: 0 0 10px 10px;
  min-height: 200px;
`;

const content = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends Component {
  state = {
    content: ""
  };

  componentDidMount() {
    this.setState({ content });
  }

  handleChange = ({ currentTarget: input }) => {
    this.setState({ content: input.value });
  };

  createMarkup = () => {
    return { __html: marked(this.state.content) };
  };

  render() {
    return (
      <div className="App">
        <Editor>
          <Title>Editor</Title>
          <Textarea
            id="editor"
            value={this.state.content}
            onChange={this.handleChange}
          />
        </Editor>
        <Wrapper>
          <Title light>Preview</Title>
          <Content
            id="content"
            dangerouslySetInnerHTML={this.createMarkup()}
          ></Content>
        </Wrapper>
      </div>
    );
  }
}

export default App;
