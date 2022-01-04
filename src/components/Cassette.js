import CassetteHub from './CassetteHub';
import PropTypes from 'prop-types';

const Cassette = ({ mode }) => {
  const colors = {
    green: '#6cc06c',
    dark: '#414042',
    light: '#e6e7e8',
  };
  return (
    <div className={`cassette-wrap ${mode}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 274 168.31"
        className="cassette"
      >
        <g id="b4ddbf0e-ab7b-4901-8f02-4e218e389269" data-name="Layer 2">
          <rect width="274" height="168.31" rx="9.48" fill={colors.green} />
          <rect
            x="19.99"
            y="11.74"
            width="234.02"
            height="98.65"
            rx="9.48"
            fill={colors.light}
          />
          <rect
            x="42.48"
            y="44.82"
            width="189.04"
            height="52.64"
            rx="9.48"
            fill={colors.dark}
          />
          <path
            d="M213.77,126.73H60.23c-8.21,0-9.56,6.74-9.68,7.51l0,.18-7.43,33.89H230.92l-7.47-34.09C223.33,133.47,222,126.73,213.77,126.73Z"
            fill="none"
          />
          <path
            d="M229.37,133.23c-.7-4.39-4.82-12.5-15.6-12.5H60.23c-10.78,0-14.9,8.11-15.6,12.5l-7.69,35.08h6.14l7.43-33.89,0-.18c.12-.77,1.47-7.51,9.68-7.51H213.77c8.21,0,9.56,6.74,9.68,7.49l7.47,34.09h6.14Z"
            fill={colors.dark}
          />
          <rect
            x="82.83"
            y="145.32"
            width="11.9"
            height="11.9"
            rx="2.9"
            fill={colors.dark}
          />
          <circle cx="67.38" cy="156.94" r="5.9" fill={colors.dark} />
          <rect
            x="179.28"
            y="145.32"
            width="11.9"
            height="11.9"
            rx="2.9"
            fill={colors.dark}
          />
          <circle cx="206.62" cy="156.94" r="5.9" fill={colors.dark} />
          <rect
            x="53.46"
            y="50.61"
            width="167.75"
            height="41.27"
            rx="19.52"
            fill={colors.light}
          />
        </g>
        <g id="a7b85072-b040-4504-a38a-79e55aea4be7" data-name="Layer 3">
          <path
            d="M107.14,56.22h-21A19.66,19.66,0,0,1,85.09,86.7h21.66a37,37,0,0,0,.39-30.48Z"
            fill={colors.dark}
          />
          <path
            d="M181.12,71a19.63,19.63,0,0,1,6.73-14.81H141.94a60.73,60.73,0,0,0,.23,30.48h46.74A19.64,19.64,0,0,1,181.12,71Z"
            fill={colors.dark}
          />
        </g>
        <g id="eeb7e20e-519b-43e0-83a3-eebd2eb0711e" data-name="Layer 4">
          {mode === 'loading' ? (
            <g>
              <path
                d="M96.26,36.59a20.6,20.6,0,0,0-12.62-1.36A115,115,0,0,0,84.14,20c0-1.29-2-1.29-2,0a115,115,0,0,1-.62,16.49,1,1,0,0,0,1.27,1,18.25,18.25,0,0,1,12.46.83C96.41,38.83,97.43,37.11,96.26,36.59Z"
                fill={colors.dark}
              />
              <path
                d="M107.48,28.83c-.7-2.86-2.5-5.64-5.42-6.35a.92.92,0,0,0-1.2-.8c-2.85.86-4.5,3.89-4.89,6.68a9,9,0,0,0,2.63,7.82c1.93,1.81,5.29,3.11,7.62,1.29C108.8,35.46,108.17,31.59,107.48,28.83Zm-2,6.48c-1.22,1.89-3.91.83-5.27-.33a6.86,6.86,0,0,1-2.39-5.41c0-1.89.87-4.35,2.55-5.48a.94.94,0,0,0,.56.22c2.21.13,3.67,2.14,4.31,4.08A17.52,17.52,0,0,1,106,31.9,5.14,5.14,0,0,1,105.52,35.31Z"
                fill={colors.dark}
              />
              <path
                d="M126.94,36.13c-1-1.63-1.91-3.25-2.86-4.87a1,1,0,0,0,.15-.49,1,1,0,0,0-1-1h0c-.3-.52-.6-1-.91-1.56-1.37-2.33-3.06-4.76-3.36-7.52a1.09,1.09,0,0,0-1.55-.84,1,1,0,0,0-1.43.58,160.39,160.39,0,0,0-4.86,16.34c-.3,1.26,1.63,1.79,1.93.54.46-1.93,1-3.85,1.51-5.76a.88.88,0,0,0,.43.1,55.28,55.28,0,0,1,7.05,0q1.6,2.72,3.2,5.45A1,1,0,0,0,126.94,36.13Zm-11.87-6.49q1-3.54,2.25-7a26.49,26.49,0,0,0,2.92,6.07l.55.94Q117.94,29.49,115.07,29.64Z"
                fill={colors.dark}
              />
              <path
                d="M140.42,29.12c-1.15-5.64-6.48-9.34-11.92-10.12a1,1,0,0,0-.62.11,1,1,0,0,0-1.21,1.22,137.9,137.9,0,0,1,3.06,17,1.1,1.1,0,0,0,1.58.83,3.75,3.75,0,0,0,3.34-.13,16.8,16.8,0,0,0,3.48-1.91,6,6,0,0,0,2.27-2.93A8.21,8.21,0,0,0,140.42,29.12Zm-2.91,4.95a10.93,10.93,0,0,1-2.69,1.7c-.71.36-1.9,1.12-2.67.59a.94.94,0,0,0-.57-.17,142.86,142.86,0,0,0-2.68-15.1c4,.83,7.83,3.24,9.23,7.24C138.8,30.23,139.1,32.58,137.51,34.07Z"
                fill={colors.dark}
              />
              <path
                d="M145.31,36V19.29a1,1,0,0,0-2,0V36a1,1,0,0,0,2,0Z"
                fill={colors.dark}
              />
              <path
                d="M162.61,18.92c-.07-1.28-2.07-1.29-2,0q.38,6.49.74,13c-1.17-1.53-2.4-3-3.58-4.53q-2.9-3.66-5.86-7.28l0,0-.15-.19c-.76-.91-2,.22-1.55,1.18-.08,5.45,0,10.91.33,16.36a1,1,0,0,0,2,.26l.18-.6a.86.86,0,0,0-.2-.88q-.31-6.3-.29-12.6c1.34,1.64,2.68,3.29,4,5,1.87,2.38,3.89,4.73,5.52,7.29a1,1,0,0,0,1.86-.51Z"
                fill={colors.dark}
              />
              <g>
                <path
                  d="M189.17,33.12a1.08,1.08,0,0,0-.46-.59.66.66,0,0,0-.38-.12.74.74,0,0,0-.39,0,1.23,1.23,0,0,0-.4.23,1.06,1.06,0,0,0-.31,0,1.38,1.38,0,0,0-.84.22,1.67,1.67,0,0,0-.58.63,1.63,1.63,0,0,0-.2.86,1.55,1.55,0,0,0,.07.43,1.85,1.85,0,0,0,.35.59,1.74,1.74,0,0,0,.76.47,2.08,2.08,0,0,0,.93,0,1.85,1.85,0,0,0,1.26-.92,2.26,2.26,0,0,0,.28-1,1.41,1.41,0,0,0,0-.29A3.15,3.15,0,0,0,189.17,33.12Z"
                  fill={colors.dark}
                />
                <path
                  d="M196.76,33.39a2,2,0,0,0-.15-.33,2.1,2.1,0,0,0-.22-.3,1.89,1.89,0,0,0-.4-.34l-.12-.07a1.92,1.92,0,0,0-.36-.14.31.31,0,0,0-.13,0,1.71,1.71,0,0,0-.78,0,1.92,1.92,0,0,0-.36.14s0,0-.05.05l-.09,0a3,3,0,0,0-.28.22,3.15,3.15,0,0,0-.22.29,1.86,1.86,0,0,0-.2.43,1.88,1.88,0,0,0,0,1,1.76,1.76,0,0,0,.44.83l.08.08a1.94,1.94,0,0,0,.29.21,2.41,2.41,0,0,0,.33.15l.13,0,.36.05a1.9,1.9,0,0,0,.25,0l.24,0a2.55,2.55,0,0,0,.35-.14,1.82,1.82,0,0,0,.41-.27,1.85,1.85,0,0,0,.31-.37,1.38,1.38,0,0,0,.21-.44l0-.11a1.67,1.67,0,0,0,0-.39,2.2,2.2,0,0,0,0-.36C196.79,33.47,196.77,33.43,196.76,33.39Zm-1.66.73h0Zm.18-.14-.05.06-.06.05h0Zm-.13.12h0l0,0h0Zm0,0h0l0,0A0,0,0,0,0,195.12,34.12Z"
                  fill={colors.dark}
                />
                <path
                  d="M204.68,33a2.33,2.33,0,0,0-.37-.46,2.18,2.18,0,0,0-1.48-.56,4.18,4.18,0,0,0-1.31.26,1,1,0,0,0-.7,1.23s0,0,0,0a1.59,1.59,0,0,0,.23,1.24,2,2,0,0,0,.57.55,1.9,1.9,0,0,0,.52.24,2.44,2.44,0,0,0,1.17.06A2.14,2.14,0,0,0,204.4,35a1.68,1.68,0,0,0,.43-.68,1,1,0,0,0,.06-.29,1.42,1.42,0,0,0,0-.29A2,2,0,0,0,204.68,33Zm-2.44,1.11h0l.08,0h-.11Z"
                  fill={colors.dark}
                />
              </g>
              <path
                d="M179.7,29.74a1,1,0,0,0,1-1,1,1,0,0,0-1-1l-6.89.86a1,1,0,0,0-1,1,.78.78,0,0,0,0,.14c-.08.56.22,1.13.93,1.05l2.06-.25a10.51,10.51,0,0,1,2.09-.21c1,.11,1.79,2.11,1.75,3-.07,1.35-1.53,1.31-2.55,1.36a22.35,22.35,0,0,1-4.17-.13,5.23,5.23,0,0,1-2.87-1.12c-.94-.86-1.07-2.28-1.19-3.47a9.94,9.94,0,0,1,1.63-7.2,7,7,0,0,1,7.15-2.57c1.25.29,1.78-1.64.53-1.93A9,9,0,0,0,168.41,21c-2.38,2.68-2.87,6.14-2.46,9.59a6.61,6.61,0,0,0,1.79,4.36,7.3,7.3,0,0,0,4,1.6,22.49,22.49,0,0,0,5.62.05A3.36,3.36,0,0,0,180.57,34a5.53,5.53,0,0,0-1.19-4.26Z"
                fill={colors.dark}
              />
            </g>
          ) : (
            <g>
              <path
                d="M126.64,20.11c-.47,1.21-1.65,2-2.17,3.2a22.29,22.29,0,0,0-1.09,4.27c-.37,1.62-.73,3.23-1.09,4.84-1.57-4.58-4.81-8.55-7.22-12.77a1,1,0,0,0-1.73,1c3,5.27,7.68,10.28,7.86,16.67,0,1.09,1.71,1.41,2,.27l2.13-9.49a16,16,0,0,1,1.14-4.28c.64-1.14,1.64-1.93,2.13-3.18S127.1,18.92,126.64,20.11Z"
                fill={colors.dark}
              />
              <path
                d="M93.93,20.47c-2.48-1.57-6.86-2-9,.37a4.21,4.21,0,0,0-1,3.94,4,4,0,0,0,2.92,2.53A26.8,26.8,0,0,0,92,27.8a5.13,5.13,0,0,1,2.37.37A4.4,4.4,0,0,1,95.59,30c.62,1.33,1.11,3.16.11,4.43s-2.61,1.55-4,1.69a10.8,10.8,0,0,1-9-3.48c-.86-1-2.27.46-1.41,1.41a12.66,12.66,0,0,0,7.94,4c2.8.34,6.62-.19,8.31-2.73A5.67,5.67,0,0,0,98,30.75a8.4,8.4,0,0,0-2.15-3.93c-1.35-1.2-3.47-1-5.15-1.1-1.33-.08-3.33.09-4.43-.85s-.06-2.84,1.11-3.33a6.54,6.54,0,0,1,5.56.66c1.09.69,2.09-1,1-1.73Z"
                fill={colors.dark}
              />
              <path
                d="M115.05,36l-2.86-4.87a1.08,1.08,0,0,0,.15-.49,1,1,0,0,0-1-1h0l-.91-1.56c-1.37-2.33-3.07-4.76-3.37-7.52a1.08,1.08,0,0,0-1.55-.84,1,1,0,0,0-1.42.58A159.82,159.82,0,0,0,99.2,36.68c-.3,1.25,1.62,1.78,1.93.53.46-1.93,1-3.85,1.51-5.76a.77.77,0,0,0,.42.1,55.44,55.44,0,0,1,7.06,0c1.07,1.81,2.13,3.63,3.2,5.45A1,1,0,0,0,115.05,36Zm-11.87-6.49q1-3.54,2.24-7a27.08,27.08,0,0,0,2.93,6.06l.55.94C107,29.43,105.08,29.44,103.18,29.54Z"
                fill={colors.dark}
              />
              <path
                d="M133.56,36V19.29a1,1,0,0,0-2,0V36a1,1,0,0,0,2,0Z"
                fill={colors.dark}
              />
              <path
                d="M150.86,19c-.07-1.28-2.07-1.29-2,0q.36,6.49.73,13c-1.16-1.53-2.39-3-3.57-4.53q-2.9-3.66-5.86-7.28l0,0L140,19.9c-.75-.91-2,.22-1.54,1.18q-.13,8.18.32,16.36a1,1,0,0,0,2,.26l.18-.6a.89.89,0,0,0-.2-.88q-.31-6.3-.29-12.6c1.34,1.64,2.68,3.29,4,4.95a88.28,88.28,0,0,1,5.52,7.29,1,1,0,0,0,1.87-.51Z"
                fill={colors.dark}
              />

              <path
                d="M167.81,29.73a1,1,0,0,0,1-1,1,1,0,0,0-1-1l-6.89.86a1,1,0,0,0-1,1,.77.77,0,0,0,0,.15.83.83,0,0,0,.92,1l2.07-.24a9.18,9.18,0,0,1,2.08-.21c1,.11,1.8,2.1,1.75,3-.06,1.34-1.52,1.31-2.54,1.36a24.2,24.2,0,0,1-4.17-.13,5.2,5.2,0,0,1-2.87-1.12c-.94-.87-1.08-2.28-1.19-3.48a9.91,9.91,0,0,1,1.63-7.19,7,7,0,0,1,7.14-2.58c1.25.3,1.79-1.63.53-1.93A9,9,0,0,0,156.52,21c-2.38,2.68-2.88,6.14-2.46,9.6a6.58,6.58,0,0,0,1.79,4.35,7.16,7.16,0,0,0,4,1.6,22.57,22.57,0,0,0,5.63,0A3.35,3.35,0,0,0,168.68,34a5.57,5.57,0,0,0-1.19-4.26Z"
                fill={colors.dark}
              />
              <path
                d="M177.27,33.16a1,1,0,0,0-.46-.59.61.61,0,0,0-.37-.12.69.69,0,0,0-.4,0,1.09,1.09,0,0,0-.39.22,1.13,1.13,0,0,0-.32,0,1.35,1.35,0,0,0-.83.22,1.67,1.67,0,0,0-.58.63,1.63,1.63,0,0,0-.2.86,1.55,1.55,0,0,0,.07.43,1.82,1.82,0,0,0,.35.6,1.7,1.7,0,0,0,.76.46,2,2,0,0,0,.92,0,1.85,1.85,0,0,0,1.27-.92,2.26,2.26,0,0,0,.28-1,1.29,1.29,0,0,0,0-.28A2.35,2.35,0,0,0,177.27,33.16Z"
                fill={colors.dark}
              />
              <path
                d="M184.87,33.43c-.05-.11-.09-.22-.15-.33a2,2,0,0,0-.22-.29,1.61,1.61,0,0,0-.4-.34l-.12-.08a2.67,2.67,0,0,0-.36-.14.32.32,0,0,0-.14,0,1.58,1.58,0,0,0-.38,0,1.67,1.67,0,0,0-.39,0,2.35,2.35,0,0,0-.37.14s0,0-.05.05l-.09,0a2.88,2.88,0,0,0-.27.22,1.48,1.48,0,0,0-.22.29,1.56,1.56,0,0,0-.21.43,2,2,0,0,0,0,1,1.68,1.68,0,0,0,.44.83l.08.08a2,2,0,0,0,.29.22l.33.14.12,0,.37.05.25,0,.24,0a3.42,3.42,0,0,0,.34-.13,2,2,0,0,0,.41-.28,1.61,1.61,0,0,0,.32-.37,1.43,1.43,0,0,0,.21-.43l0-.12a1.64,1.64,0,0,0,0-.38,1.5,1.5,0,0,0,0-.37A.5.5,0,0,0,184.87,33.43Zm-1.66.73h0Zm.18-.14,0,.06-.06.05h0Zm-.13.12h0l0,0h0Zm0,0h0l0,0A0,0,0,0,0,183.23,34.16Z"
                fill={colors.dark}
              />
              <path
                d="M192.78,33a1.78,1.78,0,0,0-.37-.46,2.18,2.18,0,0,0-1.48-.56,4.18,4.18,0,0,0-1.3.26,1,1,0,0,0-.6.46,1,1,0,0,0-.1.77s0,0,0,0a1.6,1.6,0,0,0,.24,1.24,2,2,0,0,0,.56.55,2.11,2.11,0,0,0,.53.24,2.44,2.44,0,0,0,1.17.06,2.1,2.1,0,0,0,1.07-.54,1.68,1.68,0,0,0,.43-.68,2.11,2.11,0,0,0,.06-.29,1.41,1.41,0,0,0,0-.29A1.72,1.72,0,0,0,192.78,33Zm-2.43,1.11h0l.07,0h-.1Z"
                fill={colors.dark}
              />
            </g>
          )}
        </g>
      </svg>
      <CassetteHub pos="left" />
      <CassetteHub pos="right" />
    </div>
  );
};

Cassette.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Cassette;
