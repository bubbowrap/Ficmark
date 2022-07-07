export const WelcomeIcon = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '48px',
        }}
      >
        <div style={{ position: 'absolute', marginLeft: '-8px' }}>👋</div>
        <svg
          width='72'
          height='72'
          viewBox='0 0 72 72'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='36' cy='36' r='36' fill='#321B7E' />
          <path d='M10 60.36H58V12.36H10V60.36Z' fill='url(#pattern0)' />
        </svg>
      </div>
    </>
  );
};
