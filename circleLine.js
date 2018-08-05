(function(){
    var app = (function() {
        // 1. 모듈 스코프 내에서 사용할 변수 작성
        var scopeVar = {};
        var utilMethod;
        var manipulateDom;
        var eventHandle;
        var initModule;
    
        // 2. 유틸리티 메소드 작성
        utilMethod = {
            fnCreateNclass: function(w, t, c, s) {
                v = document.createElement(t);
                v.setAttribute('class', c);
                v.setAttribute('style', s);
                w.appendChild(v);
                return v;
            },
            fnCal: function(f) {
                var _value = Number(scopeVar.opt.value * 360 / scopeVar.opt.max);
                var _values = {};
                _values.v1 = _value;
                _values.v2;
                if (_value > 180) {
                    _values.v1 = 180;
                    _values.v2 = _value - 180 + 'deg';
                }
                _values.v1 += 'deg';
                return _values;
            },
            fnTime: function(msecs) {
                var start = new Date().getTime();
                var cur = start;
                while(cur-start < msecs) {
                cur = new Date().getTime();
                }
            },
            click: function(){
                scopeVar.circleLine.el.onclick = function(){
                    // console.log(this)
                }
            }
        }
    
        // 3. DOM 조작 메소드 작성
        manipulateDom = function() {
            scopeVar.circleLine = {};
            scopeVar.circleLine.style = 'z-index: 1;'
            + 'position: relative;'
            + 'display: block;'
            + 'width: ' + scopeVar.opt.size + 'px;'
            + 'height: ' + scopeVar.opt.size + 'px;'
            + 'background: ' + scopeVar.opt.bg + ';';
            scopeVar.circleLine.el = utilMethod.fnCreateNclass(scopeVar.wrap, 'i', 'circleLine', scopeVar.circleLine.style);
            scopeVar.bg1 = {};
            scopeVar.bg1.style = 'z-index: 5;'
            + 'position: absolute;'
            + 'top: 0;'
            + 'left: 0;'
            + 'width: ' + scopeVar.opt.size + 'px;'
            + 'height: ' + scopeVar.opt.size + 'px;'
            + 'clip: rect(0, ' + Math.ceil(scopeVar.opt.size / 2) + 'px, ' + scopeVar.opt.size + 'px, ' + '0);'
            + 'background: ' + scopeVar.opt.bg + ';';
            scopeVar.bg1.el = utilMethod.fnCreateNclass(scopeVar.circleLine.el, 'i', 'bg1', scopeVar.bg1.style);
            scopeVar.bg2 = {};
            scopeVar.bg2.style = 'z-index: 3;'
            + 'position: absolute;'
            + 'top: 0;'
            + 'left: 0;'
            + 'width: ' + scopeVar.opt.size + 'px;'
            + 'height: ' + scopeVar.opt.size + 'px;'
            + 'clip: rect(0, ' + scopeVar.opt.size + 'px, ' + scopeVar.opt.size + 'px, ' + Math.ceil(scopeVar.opt.size / 2) + 'px);'
            + 'background: ' + scopeVar.opt.bg + ';';
            scopeVar.bg2.el = utilMethod.fnCreateNclass(scopeVar.circleLine.el, 'i', 'bg2', scopeVar.bg2.style);
            scopeVar.bgC1 = {};
            scopeVar.bgC1.style = 'z-index: 5;'
            + 'position: absolute;'
            + 'top: 0;'
            + 'left: 0;'
            + 'width: ' + Number(scopeVar.opt.size - (scopeVar.opt.thick * 2)) + 'px;'
            + 'height: ' + Number(scopeVar.opt.size - (scopeVar.opt.thick * 2)) + 'px;'
            + 'border: ' + scopeVar.opt.thick + 'px solid ' + scopeVar.opt.normalColor + ';'
            + 'border-radius: 100%;'
            + 'clip: rect(0, ' + Math.ceil(scopeVar.opt.size / 2) + 'px, ' + scopeVar.opt.size + 'px, ' + '0);'
            + 'background: ' + scopeVar.opt.bg + ';';
            scopeVar.bgC1.el = utilMethod.fnCreateNclass(scopeVar.circleLine.el, 'i', 'bgC1', scopeVar.bgC1.style);
            scopeVar.bgC2 = {};
            scopeVar.bgC2.style = 'z-index: 3;'
            + 'position: absolute;'
            + 'top: 0;'
            + 'left: 0;'
            + 'width: ' + Number(scopeVar.opt.size - (scopeVar.opt.thick * 2)) + 'px;'
            + 'height: ' + Number(scopeVar.opt.size - (scopeVar.opt.thick * 2)) + 'px;'
            + 'border: ' + scopeVar.opt.thick + 'px solid ' + scopeVar.opt.normalColor + ';'
            + 'border-radius: 100%;'
            + 'clip: rect(0, ' + scopeVar.opt.size + 'px, ' + scopeVar.opt.size + 'px, ' + Math.ceil(scopeVar.opt.size / 2) + 'px);'
            + 'background: ' + scopeVar.opt.bg + ';';
            scopeVar.bg2.el = utilMethod.fnCreateNclass(scopeVar.circleLine.el, 'i', 'bgC2', scopeVar.bgC2.style);
            scopeVar.circle1 = {};
            scopeVar.circle1.style = 'z-index: 4;'
            + 'position: absolute;'
            + 'top: 0;'
            + 'left: 0;'
            + 'width: ' + Number(scopeVar.opt.size - (scopeVar.opt.thick * 2)) + 'px;'
            + 'height: ' + Number(scopeVar.opt.size - (scopeVar.opt.thick * 2)) + 'px;'
            + 'border: ' + scopeVar.opt.thick + 'px solid ' + scopeVar.opt.activeColor + ';'
            + 'border-radius: 100%;'
            + (scopeVar.opt.animationTime !== undefined?'transform: rotate(0deg); transition: ' + scopeVar.opt.animationTime + 's transform linear;':'')
            + 'clip: rect(0, ' + Math.ceil(scopeVar.opt.size / 2) + 'px, ' + scopeVar.opt.size + 'px, ' + '0);'
            + 'background: ' + scopeVar.opt.bg + ';';
            scopeVar.circle1.el = utilMethod.fnCreateNclass(scopeVar.circleLine.el, 'i', 'circle1', scopeVar.circle1.style);
            scopeVar.circle2 = {};
            scopeVar.circle2.style = 'z-index: 2;'
            + 'position: absolute;'
            + 'top: 0;'
            + 'left: 0;'
            + 'width: ' + Number(scopeVar.opt.size - (scopeVar.opt.thick * 2)) + 'px;'
            + 'height: ' + Number(scopeVar.opt.size - (scopeVar.opt.thick * 2)) + 'px;'
            + 'border: ' + scopeVar.opt.thick + 'px solid ' + scopeVar.opt.activeColor + ';'
            + 'border-radius: 100%;'
            + (scopeVar.opt.animationTime !== undefined?'transform: rotate(0deg); transition: ' + scopeVar.opt.animationTime + 's transform linear;':'')
            + 'clip: rect(0, ' + scopeVar.opt.size + 'px, ' + scopeVar.opt.size + 'px, ' + Math.ceil(scopeVar.opt.size / 2) + 'px);'
            + 'background: ' + scopeVar.opt.bg + ';';
            scopeVar.circle2.el = utilMethod.fnCreateNclass(scopeVar.circleLine.el, 'i', 'circle2', scopeVar.circle2.style);
        };
    
        // 4. 이벤트 핸들러 작성
        eventHandle = {
            start: (function(){
                scopeVar.circle1.el.setAttribute('style', scopeVar.circle1.style 
                + 'transform: rotate(' + utilMethod.fnCal().v1 + ');');
                if(utilMethod.fnCal().v2 !== undefined) {
                    // setTimeout(function(){
                        scopeVar.circle2.el.setAttribute('style', scopeVar.circle2.style 
                        + 'transform: rotate(' + utilMethod.fnCal().v2 + ');');
                        scopeVar.bg1.el.setAttribute('style', scopeVar.bg1.style 
                        + 'z-index: 1;');
                        scopeVar.bgC1.el.setAttribute('style', scopeVar.bgC1.style 
                        + 'z-index: 1;');
                    // }, scopeVar.opt.animationTime * 1000);
                }
            }),
            scroll: (function(){
                window.onscroll = (function(){
                    scopeVar.top = scopeVar.wrap.offsetTop;
                    console.log(scopeVar.top);
                });
            })
        };
    
        // Public 메소드 작성
        initModule = function(e, opt) {
            if (e === undefined) return false;
            scopeVar.wrap = document.querySelector(e);
            scopeVar.opt = opt === undefined?{}:opt;
            manipulateDom();
            (scopeVar.opt.scroll == true)&&(eventHandle.scroll());
            // setTimeout(function(){
                eventHandle.start();
                // utilMethod.click();
            // }, scopeVar.opt.animationTime);
        };
        return {
            init : initModule
        };
    }());
    // app.prototype.scroll = (function(){
    //     console.log('dsds');
    //     window.addEventListener('scroll', app.scroll);
    // });
    // app.scroll();
    // app.initModule();
    (window.circleLine === undefined)&&(window.circleLine = app.init);
}())