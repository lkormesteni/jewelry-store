import hpImg from '../assets/products/jewelry-series-1-1516743.webp'
import hpImg2 from '../assets/products/pendant-2867205_640.webp'
import hpImg3 from '../assets/products/hppp.webp'
import hpImg4 from '../assets/products/wedding-rings-1310384.webp'


const features = [
    { name: 'Title', description: 'Jewelrys' },
    { name: 'Description', description: 'Jewelry is a personal adornment worn on the body. It can be made of a variety of materials, including precious metals, gemstones, and other materials. Jewelry can be simple or elaborate, and it can be used to express personal style, commemorate special occasions, or symbolize love and commitment.' },
    { name: 'Price', description: 'Best prices' }
  ]
  
function ProductList () {

    return (

      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Best Sells</h2>
            <p className="mt-4 text-gray-500">
            Metal: The metal used in a gold and silver jewelry can affect its color, durability, and price. Gold is the most precious metal used in jewelry, and it comes in a variety of karats, or gold content. Silver is less expensive than gold, but it is still a popular choice for jewelry.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={hpImg}
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={hpImg2}
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={hpImg3}
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src={hpImg4}
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>

    )
  }
  
export default ProductList