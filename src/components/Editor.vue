<template>
  <div class="site-editor">
    <div class="site-editor-header d-flex justify-content-between">
      <select class="site-editor-lang site-select" v-model="cmOptions.mode">
        <option value="text/clike">C++</option>
        <option value="text/python">Python</option>
        <option value="text/javascript">Javascript</option>
      </select>
      <div
        class="site-editor-options d-flex align-items-center"
        v-if="!editorialMode"
      >
        <select class="site-select" v-model="cmOptions.theme">
          <option value="idea">Idea</option>
          <option value="dracula">Dracular</option>
          <option value="base16-dark">Solarized Dark</option>
          <option value="default">Solarized Light</option>
        </select>
        <select class="site-select" v-model="cmOptions.keyMap">
          <option value="emacs">Emacs</option>
          <option value="vim">Vim</option>
          <option value="sublime">None</option>
        </select>
        <select class="site-select" v-model="fontSize">
          <option value="small">Small</option>
          <option value="normal">Normal</option>
          <option value="large">Large</option>
        </select>
        <select class="site-select" v-model="cmOptions.tabSize">
          <option value="2">2 Spaces</option>
          <option value="4">4 Spaces</option>
        </select>
        <div class="d-flex align-items-center">
          <label class="switch">
            <input v-model="showHint" type="checkbox" />
            <span class="slider round"></span>
          </label>
          <label>Auto-completion</label>
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 215.35 215.35"
            style="enable-background:new 0 0 215.35 215.35;"
            xml:space="preserve"
          >
            <g>
              <path
                d="M7.5,65.088c4.143,0,7.5-3.358,7.5-7.5V25.61l48.305,48.295c1.465,1.464,3.384,2.196,5.303,2.196
		c1.92,0,3.84-0.732,5.304-2.197c2.929-2.929,2.929-7.678-0.001-10.606L25.604,15.002h31.985c4.142,0,7.5-3.358,7.5-7.5
		c0-4.142-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.358-7.5,7.5v50.087C0,61.73,3.357,65.088,7.5,65.088z"
              />
              <path
                d="M207.85,150.262c-4.143,0-7.5,3.358-7.5,7.5v31.979l-49.792-49.792c-2.93-2.929-7.678-2.929-10.607,0
		c-2.929,2.929-2.929,7.678,0,10.606l49.791,49.791h-31.977c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h50.086
		c4.143,0,7.5-3.358,7.5-7.5v-50.084C215.35,153.62,211.992,150.262,207.85,150.262z"
              />
              <path
                d="M64.792,139.949L15.005,189.74v-31.978c0-4.142-3.357-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v50.086c0,4.142,3.357,7.5,7.5,7.5
		h50.084c4.142,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H25.611l49.788-49.793c2.929-2.929,2.929-7.678-0.001-10.607
		C72.471,137.02,67.722,137.02,64.792,139.949z"
              />
              <path
                d="M207.85,0.002h-50.086c-4.143,0-7.5,3.358-7.5,7.5c0,4.142,3.357,7.5,7.5,7.5h31.979l-48.298,48.301
		c-2.929,2.929-2.929,7.678,0.001,10.607c1.464,1.464,3.384,2.196,5.303,2.196c1.919,0,3.839-0.733,5.304-2.197l48.298-48.301v31.98
		c0,4.142,3.357,7.5,7.5,7.5c4.143,0,7.5-3.358,7.5-7.5V7.502C215.35,3.359,211.992,0.002,207.85,0.002z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <hr />
    <CodeMirror
      ref="myCm"
      :value="code"
      :options="cmOptions"
      @ready="onCmReady"
      @focus="onCmFocus"
      @input="onCodeChange"
      :class="fontSize"
    >
    </CodeMirror>
  </div>
</template>

<script>
import { codemirror as CodeMirror } from "vue-codemirror";
import "@/assets/css/codemirror.css";
import "codemirror/mode/javascript/javascript.js";
import "codemirror/mode/python/python.js";
import "codemirror/mode/clike/clike.js";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/idea.css";
import "codemirror/keymap/emacs.js";
import "codemirror/keymap/vim.js";
import "codemirror/keymap/sublime.js";
import "codemirror/lib/codemirror";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/anyword-hint";
import "codemirror/addon/hint/javascript-hint";
export default {
  data() {
    return {
      showHint: true,
      fontSize: "normal",
      cmOptions: {
        tabSize: 4,
        mode: "text/javascript",
        lineNumbers: true,
        line: true,
        styleActiveLine: true,
        matchBrackets: true,
        lineWrapping: true,
        theme: "default",
        extraKeys: {
          Ctrl: "autocomplete"
        },
        foldGutter: true,
        placeholder: "Please end with ';'",
        keyMap: "sublime"
      }
    };
  },
  props: {
    code: {
      type: String,
      required: false
    },
    onCodeChange: {
      type: Function,
      required: true
    },
    editorialMode: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CodeMirror
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
  },
  methods: {
    onCmReady(cm) {
      cm.on("keypress", () => {
        if (this.showHint) {
          cm.showHint();
        }
      });
    },
    onCmFocus() {
      //   console.log("the editor is focus!", cm);
    }
  },
  mounted() {
    // console.log("this is current codemirror object", this.codemirror);
    // you can use this.codemirror to do something...
  }
};
</script>

<style scoped>
.site-editor {
  margin: 40px 0;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.12);
}
.site-editor-header {
  background-color: #ffffff;
  padding: 16px;
  font-size: 14px;
}

.site-editor-header > * {
  font-weight: 300;
}

.site-editor-options select {
  margin-right: 16px;
}

.site-editor-options div svg {
  width: 16px;
  height: 16px;
  fill: #cccccc;
  margin-left: 9px;
  cursor: pointer;
}

.site-editor hr {
  margin: 0 auto;
  border: 1px solid #eeeeee;
  width: 99%;
}

.site-editor .switch {
  margin-right: 5px;
}

@media screen and (max-width: 1000px) {
  .site-select {
    height: 37px;
    min-width: 80px;
    padding: 5px;
  }

  .site-editor-header,
  .site-select {
    font-size: 11px;
  }
}

@media screen and (max-width: 720px) {
  .site-editor-options select {
    display: none;
  }
}
</style>
