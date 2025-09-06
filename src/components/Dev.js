import React, { useEffect, useState } from 'react';
import g from '../Assets/g.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Dev = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [data, setData] = useState({ email: '' });
  const { email } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post('https://asia-northeast1-willeder-official.cloudfunctions.net/api/apply/frontend.json', data)
      .then(() => alert('Thank you! You will be notified.'))
      .catch((err) => console.log(err));
    setData({ email: '' });
  };

  return (
    <section className="bg-gradient-to-r from-[#00B7E6] via-[#00CBDF] to-[#00DCD8] text-white  flex flex-col justify-center items-center px-4 ">
    <div className='grid md:grid-cols-2 grid-cols-1 place-items-center'>
     <div className='px-4'>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4" data-aos="fade-up">
We are integrating parts
      </h1>
      <p className="text-lg sm:text-xl text-center max-w-xl mb-8" data-aos="fade-right">
        We are currently integrating the final features. Leave your email below and we'll notify you once it's ready.
      </p>

      <form onSubmit={submit} className="flex flex-row gap-4 items-center" data-aos="fade-right">
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          placeholder="Enter email"
          className="px-4 py-2 border-2 border-white bg-transparent placeholder-white text-white rounded-md sm:w-72 w-48 focus:outline-none"
        />
        <input
          type="submit"
          value="Notify"
          className="bg-white border-2 border-white text-[#00B7E6] font-semibold px-6 py-2 rounded-md hover:bg-black hover:text-white transition"
        />
      </form>
</div>
      <div className="mt-10" data-aos="fade-left">
        <img src={g} alt="Development in progress" className="w-80 sm:w-96" />
      </div>
      </div>
    </section>
  );
};

export default Dev;