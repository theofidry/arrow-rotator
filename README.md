ArrowRotator
============

Simple JavaScript library to animate arrows and changing their color in the process.

## Requirements

* jQuery 1.6.4+


## Install

Install with Bower:

```bash
bower install arrow-rotator
```

And then extract the file `arrow-rotator.js`.


## Usage

### Instanciate an ArrowRotator

Instanciate an ArrowRotator with the elements it will manipulates:

```javascript
var rotator = new ArrowRotator($('.arrow'));
```

You can also achive the same result by first instanciating an empty rotator and associate its element later:

```javascript
var rotator     = new ArrowRotator();
rotator.element = $('.arrow');
```

### Make an element rotate

To make your element rotate to a given angle, use the instance method `rotate`:

```javascript
rotator.rotate(20); // make a clockwise rotation to 20°
```

### Change default colors

The arrow will automatically be colored. To know beforehand which color it will be, use the `getColor` method:

```javascript
console.log(rotator.getColor(20));
```

A rotator instance has a set of color `colors` by default covering the angles [-180; 180]. If the angle is out of this bound, the default color `defaultColor` is used.

You can easily change both values:

```javascript
rotator.defaultColor = '#fff';  // white
rotate.colors = [
  {
    color: '#fff',
    range: [-180; 0]
  }, {
    color: '#000',
    range: [0.1; 180]
  }
];
```

## Example

A JSFiddle example can be found [here](http://jsfiddle.net/theofidry/a1h1g6fh/).