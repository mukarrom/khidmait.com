import React from 'react';

function Modal() {
  return (
    <>
      <input type="checkbox" id="landing-modal" className="modal-toggle" />
      <label htmlFor="landing-modal" className="modal cursor-pointer">
        <label className="modal-box w-11/12 max-w-5xl relative" htmlFor="">
          <h2 className="h2 text-center">খিদমা আইটি</h2>
          <h5 className="h5 text-center">একটি বিশ্বস্ত সফটওয়্যার কোম্পানি</h5>
          <div className="">
            <h3 className="h3 text-center">আমাদের অ্যাপস এ যা কিছু থাকছে</h3>
            <p className="">
              1 ড্যাশবোর্ড ২ভর্তি ফরম ৩ শিক্ষার্থী ৪ বেতন ৫ শিক্ষক 6 কর্মচারী 7
              নোটিস ৮ হাজিরা ৯ রেজাল্ট ১০ আয়ের হিসাব ১১ খরচের হিসাব ১২ রিপোর্ট১৩
              সেটিং ১৪ ব্লগ
            </p>
            <p className="">
              কোন অপশন দিয়ে কি রকম কাজ করা হচ্ছে তা নিচে দেখানো হলো
            </p>
            <p>
              প্রথমে (১) ড্যাশবোর্ডে ক্লিক করলে সকল তথ্য দেখতে পারবেন এতে থাকবে
              (১ম) মোট শিক্ষার্থী কত জন ভর্তি আছে (২য়) মোট কত জন শিক্ষক আছে (৩য়)
              মোট কত জন কর্মচারী আছে (৪র্থ) ইউজার কত জন আছে এই অ্যাপস কত জনে
              চালাবে (৫ম) নোটিস আজকের নোটিসের সংখ্যা (৬ষ্ট) আজকের আয় আজকে কত
              টাকা আয় আছে তার পরিমান (৭ম) ব্যয় আজকে মোট কত টাকা ব্যয় হয়েছে তার
              পরিমান (অষ্টম) ব্যালেন্স সর্ব মোট ব্যালেন্সের পরিমান ড্যাশবোর্ডের
              ভিতরে আর যা থাকছে ১ আজকের ভর্তি কত জন ২ আজকের ভর্তির মোট টাকা ৩
              ভর্তির মোট টাকার পরিমান ৪ কত জন নতুন ভর্তি হয়েছে ৫ কত জন পুরাতন
              আছে ৬ আবাসিক ৭ অনাবাসিক ৮ আজকের মোট উপস্থিত কত জন ৯ মোট অনুপস্থিত
              কত জন এইটা শতকরা হিসাব হবে এর পর সব কয়টা খাতের আয়ের পরিমান থাকবে
              এবং সব কয়টা ব্যয়ের খাতের পরিমান থাকবে মোট কথা এই ড্যাশবোর্ডের
              ভিতরে সব কয়টাই রিপোর্ট ১ ভর্তি ফরম একটা প্রতিষ্টানে প্রথমে
              শিক্ষারর্থী ভর্তি করতে হয় এই ডিজিটাল ফরমের মাধ্যমে যুক্ত করা হবে
              আর এই ফরমে বিস্তারিত অপশন থাকবে ২ শিক্ষার্থী এই শিক্ষার্থী অপশনে
              ক্লিক করলেই শিক্ষার্থীর সমস্ত বিবরণ চলে আসবে আর প্রতিটি নামের উপরে
              ক্লিক করলে বাম পাসে ভর্তি অবশনের ভিতরে চলে আসবে আর ভর্তি ফরমের
              নিচে তিনটি অবশন থাকবে যদি কোন শিক্ষারথীর কোন কিছু পরিবর্তন করতে হয়
              ভর্তি ফরমের ভিতর থেকে পরিবর্তন করে আপডেট অপশনে ক্লিক করলেই আপডেট
              হয়ে যাবে। অথবা শিক্ষারথী ঘরের ভিতর থেকে কোন অপশন আপডেট করা
              যাবে।দুই বার ক্লিক দিয়ে কোন কিছু লিখে শুধু Enter বাটনে ক্লিক করলেই
              সেভ হয়ে যাবে আপডেট হয়ে যাবে। আর যদি ক্লিক করার পরে মনে হয় দরকার
              নাই তা হলে ,তা হলে রিসেট বাটনে ক্লিক করলেই সব মুছে যাবে। আর যদি
              কোন একটা শিক্ষার্থীর নাম মুছে ফেলতে চান তা হলে শিক্ষার্থী ঘরে
              ক্লিক করলে ভর্তি ঘরে চলে আসবে এখন ডিলিট বাটনে ক্লিক করলে তার সমস্ত
              ডাটা মুছে যাবে ৩ বেতন বেতন অবশনে ক্লিক দিলে পুরা একটা টেবিল চলে
              আসবে এই টেবিলের ভিতরে ইউনিক আইডি/শ্রেণি/শাখা/শ্রেণি রোল লিখলেই
              শিক্ষার্থীর ডাটা চলে আসবে এইখান থেকে মাস নিবার্চন করতে হবে আর কোন
              কোন খাতের টাকা আদায় করবে তা সেটিং অবশন থেকে সেট করা যাবে বেতনে
              ক্লিক করলেই খুব সহজে ই বুজতে পারবে ইনশাআল্লাহ। ৪ শিক্ষক
              শিক্ষার্থীর মতই সব কিছু যুক্ত করতে হবে ৫ কর্মচারী শিক্ষার্থীর মতই
              সব কিছু যুক্ত করতে হবে ৬নোটিস এই নোটিস বাটনের দ্বারা সবার কাছে
              মসেজ পাটানো যাবে, রিপোট জানা যাবে ৭ হাজিরা 1=অনলাইন সিস্টেম তাই
              যেকোন সময় যেকোন জায়গা থেকে রিপোর্ট দেখার সুবিধা। 2=হাজিরা দেওয়ার
              সাথে সাথে অনলাইনে আপলোড হয়ে যাবে। 3=রিয়েল টাইম অনলাই হাজিরা
              সিস্টেম। যেমন, কোন শিক্ষার্থী/শিক্ষক হাজিরা দেওয়ার সাথে সাথে অটো
              হাজিয়া রিপোট চলে আসবে। হাজিরা দেওয়ার সাথে সাথে অনলাইনে আপলোড হয়ে
              যাবে। রিয়েল টাইম অনলাই হাজিরা সিস্টেম। যেমন, কোন
              শিক্ষার্থী/শিক্ষক হাজিরা দেওয়ার সাথে সাথে অটো হাজিয়া রিপোট চলে
              আসবে। 4=অটো রিপোর্ট। যেমন উপস্থিত,অনুপস্থিত, শতকরা, রেংকিং,পয়েন্ট
              সিস্টেম, মেসেজ সিস্টেম, বেতন শীট তৈরি করা ইত্যাদি 5=কাস্টম বা
              ড্যাইনামিক মেসেজ পাঠানোর সুবিধা। (নিজের মত কর বাংলা, ইংরেজি বা
              যেকোন ভাষাই মেসেজ কাস্টমাইজ করা) 6=অভিভাবক ও শিক্ষকদের জন্য থাকবে
              মোবাইল অ্যাপস। যার মাধ্যমে হাজিরা সকল রিপোর্ট অ্যাপসের মধ্যে পেয়ে
              যাবেন। হাজিরা দেওয়ার সাথে আপডেট চলে যাবে। এর জন্য মেসেজ পাঠোনোর
              দরকার হবে না। এই অ্যাপসে শিক্ষার্থীর অন্যান্য রিপোর্ট ও পাওয়া
              যাবে। পড়াশোনার অবস্থা, বাড়ির কাজ, রুটিন, সাজেশন ইত্যাদি। 7= কন্টল
              প্যানেল। (যেমনঃ শিডিউল তৈরি করা, মেসেজ সেটিং করা, শর্ত তৈরি করা,
              জরিমানা সিস্টেম, পরীক্ষার পয়েন্ট সিস্টেম ইত্যাদি) 8=অ্যাপসর এই
              হাজিরা অপশনে ক্লিক করলেই সকল কিছু সামনে আসবে 9=একজনে পুরা মাসের
              রিপোট সহ সব কিছু দেখতে পারবেন 10= রেজাল্ট খুব সহজে রেজাল্ট তৌরী
              করা শুধু মাএ যার বিষয়ের উপর নান্বার দিয়ে দিলে ই হবে এই ব্যপারে
              সবাই মোটামোট ভাল ধারনা আছে আর অ্যাপসের ভিতরে আসলে ধারাবাহিক সহজে
              করতে পারবেন আর অন লাইনে দেখতে পারবে 11=আয়ের হিসাব যাবতীয় খাত থেকে
              খুব সহজে এবং নিখুত ভাবে আদায় করে দেখানো হবে কোন প্রকার জামেলা ছাড়া
              (এই হিসাব এমন ভাবে দেখা যাবে এক প্রথম থেকে শেষ প্রর্যন্ত জোম
              অপশনের মত সামান্য থেকে বড় কোন কিছু বাধ পড়বে না 12=খরচের হিসাব
              উপরের একই নিয়মে করা হবে (এই হিসাব এমন ভাবে দেখা যাবে এক প্রথম থেকে
              শেষ প্রর্যন্ত জোম অপশনের মত সামান্য থেকে বড় কোন কিছু বাধ পড়বে না
              13=রিপোট তারিখ ভিক্তিক এবং খাত ভিক্তিক বিভিন্ন ভাবে রিপোট দেখানো
              হবে নির বেজাল ভাবে ইনশাআল্লাহ 14= সেটিং এই সটিং অবশনের যাবতীয় খাত
              মোট কথা সব কিছু সেটিং করা যাবে অ্যাপসের ভিতরে আসলে খুব সহজে বুজতে
              পারবেন করতে পারবেন আর এই অ্যাপস কন্টল করার জন্য এডমিন সহ ইউজার
              দরকার আর সে জন্য ইউজার কন্টল Sistem করা হয়েছে বিঃদ্র্= আমি যদি কোন
              একটা অপশনের কাজ সস্পর্ন না করেই অন্য আরেকটা কাজ করি বা দেখি এই সময়
              যাতে করে আমার কাজটা যাতে ঠিক থাকে এই জন্য যে অপশন অবল্বন করতে হবে
              এইটা সহজ অপশন বা উপায় একা দিক পেইজ অপেন করা
            </p>
          </div>
          <div className="modal-action">
            <label htmlFor="landing-modal" className="btn">
              Close
            </label>
          </div>
        </label>
      </label>
    </>
  );
}

export default Modal;