export default {
    setUser(state, user){
        state.user = user;
    },
    setToken(state, token){
        state.token = token;
    },
    clearTokenAndUser(state){
        state.user = null,
        state.token = null
    },
    updateMessageList(state, message){
        state.messageList.push(message);
    },
    setMessageList(state, messages){
        state.messageList = messages;
    },
    addLikeOrDislike(state,packet){
        state.messageList.forEach(element => {
            if(element._id == packet.message_id) {
                if(packet.type == 'like'){
                    
                    if(packet.isLiked){
                        element.like.forEach((user,index) =>{
                            if(user.id == packet.user_id){
                                element.like.splice(index,1);
                            }
                        })
                    }else if (packet.isDisliked){
                        element.like.push({
                            'id' : packet.user_id
                        })
                        element.dislike.forEach((user,index) =>{
                            if(user.id == packet.user_id){
                                element.dislike.splice(index,1);
                            }
                        })
                    }else{
                        element.like.push({
                            'id' : packet.user_id
                        })
                    }
                }
                else{
                    if(packet.isLiked){
                        element.like.forEach((user,index) =>{
                            if(user.id == packet.user_id){
                                element.like.splice(index,1);
                            }
                        })

                        element.dislike.push({
                            'id' : packet.user_id
                        })
                    }else if (packet.isDisliked){
                        element.dislike.forEach((user,index) =>{
                            if(user.id == packet.user_id){
                                element.dislike.splice(index,1);
                            }
                        })
                    }else{
                        element.dislike.push({
                            'id' : packet.user_id
                        })
                    }
                }
            }
        });
    },
    updateDialog(state){
        state.dialog = !state.dialog;
    }
}