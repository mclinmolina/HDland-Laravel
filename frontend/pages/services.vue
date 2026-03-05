<script setup>
const services = [
{
title: "Relocation Survey",
desc: "Re-establishing lost or obliterated property boundaries based on official records.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA6bPBxg2GYRgCqWSFX6YiygAbuMf3VvcpiXwnTgIwALINaC8DlUBPZSEmKQfmQ6PyjQGzoMmjKIrqw3zPZZni7EQEy44triTl9IbVNztyz2DVC0iJVjc9TiItg4KN2qL-IdZTECP0xnmUAIBGPFi9HXPWLQ1c6oARHQ6i5-RW5Tz7fqMCV07YQsIqkcKZfq4pqV8ohM7qlcp7xZZbozHOvMdmYqGHaaEvK7st14NMSvLaSY1zybGxwMxCmxx8sXmdfUJA0fnH7gtz"
},
{
title: "Original Survey",
desc: "First-time survey of unregistered land for the purpose of primary titling.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbz12zYfnGDOgnuMRilkJy2sQTJqd_-bdcZt9qcKFQFCRkOWpzj8EhL8pAWr8n_TUM8OmLWsJrXR8822eiQlVWZcNquGZNib8j7PIo8l6FFp0xd4Obu48DADQYFPuOVPShoOlqf5z8OyognH7uLhIXcwc1bSs7BSGcXvINGeA0marItr4vNfZboTgcAUgmjM8oPECnuIg8BsfsVITZsR365N4Q044Kh4l4R2AQTfvplESn_2PVSLEswNSm5mh42jPG_91gKJOOQ-hE"
},
{
title: "Subdivision Survey",
desc: "Dividing a single parcel of land into two or more smaller lots.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpky0ypS6v2TbDWcN4myuX6GtMnhCH4PtEn_60QnK2GBjCaVTXauCoc8uO3igJF58936ddAQG_czf3G8zgw6m3_1UD6Chr7iBTFifWJfoBTsC-f4eLbqWeiTPeFc7uIay525wrujKa2c6BGJj6fI370yujjClefeq9__Sg-muP-2CMAuDrqc5zQNuU5rVZhsB8NUeEubTseN79ljyrDRQCGvhXspNEoDB0w7Wn-ni_0jCxfL9q8ZsiefeGHKG7YqxPXwWKUcZ_M46e"
},
{
title: "Verification Survey",
desc: "Verifying the correct position of existing monuments and boundaries.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOqQE24aWMDP_SAX14NGf4r8Zl2AmXBC02Eod4PopV47nJlgSjwtUyHf4oeeMbeasKgrnfEllAYdcVCgjOffvYs1oyEa3cIs8RUejHVM377vy7qJ1S1ZZzXyVWaCLJuUbzVqUOxqKWirBEb9BxiYMsll30lSieLFuW7A2HlHsXOR8N8t1Qm12GXCITJo6Cjha4YaZWNmTWElO8Ng9n-8PzQY6G81GZnWAFvIe09-9w9V4jImjYIQmkWOlpEpmVab3GhAQJSdf7QQ5n"
},
{
title: "Topographic Survey",
desc: "Mapping natural and man-made features and elevations on the terrain.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHz6PsnR5UY7My5G-pFYKugWNswB8bWggvN8SOq0kzqtI219-HWJJKN9ZdAgrqipOmvwyiu6E_y8HVydNWwxKFadLVucyivt0ony-T4vU6AJtxReTthCp82dSBTqeiEUB_8tfCgNfh-ZRquQD2omF1OujpRaKk2UDDapikRF03coqjLMtyh0JIO0ESVhi9oSSCG0Lw4R7txrHYGvFORhMZpEQ5T7tOvCRHJmohR_ABfADD-iJkQG3X2A_YhXP7SO-tWAbBSLnrp-Os"
},
{
title: "As-Built Surveying",
desc: "Documenting the final location of structures during or after construction.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCidXBhj1JzQpDxBWIkRa-I6uxNqoOdijh01v4u3ojqNYAOCRuuZqGOzXB3FIdBAEP80NdSvIvl5gsBR6WEASkAzUwE0Ppk6ykPNmggwftYqw_8ai5D3O3gXBOqkgcKq-GIaEwDWPVje8ZGOQXghYIvcb5PeB84sipGZoHIjyhMglxjtkGTX9shrGQD8B2WjPOOeAWhnc1B5M_ViRD-oy4L1C8L4T7SERZh69LOierBAhHEbUk72R-wJzggZbtytuuOn4l1A6bNGWQm"
},
{
title: "Segregation Survey",
desc: "Isolating a specific portion of a large tract of land for distinct ownership.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxNNlwf0WEldRSzXPNRq5wHnbyY_4U_YQEAV-1niCbY1SzFj1X_7LSzhxjIddyYjysGc7kd_OnLqwzteG2ya9GMQdhtmsb_fymbrUNr6LXJZzCxkgV4T5o_LqOqk4L8c1InRhO3G5UwXMprbGjey3jlzFHQToKZX4OZ4k-K9qcEpkrlfr9V4PUmzjLw27bYPWqF-ohT7GVOerQi8xEFJafSKYtFgSH3IPkT_y_8oVFdtRJ1jsooA_tazsJumMbON8VGUEqjj1rLUw5"
},
{
title: "Sketch Plan/Vicinity Map",
desc: "Visual representation of property location relative to landmarks.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDKfpTZMRG1CN7Ia26hkrDYsOvpB7ldC-y-C4G58PR8KthgsWpYbG8jFoe8zv67YCbB7jmXwo3Mvf8sclN5DVa_BLr3R7R5K7RTPQ1v6Cfrd-CgxWXLquy-LbtlI_l2cbRnksVGg_Zz-NCZMi4rt3Cbv8eBvpS9U7ezJQKF9Vy717SFhVbeClXVK2rqCJBbsNRDAVIT8A52mhwiHSwgf5n2fGSTXRIaJ1daWG1P6KXOoAVIvYW2b0z8ZVAhP24jqNJ8rIkSTGYekIV"
},
{
title: "Consolidation Survey",
desc: "Combining two or more adjacent lots into a single unified property title.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAc1ys_EKJq_u796nP3SdMYOk3NUr2Ehh0_4_aQWZIlBkM8Cu8-GbDwyyDRjxq_FRlVEmPjeNgqChpox34qdYIuHstlIoPxGLD28Yz3taVy0W1QAO4ZN0lCJTI46esh7wZ2koM8yid6Q_kChKIHVBKpFsDjTfKSMANgLhSvn_qv8mOnZX34i4QQNjG4sg0FbwIUvPsbmH0Jr7oBqxkSTNJ7uXA5zhrAAGZZH10s2BdJLo9rANgQC70wD6M8RNR0nC0z6v6tU1YEA5Pa"
},
{
title: "Title Transfer/Titling",
desc: "Complete assistance for legal land registration and ownership transfer.",
img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqgljA-ILvykR3K8GMwQkcZkbK0wr5JsosD66SBootCKoMBt6cU8Pmb0KLxIHUmncP0StY9X6NJbn1foAP_KvY189nU8zB318T_OM8Gv-tr1Lq8_hab9CfRHIi88mlS7NS-HJeJmb9jcvVp2p6gnShZK8namCzUv07p-EVstVFbxcKlYBU5t8vf8MCw6iati2RWgxyQChu31C93WL3ox6Wd32-NVx9ZGM-dy76-GW9TQOVjMt6rvtrKcF_avaTas-yGvQCwV4HTcV-"
}
]
</script>

