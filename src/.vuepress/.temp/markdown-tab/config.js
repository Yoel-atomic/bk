import { CodeTabs } from "D:/vth/mybk/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_yvur6pxoqwpluphsmrox6uxla4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/vth/mybk/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_yvur6pxoqwpluphsmrox6uxla4/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/vth/mybk/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.52_markdown-it@14.1.0_vuepress@2.0.0-rc.17_@vuepress+b_yvur6pxoqwpluphsmrox6uxla4/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
