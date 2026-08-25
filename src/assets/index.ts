// Brand Logos (WebP optimized)
import logo128 from './images/logo_128.webp';
import logo256 from './images/logo_256.webp';
import logo512 from './images/logo_512.webp';

// Executive Card Photos (WebP optimized ~15-25KB each)
import ethanCard from './images/exec_ethan_ceo_1787616046363_card.webp';
import lucasCard from './images/exec_lucas_coo_1787616062294_card.webp';
import julianCard from './images/exec_julian_cto_1787616075055_card.webp';
import arthurCard from './images/exec_arthur_cfo_1787616090941_card.webp';
import stellaCard from './images/exec_stella_cmo_1787616105563_card.webp';
import milesCard from './images/exec_miles_cgo_1787616120147_card.webp';
import irisCard from './images/exec_iris_cbdo_1787616135363_card.webp';

// Executive Thumbnails (~2-4KB each for modals and compact views)
import ethanThumb from './images/exec_ethan_ceo_1787616046363_thumb.webp';
import lucasThumb from './images/exec_lucas_coo_1787616062294_thumb.webp';
import julianThumb from './images/exec_julian_cto_1787616075055_thumb.webp';
import arthurThumb from './images/exec_arthur_cfo_1787616090941_thumb.webp';
import stellaThumb from './images/exec_stella_cmo_1787616105563_thumb.webp';
import milesThumb from './images/exec_miles_cgo_1787616120147_thumb.webp';
import irisThumb from './images/exec_iris_cbdo_1787616135363_thumb.webp';

export const BrandLogos = {
  sm: logo128,
  md: logo256,
  lg: logo512,
  default: logo256,
};

export const ExecutiveImages = {
  ethan: { card: ethanCard, thumb: ethanThumb },
  lucas: { card: lucasCard, thumb: lucasThumb },
  julian: { card: julianCard, thumb: julianThumb },
  arthur: { card: arthurCard, thumb: arthurThumb },
  stella: { card: stellaCard, thumb: stellaThumb },
  miles: { card: milesCard, thumb: milesThumb },
  iris: { card: irisCard, thumb: irisThumb },
};
