import Button from './button';

export default function Footer({ onNext, onPrevious, bgColor }) {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        bgColor='transparent'
        color='hsl(231, 11%, 63%)'
        onClickPrevious={onPrevious}
        direction='previous'
      >
        Go Back
      </Button>
      <Button
        bgColor={bgColor}
        color='#fff'
        onClickNext={onNext}
        direction='next'
      >
        Next Step
      </Button>
    </footer>
  );
}
