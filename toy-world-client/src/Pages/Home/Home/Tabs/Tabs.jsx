import Swal from 'sweetalert2'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const handleAlert=() =>{
    Swal.fire(
      'Sorry!',
      'You Have to Login First!',
      'warning'
    )
  }
  let [categories] = useState({
    ANIMAL: [
      {
        id: 1,
        title: 'Bird',
        price: '555',
        rating: 5,
        img: "https://i.ibb.co/GVYL3qX/angry-birds-birds-movies-animated-movies-wallpaper-preview.jpg",
      },
      {
        id: 2,
        title: "Minion",
        price: '444',
        rating: 3,
        img: "https://i.ibb.co/FqQHvFN/minions-cartoon-watermarked-despicable-me-wallpaper-preview.jpg",
      },
      {
        id: 3,
        title: "Ulfa",
        price: '333',
        rating: 4,
        img: "https://i.ibb.co/4d2BQFw/monster-monster-smile-cartoon-wallpaper-preview.jpg",
      },
      {
        id: 2,
        title: "CowBoy",
        price: '222',
        rating: 3,
        img: "https://i.ibb.co/5FR5P18/woody-toy-story-4-wallpaper-preview.jpg",
      }
    ],
    PANDA: [
      {
        id: 1,
        title: 'Dog',
        price: '555',
        rating: 5,
        img: "https://i.ibb.co/C1ZnH3f/toy-teddy-bear-backgrounds-christmas-download-3840x2400-toy-wallpaper-preview.jpg",
      },
      {
        id: 2,
        title: "Teddy",
        price: '444',
        rating: 3,
        img: "https://i.ibb.co/r2gzh6y/teddy-bear-bear-bears-stuffed-animal.jpg",
      },
   
    ],
    DOLL: [
      {
        id: 1,
        title: 'Alaska',
        price: '999',
        rating: 5,
        img: "https://i.ibb.co/y61KmTj/barbie-doll-blonde-girl.jpg",
      },
      {
        id: 2,
        title: "Leo dis",
        price: '666',
        rating: 3,
        img: "https://i.ibb.co/F74DhHm/doll-barbie-style-fashion-wallpaper-preview.jpg",
      },
      {
        id: 3,
        title: "American",
        price: '333',
        rating: 4,
        img: "https://i.ibb.co/93d1KpP/barbie-doll-pretty-blonde.jpg",
      },
      {
        id: 2,
        title: "Baby",
        price: '111',
        rating: 3,
        img: "https://i.ibb.co/QCqhKf8/barbie-doll-waving-wave-hello-blonde.jpg",
      }
    ],
  })

  return (
    <div>
      <h1 className="text-center m-2 bg-black text-pink-300 p-4 font-black text-4xl rounded-full">Tabs Section !</h1>

      <div className="w-full max-w-full px-2 py-16 sm:px-0">

        <Tab.Group>
          <Tab.List className="flex w-full rounded-xl bg-black p-3">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-xl font-black  leading-5 text-black',
                    'ring-white ring-opacity-100 ring-offset-2 ring-offset-pink-400 focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow'
                      : 'text-blue-100 hover:bg-gray-300 hover:m-1 hover:text-black text-xl'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-black p-3',
                  'ring-white ring-opacity-100 ring-offset-4 ring-offset-black-400 focus:outline-none focus:ring-2'
                )}
              >
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:w-full'>
                  {posts.map((post) => (
                    <div
                      key={post.id}
                      className="relative rounded-md p-3"
                    >

                      <div className="card w- bg-gray-900 shadow-xl grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                        <div>
                          <img className='h-full w-full' src={post.img}alt="" />
                        </div>
                        <div className="card-body">
                          <h2 className="card-title text-white text-2xl">Name : {post.title}</h2>
                          <p className="text-white text-xl">Price : {post.price} $</p>
                          <p className='text-white text-xl'>Rating : {post.rating}
                          <span className='rating p-1'><input type="radio" name="rating-3" className="mask mask-heart w-5 bg-pink-400" /></span> </p>
                          <p className="badge text-pink-400"><span className='text-pink-400'>Review </span>+99</p>
                          <div className="card-actions justify-end">
                            <Link  to="/login">
                            <button onClick={handleAlert} className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Details</button>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
