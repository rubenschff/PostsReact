import bus from "../utils/bus.jsx";

export default function flashMessage() {

    function setMessage(msg, type){

        bus.emit('flash', {
            message: msg,
            type: type
        })
    }

    return {setMessage}

}