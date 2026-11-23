import type { ImageMetadata } from "astro";
import sharp from "sharp";

const cache = new Map<string, Promise<string | undefined>>();

/**
 * A tiny blurred copy of an image as an SVG data URL, under 1 KB, to show while the real image loads.
 * The image is shrunk to 20 px across and blurred by the browser, so the edges stay soft at any size.
 */
export function blurredPreview(image: ImageMetadata): Promise<string | undefined> {
  // Astro adds the file's path to imported images, but doesn't list it in the type
  const path = (image as ImageMetadata & { fsPath?: string }).fsPath;
  if (!path) return Promise.resolve(undefined);

  let preview = cache.get(path);
  if (!preview) {
    preview = render(path);
    cache.set(path, preview);
  }
  return preview;
}

async function render(path: string) {
  const { data, info } = await sharp(path).resize(20).webp({ quality: 70 }).toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  // The alpha table keeps the blur from fading out at the edges
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>` +
    `<filter id='b' color-interpolation-filters='sRGB'><feGaussianBlur stdDeviation='1'/>` +
    `<feComponentTransfer><feFuncA type='discrete' tableValues='1 1'/></feComponentTransfer></filter>` +
    `<image width='100%' height='100%' preserveAspectRatio='none' filter='url(#b)' href='data:image/webp;base64,${data.toString("base64")}'/>` +
    `</svg>`;
  return `data:image/svg+xml,${svg.replaceAll("#", "%23").replaceAll("<", "%3C").replaceAll(">", "%3E")}`;
}
