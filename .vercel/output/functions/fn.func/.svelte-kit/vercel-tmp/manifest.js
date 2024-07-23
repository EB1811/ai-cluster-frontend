export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","features-blue.svg","features-emerald.svg","features-indigo.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.Coz_KG44.js","app":"_app/immutable/entry/app.5YGM7f01.js","imports":["_app/immutable/entry/start.Coz_KG44.js","_app/immutable/chunks/entry.D2y6kFvK.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.5YGM7f01.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.aKaDqPNn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
