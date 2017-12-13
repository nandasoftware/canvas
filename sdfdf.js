(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 136,
	height: 163,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D80027").s().p("AKlHRQBehfAzh7QAvh3AAiAQAAiAgvh3Qgzh7heheIBvhvQB1B1A9CYQA8CUABCeQgBCfg8CUQg9CYh1B1gAvGEzQg8iUAAifQAAieA8iUQA+iYB1h1IBvBvQheBegzB8QgvB2AACAQAACAAvB3QAzB7BeBfIhvBvQh1h1g+iYg");
	this.shape.setTransform(-1.7,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D80027").s().p("ANlKRQCGiFBFiuQBFipAAi1QAAi0hFipQhGiuiFiFIBvhvQCcCcBSDLQBPDFAADTQAADVhPDDQhSDMicCcgAzBGYQhQjDABjVQgBjTBQjFQBSjLCcicIBvBvQiFCFhHCuQhECpAAC0QAAC1BECpQBGCuCGCFIhvBvQicichSjMg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D80027").s().p("AHfELQBuhvABicQgBichuhuIBvhvQBNBNApBkQAmBhAABnQAABogmBhQgpBkhNBNgArCDKQgohhAAhpQAAhnAohhQAohkBNhNIBvBvQhvBuABCcQgBCcBvBvIhvBvQhNhNgohjgAjYBPQABgYAEgWIAABbQgEgVgBgYg");
	this.shape_2.setTransform(-3.3,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.8,-76.8,259.6,153.7);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D80027").s().p("AHfELQBvhuAAidQAAichvhuIBvhvQBNBNApBkQAnBggBBoQABBpgnBgQgpBkhNBNgArDDJQgmhggBhpQABhoAmhgQAphkBNhNIBvBvQhuBuAACcQAACdBuBuIhvBvQhNhNgphkgAjYBPQABgYAEgWIAABcQgEgXgBgXg");
	this.shape.setTransform(12.7,-52.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D80027").s().p("AKlHRQBehfAzh7QAvh3ABiAQgBiAgvh3Qgzh7heheIBvhvQB1B1A+CYQA7CUAACeQAACfg7CUQg+CYh1B1gAvGEzQg7iUgBifQABieA7iUQA+iYB1h1IBvBvQheBegzB8QgwB2ABCAQgBCAAwB3QAzB7BeBfIhvBvQh1h1g+iYg");
	this.shape_1.setTransform(14.3,-51.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D80027").s().p("ANlKRQCGiGBFiuQBFinAAi2QAAi0hFioQhFiuiHiGIBwhvQCcCcBSDLQBPDFABDTQgBDUhPDFQhSDLicCcgAzBGZQhPjFAAjUQAAjTBPjFQBSjLCcicIBvBvQiGCGhGCuQhECoAAC0QAAC2BECnQBGCuCGCGIhvBvQicichSjLg");
	this.shape_2.setTransform(16,-54.5);

	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(16,-54.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[{t:this.shape},{t:this.shape_1}]},7).to({state:[{t:this.shape},{t:this.shape_2},{t:this.shape_1}]},8).to({state:[{t:this.instance}]},7).to({state:[{t:this.instance}]},17).to({state:[{t:this.instance}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({rotation:90},17).to({rotation:180},14).wait(1));

	// wifi-signal-tower.svg
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("Ap9S1QhDAAgwgwQgwgwAAhDQAAhEAwgvQAwgwBDAAIF+AAIDk50QhQgLg2g8QgngsgLg2IAAhbQAMg9AvgvQBAg/BYAAQBZAABAA/QBABAAABaQAABSg3A9Qg2A8hRALIDlZ0IF9AAQBEAAAwAwQAwAvAABEQAABDgwAwQgwAwhDAAg");
	this.shape_3.setTransform(12.5,48.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-72.2,160.3,241.2);


// stage content:
(lib.sdfdf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wifi-signal-tower.svg
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(83.3,99,0.31,0.31,0,0,0,59,59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(112,139.8,49.7,74.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;