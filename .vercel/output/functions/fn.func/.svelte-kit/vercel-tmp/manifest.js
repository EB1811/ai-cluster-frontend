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
		client: {"start":"_app/immutable/entry/start.BL2XRnzT.js","app":"_app/immutable/entry/app.Drez8ont.js","imports":["_app/immutable/entry/start.BL2XRnzT.js","_app/immutable/chunks/entry.pWHi0_tr.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.Drez8ont.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.aKaDqPNn.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
