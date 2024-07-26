export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","features-blue.svg","features-emerald.svg","features-indigo.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CgBe6vDb.js","app":"_app/immutable/entry/app.BUg9mx4W.js","imports":["_app/immutable/entry/start.CgBe6vDb.js","_app/immutable/chunks/entry.DfWzUnWj.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.BUg9mx4W.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.aKaDqPNn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
