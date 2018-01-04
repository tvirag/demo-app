import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Paprikas Csirke','Description of Paprikas Csirke','http://izeselet.hu/wp-content/uploads/2016/08/ad294b_3cfac344953e4d5da696dcdd195fb4ae.jpg_srb_p_1293_872_7.jpg?x86794')
  ];

  constructor() { }

  ngOnInit() {
  }

}
