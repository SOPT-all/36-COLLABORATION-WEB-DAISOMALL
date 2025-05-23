import Divider from '@components/common/divider/Divider';
import BottomCarousel from './components/Carousel/BottomCarousel';
import Review from './components/Review/Review';
import TodayDiscovery from './components/TodayDiscovery/TodayDiscovery';
import theme from '@styles/theme';
import Accordion from './components/Accordion/Accordion';
import BuyBar from './components/BuyBar/BuyBar';

const ProductDetailBottom = () => (
  <div>
    <TodayDiscovery />
    <Divider height="8px" color={theme.colors['gray-06']} />
    <BottomCarousel />
    <Divider height="8px" color={theme.colors['gray-06']} />
    <Review />
    <Divider height="8px" color={theme.colors['gray-06']} />
    <Accordion />
    <BuyBar />
  </div>
);

export default ProductDetailBottom;
