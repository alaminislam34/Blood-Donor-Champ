const Service = () => {
  return (
    <div>
      <form>
        {/* ইমেইল */}
        <label htmlFor="to">
          <span>আপনার ইমেইল বসান</span>
          <input type="email" name="message" placeholder="আপনার ইমেইল" />
        </label>
        {/* মেসেজ */}
        <label htmlFor="msg">
          <span></span>
          <textarea name="message" cols={5}></textarea>
        </label>
      </form>
    </div>
  );
};

export default Service;