<template>
<div class="bg-background-light dark:bg-background-dark">

<!-- HERO -->
<section class="relative h-105 flex items-center justify-center text-center overflow-hidden">
<img
src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS1Tc0dkam4XP-wCa2UgEF2BGUcafMaCGkc5BPF2TFLFEW52wp73SLJoHb4fTAi_1XJsb2a6vZD6KGZoh4y4wi1QwtQUn8Utc8w_U-2hKe5CTGVqz4E5tYVLkXBMQy5EzyOn8n1vLCpg7hUOD_C2mP03hvFlZexK4YPxnM7WgyVvIL9OlmA4jTdnhtKDGo7fYlGXGm8f406EumE7rKtI8kiB4fo7uXL4hLDrdUvh5AYSAQMSeqGiyAAfZjuhu2wY7wJXmIITVYY3gY"
class="absolute inset-0 w-full h-full object-cover"
/>

<div class="absolute inset-0 bg-black/60"/>

<div class="relative z-10 px-4">
<h1 class="text-white text-4xl md:text-6xl font-black mb-4">
Our Professional Services
</h1>

<div class="h-1.5 w-32 bg-primary mx-auto rounded-full"/>
</div>
</section>

<!-- SERVICES -->
<section class="max-w-7xl mx-auto px-4 py-16 bg-white">

<div class="mb-12">
<h2 class="text-3xl font-bold text-black">
Land Surveying Solutions
</h2>

<p class="mt-2 text-gray-600 max-w-2xl">
Providing precision and accuracy for every project, from small residential lots to large-scale commercial developments.
</p>
</div>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div
v-for="service in services"
:key="service.title"
class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-200"
>

