import ColorThief from "colorthief";

export const extractColors = async (
  imageUrl?: string
): Promise<CoverArtColors> => {
  return new Promise((resolve, reject) => {
    if (!imageUrl) {
      reject("Image URL is undefined");
      return;
    }

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;

    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        let primaryColorRGB;
        let primaryColorHEX;

        try {
          primaryColorRGB = colorThief.getColor(img);
          primaryColorHEX = rgbArrayToHex(primaryColorRGB);
        } catch (innerError) {
          console.error("Error extracting primary color:", innerError);
          primaryColorRGB = null;
          primaryColorHEX = null;
        }

        if (!primaryColorRGB || !primaryColorHEX) {
          const defaultPrimaryColor = getFinalColor(
            parseHexToRGB("#06041e"),
            "#06041e",
            -5,
            0,
            5,
            12.5
          );
          const defaultSecondaryColor = getFinalColor(
            parseHexToRGB("#221c3e"),
            "#221c3e",
            -35,
            -15,
            -5,
            2.5
          );
          //const defaultSecondaryColor = getFinalColor(
          //     parseHexToRGB('#221c3e'),
          //     '#221c3e',
          //     -35,
          //     -15,
          //     -5,
          //     2.5
          // )

          resolve({
            primary: defaultPrimaryColor,
            secondary: defaultSecondaryColor,
            background: "",
          });
          return;
        }

        /**
         * light-checks:
         *        - isExtraLight: > 80
         *        - isLight: > 40
         *        - isDark: > 20
         *        - isExtraDark: < 20
         */
        const primaryHex = getFinalColor(
          primaryColorRGB,
          primaryColorHEX,
          -5,
          0,
          5,
          12.5
        );
        const secondaryHex = getFinalColor(
          primaryColorRGB,
          primaryColorHEX,
          -35,
          -15,
          -5,
          2.5
        );

        //consolelogColorluminance(primaryColorRGB, 'Primary')
        //consolelogColorluminance(parseHexToRGB(secondaryHex), 'Secondary')
        resolve({
          primary: primaryHex,
          secondary: secondaryHex,
          background: "",
        });
      } catch (error) {
        console.error("Error extracting colors:", error);
        reject(error);
      }
    };

    img.onerror = (error) => {
      console.error("Error loading image:", error);
      reject(error);
    };
  });
};

// Helper function to convert an RGB array to a hex string
const rgbArrayToHex = (rgbArray: number[]): string => {
  return `#${rgbArray.map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};

export const isColorLight = (
  rgbArray: number[],
  threshold: number
): boolean => {
  const luminance =
    0.2126 * rgbArray[0] + 0.7152 * rgbArray[1] + 0.0722 * rgbArray[2];
  return luminance > threshold; // Threshold can be adjusted
};

// Helper function to convert HSL to RGB
const hslToRgb = (
  h: number,
  s: number,
  l: number
): [number, number, number] => {
  let r: number, g: number, b: number;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

// Function to convert Hex to RGB
export const parseHexToRGB = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
};

// Helper function to convert RGB to Hex
export const rgbToHex = (r: number, g: number, b: number) => {
  return `#${r.toString(16).padStart(2, "0")}${g
    .toString(16)
    .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

// Helper function to convert RGB to HSL
const rgbToHsl = (
  r: number,
  g: number,
  b: number
): [number, number, number] => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h: number = 0;
  let s: number;
  const l: number = (max + min) / 2;
  if (max === min) {
    h = 0; // achromatic
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h, s, l];
};

export const getFinalColor = (
  primaryColorRGB: [number, number, number],
  primaryColorHEX: string,
  extraLight: number,
  light: number,
  dark: number,
  extraDark: number
) => {
  const isExtraLight = isColorLight(primaryColorRGB, 80);
  if (isExtraLight) {
    const extraBrightPrimary = adjustColorLightness(
      primaryColorHEX,
      extraLight
    ); // primary -10
    return extraBrightPrimary;
  }

  const isLight = isColorLight(primaryColorRGB, 40);
  if (isLight) {
    const BrightPrimary = adjustColorLightness(primaryColorHEX, light); // primary 0
    return BrightPrimary;
  }

  const isDark = isColorLight(primaryColorRGB, 20);
  if (isDark) {
    const darkBrightPrimary = adjustColorLightness(primaryColorHEX, dark); // primary 5
    return darkBrightPrimary;
  }
  const isExtraDark = !isColorLight(primaryColorRGB, 20);
  if (isExtraDark) {
    const extraDarkBrightPrimary = adjustColorLightness(
      primaryColorHEX,
      extraDark
    ); // primary 10
    return extraDarkBrightPrimary;
  }
  return primaryColorHEX;
};

// Function to adjust color lightness
export const adjustColorLightness = (
  hexColor: string,
  percent: number
): string => {
  const [r, g, b] = parseHexToRGB(hexColor);

  const [h, s, l] = rgbToHsl(r, g, b);

  let newL = l + percent / 100;
  newL = Math.max(0, Math.min(1, newL));

  const [newR, newG, newB] = hslToRgb(h, s, newL);
  const newHex = rgbToHex(newR, newG, newB);

  return newHex;
};
