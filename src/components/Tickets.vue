<template>
  <div class="movie-ticket-app">
    <h1 class="app-title">Movie Theater Seat Booking</h1>
    
    <!-- Dropdown menu to select a screen -->
    <div class="screen">
      <label for="screen-select">Select a Screen: </label>
      <select id="screen-select" v-model="selectedScreen" @change="loadSeatsByScreen">
        <option value="" disabled>Select a Screen</option>
        <option v-for="screen in screens" :value="screen.id" :key="screen.id">{{ screen.name }}</option>
      </select>
    </div>
    
    <!-- Layout for seats -->
    <div class="seating-plan">
      <div class="row" v-for="row in rows" :key="row">
        <div class="row-label">{{ row }}</div>
        <div class="seats">
          <div
            v-for="seat in seatsByRow(row)"
            :key="seat.id"
            @click="toggleSeatSelection(seat)"
            :class="{
              'seat': true,
              'selected': seat.selected,
              'unavailable': seat.is_available === 1,
              'available': seat.is_available === 0,
            }"
          >
            {{ seat.id }}
          </div>
        </div>
      </div>
    </div>
    
    <button @click="bookSelectedSeats" class="book-button">Book Selected Seats</button>
  </div>
</template>

<script>
export default {
  name: "movieTickets",
  data() {
    return {
      selectedScreen: null,
      filteredSeats: [],
      seats: [],
      rows: [],
      screens: [],
    };
  },
  created() {
    this.fetchScreens();
    this.fetchSeats();
  },
  methods: {
    async fetchScreens() {
      const API_URL = "http://localhost:8000/theaters";

       try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        this.screens = data;
        console.log(this.screens);
       } catch (error) {
        console.log('Fetch error:', error);
       }
    },
    async fetchSeats() {
       const API_URL = "http://localhost:8000/seats";

       try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        this.seats = data;
        console.log(this.seats);
       } catch (error) {
        console.log('Fetch error:', error);
       }
    },
    loadSeatsByScreen() {
      this.filteredSeats = this.seats.filter(seat => seat.theater_id === this.selectedScreen);
      console.log("SEATS",this.filteredSeats);
      this.rows = [...new Set(this.filteredSeats.map(seat => seat.row))];
      console.log("ROWS",this.rows);
    },
    seatsByRow(row) {
      return this.filteredSeats.filter(seat => seat.row === row);
    },
    toggleSeatSelection(seat) {
      if (seat.is_available === 0) {
        seat.selected = !seat.selected;
      }
    },
    bookSelectedSeats() {
    },
  },
};
</script>

<style scoped>
.movie-ticket-app {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}
.app-title {
  font-size: 24px;
  margin-bottom: 20px;
}
.screen {
  font-size: 18px;
  margin: 20px 0;
}
.seating-plan {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.row-label {
  font-size: 20px;
  margin: 10px 0;
}
.seats {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 10px;
}
.seat {
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: grey;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-weight: bold;
}
.seat.selected {
  background-color: green;
  color: white;
  cursor: pointer;
}
.unavailable {
  background-color: red;
  cursor: not-allowed;
}
.available {
  background-color: grey;
}
.book-button {
  font-size: 18px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.book-button:hover {
  background-color: #0056b3;
}
</style>