<div class="aspect-video overflow-hidden">
<img
:src="service.img"
class="w-full h-full object-cover transition group-hover:scale-105"
/>
</div>

<div class="p-5 flex flex-col h-full">

<h3 class="font-bold text-lg text-black">
{{ service.title }}
</h3>

<p class="text-sm text-gray-600 mt-2 mb-4 line-clamp-2">
{{ service.desc }}
</p>

<a
href="#"
class="mt-auto inline-flex items-center text-xs font-black tracking-widest text-primary hover:gap-2 transition-all uppercase"
>
INQUIRE <span class="material-symbols-outlined text-[14px] ml-1">arrow_forward</span>
</a>

</div>

</div>

</div>

</section>

<!-- EQUIPMENT -->
<section class="bg-white py-16">

<div class="max-w-7xl mx-auto px-4">

<div class="mb-12">
<h2 class="text-3xl font-bold text-black">Equipment Rentals</h2>

<p class="mt-2 text-gray-600">
Premium surveying technology available for daily or project-based lease.
</p>
</div>

<div class="grid md:grid-cols-2 gap-8">

<!-- RTK -->

<div class="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">

<div class="md:w-1/2">
<img
class="w-full h-full object-cover"
src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQIJ8BkqvbTkvFS6rtf5qM0ZNK31zFZpLD7hE226p7C2LDNf2rBaUUt8ZRORznkY5uNa_sj3mBs71y2BUfae0SWU2gmmQSBq5GH4s7WsTJymKFEZhbrzTofTvUzJoEoen8Rk25lfb1ZGSCNXBCe1OEeSl_5BfCUyKunMnzEsWJRrGZxrkLELOzDgmrB3AW5yGcD_6tv4UM8_LOcOJbRiVSIKPam8TTKDIigFdL4AwlYMRIQwaqaKHrxw9t3LkQcOSDVALmOO_106x"
/>
</div>

<div class="p-8 flex flex-col md:w-1/2">

<span class="text-primary font-bold text-xs uppercase">
Available Now
</span>

<h3 class="text-2xl font-bold mt-2 text-black">
RTK GPS Receiver
</h3>

<p class="text-sm text-gray-600 mt-4">
High-precision satellite positioning system for real-time kinematic surveying with centimeter-level accuracy.
</p>

<ul class="mt-6 space-y-2">
<li class="flex items-center text-sm text-gray-700">
<span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Dual-frequency tracking
</li>
<li class="flex items-center text-sm text-gray-700">
<span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Built-in 4G LTE/UHF
</li>
<li class="flex items-center text-sm text-gray-700">
<span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> IP68 Water/Dust resistant
</li>
</ul>

<div class="mt-auto pt-8 flex items-baseline gap-2">
<span class="text-2xl font-black text-black">₱5,000</span>
<span class="text-gray-500 text-sm">/ Day</span>
</div>

</div>

</div>

<!-- TOTAL STATION -->

<div class="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">

<div class="md:w-1/2">
<img
class="w-full h-full object-cover"
src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTuQMAuEyZdUkO0Lt8AxPUoiWCTnU_fVrFnxqz4U4-0WfVweVsmLa2Sxp6Azv9YmvNwqgLDPbXjBkuzkMz-rPv5wt4vI28LYid5EVrVGxFL073zIXd-Fzo1vOazqlEh9y5FjEU-M3bO2ZFHtWjtTUESpBssEzhubzZq0MJ9d4SMfvE0Y3-jURzC0Lo-wPBQ7Lh6dgT_YE3tbV5G_0pdgLw-j9a_AdFdoHnT3o59zNePxolphHW4V9uxBduMnbjwcB0s_YzGNjDvD3r"
/>
</div>

<div class="p-8 flex flex-col md:w-1/2">

<span class="text-primary font-bold text-xs uppercase">
Professional Grade
</span>

<h3 class="text-2xl font-bold mt-2 text-black">
Digital Total Station
</h3>

<p class="text-sm text-gray-600 mt-4">
Electronic theodolite integrated with EDM for precise distance and angle measurements simultaneously.
</p>

<ul class="mt-6 space-y-2">
<li class="flex items-center text-sm text-gray-700">
<span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Reflectorless measurement
</li>
<li class="flex items-center text-sm text-gray-700">
<span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> 2" Angle accuracy
</li>
<li class="flex items-center text-sm text-gray-700">
<span class="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Large internal memory
</li>
</ul>

<div class="mt-auto pt-8 flex items-baseline gap-2">
<span class="text-2xl font-black text-black">₱3,500</span>
<span class="text-gray-500 text-sm">/ Day</span>
</div>

</div>

</div>

</div>
</div>
</section>

</div>
</template>