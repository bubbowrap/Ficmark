import Header from './Header';
interface LayoutProps {
  style?: object;
  children?: React.ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children, style }) => {
  return (
    <div style={style}>
      <Header />
      {children}
    </div>
  );
};

export default AppLayout;
