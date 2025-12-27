import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Export async config so we can optionally import the 'lovable-tagger' plugin if present
export default defineConfig(async ({ command, mode }) => {
	// Try to dynamically import the optional plugin. If it's not installed, ignore it.
	let lovableTaggerPlugin;
	try {
		// @ts-ignore: optional dependency — do not error at compile time if missing
		const mod = await import("lovable-tagger");
		// plugin could be default export or named export that returns a plugin instance
		lovableTaggerPlugin = (mod && (mod.default ?? mod)) as any;
		if (typeof lovableTaggerPlugin === "function") {
			lovableTaggerPlugin = lovableTaggerPlugin();
		}
	} catch {
		// lovable-tagger not installed — continue without it
		lovableTaggerPlugin = undefined;
	}

	return {
		server: {
			host: "::",
			port: 8080,
		},
		plugins: [
			react(),
			...(lovableTaggerPlugin ? [lovableTaggerPlugin] : []),
		],
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	};
});
