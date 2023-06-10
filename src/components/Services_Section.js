import React from 'react'

function Services_Section() {
  return (
    <>
    <div className="pt-48 font-style mt-44 lg:mt-0 bg-slate-50 h-[85vh]">
      <div className="text-xl font-extrabold mb-12 ml-4 lg:ml-10 xl:ml-24">OUR SERVICES</div>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7  mx-14">
      <div className="services">
        <img src="https://lh3.googleusercontent.com/XzLJ_vViypnP68cT03Te93o0qX8givJRXzoZYREBtXVNy3wM-oj7cGX69eUXc6hLi555PdV6CpOr7zurgj5GHty0_MwER-bJCBTO--C0" alt="" />
        <div className="my-2 text-xl font-bold">Trekking</div>
        <div className="text-md text-slate-500">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </div>
        <div className="service_link"><a href="/">LEARN MORE</a></div>
      </div>
      <div className="services">
        <img src="https://lh3.googleusercontent.com/QzE0yJefM26O7EJww9rJG4Hu10DJzKTRQj2lO_YQuswAqoevjTunwQ1HIIIomienkqxNKTAXoyELi5UdyiuWwPXzNRdMhq-SRHMw61Ns" alt="" />
        <div className="my-2 text-xl font-bold">Map</div>
        <div className="text-md text-slate-500">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </div>
        <div className="service_link"><a href="/">LEARN MORE</a></div>
      </div>
      <div className="services">
        <img src="https://lh3.googleusercontent.com/7WJZlfmMu-350-6ZAt43Q7OtSoNbzkIj4idHqO4TcWRhqHUlUTp1CZtc3lf7rbgDDBNkiZdjhZr-9Zk09tGAvVe-zHwMotDns8dltOx8" alt="" />
        <div className="my-2 text-xl font-bold">Suitcase</div>
        <div className="text-md text-slate-500">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </div>
        <div className="service_link"><a href="/">LEARN MORE</a></div>
      </div>
      
      </div>
      <div className="ml-5 md:ml-16">
        <button className='border rounded-full mt-10 py-2 px-5 text-gray-500'>Prev</button>
        <button className='border rounded-full mt-10 py-2 px-5 ml-2'>Next</button>
      </div>
    </div>
    </>
  )
}

export default Services_Section