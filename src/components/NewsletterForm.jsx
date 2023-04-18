import { useEffect, useState } from 'react';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';
import db from '../../firebase/clientApp';

function NewsletterForm({ currentUser }) {
  const [recipient, setRecipient] = useState(""); //email address
  const [prefObj, setPrefObj] = useState({ email: "", blog: true, updates: true, promotions: true }); //object to be sent to the API route

  //handles the checkboxes state and updates the state of prefObj object
  const handleNewsletterChange = (event) => {
    setPrefObj({ ...prefObj, [event.target.name]: event.target.checked });

  };

  // takes the email address from the form and sends it to the API route
  async function subscribe(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;//this is the email address
    console.log("prefObj: ", prefObj);




    //------------fetch data from db------------
    // const getEmailSubs = async (db) => {
    //   const emailSubsCol = collection(db, 'email_subscribers');
    //   const emailSubsSnapshot = await getDocs(emailSubsCol);
    //   const emailSubsList = emailSubsSnapshot.docs.map(doc => doc.data());
    //   console.log("emailSubsList: ", emailSubsList);
    // }
    // getEmailSubs(db);

    //---------------add data to db-------------------
    const addEmailSub = async (db) => {
      const emailSubsCol = collection(db, 'email_subscribers');
      await setDoc(doc(emailSubsCol, email), prefObj);
    }

    addEmailSub(db);



  }

  //conditional rendering of the form if the user is logged in

  return (
    <div className='bg-gray-800 mx-auto max-w-7xl py-24 px-6 lg:flex lg:items-center lg:py-32 lg:px-8'>
      <div className='lg:w-0 lg:flex-1'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl'>
          Sign up for our newsletter
        </h2>
        <p className='mt-3 max-w-3xl text-lg text-gray-200'>
          Want to be the first to know when we post the latest blog? <br />{" "}
          Sign up for the newsletter!
        </p>
      </div>
      <div className='mt-8 lg:mt-0 lg:ml-8'>
        <form onSubmit={subscribe} className='sm:flex'>
          <label htmlFor='email-address' className='sr-only'>
            Email address
          </label>
          <input
            id='email-address'
            name='email'
            type='email'
            autoComplete='email'
            required
            value={recipient}

            onChange={(e) => {
              setRecipient(e.target.value);
              if (e.target.value != "") {
                setPrefObj({ ...prefObj, email: e.target.value }); //update the prefObj object with the email address

              }

            }}
            className='w-full rounded-md border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:max-w-xs text-black'
            placeholder='Enter your email'
          />


          <div>
            <input type="checkbox" id="blog" name="blog" checked={prefObj.blog} onChange={handleNewsletterChange} />
            <label htmlFor="blog">Blog updates</label>
          </div>

          <div>
            <input type="checkbox" id="updates" name="updates" checked={prefObj.updates} onChange={handleNewsletterChange} />
            <label htmlFor="updates">Product updates</label>
          </div>

          <div>
            <input type="checkbox" id="promotions" name="promotions" checked={prefObj.promotions} onChange={handleNewsletterChange} />
            <label htmlFor="promotions">Promotions</label>
          </div>
          <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
            <button
              type='submit'
              className="btn ml-3 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-5 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"

            >
              Notify me
            </button>
          </div>
        </form>
        <p className='mt-3 text-sm text-gray-200'>
          We care about the protection of your data. Read our{" "}
          <a href='#' className='font-medium underline'>
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
}




export default NewsletterForm;
