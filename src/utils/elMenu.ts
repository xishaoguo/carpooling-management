/**
 * 左侧菜单配置
 */
const menuList  = [
  {
    index: '1',
    menuImage: 'el-icon-s-home',
    text: '我是首页',
    slot: 'title',
    child: [
      {
        text: '首页',
        menuImage: '',
        slot: '',
        path: '/main'
      },
      {
        text: '用户',
        menuImage: '',
        slot: '',
        path: '/user'
      },
    ]
  }
]

export default menuList;