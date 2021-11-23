import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  textCardData = [
    {
      heading: 'Transform your brand',
      description:
        'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    },
    {
      heading: 'Stand out to the right audience',
      description:
        'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
    }
  ];

  fruitCardData = [
    {
      imageUrl:
        '../../../../assets/sunnyside-agency-landing-page/images/desktop/image-graphic-design.jpg',
      title: 'Graphic Design',
      description:
        'Great design makes your memorable. We deliver artwork that underscores your brand message and captures potenital clients attention.',
    },
    {
      imageUrl:
        '../../../../assets/sunnyside-agency-landing-page/images/desktop/image-photography.jpg',
      title: 'Photography',
      description:
        'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    }
  ];
  constructor() {}

  ngOnInit(): void {}

}
