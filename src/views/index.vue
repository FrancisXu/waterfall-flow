<template>
    <div class="image">
        <div class="waterfall">
            <div class="column" v-for="item in imageList">
                <div class="column-item" v-for="(image,index) in item">
                    <img class="img" :src="'https://francisxu.github.io/waterfall-flow/images/'+image.url"
                         alt="">
                    <p class="date">20 nov, 2016</p>
                    <h5 class="title">Auto-resized image</h5>
                    <h6 class="content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </h6>
                </div>
            </div>
        </div>
        <div class="footer" v-show="footerVisible">
            <h5>我是有底线的</h5>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                tempImage: [],
                imageHeight: [0, 0, 0],
                imageWidth: 0,
                imageList: [[], [], []],
                footerVisible: false,
                pagination: {
                    currentPage: 1,
                    totalPage: 10,
                    pageSize: 10,
                    available: true,
                }
            };
        },
        components: {},
        computed: {},
        mounted() {
            this.getImagePage();
            this.imageWidth = document.querySelector(".waterfall>.column").offsetWidth;
            window.addEventListener("scroll", this.pullDown);
        },
        methods: {
            getImagePage() {
                this.tempImage = [
                    {url: "image1.jpg"},
                    {url: "image2.jpg"},
                    {url: "image3.jpg"},
                    {url: "image4.jpg"},
                    {url: "image5.jpg"},
                    {url: "image6.jpg"},
                    {url: "image7.jpg"},
                    {url: "image8.jpg"},
                    {url: "image3.jpg"},
                ];
                this.pushImage(0);
            },

            pushImage(index) {
                if (index >= this.tempImage.length) return;
                let img = new Image(), that = this;
                img.src = "https://francisxu.github.io/waterfall-flow/images/" + that.tempImage[index].url;
                img.onload = () => {
                    let min = that.imageHeight[0], imageIndex = 0;
                    that.imageHeight.forEach(function (item, _index) {
                        if (min > item) {
                            min = item;
                            imageIndex = _index;
                        }
                    });
                    that.imageHeight[imageIndex] += img.naturalHeight / img.naturalWidth + 96 / this.imageWidth;
                    that.imageList[imageIndex].push(that.tempImage[index]);
                    that.pushImage(index + 1);
                }
            },

            pullDown() {
                // 获取滚轮位置
                this.height1 = window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                // 文档高度
                this.height2 = document.body.scrollHeight;
                // 可视区域
                // 设置compatMode兼容IE
                this.height3 = document.compatMode === "CSS1Compat"
                    ? document.documentElement.clientHeight
                    : document.body.clientHeight;
                // 如果滚动到最低（这里设置离最底还有100距离才触发函数）
                // available条件是为了防止触底时一直不断地请求。因此，请求一次后available设为0，直到滚动到离底部超过100距离（即数据加载玩后）才设为1
                if (this.height3 + this.height1 >= this.height2 - 100 && this.available) {
                    this.available = false;
                    //请求下一页,如果当前页等于最大页，直接返回
                    if (this.pagination.currentPage >= this.pagination.totalPage) {
                        this.footerVisible = true;
                        return;
                    }
                    this.pagination.currentPage++;
                    this.getImagePage();
                } else if (this.height3 + this.height1 < this.height2 - 100) {
                    this.available = true;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../style/common/var";
    @import "../style/index";

    .image {
        padding-top: $header-height;
    }

    .waterfall {
        margin-top: $space-medium;
        display: flex;
        max-width: 1280px;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        .column {
            width: 33.33%;
            .column-item {
                width: 100%;
                padding: $space-small;
                img {
                    width: 100%;
                    height: 100%;
                }
                .date {
                    margin-bottom: $space-small;
                }
                .title {
                    margin-bottom: $space-small;
                }
                .content {
                    margin-bottom: $space-small;
                }
            }
        }
    }

    .footer {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: $border-medium;
        color: $font-color-primary;
        margin-top: $space-medium;
    }
</style>