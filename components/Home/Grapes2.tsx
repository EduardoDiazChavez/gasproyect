import { useEffect, useState } from "react";
import type { Editor, StorageManagerConfig, BlockManagerConfig, DeviceManagerConfig } from 'grapesjs';
import grapesjs from 'grapesjs'
import * as algo from 'grapesjs-preset-webpage'
import * as pincel from 'grapesjs-blocks-basic'

import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs-preset-webpage/dist/index.js'


function WebBuilder() {
  const storageManager: StorageManagerConfig = {
    id: 'gjs-',
    type: 'local',
    autosave: false,
  }


  const deviceManager: DeviceManagerConfig = {
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
  }

  const blockManager: BlockManagerConfig = {
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

  }
  const [page, setPage] = useState({
    html: undefined,
    css: undefined,
    js: undefined
  })

  useEffect(() => {
    console.log(page)
  }, [page])


  useEffect(() => {
    const editor = grapesjs.init(
      {
        container: '#gjs',
        height: '500px',
        width: '80%',
        plugins: [
          algo.default,
          pincel.default
        ],
        storageManager,
        deviceManager,
        blockManager,
        pageManager: {
          pages: [
            {
              id: 'page-id',
              styles: `.my-class { color: red }`, // or a JSON of styles
              component: '<div class="my-class">My element</div>', // or a JSON of components
            }
          ]
        }
      }
    )
    //console.log(editor.Parser)
    // const resHtml = editor.Parser.parseHtml(`<table><div>Hi</div></table>`, {
    //   htmlType: 'text/html', // default
    // });
    editor.on('load', () => {
      console.log("LOAD")
    })
    editor.on('update', () => {
      console.log("UPDATE")
      const html = editor.getHtml()
      const css = editor.getCss()
      const js = editor.getJs()
      setPage({ html, css, js })
      console.log({ html, css, js })
    })
    editor.on('undo', () => {
      console.log("UNDO")
    })
    editor.on('redo', () => {
      console.log("REDO")
    })
  }, [])

  return (
    <>
      <div id="gjs" ></div>
      <div>
        <h1>TITULO</h1>
        <div className="w-[50%] h-[100px] border-2 overflow-auto">
          {page.html}
          {page.css}
        </div>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
      <style>
        {page.css}
      </style>
    </>
  );
}
export default WebBuilder;