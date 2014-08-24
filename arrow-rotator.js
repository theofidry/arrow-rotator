/**
 * Creates an ArrowRotator instance.
 *
 * @param {DOM element} element
 * @constructor
 */
function ArrowRotator(element) {

  this.element = element || null;
  this.colors = [
    // negative values; counter clockwise
    {
      color: '#FFEB23',
      range: [2, -2]
    }, {
      color: '#FFE123',
      range: [-2.1, -5]
    }, {
      color: '#FFD223',
      range: [-5.1, -10]
    }, {
      color: '#FFC623',
      range: [-10.1, -15]
    }, {
      color: '#FFB823',
      range: [-15.1, -20]
    }, {
      color: '#FFA723',
      range: [-20.1, -25]
    }, {
      color: '#FF9423',
      range: [-25.1, -30]
    }, {
      color: '#FF8523',
      range: [-30.1, -35]
    }, {
      color: '#FF7523',
      range: [-35.1, -40]
    }, {
      color: '#FF5E23',
      range: [-40, -45]
    }, {
      color: '#FF3323',
      range: [-45.1, -50]
    }, {
      color: '#F82236',
      range: [-50.1, -55]
    }, {
      color: '#ED2151',
      range: [-55.1, -60]
    }, {
      color: '#E42065',
      range: [-60.1, -65]
    }, {
      color: '#DF1F70',
      range: [-65.1, -70]
    }, {
      color: '#DA1E7A',
      range: [-70.1, -75]
    }, {
      color: '#D11D8A',
      range: [-75.1, -80]
    }, {
      color: '#C81C99',
      range: [-80.1, -85]
    }, {
      color: '#B91AAB',
      range: [-85.1, -90]
    }, {
      color: '#B219B2',
      range: [-90.1, -100]
    }, {
      color: '#9D1DB4',
      range: [-100.1, -110]
    }, {
      color: '#8E20B5',
      range: [-110.1, -120]
    }, {
      color: '#8122B6',
      range: [-120.1, -130]
    }, {
      color: '#7724B7',
      range: [-130.1, -140]
    }, {
      color: '#6E26B8',
      range: [-140.1, -150]
    }, {
      color: '#6628B9',
      range: [-150.1, -160]
    }, {
      color: '#5E29B9',
      range: [-160.1, -170]
    }, {
      color: '#562BBA',
      range: [-170.1, -180]
    },

    // positive values; clockwise
    {
      color: '#FFF823',
      range: [2.1, 5]
    }, {
      color: '#EFFC23',
      range: [5.1, 10]
    }, {
      color: '#D2F622',
      range: [10.1, 15]
    }, {
      color: '#C5F421',
      range: [15.1, 20]
    }, {
      color: '#B7F121',
      range: [20.1, 25]
    }, {
      color: '#AAEE21',
      range: [25.5, 30]
    }, {
      color: '#9BEB20',
      range: [30.1, 35]
    }, {
      color: '#8BE720',
      range: [35.1, 40]
    }, {
      color: '#78E31F',
      range: [40.1, 45]
    }, {
      color: '#61DE1E',
      range: [45.1, 50]
    }, {
      color: '#44D71D',
      range: [50.1, 55]
    }, {
      color: '#1CCC1C',
      range: [55.1, 60]
    }, {
      color: '#00C000',
      range: [60.1, 90]
    }, {
      color: '#00B32F',
      range: [90.1, 100]
    }, {
      color: '#00AB4A',
      range: [100.1, 110]
    }, {
      color: '#00A55E',
      range: [110.1, 120]
    }, {
      color: '#009F6F',
      range: [120.1, 130]
    }, {
      color: '#00987F',
      range: [130.1, 140]
    }, {
      color: '#009090',
      range: [140.1, 150]
    }, {
      color: '#047995',
      range: [150.1, 160]
    }, {
      color: '#076998',
      range: [160.1, 170]
    }, {
      color: '#095C9B',
      range: [170.1, 180]
    }
  ];
  this.defaultColor = '#000';   // default color when none in range is found
  this.duration  = 2000;        // animation duration in ms
  this.lastAngle = 0;           // last angle at which the rotation has ended
}


/**
 * Get the color of the arrow for the given angle.
 *
 * @param {numerical} angle (positive value for clockwise rotation)
 * @returns {string} HEX color
 */
ArrowRotator.prototype.getColor = function(angle) {

  var min, max, range, color;

  for (var colorElem in this.colors) {

    color = this.colors[colorElem].color;
    range = this.colors[colorElem].range;

    if (range[0] <= range[1]) {
      min = range[0];
      max = range[1];
    } else {
      min = range[1];
      max = range[0];
    }

    if (min <= angle && angle <= max)
      return color;
  }

  return this.defaultColor;
}


/**
 * Make arrows associated to this instance rotate to the given angle.
 * @param {numerical} angle
 */
ArrowRotator.prototype.rotate = function(angle) {

  var instance = this,
    color    = this.getColor(angle);

  // change element fill color
  instance.element.css('fill', color);
  instance.element.css('color', color);

  $({deg: instance.lastAngle}).animate({deg: angle}, {
    duration: instance.duration,
    step: function(now, tween) {

      // rotate element
      instance.element.css({
        '-webkit-transform': 'rotate('+ now +'deg)',
        '-moz-transform': 'rotate('+ now +'deg)',
        '-ms-transform': 'rotate('+ now +'deg)',
        'transform': 'rotate('+ now +'deg)'
      });

      // memorize last position
      instance.lastAngle = now;
    }
  });
};