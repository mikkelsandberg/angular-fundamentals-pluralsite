import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <p>Date: {{ event.date }}</p>
      <p>Time: {{ event.time }}</p>
      <p>Price: \${{ event.price }}</p>
      <p>
        Location: {{ event.location.address }}
        &nbsp;
        {{ event.location.city }}, {{ event.location.country }}
      </p>
    </div>
  `
})
export class EventThumbnailComponent {
  @Input() event: any;
}
