# Pure CSS Simple Rubik's Cube Design

## 23.05.2018

This file contains extended explanation of creating this Rubik's Cube with pure CSS code. 

At the end of these instructions you should have something similar to this:<br/>

![Pure CSS 3D Rubik's Cube](http://projects.bborawski.pl/css-playground/static/media/rubik.jpg)
<br/>
OK, let's get started!

### HTML

In this example we will be creating cube. Cube has six sides, so it is number of `<div>` elements we will need. Of course we could try to reduce this to only 3 `<div>`, but let's keep it that way. It will allow us to easily change our design from Rubik's Cube to, for example, cube with numbered sides. Each `<div>` can be easily rotated to adjust display of the text on it.

OK, so our HTML looks like this:
```html
<div className="Rubik">
  <div className="Rubik-shape">
    <div className="front"></div>
    <div className="back"></div>
    <div className="top"></div>
    <div className="bottom"></div>
    <div className="left"></div>
    <div className="right"></div>
  </div>
</div>
```
_Quick explanation here_: I was creating those in React project, simply change _className_ attribute into _class_ one and you can switch into plain HTML - no frameworks needed for this design!

We need wrapper around our cube to set every property correctly.
Now we can proceed to CSS part.

### CSS - basis

We have prepared HTML, but we need to modify it into cube shape. First, let's prepare our wrapper for whole design:
```css
.Rubik {
  perspective: 800px;
  perspective-origin: 50% 100px;
}
```
[MDN web docs] explains **perspective** very well, so let's not copy their explanation here. Click the link and read about it, it's worth your time.
Nothing is visible here, so let's work on sides of our cube.

### CSS - shape

First of all we need to determine how big should our cube be. Let's do it!
```css
.Rubik-shape {
  position: relative;
  width: 200px;
  transform-style: preserve-3d;
  transform-origin: 0 100px;
}
```
We are using `transform-style: preserve-3d` so we will keep feeling of 3D after repositioning of `<div>` elements, and whole cube aswell. `transform-origin` allows to change where exactly is placed point around which a transformation is applied. We will need that for positioning of our sides.

We will keep proper order of colors in our cube. But, before we are going to position them correctly, we hace to add some code ued by every single side:
```css
.Rubik-shape div {
  position: absolute;
  width: 200px;
  height: 200px;
  box-shadow: inset 0 0 30px rgba(0,0,0,0.2);
}
```
And now, at last, we can proceed to positioning of our sides:
```css
.back {
  transform: translateZ(-100px) rotateX(180deg);
}
.right {
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
}
.left {
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
}
.top {
  transform: rotateX(-270deg) translateY(-100px);
  transform-origin: top center;
}
.bottom {
  transform: rotateX(-90deg) translateY(100px);
  transform-origin: bottom center;
}
.front {
  transform: translateZ(100px);
}
```

![Pure CSS 3D Rubik's Cube Shape](http://projects.bborawski.pl/css-playground/static/media/rubik/rubik-01.jpg)<br/>
So, we have some feeling of 3D, right? How about rotating our cube?

Maybe then it will look a little better? Let's see!
```css
.Rubik-shape {
  position: relative;
  width: 200px;
  transform-style: preserve-3d;
  transform-origin: 0 100px;
  transform: rotateY(30deg) rotateX(50deg);
}
```

![Pure CSS 3D Rubik's Cube Shape Rotated](http://projects.bborawski.pl/css-playground/static/media/rubik/rubik-02.jpg)<br/>
Yeah, now it looks a lot better! We can see every single side of the cube now, due to the fact that our walls are created only by `box-shadow` property.

So, if everything looks fine, let's change colors of each side:
```css
.back {
  transform: translateZ(-100px) rotateX(180deg);
  background-color: green;
}
.right {
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
  background-color: white;
}
.left {
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
  background-color: yellow;
}
.top {
  transform: rotateX(-270deg) translateY(-100px);
  transform-origin: top center;
  background-color: red;
}
.bottom {
  transform: rotateX(-90deg) translateY(100px);
  transform-origin: bottom center;
  background-color: orange;
}
.front {
  transform: translateZ(100px);
  background-color: blue;
}
```

![Pure CSS 3D Rubik's Cube Shape Colors](http://projects.bborawski.pl/css-playground/static/media/rubik/rubik-03.jpg)<br/>
And here we go, we have cube with each side of different color.


### CSS - pieces

Rubik's Cube side consists of 9 small pieces. We can achieve something similar with usage of pseudo classes:

```css
.Rubik-shape div::before {
  position: absolute;
  width: 200px;
  height: 10px;
  content: "";
  color: black;
  box-shadow: 
    0 60px 0 0 currentColor,
    0 130px 0 0 currentColor;
}
.Rubik-shape div::after {
  position: absolute;
  width: 10px;
  height: 200px;
  content: "";
  color: black;
  box-shadow: 
    60px 0 0 0 currentColor,
    130px 0 0 0 currentColor;
}
```

![Pure CSS 3D Rubik's Cube Pieces](http://projects.bborawski.pl/css-playground/static/media/rubik/rubik-04.jpg)<br/>
We need **two pseudo classes** because we need horizontal and vertical lines. Every piece should be equal in height and width.
Quick math and we have thickness of each line, and where to position them. Because we applied same lines for all `<div>` children of our shape, everything smoothly aligns and we have beatiful Rubik's Cube.

Can we do something about it? Maybe we can rotate it to show each side!

### CSS - animation

Let's give our Rubik's Cube some life. We will apply **animation** to it:
```css
.Rubik-shape {
  position: relative;
  width: 200px;
  transform-style: preserve-3d;
  animation: spin 5s infinite linear;
  margin: 0 auto;
  transform-origin: 0 100px;
  transform: rotateY(30deg) rotateX(50deg);
}

@keyframes spin {
  from { transform: rotateX(0) rotateY(0); }
  to { transform: rotateX(360deg) rotateY(360deg); }
}
```
>You spin me right round, baby<br/>
>Right round like a record, baby<br/>
>Right round round round<br/>

It's alive! <br/>
We used `margin` property to keep our cube near the center.

### Conclusion

Creating your very first 3D element is not that hard as it may seem at first glance. Just keep thinking in rectangles, and add some perspective.

You can add shadows to it, for example to imitate light from above and some kind of surface beneath the cube. I leave it to you!

I hope you enjoyed this article, and maybe you will try to do something by yourself!
Good luck!

<!-- My References -->
[MDN web docs]: https://developer.mozilla.org/en-US/docs/Web/CSS/perspective
