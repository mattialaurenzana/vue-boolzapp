new Vue({

    el: '#app',
    data: {


    currentIndex: 0,
    currentMessage: "",
    contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Mario',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare al cinema.',
                            status: 'sent'
                        }
                    ],
                },

            ]
    },
    methods: {
        selectContact: function(index){
            this.currentIndex = index;
        },
        getClasses: function(element){
            classList = [];
            classList.push('message');
            if(element.status === 'sent'){
                classList.push('my-message');
            }else{
                classList.push('interlocutor-message');
            }
            return classList;
        },
        addMessage: function(){
            let newMessage = {
                    date: '20/03/2020 16:30:00',
                    text: this.currentMessage,
                    status: 'sent'
            }
            this.contacts[this.currentIndex].messages.push(newMessage);
            this.currentMessage = "";
        },
        automaticResponse: function(){
            let newMessage = {
                date: '20/03/2020 16:30:00',
                text: 'ok',
                status: 'received'
            }
            this.contacts[this.currentIndex].messages.push(newMessage);
        },
        delayFunction: function(){
            setTimeout(this.automaticResponse,1000);
        }
        
    }
});

