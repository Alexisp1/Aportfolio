function App() {
  const services = [
    { name: "Classic Manicure", price: "$25", time: "30 min" },
    { name: "Gel Manicure", price: "$40", time: "45 min" },
    { name: "Acrylic Full Set", price: "$55+", time: "75 min" },
    { name: "Pedicure", price: "$40", time: "45 min" },
    { name: "Nail Art Add-On", price: "$10+", time: "15 min" },
    { name: "Soak Off / Removal", price: "$15", time: "20 min" },
  ];

  const gallery = [
    "Glossy nude almond set",
    "Pink chrome nails",
    "French tip with gems",
    "Soft ombré coffin set",
  ];

  const testimonials = [
    {
      name: "Maya",
      quote:
        "Infinity Nails always gets my shape perfect and my sets last for weeks.",
    },
    {
      name: "Jasmine",
      quote:
        "Clean, cute, and professional. My pedicure was so relaxing.",
    },
    {
      name: "Brianna",
      quote:
        "They understood exactly what I wanted from my inspo photo.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-pink-50 text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-white/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">Infinity Nails</h1>
            <p className="text-sm text-zinc-500">Luxury nail care & modern beauty</p>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#services" className="hover:text-pink-600">Services</a>
            <a href="#gallery" className="hover:text-pink-600">Gallery</a>
            <a href="#about" className="hover:text-pink-600">About</a>
            <a href="#contact" className="hover:text-pink-600">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Book Now
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 inline-block rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-700">
            Nail salon website concept
          </p>
          <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
            Beautiful nails, elevated self-care, and a salon experience you'll love.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-zinc-600 md:text-lg">
            Infinity Nails offers manicures, pedicures, acrylics, gel services, and custom nail art in a welcoming, polished space.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-2xl bg-pink-600 px-5 py-3 font-medium text-white shadow-lg shadow-pink-200 transition hover:scale-[1.02]"
            >
              View Services
            </a>
            <a
              href="#gallery"
              className="rounded-2xl border border-zinc-300 bg-white px-5 py-3 font-medium text-zinc-800 transition hover:border-pink-400 hover:text-pink-600"
            >
              See Designs
            </a>
          </div>
          <div className="mt-10 grid max-w-md grid-cols-3 gap-4 rounded-3xl bg-white p-5 shadow-xl shadow-pink-100">
            <div>
              <p className="text-2xl font-bold">5★</p>
              <p className="text-sm text-zinc-500">Client love</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-zinc-500">Styles created</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Clean</p>
              <p className="text-sm text-zinc-500">Sanitized tools</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-4 shadow-xl shadow-pink-100">
            <div className="flex h-72 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-pink-200 via-rose-100 to-white text-center text-lg font-medium text-zinc-700">
              Signature sets<br />for every vibe
            </div>
          </div>
          <div className="mt-8 rounded-[2rem] bg-white p-4 shadow-xl shadow-pink-100 md:mt-16">
            <div className="flex h-72 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-zinc-900 via-zinc-800 to-pink-900 text-center text-lg font-medium text-white">
              Gel, acrylic, pedicures,<br />and nail art
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Services</p>
            <h3 className="mt-2 text-3xl font-bold md:text-4xl">Popular salon services</h3>
          </div>
          <p className="max-w-xl text-zinc-600">
            Update these with your real pricing, timing, and service details.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="rounded-[2rem] border border-pink-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <h4 className="text-xl font-semibold">{service.name}</h4>
                <span className="rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700">
                  {service.price}
                </span>
              </div>
              <p className="mt-4 text-sm text-zinc-500">Estimated time: {service.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-white/70 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">Gallery</p>
          <h3 className="mt-2 text-3xl font-bold md:text-4xl">Looks your clients will want to save</h3>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {gallery.map((item) => (
              <div key={item} className="rounded-[2rem] bg-white p-4 shadow-md shadow-pink-100">
                <div className="flex h-56 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-rose-100 to-pink-200 text-center font-medium text-zinc-700">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div className="rounded-[2rem] bg-zinc-900 p-8 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">About Infinity Nails</p>
          <h3 className="mt-3 text-3xl font-bold">Where beauty meets detail.</h3>
          <p className="mt-5 leading-7 text-zinc-300">
            Infinity Nails is all about helping clients feel polished, confident, and cared for. From soft glam everyday nails to bold statement sets, every appointment is designed to feel personal and professional.
          </p>
        </div>
        <div className="space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="rounded-[2rem] bg-white p-6 shadow-md shadow-pink-100">
              <p className="text-zinc-600">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-zinc-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 rounded-[2rem] bg-gradient-to-r from-pink-600 to-rose-500 p-8 text-white shadow-2xl md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-100">Contact</p>
            <h3 className="mt-3 text-3xl font-bold">Ready to book your next set?</h3>
            <p className="mt-4 max-w-md text-pink-50">
              Replace this section with your real phone number, booking link, salon address, and business hours.
            </p>
          </div>
          <div className="grid gap-4 rounded-[1.5rem] bg-white/10 p-6 backdrop-blur">
            <div>
              <p className="text-sm text-pink-100">Phone</p>
              <p className="text-lg font-semibold">(210) 555-0123</p>
            </div>
            <div>
              <p className="text-sm text-pink-100">Email</p>
              <p className="text-lg font-semibold">hello@infinitynails.com</p>
            </div>
            <div>
              <p className="text-sm text-pink-100">Hours</p>
              <p className="text-lg font-semibold">Mon–Sat · 10:00 AM – 7:00 PM</p>
            </div>
            <a
              href="mailto:hello@infinitynails.com"
              className="mt-2 inline-flex w-fit rounded-2xl bg-white px-5 py-3 font-semibold text-pink-700 transition hover:opacity-90"
            >
              Request Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
