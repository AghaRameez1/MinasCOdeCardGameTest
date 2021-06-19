import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardsgame';
  real_name = "Real Name";
  player_name = "Player Name"
  asset = "Asset"

  mockdata = [{
    'real_name': "Brianna Forbes",
    'player_name': 'Dreamlurk The Unstoppable',
    'asset': 'Foghammer Lead',
  }, {
    'real_name': "Darcy Candice Ball",
    'player_name': 'Crystaldash',
    'asset': 'Secret Glowquake Gold',
  }, {
    'real_name': "Hillary Gibbs",
    'player_name': 'Speedsoul',
    'asset': 'Shifting Rainshadow Iron',
  }, {
    'real_name': "Elva Becky Hammond",
    'player_name': 'Seekvenom The Mystic',
    'asset': "Valkyries' Opal Adamant",
  }, {
    'real_name': "Enid Rose",
    'player_name': 'Coincurse The Ghoul',
    'asset': 'Jewelevil Bronze Of Goddesses',
  }, {
    'real_name': "Esmeralda Carrillo",
    'player_name': 'Skulldart',
    'asset': 'Yellow Orichalcum Of Paladins',
  },
  ]
  constructor() {
  }

  ngOnInit() {
  }
  changeMainCard(item:any) {
    this.player_name = item?.player_name;
    this.real_name = item?.real_name;
    this.asset = item?.asset
  }

  ascendingSort(){
    this.mockdata.sort((a,b) =>a.real_name.localeCompare(b.real_name));
  }
  descendingSort(){
    this.mockdata.sort((a,b) =>b.real_name.localeCompare(a.real_name));
  }
  onSubmit(){
    if (this.player_name == "Player Name" || this.real_name == "Real Name" || this.asset== "Asset"){
      alert('Please Select a player');
    }
    else{
      alert("You submitted: Real Name: "+ this.real_name+" Player Name:"+this.player_name+" Asset:"+this.asset)
    }
  }
}
