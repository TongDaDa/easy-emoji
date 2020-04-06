

const fsExtra = require("fs-extra");
const fs = require("fs");
const path = require("path");
const request = require("request");

console.log(process.pid, "pid");

async function main() {
	const imgOutPath = path.join(__dirname, "../imgs");
	await fsExtra.ensureDir(imgOutPath);
	function writeImgBuffer(url) {
		return new Promise((resolve, reject) => {
			request.get(url).pipe(
				fs.createWriteStream(path.join(imgOutPath, path.basename(url)))
			).on("finish", resolve).on("error", reject)
		});
	}
	const emojiList = await fsExtra.readJson(path.join(__dirname, "../emoji.json"));
	let num = 0;
	const looperWriteImg = () => {
		console.log(num++, "index");
		return writeImgBuffer(emojiList.pop().src).then(() => {
			if (emojiList.length <= 0) {
				return Promise.resolve("done")
			}
			return looperWriteImg();
		})
	};
	const working1 = looperWriteImg();
	const working2 = looperWriteImg();
	const working3 = looperWriteImg();
	const working4 = looperWriteImg();
	const working5 = looperWriteImg();
	return Promise.all([working1, working2, working3, working4, working5])
}


main().then(() => {
	console.log("done")
}).catch((err) => {
	console.log(err);
});
