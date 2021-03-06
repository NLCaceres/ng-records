import { Component, OnInit } from "@angular/core";
import { NavItem } from "../NavItem";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  navBrand: NavItem = {
    title: "Infection Control Records"
  };

  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
