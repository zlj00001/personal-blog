class Tab {
    constructor(id) {
        //获取元素
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('.nav-tab li');
        this.sections = this.main.querySelectorAll('section');
        //让相关的元素绑定事件
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
        }
    }
    //切换功能
    toggleTab(that) {
        // console.log(this.index);
        that.clearClass();
        this.className = 'activity-nav';
        that.sections[this.index].className = 'content-application activity';
    }

    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = 'content-application';
        }
    }
}
new Tab('#tab');