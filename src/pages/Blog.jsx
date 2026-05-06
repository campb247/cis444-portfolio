// base url from vite config, prepended to image paths
// needed so images resolve under github pages subpath
const BASE = import.meta.env.BASE_URL;

// blog posts in reverse chronological order (newest first)
const posts = [
  {
    slug: 'more-coffee',
    title: 'More, More, and More Coffee',
    date: 'May 5, 2026',
    location: 'Vista, San Marcos, Carlsbad',
    cover: {
      src: `${BASE}images/coffee-cappuccino.jpeg`,
      alt: 'A cappuccino with latte art on a small black side table.',
    },
    gallery: [
      {
        src: `${BASE}images/coffee-cortado.jpeg`,
        alt: 'A cortado on a wooden table.',
      },
      {
        src: `${BASE}images/coffee-necessity.jpeg`,
        alt: 'Latte art on the espresso bar at Necessity Coffee.',
      },
      {
        src: `${BASE}images/coffee-specialty.jpeg`,
        alt: 'A specialty drink topped with cinnamon at a coffee shop.',
      },
      {
        src: `${BASE}images/coffee-empty.jpeg`,
        alt: 'An empty glass mug after finishing a drip coffee.',
      },
    ],
    body: [
      "I had so much coffee this week (which I already alluded to during my post about my long bike ride). I tried a cortado on that ride at Interim Coffee in Carlsbad Village, which was probably hands down the best cortado I have ever had. It's a tiny booth run by one person who also roasts the coffee. He's only open five days a week because he takes two days to roast the coffee, and he has no other employees. Just consistency.",
      "I also have been going to Necessity Coffee opposite Cal State San Marcos. Excellent coffee spot only a few hundred feet from campus. I returned to Steady State a couple times, and hit up my home spot, Cosmic Bloom in Vista, dozens of times. I tried some of their specialty drinks, got a cappuccino one day, and their new Chiapas traditional process drip coffee. I even tried their immersion blend this morning before some final presentations, and of course, I've had a bunch of cortados recently, too.",
    ],
  },
  {
    slug: 'new-camera',
    title: 'Trying Out a New Camera',
    date: 'May 3, 2026',
    location: 'Downtown Vista and Carlsbad',
    cover: {
      src: `${BASE}images/camera-rei.jpeg`,
      alt: 'Black and white sun-star photo of an REI storefront.',
    },
    gallery: [
      {
        src: `${BASE}images/camera-avo.jpeg`,
        alt: 'The AVO Playhouse marquee in downtown Vista.',
      },
      {
        src: `${BASE}images/camera-mustang.jpeg`,
        alt: 'Black and white photo of an old Mustang outside Carlsbad Tire.',
      },
      {
        src: `${BASE}images/camera-alley.jpeg`,
        alt: 'Black and white wide-angle shot down a quiet alley.',
      },
    ],
    body: [
      "I bought a new camera! I've done professional photography work in the past, but I sold off all of my gear earlier this year to help pay for some emergency car repairs. It was hard parting with all of the gear, but starting over from scratch felt liberating. I could choose any system, and I could start from nothing. I researched for months. I was almost dead set on buying a crop sensor Lumix camera like the G9 II, or a Fujifilm X-H2S. In the end, I actually resorted back to Sony.",
      "I had previously owned two full-frame Sony mirrorless cameras with a few of their high-end master lenses. The gear worked amazingly, but the one thing I resented about it was that even the lighter of the two bodies, one prime lens, and a lightweight carbon fiber travel tripod weighed five pounds minimum. It does not work well with the ultralight and ultralong mileage days mentality I had for backpacking and wilderness trips, so it always got left behind and I used my iPhone for photography instead.",
      "Taking this into account, I bought a Sony ZV-E10 II. It sounds complicated, but it's their code name for Sony gen-z vlogger e-mount crop sensor camera (second generation). It actually has an identical sensor and processor to the Sony FX30, a two-thousand dollar Netflix approved cinema camera, but at less than half of the weight. It's missing a few features that I won't lie to myself and say I'm not bummed out about missing: a mechanical shutter, viewfinder, sensor stabilization, and an internal fan. Either the FX30 or a6700 (dedicated photography version of this camera) have these features, and the ZV-E10 II does not. But what it does have for its advantage is a tiny form factor and sub 300 gram weight.",
      "I got a single 12mm f/1.4 fast wide-angle prime lens, and a super lightweight carbon tabletop tripod so I can take the setup backpacking and take photos of the night sky. This week, I had time to take it around downtown Vista and Carlsbad and snap some street photography with the wide angle lens. I got some black and white photos and some sun-star photography. Overall, super happy to finally have a dedicated camera again.",
    ],
  },
  {
    slug: 'century-ride',
    title: 'A 100-Mile Bike Ride',
    date: 'May 1, 2026',
    location: 'North County loop, San Diego',
    cover: {
      src: `${BASE}images/bike-soledad.jpeg`,
      alt: 'Selfie on the bike at the top of Mt. Soledad with the coastline behind.',
    },
    gallery: [
      {
        src: `${BASE}images/bike-cortado.jpeg`,
        alt: 'Holding a cortado in downtown Carlsbad Village mid-ride.',
      },
      {
        src: `${BASE}images/bike-garmin.jpeg`,
        alt: 'Garmin head unit reading 89.38 miles and 6,666 feet of ascent.',
      },
      {
        src: `${BASE}images/bike-strava.png`,
        alt: 'Strava map of the 103.70 mile route across North County.',
      },
    ],
    body: [
      "I had an extra day off from work this week, so I decided to take the time to go on an extra long bicycle ride. To pace myself for such a long day, I made sure to check my heart rate and power data and stay within a low endurance level of effort. I created the route as I went along, heading east from my house toward Cal State San Marcos, up Twin Oaks Valley Road to the top of Double Peak (a one-thousand foot vertical elevation gain climb), and then back down west through San Elijo and towards Carlsbad.",
      "At El Camino Real, I made a hard right to head north until I was near downtown Carlsbad. I cut west to Carlsbad Village before grabbing an excellent cortado and taking advantage of a strong tailwind to blast all the way down the coast to La Jolla Shores. I've ridden the coast hundreds of times and this was my fastest time southbound ever. I rode up Torrey Pines Nature Preserve (a 450 foot climb), and then down to La Jolla Shores and rode up Mount Soledad (the steepest climb of the day so far).",
      "I made my way back North and cut inland at Solana Beach, taking Via de la Valle East to Del Dios Highway. I got back to Escondido and took Elfin Forest road to wind through some canyons and head back North to my home in Vista. It took just under seven hours of riding and I gained nearly 8,000 feet of total elevation on the bicycle. Super productive day. The ride was a few hours longer than I prefer, and this made me realize that I don't like centuries (100-mile bike rides) nearly as much as I like 50-80 mile rides, which feels like more of a sweet spot fitness wise.",
    ],
  },
  {
    slug: 'cortado',
    title: 'Trying a Cortado at a Local Spot',
    date: 'March 21, 2026',
    location: 'Neighborhood coffee shop',
    cover: {
      src: `${BASE}images/cortado.jpeg`,
      alt: 'A cortado with a tulip poured on top, sitting on the espresso bar mat.',
    },
    body: [
      "One of my small break goals was to try some new coffee shops. I decided on a local spot I'd been meaning to try and ordered a cortado. If you haven't had one, it's basically a short espresso drink, but unlike a latte, it has equal parts espresso and steamed milk, served in a small glass, with the whole thing being about four ounces. It's not overly foamy, and there's no sugar or sweetener. Just an espresso forward classic.",
      "What I like about this drink is how honest it is. If the coffee shop isn't serving well roasted espresso, you'll be able to taste it with a cortado, without having to be so hardcore as to order a plain espresso shot. The milk is just enough to take the edge off, but there's nowhere for a bad shot to hide. If the beans are off or the pull is rushed, you taste it immediately. The barista here clearly cared and knew what they were doing. The shot was sweet and balanced, and they laid a clean little tulip on top even though the drink is small enough that most shops don't bother — especially not a Starbucks.",
      "I sat at the window for maybe fifteen minutes and didn't touch my phone once, which is its own small victory. I brought Nietzsche's \"The Gay Science\" to read, and I think the cortado is going to become a regular order for me. It's the kind of drink that rewards slowing down, and that was pretty much what I did for my spring break.",
    ],
  },
  {
    slug: 'strawberry-milk-punch',
    title: 'A Strawberry Milk Punch for My Birthday',
    date: 'March 19, 2026',
    location: 'Home kitchen',
    cover: {
      src: `${BASE}images/cocktail-finished.jpeg`,
      alt: 'Three finished strawberry milk punch cocktails poured over ice.',
    },
    gallery: [
      {
        src: `${BASE}images/cocktail-ingredients.jpeg`,
        alt: 'Cocktail ingredients laid out on a cutting board with fresh strawberries.',
      },
      {
        src: `${BASE}images/cocktail-macerating.jpeg`,
        alt: 'Strawberries macerating in sugar.',
      },
      {
        src: `${BASE}images/cocktail-infusion.jpeg`,
        alt: 'Strawberries infusing in a sealed bag.',
      },
    ],
    body: [
      "My birthday happened to land right in the middle of spring break, so instead of going out I decided to put my cocktail mixing skills to good use, and started an ambitious project where I would create a complicated cocktail from scratch. The idea came to me from a Michelin Star restaurant I had been to that served something similar, and I'd been reading about milk punch and how to make it myself. It's a technique where you curdle milk with acid, strain it, and end up with a drink that is silky, stable, and weirdly clear (the fat traps any cloudy contaminants from the drink). I figured my birthday was as good an excuse as any to finally try it.",
      "The base is a strawberry oleo saccharum: fresh sliced strawberries, sugar, and 1 hour of time. I went with coconut cream over regular coconut milk for a richer flavor. Once the strawberries give up their juice, I combine everything with a rum blend, Campari, and citrus — the acid is what curdles the cream and kicks off the clarification. Then, the most complicated and time consuming part: the whole thing goes through the milk clarification step, which always feels like you're ruining the drink right up until you strain it (many, many times) and get this clear, pink liquid. I think it feels like a magic trick.",
      "I poured it over one big ice cube at my birthday party. The drink itself came out better than I expected, strawberry forward but balanced, with just enough bitterness from the red aperitif to keep it from tasting like candy. Ten out of ten recipe. Would absolutely make again once I decide I'm willing to spend 48 hours making a cocktail again.",
    ],
  },
  {
    slug: 'mt-soledad',
    title: 'Climbing Mt. Soledad',
    date: 'March 16, 2026',
    location: 'La Jolla, San Diego',
    cover: {
      src: `${BASE}images/mt-soledad-bike.jpeg`,
      alt: 'At the top of Mt. Soledad with my Canyon road bike.',
    },
    body: [
      "I wanted to start spring break with something that didn't involve staring at my computer (I do that enough already), and a friend of mine had recommended a fun challenge on a bicycle: Mt. Soledad. It's a climb that looks not too bad on the map, and then you actually attempt it and realize just how steep it is in person. It makes you work hard through some neighborhoods in La Jolla, and with each switchback, you can see a hint of the coastline behind you.",
      "Finally, after a grueling 15 minutes of a 15-20% grade, the memorial cross comes into view, and the whole ocean just appears in front of you. On a clear day (I went the day after the rain), I could see all the way north to San Marcos, all of UCSD, downtown San Diego, Coronado, and Tijuana at the same time.",
      "I stopped at the top longer than I needed to. Partly to catch my breath, and partly because the view really surprised me. I thought Double Peak was the best view in San Diego county, but I think Soledad beats it. Finally, the descent afterward was thrilling, and I hit speeds of nearly 50 MPH on a bicycle.",
    ],
  },
];

// renders one post, cover image, meta, paragraphs, optional gallery
function BlogPost({ post }) {
  return (
    <article className="blog-post">
      <header className="blog-post-header">
        <p className="blog-meta">
          <span>{post.date}</span>
          <span className="blog-meta-sep">·</span>
          <span>{post.location}</span>
        </p>
        <h3>{post.title}</h3>
      </header>

      <figure className="blog-cover">
        <img src={post.cover.src} alt={post.cover.alt} loading="lazy" />
      </figure>

      {post.body.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

      {/* gallery only renders when a post supplies one */}
      {post.gallery && (
        <div className="blog-gallery">
          {post.gallery.map((img) => (
            <figure key={img.src}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}

// blog page, intro section plus all posts
function Blog() {
  return (
    <main>
      <section className="section blog-intro">
        <p className="hero-eyebrow">Blog</p>
        <h1>Notes from the semester</h1>
        <p className="lead">
          A running log of things outside of class — bike rides, coffee,
          cocktails, and a new camera. Newest first.
        </p>
      </section>

      <section className="section blog-posts">
        {posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}

export default Blog;
