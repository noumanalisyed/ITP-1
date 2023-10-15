

function setup() 
{
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(720, 400);

}

function draw()
{
    background(200);
    noStroke();

    fill(204, 101, 192, 127);
    /*
    Description
    Sets the color used to fill shapes.
    Calling fill(255, 165, 0) or fill('orange') means all shapes drawn after the fill command
    will be filled with the color orange.
    The version of fill() with one parameter interprets the value one of three ways.
    If the parameter is a number, it's interpreted as a grayscale value.
    If the parameter is a string, it's interpreted as a CSS color string.
    A p5.Color object can also be provided to set the fill color. The version of fill() with three parameters
    interprets them as RGB, HSB, or HSL colors, depending on the current colorMode().
    The default color space is RGB, with each value in the range from 0 to 255.
     */
    
    triangle(18, 18, 18, 360, 81, 360);

    /*
    Description
    Draws a triangle to the canvas. A triangle is a three-sided polygon.
    The first two parameters specify the triangle's first point (x1,y1).
    The middle two parameters specify its second point (x2,y2).
    And the last two parameters specify its third point (x3, y3).
     */
    rect(81, 81, 63, 63);
    /*
        Description
        Draws a rectangle to the canvas. A rectangle is a four-sided polygon with every angle at ninety degrees.
        By default, the first two parameters set the location of the rectangle's upper-left corner.
        The third and fourth set the shape's the width and height, respectively.
        The way these parameters are interpreted may be changed with the rectMode() function.

        The version of rect() with five parameters creates a rounded rectangle.
        The fifth parameter is used as the radius value for all four corners.

        The version of rect() with eight parameters also creates a rounded rectangle.
        When using eight parameters, the latter four set the radius of the arc at each corner separately.
        The radii start with the top-left corner and move clockwise around the rectangle.
        If any of these parameters are omitted, they are set to the value of the last specified corner radius.

     */

    quad(189, 18, 216, 18, 216, 360, 144, 360);
    /*
        Description
        Draws a quad to the canvas. A quad is a quadrilateral, a four-sided polygon.
        Some examples of quads include rectangles, squares, rhombuses, and trapezoids.
        The first pair of parameters (x1,y1) sets the quad's first point.

        The following pairs of parameters set the coordinates for its next three points.
        Parameters should proceed clockwise or counter-clockwise around the shape.

        The version of quad() with twelve parameters allows the quad to be drawn in 3D space.
        Doing so requires adding the WEBGL argument to createCanvas().
    */

    ellipse(252, 144, 72, 72);
    /*
        Description
        Draws an ellipse (oval) to the canvas. An ellipse with equal width and height is a circle.
        By default, the first two parameters set the location of the center of the ellipse.
        The third and fourth parameters set the shape's width and height, respectively.
        The origin may be changed with the ellipseMode() function.

        If no height is specified, the value of width is used for both the width and height.
        If a negative height or width is specified, the absolute value is taken.
     */

    triangle(288, 18, 351, 360, 288, 360);
    /*
        Description
        Draws a triangle to the canvas. A triangle is a three-sided polygon.
        The first two parameters specify the triangle's first point (x1,y1).
        The middle two parameters specify its second point (x2,y2).
        And the last two parameters specify its third point (x3, y3).
     */

    arc(479, 300, 280, 280, PI, TWO_PI);
    /*
        Description
        Draws an arc to the canvas. Arcs are drawn along the outer edge of an ellipse (oval) defined by the x, y, w, and h parameters.
        Use the start and stop parameters to specify the angles (in radians) at which to draw the arc.
        Arcs are always drawn clockwise from start to stop.
        The origin of the arc's ellipse may be changed with the ellipseMode() function.

        The optional mode parameter determines the arc's fill style.
        The fill modes are a semi-circle (OPEN), a closed semi-circle (CHORD), or a closed pie segment (PIE).
     */
}

