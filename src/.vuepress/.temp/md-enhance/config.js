import CodeDemo from "D:/vth/mybk/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_markdown-it@14.1.0_sass-embedded@1.79.5_vuepress@2.0.0_rcd7v4u3ongacxib3mcsrew7i4/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/vth/mybk/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_markdown-it@14.1.0_sass-embedded@1.79.5_vuepress@2.0.0_rcd7v4u3ongacxib3mcsrew7i4/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/vth/mybk/node_modules/.pnpm/@mdit+plugin-spoiler@0.13.1_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "D:/vth/mybk/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.57_markdown-it@14.1.0_sass-embedded@1.79.5_vuepress@2.0.0_rcd7v4u3ongacxib3mcsrew7i4/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
