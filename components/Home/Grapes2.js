import { useEffect } from "react";
import grapesjs from 'grapesjs'
import plugin from 'grapesjs-preset-webpage'
import grapesJSMJML from 'grapesjs-mjml'
import * as jafet  from 'grapesjs-blocks-basic';

import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs-preset-webpage/dist/index.js'

/* import plugin from 'grapesjs-style-bg';
import 'grapesjs/dist/css/grapes.min.css';
import 'grapick/dist/grapick.min.css'; */


function WebBuilder() {

  useEffect(() => {
    grapesjs.init({
      container: '#gjs',
      height: '700px',
      width: '100%',
      plugins: [plugin],
      storageManager: {
        id: 'gjs-',
        type: 'local',
        autosave: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
      },
      deviceManager: {
        devices:
          [
            {
              id: 'desktop',
              name: 'Desktop',
              width: '',
            },
            {
              id: 'tablet',
              name: 'Tablet',
              width: '768px',
              widthMedia: '992px',
            },
            {
              id: 'mobilePortrait',
              name: 'Mobile portrait',
              width: '320px',
              widthMedia: '575px',
            },
          ]
      },
      blockManager: {
        blocks: [
          {
            id: 'link',
            label: 'Link',
           /*  category: 'Basic', */
            media: `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
            </svg>`,
            activate: true,
            content: {
              type: 'link',
              content: 'Insert your link here',
              style: { color: '#d983a6' }
            }
          },
          {
            id: 'section', 
            label: '<b>Section</b>', 
            attributes: { class: 'gjs-block-section' },
            content: `<section>
            <h1>This is a simple title</h1>
            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
          </section>`,
          }, 
          {
            id: 'text',
            label: 'Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          },
          {
            id: 'image',
            label: 'Image',
            media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
                      <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                    </svg>`,
            content: { type: 'image' },
            activate: true,
          }
        ],

      },      
    })
  }, [])

  return (
    <div id="gjs" ></div>
  );
}
export default WebBuilder;