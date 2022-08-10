/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Search() {
  return (
    <div className=" w-[10vh]  border-2 border-[black] p-20">
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        Location
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-[10] pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="Location (any)" 
      >
        <option >Location (any) <span>Select your place</span>   </option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>
      </select>
    </div>
  )
}