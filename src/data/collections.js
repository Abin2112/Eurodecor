import services from './services.js';

// Product images may override the collection fallback. Initial non-laminate
// cards are design directions, to be replaced with confirmed catalogue items.
const details = {
  "laminates": {
    "heading": "Discover Our Range of Decorative Laminates",
    "intro": "Explore contemporary colours, tactile textures, synchronised wood designs and stone-inspired surfaces for distinctive interiors.",
    "products": [
      {
        "name": "SYNCHRO",
        "description": "Synchro laminates seamlessly blend realistic wood-inspired patterns with coordinated textures, bringing depth and natural character to engineered surfaces.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793899967/lam1.png",
      },
      {
        "name": "STRATO",
        "description": "A refined laminate range with clean, modern surface appeal. Ideal for interiors that need a sleek, sophisticated and contemporary finish.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793899966/lam6.png",
      },
      {
        "name": "PASTELLO",
        "description": "Pastello laminates bring soft tones and a calm visual appeal to interiors, creating subtle, elegant and sophisticated colour palettes.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793899965/lam5.png",
      },
      {
        "name": "MARBLE",
        "description": "Marble laminates capture the luxurious appearance of natural stone with the practicality of laminate. Ideal for tabletops, wall panels, counters and furniture.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793899967/lam4.png",
      },
      {
        "name": "TEXTURED",
        "description": "Textured laminates add depth, character and tactile appeal to interiors. Designed for surfaces that should feel as rich as they look.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793899967/lam3.png",
      },
      {
        "name": "DIET / INTERIOR LAMINATES",
        "description": "Versatile laminate collections combining design, practicality and everyday functionality for residential and commercial applications.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793899967/lam2.png",
      }
    ],
    "whatHeading": "Discover the Possibilities of Decorative Laminates",
    "whatDescription": "Discover decorative surfaces that bring colour, texture and character to furniture, cabinetry and wall panels. Explore coordinated wood-inspired patterns, stone-inspired designs and contemporary finishes to create a cohesive interior suited to your space and everyday needs.",
    "included": [
      {
        "title": "Decorative Surface Designs",
        "description": "Explore expressive surfaces for cabinetry, furniture and wall panels."
      },
      {
        "title": "Contemporary Colours",
        "description": "Build coordinated palettes with modern shades and subtle tones."
      },
      {
        "title": "Textured Finishes",
        "description": "Introduce tactile detail and depth to your interior surfaces."
      },
      {
        "title": "Wood-Inspired Patterns",
        "description": "Bring natural-looking grain and warmth to engineered surfaces."
      },
      {
        "title": "Stone-Inspired Designs",
        "description": "Explore marble and stone aesthetics for statement surfaces."
      },
      {
        "title": "Interior Applications",
        "description": "Coordinate surfaces across residential and commercial interiors."
      }
    ],
    "why": [
      "A coordinated range of colours, patterns and textures",
      "Surface choices for furniture, cabinetry and wall panels",
      "Wood and stone aesthetics within one collection",
      "Guidance on combining finishes across your space",
      "Design options for residential and commercial interiors"
    ],
    "highlights": [
      "Decorative Surface Designs",
      "Contemporary Colours",
      "Textured Finishes",
      "Wood-Inspired Patterns",
      "Stone-Inspired Designs",
      "Interior Applications"
    ],
    "whyHeading": "Considered Surfaces for Everyday Living",
    "process": [
      {
        "title": "Consultation",
        "description": "Discuss your space, design direction and intended laminates applications."
      },
      {
        "title": "Design Selection",
        "description": "Explore laminates patterns, tones and arrangements to suit your interior."
      },
      {
        "title": "Material Selection",
        "description": "Review the selected laminates, finish direction and surface requirements."
      },
      {
        "title": "Final Application",
        "description": "Coordinate the chosen laminates layout and finishing details with your application team."
      }
    ]
  },
  "veneers": {
    "heading": "Explore Our Range of Natural Wood Veneers",
    "intro": "Discover the individuality of natural wood through expressive grains, warm tones and carefully considered surface finishes.",
    "products": [
      {
        "name": null,
        "description": "Celebrate the individual grain and colour variations of natural wood veneers.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793900290/02._Dyed_Veneer.png",
      },
      {
        "name": null,
        "description": "Create a calm, ordered surface with linear grain arrangements.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793900290/04._Metallic_Veneer.png",
      },
      {
        "name": null,
        "description": "Introduce expressive grain movement for feature panels and furniture.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793900292/03._Smoked_Veneer.png",
      },
      {
        "name": null,
        "description": "Explore coordinated veneer arrangements for continuous visual rhythm.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793900292/01._Natural_Veneer.png",
      },
      {
        "name": null,
        "description": "Introduce expressive grain movement for feature panels and furniture.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793896653/06._Parquetry_Veneer.png",
      },
      {
        "name": null,
        "description": "Explore coordinated veneer arrangements for continuous visual rhythm.",
        "image": "https://res.cloudinary.com/g81wchrp/image/upload/v1793896653/05._Marquetry_Veneer.png",
      }
    ],
    "whatHeading": "Bring Natural Wood Character to Every Surface",
    "whatDescription": "Natural wood veneers reveal the grain, tone and texture of real timber in a versatile decorative surface. Explore grain arrangements, finish options and coordinated panels for cabinetry, furniture and architectural interiors, with guidance on selecting a natural look for your project.",
    "included": [
      {
        "title": "Natural Wood Selection",
        "description": "Explore wood tones and individual natural character."
      },
      {
        "title": "Grain and Texture Options",
        "description": "Consider linear grain, expressive figure and panel arrangements."
      },
      {
        "title": "Veneer Finishes",
        "description": "Choose a finish direction that complements the wood and interior."
      },
      {
        "title": "Decorative Applications",
        "description": "Bring wood character to furniture, cabinetry and wall panelling."
      },
      {
        "title": "Surface Customisation",
        "description": "Discuss matching and layout options for your project."
      },
      {
        "title": "Design Guidance",
        "description": "Coordinate wood surfaces with surrounding materials and colours."
      }
    ],
    "why": [
      "Natural wood grain with individual character",
      "Considered grain arrangements and panel matching",
      "Warmth for furniture and architectural interiors",
      "Guidance on tones, textures and finish combinations",
      "Surface selection tailored to your design direction"
    ],
    "highlights": [
      "Natural Wood Selection",
      "Grain and Texture Options",
      "Veneer Finishes",
      "Decorative Applications",
      "Surface Customisation",
      "Design Guidance"
    ],
    "whyHeading": "Natural Character, Thoughtfully Selected",
    "process": [
      {
        "title": "Consultation",
        "description": "Discuss your space, design direction and intended veneers applications."
      },
      {
        "title": "Design Selection",
        "description": "Explore veneers patterns, tones and arrangements to suit your interior."
      },
      {
        "title": "Material Selection",
        "description": "Review the selected veneers, finish direction and surface requirements."
      },
      {
        "title": "Final Application",
        "description": "Coordinate the chosen veneers layout and finishing details with your application team."
      }
    ]
  },
  "marquetry": {
    "heading": "Explore Our Range of Decorative Marquetry",
    "intro": "Explore decorative wood inlay, artistic compositions and carefully arranged contrasts for distinctive interior surfaces.",
    "products": [
      {
        "name": "GEOMETRIC INLAY",
        "description": "Build a decorative composition through ordered shapes and contrasting wood tones.",
        "image": null
      },
      {
        "name": "BOTANICAL PATTERNS",
        "description": "Explore nature-inspired motifs expressed through carefully arranged wood inlay.",
        "image": null
      },
      {
        "name": "DECORATIVE PANELS",
        "description": "Introduce an artistic focal point on wall panels, doors or furniture.",
        "image": null
      },
      {
        "name": "BESPOKE COMPOSITIONS",
        "description": "Discuss an individual pattern, scale and wood combination for your project.",
        "image": null
      }
    ],
    "whatHeading": "Express Your Vision Through Decorative Wood Inlay",
    "whatDescription": "Marquetry brings artistic detail to surfaces through carefully composed pieces of wood veneer. Explore decorative motifs, contrasting grains and bespoke compositions for feature panels, furniture and doors. Each design direction considers pattern, proportion and the character of the surrounding interior.",
    "included": [
      {
        "title": "Decorative Inlay Designs",
        "description": "Explore composed wood inlay for distinctive interior surfaces."
      },
      {
        "title": "Artistic Patterns",
        "description": "Choose a visual direction from geometric to nature-inspired motifs."
      },
      {
        "title": "Wood Combinations",
        "description": "Consider contrasting tones and grains within a composition."
      },
      {
        "title": "Custom Design Options",
        "description": "Discuss pattern scale and arrangement for your space."
      },
      {
        "title": "Detailed Craftsmanship",
        "description": "Appreciate precise alignment and considered decorative detail."
      },
      {
        "title": "Bespoke Applications",
        "description": "Plan decorative surfaces for panels, doors and furniture."
      }
    ],
    "why": [
      "Artistic compositions with a distinctive identity",
      "Considered combinations of wood tone and grain",
      "Decorative options for feature panels and furniture",
      "Attention to pattern, scale and alignment",
      "Guidance for bespoke surface concepts"
    ],
    "highlights": [
      "Decorative Inlay Designs",
      "Artistic Patterns",
      "Wood Combinations",
      "Custom Design Options",
      "Detailed Craftsmanship",
      "Bespoke Applications"
    ],
    "whyHeading": "Artistic Detail, Thoughtfully Composed",
    "process": [
      {
        "title": "Consultation",
        "description": "Discuss your space, design direction and intended marquetry applications."
      },
      {
        "title": "Design Selection",
        "description": "Explore marquetry patterns, tones and arrangements to suit your interior."
      },
      {
        "title": "Material Selection",
        "description": "Review the selected marquetry, finish direction and surface requirements."
      },
      {
        "title": "Final Application",
        "description": "Coordinate the chosen marquetry layout and finishing details with your application team."
      }
    ]
  },
  "parquetry": {
    "heading": "Explore Our Range of Patterned Parquetry",
    "intro": "Discover geometric wood layouts and rhythmic patterns that bring natural warmth and visual structure to interior floors and surfaces.",
    "products": [
      {
        "name": "HERRINGBONE",
        "description": "Explore the interlocking rhythm of a classic rectangular wood arrangement.",
        "image": null
      },
      {
        "name": "CHEVRON",
        "description": "Create directional movement with a balanced, angled wood pattern.",
        "image": null
      },
      {
        "name": "BASKET WEAVE",
        "description": "Introduce a woven geometric rhythm through grouped wood elements.",
        "image": null
      },
      {
        "name": "GEOMETRIC LAYOUTS",
        "description": "Explore patterned arrangements shaped around the proportions of your interior.",
        "image": null
      }
    ],
    "whatHeading": "Shape Your Interior with Patterned Wood Surfaces",
    "whatDescription": "Parquetry combines natural wood character with geometric order. Explore herringbone, chevron and other patterned layouts for flooring and decorative applications. Consider grain direction, module size, finish and room proportions together to create a balanced visual rhythm throughout your interior.",
    "included": [
      {
        "title": "Geometric Wood Patterns",
        "description": "Explore ordered layouts and rhythmic wood arrangements."
      },
      {
        "title": "Pattern Combinations",
        "description": "Consider how modules and directions work across adjoining spaces."
      },
      {
        "title": "Natural Wood Finishes",
        "description": "Coordinate wood tones and finishes with your interior palette."
      },
      {
        "title": "Flooring Designs",
        "description": "Plan patterned floors around the scale and use of each room."
      },
      {
        "title": "Surface Applications",
        "description": "Discuss appropriate decorative applications for your project."
      },
      {
        "title": "Design Guidance",
        "description": "Review layout direction, proportions and material combinations."
      }
    ],
    "why": [
      "Geometric layouts with natural wood character",
      "Pattern choices suited to different room proportions",
      "Considered grain direction and visual rhythm",
      "Guidance on wood tones and finish coordination",
      "A cohesive approach to patterned interior surfaces"
    ],
    "highlights": [
      "Geometric Wood Patterns",
      "Pattern Combinations",
      "Natural Wood Finishes",
      "Flooring Designs",
      "Surface Applications",
      "Design Guidance"
    ],
    "whyHeading": "Natural Warmth Meets Geometric Design",
    "process": [
      {
        "title": "Consultation",
        "description": "Discuss your space, design direction and intended parquetry applications."
      },
      {
        "title": "Design Selection",
        "description": "Explore parquetry patterns, tones and arrangements to suit your interior."
      },
      {
        "title": "Material Selection",
        "description": "Review the selected parquetry, finish direction and surface requirements."
      },
      {
        "title": "Final Application",
        "description": "Coordinate the chosen parquetry layout and finishing details with your application team."
      }
    ]
  }
};

export const collectionUrl = (slug) => `/services/${slug}.html`;
export const collections = services.map(service => ({
  ...service, ...details[service.slug],
  bannerDescription: service.description,
  products: details[service.slug].products.map(product => ({...product, image: product.image || service.image})),
}));
export default collections;
