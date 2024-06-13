class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0

    this.vx = -2

    this.img = new Image()
    this.img.src = "https://img.freepik.com/vector-gratis/diseno-fondo-videojuegos_23-2150286097.jpg?w=1380&t=st=1714743401~exp=1714744001~hmac=cd583a3b778b40ecc85c55464a25e792f0dfef7c65cac59808de712e732a44c0"
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    )

    this.ctx.drawImage(
      this.img,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    this.x += this.vx

    if (this.x + this.w <= 0) {
      this.x = 0
    }
  }
}