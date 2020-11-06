/**
 * 左侧菜单配置
 */
const menuList  = [
  {
    index: '1',
    menuImage: 'el-icon-s-home',
    text: '首页',
    slot: 'title',
    child: [
      {
        text: '首页',
        menuImage: '',
        slot: '',
        path: '/main'
      }
    ]
  },
  {
    index: '2',
    menuImage: 'el-icon-document',
    text: '订单',
    slot: 'title',
    child: [
      {
        text: '订单列表',
        menuImage: '',
        slot: '',
        path: '/order'
      },
    ]
  },
  {
    index: '3',
    menuImage: 'el-icon-s-custom',
    text: '用户',
    slot: 'title',
    child: [
      {
        text: '用户列表',
        menuImage: '',
        slot: '',
        path: '/user'
      },
    ]
  }
]

export default menuList;