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