//global variables
var shader, object1;
var rotation_angle = 0;

//called when the canvas/window is resized
function reshape(w,h){
	gl.matrixMode(gl.PROJECTION);
	gl.loadIdentity();
	gl.orthoMatrix(0,w ,0,h, -1,1);
	gl.matrixMode(gl.MODEL_VIEW);
}

//render the frame
function display() {
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.pushMatrix();
	gl.translate(window.innerWidth/2, window.innerHeight/2, 0);
	object1.draw(shader, gl.TRIANGLE_STRIP);
	gl.popMatrix();
}

//idle function
function idle(){

}

//when the window is done loading, we create a openGL context
window.onload = function() {
	initWebGlut("WebGlut");
	shader = new ShaderProgram("#vertex-shader", "#fragment-shader");
	object1 = new VertexBuffer([
	    // vertices
		-100, -100, 0,    
		 100, -100, 0,
		 0,  100, 0,    
	 ], [
	    // colors
        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,
        0.0,  1.0,  0.0,  1.0,
    ]);
	wglutIdleFunc(idle);
	wglutReshapeFunc(reshape);
	wglutDisplayFunc(display);
	wglutStartMainLoop();
}
