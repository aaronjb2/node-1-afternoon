let messages = [];

let id = 0;

module.exports = {
    create: (req,res,next) => {
        let {text,time} = req.body;
        let newMessage = {
            text:text,
            time:time,
            id:id
        }
        id++;
        messages.push(newMessage);
        res.status(200).send(messages);
    },
    read: (req,res,next) => {
        res.status(200).send(messages);
    },
    update: (req,res,next) => {
        const {text} = req.body;
        const updateID = req.params.id;
        const index = messages.findIndex(element=>element.id == updateID);
        const myMessage = messages[index];
        messages[index] = {
            id:myMessage.id,
            text: text || myMessage.text,
            time: myMessage.time
        }
        res.status(200).send(messages);
    //     const { text } = req.body;
    // const updateID = req.params.id;
    // const messageIndex = messages.findIndex( message => message.id == updateID );
    // let message = messages[ messageIndex ];

    // messages[ messageIndex ] = {
    //   id: message.id,
    //   text: text || message.text,
    //   time: message.time
    //}

    res.status(200).send( messages );
    },
    delete: (req,res,next) => {
        let {time, text} = req.body;
        let index = messages.findIndex(message => message.id == req.params.id);
            messages.splice(index,1);
            res.status(200).send(messages);
    }
}