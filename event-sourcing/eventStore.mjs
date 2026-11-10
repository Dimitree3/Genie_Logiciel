export const eventStore = {
    eventList: [],
    addEvent(event) {
        this.eventList.push(event);
        console.log("Event store :", this.eventList);
      },
};
