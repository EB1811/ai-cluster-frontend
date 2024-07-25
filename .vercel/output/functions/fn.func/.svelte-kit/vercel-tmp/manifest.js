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
		client: {"start":"_app/immutable/entry/start.6LeyJC0g.js","app":"_app/immutable/entry/app.Dhq8H6fb.js","imports":["_app/immutable/entry/start.6LeyJC0g.js","_app/immutable/chunks/entry.CQDkSSXv.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.Dhq8H6fb.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.aKaDqPNn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
