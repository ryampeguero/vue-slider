const {createApp} = Vue;

createApp({
    data(){
        return{
            isActive: false,
            activeIndex: 0,
            intervalValue: null,
            BoolInterval: false,
            forwardBool: true,

            images: [
                {
                  image: "img/01.webp",
                  title: "Marvel's Spiderman Miles Morale",
                  text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
                },
                {
                  image: "img/02.webp",
                  title: "Ratchet & Clank: Rift Apart",
                  text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
                },
                {
                  image: "img/03.webp",
                  title: "Fortnite",
                  text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                  image: "img/04.webp",
                  title: "Stray",
                  text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
                },
                {
                  image: "img/05.webp",
                  title: "Marvel's Avengers",
                  text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
                },
              ],
        }
    },

    created(){
        if(this.BoolInterval == false)
            this.intervalValue = this.setThumbInterval();

    },

    methods:{
        showNext: function(){
            forwardBool = true;
            console.log(this.forwardBool);
            if(this.activeIndex === this.images.length - 1){
                this.activeIndex = 0;
            }else{
                this.activeIndex++;
            
            }
        },
        
        showPrevious: function(){
            console.log(this.activeIndex);
            console.log(this.forwardBool);
            forwardBool = false;

            if(this.activeIndex <= 0){
                this.activeIndex = this.images.length - 1;
            }else{
                this.activeIndex--;
            }
            
        },

        selectThumb: function(indexClick){
            this.activeIndex = indexClick;
            this.BoolInterval = true;
        },

        setThumbInterval: function(){
            let newInterval = null;
            switch(this.forwardBool){
                
                case true:
                     newInterval = setInterval(this.showNext, 3000);
                    break;

                case false:
                     newInterval = setInterval(this.showPrevious, 3000);
                     break;
            }
            
            this.BoolInterval = true;
            return newInterval;
        },

        clearIntervalValue: function(){
            clearInterval(this.intervalValue);
            if(this.BoolInterval){
                this.BoolInterval = false;
            }else{
                this.intervalValue = this.setThumbInterval();
            }
            
        },

        reverseOrder: function(){
            this.forwardBool = !this.forwardBool;
            console.warn(this.forwardBool);
            this.clearIntervalValue();
           this.intervalValue = this.setThumbInterval()
        
        }
        
    }
}).mount("#app");