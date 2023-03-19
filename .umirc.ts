import { defineConfig } from "umi";

export default defineConfig({


  routes: [
    // { path: "/", component: "@/layouts/index" },
    { path: "/docs", component: 'docs' },
    // { path: "/list", component: "@/pages/TableList" },

    {
      path:'/',
      component:'@/layouts/index',
      routes:[
        { path: "/list", component: "@/pages/component/TableList" },
      ]
    }


  ],
  npmClient: 'npm',
});
