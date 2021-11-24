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
    },
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
    },
  ];

  feedbackCardData = [
    {
      imageUrl: '../../../../assets/sunnyside-agency-landing-page/images/image-emily.jpg',
      feedback:
        'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name: 'Emily R.',
      designation: 'Marketing Director',
    },
    {
      imageUrl: '../../../../assets/sunnyside-agency-landing-page/images/image-thomas.jpg',
      feedback:
        'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
      name: 'Thomas S.',
      designation: 'Chief Operating Officer',
    },
    {
      imageUrl: '../../../../assets/sunnyside-agency-landing-page/images/image-jennie.jpg',
      feedback:
        'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name: 'Jennie F.',
      designation: 'Business Owner',
    }
  ];

  imageCardData = [
    '../../../../assets/sunnyside-agency-landing-page/images/desktop/image-gallery-milkbottles.jpg',
    '../../../../assets/sunnyside-agency-landing-page/images/desktop/image-gallery-orange.jpg',
    '../../../../assets/sunnyside-agency-landing-page/images/desktop/image-gallery-cone.jpg',
    '../../../../assets/sunnyside-agency-landing-page/images/desktop/image-gallery-sugarcubes.jpg'
  ]

  constructor() {}

  ngOnInit(): void {}
}
