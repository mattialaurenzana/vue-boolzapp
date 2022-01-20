new Vue({

    el: '#app',
    data: {


    currentIndex: 0,
    currentMessage: "",
    currentFilter: "",
    contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:45:00',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showModal: false,
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent',
                            showModal: false,
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received',
                            showModal: false,
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
                            status: 'sent',
                            showModal: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showModal: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            showModal: false,
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
                            status: 'sent',
                            showModal: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showModal: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare al cinema.',
                            status: 'sent',
                            showModal: false,
                        }
                    ],
                },
                {
                    name: 'Samuel',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Stai bene?',
                            status: 'sent',
                            showModal: false,
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Sì sto bene!!',
                            status: 'received',
                            showModal: false,
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Ci troviamo per le 3 in piazza',
                            status: 'sent',
                            showModal: false,
                        }
                    ],
                },

            ],
            
    },
    methods: {
        selectContact: function(index){
            this.currentIndex = index;
        },
        getClasses: function(element){
            classList = [];
            if(element.status === 'sent'){
                classList.push('my-message');
            }else{
                classList.push('interlocutor-message');
            }
            return classList;
        },
        addMessage: function(){
            let newMessage = {
                    date: this.getDate(),
                    text: this.currentMessage,
                    status: 'sent',
                    showModal: false,
            }
            this.contacts[this.currentIndex].messages.push(newMessage);
            this.currentMessage = "";
        },
        automaticResponse: function(){
            let newMessage = {
                date: '20/03/2020 16:30:00',
                text: 'ok',
                status: 'received',
                showModal: false,
            }
            this.contacts[this.currentIndex].messages.push(newMessage);
        },
        delayFunction: function(){
            setTimeout(this.automaticResponse,1000);
        },
        search : function(item){
            
               if(item.name.toLowerCase().includes(this.currentFilter)){
                   return true;
               };
           
        },
        contactsRegenerator: function(){
            if(this.currentFilter.length === 0){
                this.filteredArray = [...this.contacts];
            }
        },
        getDate: function(){
           return  dayjs().format('DD/MM/YYYY HH:mm:ss');
        },
        setModal: function(item){
            item.showModal = !item.showModal;
        },
        deleteMessage: function(item,i){
            this.contacts[this.currentIndex].messages.splice(i,1);
        }
        
    },
 
   
   
});



