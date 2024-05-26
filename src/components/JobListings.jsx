import React from 'react';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';
import JobListing from './JobListing';

const JobListings = ( { isHome = false } ) => {
  const [jobs, setJobs] = useState( [] );
  const [loading, setLoading] = useState( true );

  useEffect( () => {
    const fetchJobs = async () => {
      const apiURL = isHome ? '/api/jobs?_limit=3' : '/api/jobs';

      try {
        const res = await fetch( apiURL );
        const data = await res.json();
        setJobs( data );
      } catch ( error ) {
        console.log( 'Error fetching data', error );
      } finally {
        setLoading( false );
      }
    };

    fetchJobs();
  }, [] );

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent Jobs' : 'All Jobs' }
        </h2>

          { loading ? (
              <Spinner loading={ loading } />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              { jobs.map( ( job ) => {
                return (
                  <JobListing key={ job.id } job={ job } />
                );
              } ) }
            </div>
          ) }
      </div>
    </section>
  );
}

export default JobListings;
