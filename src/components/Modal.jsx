import { useState } from "react";

export default function Modal({ showModal, closeModal }) {
  const [selectedConcert, setSelectedConcert] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [bookingMade, setBookingMade] = useState(false);

  const concertDates = {
    IU: ["2024-04-20", "2024-04-21"],
    "Bruno Mars": ["2024-04-03", "2024-04-05", "2024-04-06"],
    ITZY: ["2024-04-06"],
    "Deep Purple": ["2024-05-01"],
    "Imee Ooia and JSJG": ["2024-04-30"],
    Baekhyun: ["2024-03-28"],
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleConcertChange = (event) => {
    setSelectedConcert(event.target.value);
  };

  const handleBooking = (event) => {
    event.preventDefault();
    setBookingMade(true);
  };
  const handleClose = () => {
    setBookingMade(false);
    closeModal(); 
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Booking</h3>
                </div>
                {bookingMade ? (
                  <div className="p-4 md:p-5 flex flex-col items-center">
                    <p>Thanks! Your receipt will be sent via email.</p>
                    <button
                      className="bg-emerald-500 items-center my-8 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form className="p-4 md:p-5" onSubmit={handleBooking}>
                    <div className="grid gap-4 mb-4 grid-cols-2">
                      <div className="col-span-2">
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="example@mail.com"
                          required={true}
                        />
                      </div>
                      <div className="col-span-2">
                        <label
                          for="name"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Name"
                          required={true}
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          for="price"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Number Of Tickets
                        </label>
                        <input
                          type="number"
                          name="number of Tickets"
                          id="number of Tickets"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="0"
                          required={true}
                        />
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <label
                          for="concert"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Concert
                        </label>
                        <select
                          id="concert"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                          onChange={handleConcertChange}
                        >
                          <option disabled selected>
                            Select Concert
                          </option>
                          {Object.keys(concertDates).map((concert) => (
                            <option key={concert} value={concert}>
                              {concert}
                            </option>
                          ))}
                        </select>
                      </div>
                      {selectedConcert && (
                        <div className="col-span-2">
                          <label
                            for="date"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Select Date{" "}
                            <span className="text-[#808080]/40">(YYMMDD)</span>
                          </label>
                          <div className="flex gap-4">
                            {concertDates[selectedConcert].map((date) => (
                              <div key={date}>
                                <input
                                  type="radio"
                                  id={date}
                                  name="date"
                                  value={date}
                                  checked={selectedDate === date}
                                  onChange={handleDateChange}
                                  className="hidden peer"
                                />
                                <label
                                  className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100"
                                  htmlFor={date}
                                >
                                  {date}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Book Now!
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
