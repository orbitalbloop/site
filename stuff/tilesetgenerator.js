// make the pretty template
function generate(canvas, tw, th, rs, cs, c1, c2) {
    const ctx = canvas.getContext('2d');
    const cols = [c1, c2];

    canvas.width = tw * cs;
    canvas.height = th * rs;
    
    for(var y = 0; y < rs; y++) {
        for(var x = 0; x < cs; x++) {
            ctx.fillStyle = cols[(y+x)%2];
            ctx.fillRect(x*tw, y*th, (x+1)*tw, (y+1)*th);
        }
    }
}

// https://www.sanwebe.com/snippet/downloading-canvas-as-image-dataurl-on-button-click
function download(canvas) {
    image = canvas.toDataURL('image/png', 1.0).replace('image/png', 'image/octet-stream');

    if (canvas.width * canvas.height > 0) {
        var link = document.createElement('a');
        link.download = 'tileset_template.png';
        link.href = image;
        link.click();
    }
}