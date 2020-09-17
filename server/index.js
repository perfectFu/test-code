const Koa = require("koa");
const KoaRouter = require("koa-router");
const static = require("koa-static");
const koaBody = require("koa-body");
const path = require("path");
const fs = require("fs");

const app = new Koa();
const router = new KoaRouter();

app.use(
	koaBody({
		multipart: true,
	})
);

router.post("/user", async (ctx) => {
	console.log(ctx.request.body);
	ctx.body = [
		{
			name: "tom",
		},
	];
});

router.post("/upload", async (ctx) => {
	let files = ctx.request.files;
	let file = files.file;
	// const rs = fs.createReadStream(file.path);
	// const ws = fs.createWriteStream(
	// 	path.join(__dirname + "/html/upload/" + file.name)
	// );
	// rs.pipe(ws);
	ctx.body = {
		ok: 1,
	};
});

app.use(router.routes());

app.use(static(path.resolve(__dirname, "./html")));

app.listen(5000, () => {
	console.log("服务已启动，端口号：5000");
});
