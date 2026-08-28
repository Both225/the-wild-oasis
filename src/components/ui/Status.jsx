function Status({ status }) {
  return (
    <div className="w-fit place-self-center rounded-4xl bg-cyan-200 px-5 py-1">
      <p className="justify-center text-center font-semibold text-cyan-700">
        {status}
      </p>
    </div>
  );
}

export default Status;
