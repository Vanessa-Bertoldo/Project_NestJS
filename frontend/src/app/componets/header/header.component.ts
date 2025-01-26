import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from '../../../../node_modules/primeng/api/menuitem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard' },
      { label: 'Produtos', icon: 'pi pi-box', routerLink: '/produtos' },
      { label: 'Relatórios', icon: 'pi pi-chart-line', routerLink: '/relatorios' },
      { label: 'Usuários', icon: 'pi pi-users', routerLink: '/usuarios' }
    ];
  }
}
