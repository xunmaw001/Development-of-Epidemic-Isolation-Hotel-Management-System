const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"菜品类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCaipin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"餐桌管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCaipinOrderCanzhuo"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"房型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryFangjian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"健康状态管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryJiankangshangbao"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"菜品管理",
                        "menuJump":"列表",
                        "tableName":"caipin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"菜品评价管理",
                        "menuJump":"列表",
                        "tableName":"caipinCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"菜品收藏管理",
                        "menuJump":"列表",
                        "tableName":"caipinCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"菜品订单管理",
                        "menuJump":"列表",
                        "tableName":"caipinOrder"
                    }
                ],
                "menu":"菜品管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"客房管理",
                        "menuJump":"列表",
                        "tableName":"fangjian"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"客房评价管理",
                        "menuJump":"列表",
                        "tableName":"fangjianCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"客房收藏管理",
                        "menuJump":"列表",
                        "tableName":"fangjianCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"客房预定管理",
                        "menuJump":"列表",
                        "tableName":"fangjianOrder"
                    }
                ],
                "menu":"客房管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"健康上报管理",
                        "menuJump":"列表",
                        "tableName":"jiankangshangbao"
                    }
                ],
                "menu":"健康上报管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"入住记录管理",
                        "menuJump":"列表",
                        "tableName":"ruzhu"
                    }
                ],
                "menu":"入住记录管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
]
    }
}
export default menu;