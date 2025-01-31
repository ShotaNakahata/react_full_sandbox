/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react';
import classes from './NewsletterSignup.module.css';
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  const fetcher = useFetcher()
  const inputRef = useRef()
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message)
      inputRef.current.reset()
    }
  }, [data, state])
  return (
    <fetcher.Form ref={inputRef} method="post" className={classes.newsletter} action='newsletter'>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
