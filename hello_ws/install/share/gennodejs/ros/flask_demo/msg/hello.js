// Auto-generated. Do not edit!

// (in-package flask_demo.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class hello {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.hello = null;
    }
    else {
      if (initObj.hasOwnProperty('hello')) {
        this.hello = initObj.hello
      }
      else {
        this.hello = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type hello
    // Serialize message field [hello]
    bufferOffset = _serializer.string(obj.hello, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type hello
    let len;
    let data = new hello(null);
    // Deserialize message field [hello]
    data.hello = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += object.hello.length;
    return length + 4;
  }

  static datatype() {
    // Returns string type for a message object
    return 'flask_demo/hello';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'aa1e4c96cf56304cea7e883d117e24f3';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string hello
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new hello(null);
    if (msg.hello !== undefined) {
      resolved.hello = msg.hello;
    }
    else {
      resolved.hello = ''
    }

    return resolved;
    }
};

module.exports = hello;
