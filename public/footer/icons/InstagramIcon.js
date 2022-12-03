import React from 'react'

const Instagram = ({ color, size, className }) => {
  return (
    <svg className={className} width={"30" * size} height={"29" * size} viewBox={`0 0 30 29`} fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_198)">
<path d="M14.5957 0C10.6608 0 10.166 0.018125 8.61989 0.087C7.07383 0.1595 6.02077 0.402375 5.0982 0.76125C4.1305 1.12523 3.25397 1.69619 2.52989 2.43419C1.79234 3.15864 1.22146 4.03506 0.856953 5.0025C0.498078 5.92325 0.253391 6.97812 0.182703 8.51875C0.113828 10.0684 0.0957031 10.5614 0.0957031 14.5018C0.0957031 18.4386 0.113828 18.9316 0.182703 20.4776C0.255203 22.0219 0.498078 23.0749 0.856953 23.9975C1.22852 24.9509 1.72333 25.7592 2.52989 26.5658C3.33464 27.3724 4.14302 27.869 5.09639 28.2388C6.02077 28.5976 7.07202 28.8423 8.61627 28.913C10.1641 28.9819 10.6571 29 14.5957 29C18.5343 29 19.0255 28.9819 20.5733 28.913C22.1158 28.8405 23.1725 28.5976 24.095 28.2388C25.0621 27.8746 25.938 27.3036 26.6615 26.5658C27.4681 25.7592 27.9629 24.9509 28.3345 23.9975C28.6915 23.0749 28.9362 22.0219 29.0087 20.4776C29.0776 18.9316 29.0957 18.4386 29.0957 14.5C29.0957 10.5614 29.0776 10.0684 29.0087 8.52056C28.9362 6.97813 28.6915 5.92325 28.3345 5.0025C27.97 4.03503 27.3991 3.1586 26.6615 2.43419C25.9377 1.69591 25.0611 1.12492 24.0932 0.76125C23.1688 0.402375 22.114 0.157688 20.5715 0.087C19.0236 0.018125 18.5325 0 14.5921 0H14.5975H14.5957ZM13.2961 2.61363H14.5975C18.469 2.61363 18.9276 2.62631 20.4555 2.697C21.8693 2.76044 22.6378 2.99787 23.1489 3.19544C23.825 3.45825 24.3089 3.77362 24.8164 4.28113C25.3239 4.78862 25.6375 5.27075 25.9003 5.94863C26.0996 6.45794 26.3353 7.22644 26.3987 8.64019C26.4694 10.1681 26.4839 10.6267 26.4839 14.4964C26.4839 18.3661 26.4694 18.8264 26.3987 20.3544C26.3353 21.7681 26.0978 22.5348 25.9003 23.0459C25.6678 23.6755 25.2968 24.2448 24.8146 24.7116C24.3071 25.2191 23.825 25.5327 23.1471 25.7955C22.6396 25.9949 21.8711 26.2305 20.4555 26.2958C18.9276 26.3646 18.469 26.3809 14.5975 26.3809C10.726 26.3809 10.2656 26.3646 8.7377 26.2958C7.32395 26.2305 6.55727 25.9949 6.04614 25.7955C5.4163 25.5634 4.84649 25.193 4.37864 24.7116C3.89606 24.2441 3.52445 23.6743 3.29114 23.0441C3.09358 22.5348 2.85614 21.7663 2.7927 20.3526C2.72383 18.8246 2.70933 18.3661 2.70933 14.4927C2.70933 10.6213 2.72383 10.1645 2.7927 8.63656C2.85795 7.22281 3.09358 6.45431 3.29295 5.94319C3.55577 5.26713 3.87114 4.78319 4.37864 4.27569C4.88614 3.76819 5.36827 3.45463 6.04614 3.19181C6.55727 2.99244 7.32395 2.75681 8.7377 2.69156C10.0753 2.62994 10.5937 2.61181 13.2961 2.61V2.61363ZM22.3369 5.02063C22.1084 5.02063 21.8821 5.06563 21.671 5.15307C21.4599 5.24052 21.2681 5.36869 21.1065 5.53026C20.945 5.69183 20.8168 5.88365 20.7293 6.09476C20.6419 6.30586 20.5969 6.53212 20.5969 6.76062C20.5969 6.98913 20.6419 7.21539 20.7293 7.42649C20.8168 7.6376 20.945 7.82942 21.1065 7.99099C21.2681 8.15257 21.4599 8.28073 21.671 8.36818C21.8821 8.45562 22.1084 8.50062 22.3369 8.50062C22.7984 8.50062 23.2409 8.3173 23.5673 7.99099C23.8936 7.66468 24.0769 7.2221 24.0769 6.76062C24.0769 6.29915 23.8936 5.85657 23.5673 5.53026C23.2409 5.20395 22.7984 5.02063 22.3369 5.02063ZM14.5975 7.05425C13.6098 7.03884 12.6289 7.22007 11.712 7.58738C10.795 7.95469 9.96026 8.50075 9.25635 9.19377C8.55244 9.88678 7.99343 10.7129 7.61185 11.624C7.23028 12.5352 7.03377 13.5131 7.03377 14.5009C7.03377 15.4887 7.23028 16.4666 7.61185 17.3778C7.99343 18.2889 8.55244 19.115 9.25635 19.808C9.96026 20.5011 10.795 21.0471 11.712 21.4144C12.6289 21.7817 13.6098 21.963 14.5975 21.9476C16.5524 21.9171 18.4168 21.1191 19.7885 19.7259C21.1601 18.3327 21.9289 16.456 21.9289 14.5009C21.9289 12.5458 21.1601 10.6691 19.7885 9.27592C18.4168 7.88272 16.5524 7.08475 14.5975 7.05425ZM14.5975 9.66606C15.8796 9.66606 17.1091 10.1754 18.0156 11.0819C18.9222 11.9884 19.4315 13.218 19.4315 14.5C19.4315 15.782 18.9222 17.0116 18.0156 17.9181C17.1091 18.8246 15.8796 19.3339 14.5975 19.3339C13.3155 19.3339 12.0859 18.8246 11.1794 17.9181C10.2729 17.0116 9.76358 15.782 9.76358 14.5C9.76358 13.218 10.2729 11.9884 11.1794 11.0819C12.0859 10.1754 13.3155 9.66606 14.5975 9.66606Z" fill="#F8F8F8"/>
</g>
<defs>
<clipPath id="clip0_1_198">
<rect width={"29" * size} height={"29" * size} fill="white" transform="translate(0.0957031)"/>
</clipPath>
</defs>
</svg>

  )
}

export default Instagram