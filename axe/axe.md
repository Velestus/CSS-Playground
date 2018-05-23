# Pure CSS Simple Axe Design

## 21.05.2018

This file contains extended explanation of creating this Axe with pure CSS code. I have watched [Make CSS Your Secret Super Drawing Tool] on YouTube and I really recommend to do so before going deeper.

At the end of these instructions you should have something similar to this:<br/>

![Pure CSS 2D Axe](http://projects.bborawski.pl/css-playground/static/media/axe.jpg)
<br/>
OK, let's get started!

### HTML

As you probably know, we need some HTML code to show our super awesome CSS design to the world. What is so special about mine axe? **HTML!**

```html
<div className="Axe">
  <div className="Axe-blade"></div>
  <div className="Axe-grip"></div>
</div>
```

Little explanation here - I was working on React project, and that's why I have here _className_ attribute. If you want to work on simple HTML file, just change it to _class_ and it will work just fine!

As you can see, mine Axe consists of only two `<div>` elements, wrapped in another `<div>` to allow animation of whole thing. 
Probably you are wondering, how is it possible that only two `<div>` elements are enough for such design. Don't worry, I'll show it!

### CSS - blade

What you may know, single element can have multiple shadows. We are going to use this in our advantage.

Let's define basis of our blade:
```css
.Axe-blade {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  color: #bdbdbd;
}
```
That's right - our blade is simple circle. But nothing is showing up yet! That's bcause we didn't declare `background-color` for our `<div>`. And we don't need to!

Our axe is going to be double-bladed. Let's create two shadows, by adding box-shadow property to our Axe-blade class:
```css
box-shadow:
  160px 0 0 0 currentColor,
  240px 0 0 0 currentColor;
```
I am using keyword **currentColor**. This copies values of current **color** from element. In our example, it will be darker grey.<br/>
![Pure CSS 2D Axe Blade basis](http://projects.bborawski.pl/css-playground/static/media/axe/axe-01.jpg)<br/>
As we have two circles, let's give them better look of the Axe!
To achieve that, we will use _before_ and _after_ pseudo classes. Those will allow us to hide some part of our blade.
```css
.Axe-blade::before {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  border-bottom: solid 60px white;
  border-radius: 0 0 50% 50%;
  top: -150px;
  left: 200px;
  box-shadow:
    0 -10px 0 4px white;
}
.Axe-blade::after {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  border-top: solid 60px white;
  border-radius: 50% 50% 0 0;
  top: 90px;
  left: 200px;
  box-shadow:
    0 10px 0 4px white;
}
```
Whoo! A lot of code in here. But let me explain this, because it's not that hard as it may seem.
- First, if we want our pseudo class element to appear within our design, we have to add to it `content` property. Absolute positioning allows easy reposition of those fields.
- We are adding borders to our pseudo elements, one from bottom and one from top. This border will be used as cover for our blade.
- Border radius goes clockwise: top-left, top-right, bottom-right, bottom-left. We give 50% to corners headed towards our blade, so we will be able to cover it and give it desired shape.
- Proper reposition of those elements and here we go! We have something more similar to blade.<br/> 
![Pure CSS 2D Axe Blade shape](http://projects.bborawski.pl/css-playground/static/media/axe/axe-02.jpg)<br/>

But what about edge? Let's create this!
For that we have to update Axe-blade class (box-shadow to be more specific):
```css
.Axe-blade {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  color: #bdbdbd;
  box-shadow:
    160px 0 0 0 currentColor,
    150px 0 0 0 #d8d8d8,
    240px 0 0 0 currentColor,
    250px 0 0 0 #d8d8d8;
}
```

![Pure CSS 2D Axe Blade edge](http://projects.bborawski.pl/css-playground/static/media/axe/axe-03.jpg)<br/>
And here we go, we got beautiful blade. We can head to another part.

### CSS - grip

We've got a blade, but we need something to be able to hold this weapon and swing it! Let's define basis for our grip:
```css
.Axe-grip {
  width: 20px;
  height: 350px;
  position: relative;
  border-radius: 10px;
  color: #53311f;
  box-shadow:
    250px -100px 0 0 currentColor;
}
```

![Pure CSS 2D Axe Grip basis](http://projects.bborawski.pl/css-playground/static/media/axe/axe-04.jpg)<br/>
I have rounded corners, because I wanted to add some gems here for better styling. As you can see, we need to decorate our Axe! And here we will also use pseudo elements:
```css
.Axe-grip::after {
  content: "";
  width: 28px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  box-shadow:
    246px 210px 0 -10px #c21829,
    246px 210px 0 0 currentColor,
    246px -120px 0 -10px #286ed6,
    246px -120px 0 0 currentColor;
}
```

![Pure CSS 2D Axe Grip gems](http://projects.bborawski.pl/css-playground/static/media/axe/axe-05.jpg)<br/>
Now it looks better. But it can be improved even more!
Let's add some golden stylings to the grip. For that we will use another pseudo element:
```css
.Axe-grip::before {
  content: "";
  width: 26px;
  height: 6px;
  border-radius: 3px;
  color: #daa520;
  z-index: 2;
  position: absolute;
  box-shadow:
    247px -20px 0 0 currentColor,
    247px 20px 0 0 currentColor,
    247px 100px 0 0 currentColor,
    247px 140px 0 0 currentColor;
}
```
Here we need to add z-index, as by default _before_ pseudo element hides beneath our grip.

![Pure CSS 2D Axe Grip decorations](http://projects.bborawski.pl/css-playground/static/media/axe/axe-06.jpg)<br/>
After this change we have nicely styled Axe!

And here we are, we have created our very simple Axe with pure CSS. But wait, there's more!

### CSS - shadows

Yeah, what can be more tempting than to add some shadows around our axe. Seems simple right? 
Try to add some shadows by yourself. I have added those shadows in my design, take a look at the code!
**_You can compare my solution with yours (or just take a look directly without trying, as you will probably do)._**
Little tips:
- our pseudo elements for blade are quite big, and we need to cover extra shadow;
- try to give some shinyness for gems, use lighter color;
- don't forget to add shadow's to golden stylings aswell.

### Conclusion

CSS is all about thinking in rectangles. As you can see, this Axe isn't that hard as it may seem at first glance. 

I hope you enjoyed this article, and maybe you will try to do something by yourself!
Good luck!

<!-- My References -->
[Make CSS Your Secret Super Drawing Tool]: https://www.youtube.com/watch?v=mNKz3devFAw
