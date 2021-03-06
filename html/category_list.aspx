﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="category_list.aspx.cs" Inherits="WebSite.mall.html.category_list" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1, minimum-scale=1.0, maximum-scale=1.0">
    <meta name="author" content="FamousThemes" />
    <link rel="stylesheet" href="../css/style.css" type="text/css" media="screen" />
    <script language="javascript" src="../js/jquery.min.js"></script>
    <%-- <script src="/mobile/js/common.js"></script>--%>
    <script src="../js/swiper.min.js"></script>
    <link href="../css/swiper.min.css" rel="stylesheet" />
    <link href="../css/weui.min.css" rel="stylesheet" />
    <script language="javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <%--<script src="../js/header.js"></script>--%>
    <link href="../css/module/index.css" rel="stylesheet" />
    <link href="../css/module/category_list.css" rel="stylesheet" />
    <title></title>
</head>
<body>

    <div class="my-search">
        <div class="my-search-contenrt">
            <img src="../img/mallsearch.png" /><input placeholder="搜索菜品名称" />
        </div>
    </div>
    <div style="height: 100%">
        <div class="category_list_top">
            <ul class="slide-box">
                <li class="slide-item" onclick="selectmenuClick('top',this)"><span class="my-select">沙县小吃</span></li>
                <li class="slide-item" onclick="selectmenuClick('top',this)"><span>木桶饭</span></li>
                <li class="slide-item" onclick="selectmenuClick('top',this)"><span>包子</span></li>
                <li class="slide-item" onclick="selectmenuClick('top',this)"><span>兰州拉面</span></li>
                <li class="slide-item" onclick="selectmenuClick('top',this)"><span>新鲜蔬菜</span></li>
                <li class="slide-item" onclick="selectmenuClick('top',this)"><span>时令水果</span></li>
                <li class="slide-item" onclick="selectmenuClick('top',this)"><span>方便菜</span></li>
            </ul>
        </div>
        <div class="category_list_bottom">
            <div class="category_list_left">
                <ul>
                    <li class="my-li-select" onclick="selectmenuClick('left',this)">沙县面食</li>
                    <li onclick="selectmenuClick('left',this)">炖罐配料</li>
                    <li onclick="selectmenuClick('left',this)">米面豆品</li>
                    <li onclick="selectmenuClick('left',this)">沙县调味</li>
                    <li onclick="selectmenuClick('left',this)">猪肉</li>
                    <li onclick="selectmenuClick('left',this)">牛肉</li>
                </ul>
            </div>
            <div class="category_list_right ">
                <div>
                    <div class="weui-grids">
                        <a href="javascript:;" class="weui-grid">
                            <div class="weui-grid__icon">
                                <img src="../img/test01.jpg" />
                            </div>
                            <div class="weui-grid__label">
                                <h5 class="goodsnam">台湾阿舍干面</h5>
                                <p class="goodsms">阿舍食堂油炸多口味组合方....</p>
                                <div class="limitico" style="">限时秒杀</div>
                                <div><span class="limitimoney" style="">¥19.5</span><span class="limitext">已拼10万+件</span></div>
                            </div>
                        </a>
                        <a href="javascript:;" class="weui-grid">
                            <div class="weui-grid__icon">
                                <img src="../img/test01.jpg" />
                            </div>
                            <div class="weui-grid__label">
                                <h5 class="goodsnam">台湾阿舍干面</h5>
                                <p class="goodsms">阿舍食堂油炸多口味组合方....</p>
                                <div class="limitico" style="">限时秒杀</div>
                                <div><span class="limitimoney" style="">¥19.5</span><span class="limitext">已拼10万+件</span></div>
                            </div>
                        </a>
                        <a href="javascript:;" class="weui-grid">
                            <div class="weui-grid__icon">
                                <img src="../img/test01.jpg" />
                            </div>
                            <div class="weui-grid__label">
                                <h5 class="goodsnam">台湾阿舍干面</h5>
                                <p class="goodsms">阿舍食堂油炸多口味组合方....</p>
                                <div class="limitico" style="">限时秒杀</div>
                                <div><span class="limitimoney" style="">¥19.5</span><span class="limitext">已拼10万+件</span></div>
                            </div>
                        </a>
                        <a href="javascript:;" class="weui-grid">
                            <div class="weui-grid__icon">
                                <img src="../img/test01.jpg" />
                            </div>
                            <div class="weui-grid__label">
                                <h5 class="goodsnam">台湾阿舍干面</h5>
                                <p class="goodsms">阿舍食堂油炸多口味组合方....</p>
                                <div class="limitico" style="">限时秒杀</div>
                                <div><span class="limitimoney" style="">¥19.5</span><span class="limitext">已拼10万+件</span></div>
                            </div>
                        </a>
                        <a href="javascript:;" class="weui-grid">
                            <div class="weui-grid__icon">
                                <img src="../img/test01.jpg" />
                            </div>
                            <div class="weui-grid__label">
                                <h5 class="goodsnam">台湾阿舍干面</h5>
                                <p class="goodsms">阿舍食堂油炸多口味组合方....</p>
                                <div class="limitico" style="">限时秒杀</div>
                                <div><span class="limitimoney" style="">¥19.5</span><span class="limitext">已拼10万+件</span></div>
                            </div>
                        </a>
                        <a href="javascript:;" class="weui-grid">
                            <div class="weui-grid__icon">
                                <img src="../img/test01.jpg" />
                            </div>
                            <div class="weui-grid__label">
                                <h5 class="goodsnam">台湾阿舍干面</h5>
                                <p class="goodsms">阿舍食堂油炸多口味组合方....</p>
                                <div class="limitico" style="">限时秒杀</div>
                                <div><span class="limitimoney" style="">¥19.5</span><span class="limitext">已拼10万+件</span></div>
                            </div>
                        </a>
                        <div style="height: 160px; clear: both"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
<script src="../js/footer.js"></script>
<script src="../js/module/category_list.js"></script>
<link href="../css/animate.css" rel="stylesheet" />
<script>
    function selectmenuClick(type,item) {
        if (type == "top") {

            $(".slide-box").find('.slide-item').find('span').removeClass("my-select");
            $(item).find('span').addClass("my-select");
        } else if (type == "left") {
            $(".category_list_left").find('li').removeClass("my-li-select");
            $(item).addClass("my-li-select");
        }
       
    }
     
</script>