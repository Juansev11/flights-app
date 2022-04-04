export const Logo = ({
  width = '144px',
  height = '48px',
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    preserveAspectRatio="xMidYMid meet"
    role="img"
    focusable="false"
    viewBox="0 0 120 40"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        d="m0 16.84h9.27l-.52 2.33h-5.95v3.28h5.84l-.48 2.53h-5.36v3.56h6.47l-.48 2.34h-8.79zm89.61 7.91c.53.07 1.24.17 1.6.35.35.18.65.44.86.7.2.25.36.54.45.86.1.32.14.65.14.98v.2c0 .58-.1 1.07-.32 1.49a2.6 2.6 0 0 1 -.9 1c-.38.26-1.12.46-1.67.58-.54.12-1.14.18-1.8.18a13.58 13.58 0 0 1 -3.67-.55l.44-1.93a13.36 13.36 0 0 0 3.18.46c.46 0 .77 0 1.08-.03.28-.03.5-.12.66-.22s.3-.27.35-.43c.04-.14.05-.22.05-.42 0-.3-.08-.51-.24-.71-.15-.2-.46-.32-.95-.39l-1.46-.2c-1.03-.13-2.08-.4-2.57-.9a2.61 2.61 0 0 1 -.73-1.93v-.2c0-1.03.39-1.81 1.16-2.33a7.02 7.02 0 0 1 3.6-.85 10.7 10.7 0 0 1 3.3.51l-.47 1.87a11.3 11.3 0 0 0 -2.77-.36c-.91 0-1.5.06-1.82.24-.32.2-.46.38-.46.8 0 .35.12.55.31.7.2.15.51.27 1.01.34l1.64.2zm-28.31 6.13v-10.24h2.5l.16 1.1c.32-.43.75-.76 1.27-.99a4.37 4.37 0 0 1 1.78-.34c.55 0 1.18.07 1.63.21a3.02 3.02 0 0 1 1.94 1.78c.2.45.28.97.28 1.58v6.9h-2.72v-6.25c0-.83-.15-1.42-.45-1.77s-.75-.52-1.47-.52c-.77 0-1.35.4-1.7.87-.35.5-.4 1.49-.4 2.38v5.29zm-32.44-7.95a9.55 9.55 0 0 0 -.57-.11 4 4 0 0 0 -.69-.06c-.87 0-1.5.22-1.88.68-.4.45-.49.94-.49 1.88v5.56h-2.95v-10.24h2.63l.16 1.23c.33-.45.74-.79 1.22-1.02a4.08 4.08 0 0 1 1.76-.35 4.48 4.48 0 0 1 1.34.22zm-8.4-2.29v10.24h-2.5l-.15-1.1c-.33.43-.76.76-1.28.99s-1.11.34-1.78.34a5.8 5.8 0 0 1 -1.63-.21 3.03 3.03 0 0 1 -1.94-1.78 4.12 4.12 0 0 1 -.28-1.58v-6.9h2.72v6.26c0 .82.15 1.41.45 1.76s.76.52 1.47.52c.77 0 1.35-.4 1.7-.87.36-.5.4-1.5.4-2.38v-5.29zm30.54 6.29 1.5-6.29h2.74l-3.01 10.24h-2.5l-1.78-6.2-1.76 6.2h-2.59l-3.1-10.24h2.9l1.52 6.36 1.68-5.92h2.72l1.67 5.85zm5.67 3.95v-10.24h2.77v10.24zm1.36-14.37c.55 0 .97.12 1.22.35s.37.59.37 1c0 .43-.12.78-.37 1.01s-.67.34-1.22.34-.98-.1-1.23-.34c-.25-.23-.37-.58-.37-1s.12-.78.37-1c.25-.24.68-.36 1.23-.36zm21.75 9.72c0 .92-.18 1.6-.53 2.03-.36.43-.92.65-1.7.65a2.6 2.6 0 0 1 -1.1-.2 1.5 1.5 0 0 1 -.65-.58 2.5 2.5 0 0 1 -.33-.94 8.1 8.1 0 0 1 -.09-1.28v-.7c0-1.06.2-1.81.6-2.26.4-.44 1.04-.67 1.9-.67.35 0 .69.04 1.03.1.34.07.63.17.87.32zm.49-5.58a9.2 9.2 0 0 0 -2.33-.24c-.81 0-1.78.1-2.42.29a3.84 3.84 0 0 0 -2.64 2.4 6.11 6.11 0 0 0 -.36 2.2v.7c0 1.66.34 2.89 1.02 3.67a4.4 4.4 0 0 0 3.26 1.29c1.4 0 2.27-.39 2.98-1.07v.45c0 1.09-.19 1.74-.64 2.3-.46.54-1.27.79-2.32.74a13.07 13.07 0 0 1 -3.28-.53l-.46 2.1c.64.21 1.3.38 1.98.47.67.1 1.42.13 2.24.15 1.7.04 2.98-.46 3.88-1.38s1.29-2.22 1.29-3.9v-8.82c-.61-.33-1.45-.63-2.2-.82zm-43.03 5.67c0 1.07-.16 1.82-.5 2.26-.33.44-.92.66-1.74.66-.41 0-.76-.05-1.05-.14s-.53-.25-.72-.47c-.2-.22-.33-.52-.41-.9a6.43 6.43 0 0 1 -.13-1.4v-1.15c0-1.05.17-1.8.52-2.24s.94-.66 1.79-.66c.84 0 1.42.22 1.75.66s.5 1.19.5 2.24v1.14zm2.45-2.95c-.15-.6-.41-1.12-.77-1.56a3.67 3.67 0 0 0 -1.45-1.02 7.27 7.27 0 0 0 -2.5-.37c-.9 0-1.92.15-2.52.4a3.66 3.66 0 0 0 -2.23 2.59c-.16.6-.29 1.21-.29 1.92v.83c0 .71.12 1.36.27 1.96a3.6 3.6 0 0 0 2.22 2.6c.6.25 1.64.4 2.56.4s1.92-.13 2.53-.4a3.64 3.64 0 0 0 2.2-2.63c.15-.6.27-1.23.27-1.92v-.82a8.1 8.1 0 0 0 -.3-1.98z"
        fill="#7c2045"
      ></path>
      <path
        d="m102.43 5.26c-2.23-.3-3.36.94-4.92 2.08l-5.34 4.2 1.02.54h.01c1.34.66 3.2.44 4.46-.5l2.26-1.8.86-.68 4.3-3.42z"
        fill="#7cc5d3"
      ></path>
      <path d="m92.17 11.53 1.02.55h.01c1.34.66 3.2.44 4.46-.5l3.12-2.48z" fill="#2090b6"></path>
      <path
        d="m111.55 7.85-2.86-.51s-2-.48-3.67.81c0 0-1.23.92-2.14 1.63l-2.02 1.6-4.67 3.71-.04.03 1.41.75c1.34.66 3.2.44 4.47-.5l4.18-3.31 5.34-4.2"
        fill="#7c2045"
      ></path>
      <path
        d="m102.88 9.78c.91-.71 2.14-1.63 2.14-1.63.32-.24.64-.42.97-.55l-5.2 1.5-.87.69-2.25 1.79a4.52 4.52 0 0 1 -4.47.5c1.14.69 2.91.84 5.58.05l1.82-.54.27-.21zm7.34 1.6a11.2 11.2 0 0 1 2.16-1.46l-5.83 1.87-.34.27-4.18 3.3a4.52 4.52 0 0 1 -4.47.51c2.06 1.13 5.23.3 7.89-.65l.16-.13 4.61-3.72m6.85 3.75c-2.33-.68-3.04-.25-5.79.58l-.23.2-4.45 3.52a4.73 4.73 0 0 1 -4.58.46c1.65.86 3.36.65 6.28-.26l11.7-3.6z"
        fill="#c1beb9"
      ></path>
      <path
        d="m117.85 10.27-3.1-.56c-1.85-.35-2.73.25-4.53 1.66l-4.61 3.72-5 4.04 1.4.75c1.34.66 3.33.48 4.6-.46l4.43-3.52z"
        fill="#7c2045"
      ></path>
      <path
        d="m100.6 11.59 9.9-2.91-3.95 3.11-10.4 3.33zm4.85 3.63 10.77-3.6-4.94 4.08-10.68 3.43 4.85-3.9"
        fill="#a22455"
      ></path>
    </g>
  </svg>
);