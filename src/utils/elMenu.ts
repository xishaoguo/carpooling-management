const menuList = [
  {
    index: '1',
    menuImage: 'el-icon-s-home',
    text: '我是首页',
    slot: 'title',
    child: [
      {
        index: '1-1',
        text: '首页',
        menuImage: '',
        slot: '',
        path: '/main'
      },
      {
        index: '1-2',
        text: '列表',
        menuImage: '',
        slot: '',
        path: '/user'
      },
    ]
  }
]

export default menuList;