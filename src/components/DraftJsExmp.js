/* eslint-disable no-script-url */
import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createMentionPlugin, {
  defaultSuggestionsFilter
} from "draft-js-mention-plugin";
import createHashtagPlugin from "draft-js-hashtag-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import createEmojiPlugin from "draft-js-emoji-plugin";
import "../../node_modules/draft-js-mention-plugin/lib/plugin.css";
import "../../node_modules/draft-js-hashtag-plugin/lib/plugin.css";
import "../../node_modules/draft-js-linkify-plugin/lib/plugin.css";
import "../../node_modules/draft-js-emoji-plugin/lib/plugin.css";
import "../../node_modules/draft-js-inline-toolbar-plugin/lib/plugin.css";

import "./Editor/editorStyles.css";

const mentions = [
  {
    name: "Matthew Russell",
    link: "https://twitter.com/mrussell247",
    avatar:
      "https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg"
  },
  {
    name: "Julian Krispel-Samsel",
    link: "https://twitter.com/juliandoesstuff",
    avatar: "https://avatars2.githubusercontent.com/u/1188186?v=3&s=400"
  },
  {
    name: "Jyoti Puri",
    link: "https://twitter.com/jyopur",
    avatar: "https://avatars0.githubusercontent.com/u/2182307?v=3&s=400"
  },
  {
    name: "Max Stoiber",
    link: "https://twitter.com/mxstbr",
    avatar:
      "https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg"
  },
  {
    name: "Nik Graf",
    link: "https://twitter.com/nikgraf",
    avatar: "https://avatars0.githubusercontent.com/u/223045?v=3&s=400"
  },
  {
    name: "Pascal Brandt",
    link: "https://twitter.com/psbrandt",
    avatar:
      "https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png"
  }
];

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;

const text = `Cool, we can have all sorts of Emojis here. 🙌
🌿☃️🎉🙈 send me anything you like `;

export default class CustomEmojiEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: createEditorStateWithText(text),
      suggestions: mentions
    };
    this.mentionPlugin = createMentionPlugin();
  }

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions)
    });
  };

  onAddMention = () => {
    // get the mention object selected
  };

  focus = () => {
    this.editor.focus();
  };

  onChange = editorState => {
    this.setState({
      editorState
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    const hashtagPlugin = createHashtagPlugin();
    const { MentionSuggestions } = this.mentionPlugin;
    const linkifyPlugin = createLinkifyPlugin({
      component: props => (
        // eslint-disable-next-line no-alert, jsx-a11y/anchor-has-content
        <a
          {...props}
          target="blank"
          onClick={() => window.open(props.href, "blank")}
        />
      )
    });

    const inlineToolbarPlugin = createInlineToolbarPlugin();

    const plugins = [
      this.mentionPlugin,
      emojiPlugin,
      hashtagPlugin,
      linkifyPlugin,
      inlineToolbarPlugin
    ];

    return (
      <div className="m-2">
        <p className="n-3 text-info">send me a Note : </p>
        <div className="editor" onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            useNativeArt
            ref={element => {
              this.editor = element;
            }}
          />

          <MentionSuggestions
            onSearchChange={this.onSearchChange}
            suggestions={this.state.suggestions}
            onAddMention={this.onAddMention}
          />
          <EmojiSuggestions />
        </div>
        <div>
          <EmojiSelect />
          <a
            className="text-info   my-2"
            style={{ cursor: "pointer" }}
            href="javaScript:;"
            onClick={() =>
              window.alert(
                "hi !! this website is in making right now,thank you"
              )
            }
          >
            sent
          </a>
        </div>
      </div>
    );
  }
}
