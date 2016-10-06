import { Component } from '@angular/core';

@Component({
  selector: '<%= prefix %>-root',<% if (inlineTemplate) { %>
  template: `
  <h1>
    {{title}}
  </h1>
  `,<% } else { %>
  templateUrl: './app.component.html',<% } %><% if (inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./app.component.<%= styleExt %>']<% } %>
})
export class AppComponent {
  title = '<%= prefix %> works!';
}
