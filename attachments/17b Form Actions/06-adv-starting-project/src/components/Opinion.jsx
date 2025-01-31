/* eslint-disable react/prop-types */

import { useContext } from "react";
import { OpinionsContext } from "../store/opinions-context";
import { useActionState } from "react";
import { useOptimistic } from "react";

/* eslint-disable react/react-in-jsx-scope */
export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = useContext(OpinionsContext);
  const [optimisticVote, setVoteOptimisticaly] = useOptimistic(votes, (prev, mode) => (mode === "up" ? prev + 1 : prev - 1))
  async function upvoteAction() {
    setVoteOptimisticaly("up")
    await upvoteOpinion(id)
  }
  async function downvoteAction() {
    setVoteOptimisticaly("down")
    await downvoteOpinion(id)
  }
  // eslint-disable-next-line no-unused-vars
  const [upvoteFormState, upvoteFormAction, upvotePending] = useActionState(upvoteAction)
  // eslint-disable-next-line no-unused-vars
  const [downvoteFormState, downvoteFormAction, downvotePending] = useActionState(downvoteAction)
  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upvoteFormAction} disabled={upvotePending || downvotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVote}</span>

        <button formAction={downvoteFormAction} disabled={upvotePending || downvotePending}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
