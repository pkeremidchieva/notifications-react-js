import React from "react";

export default ({ handleChange, handleSubmit, post }) => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <span>Type your message:</span>
          <textarea
            className="form-control"
            name="textMessage"
            onChange={handleChange}
            type="text"
            value={post.textMessage}
          />
        </div>
        <div className="form-group">
          <span>Choose position in the browser:</span>
          <select
            className="form-control"
            name="position"
            onChange={handleChange}
            value={post.position}
          >
          <option>top left</option>
          <option>top right</option>
          <option>bottom left</option>
          <option>bottom right</option>
        </select>
        </div>
        <div className="form-group">
          <span>Choose type of the message:</span>
          <select
            className="form-control"
            onChange={handleChange}
            name="typeNotification"
            value={post.typeNotification}
          >
            <option>alert</option>
            <option>info</option>
            <option>warning</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          See the notification
        </button>
      </form>
    </div>
  );
};
