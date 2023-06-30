import 'grapesjs/dist/css/grapes.min.css';
import grapesjs, { Panels } from 'grapesjs'
import { useEffect } from 'react';


export const Marco = () => {


  useEffect(() => {
    const editor = grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '520px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      // Avoid any default panel
      /*   panels: { defaults: [] }, */

      blockManager: {
        appendTo: '#blocks',
        blocks: [
          {
            id: 'section', 
            label: '<b>Section</b>',
            attributes: { class: 'gjs-block-section' },
            content: `<section>
              <h1>This is a simple title</h1>
              <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
          },  {
            id: 'image',
            label: 'Image',
            select: true,
            content: { type: 'image' },
            activate: true,
          }
        ]
      },

      layerManager: {
        appendTo: '.layers-container'
      },
      // We define a default panel as a sidebar to contain layers
      Panels: {
        defaults: [{
          id: 'layers',
          el: '.panel__right',
          // Make the panel resizable
          resizable: {
            maxDim: 500,
            minDim: 200,
            tc: 0, // Top handler
            cl: 1, // Left handler
            cr: 0, // Right handler
            bc: 0, // Bottom handler
            // Being a flex child we need to change `flex-basis` property
            // instead of the `width` (default)
            keyWidth: 'flex-basis',
          },
        },
          /* {
            id: 'panel-switcher',
            el: '#panel__switcher',
            buttons: [{
              id: 'show-layers',
              active: true,
              label: 'Layers',
              command: 'show-layers',
              // Once activated disable the possibility to turn it off
              togglable: false,
            }, {
              id: 'show-style',
              active: true,
              label: 'Styles',
              command: 'show-styles',
              togglable: false,
            }],
          } */
        ]
      },

      selectorManager: {
        appendTo: '#styles-container'
      },

      styleManager: {
        appendTo: '.styles-container',
        sectors: [{
          name: 'Dimension',
          open: false,
          // Use built-in properties
          buildProps: ['width', 'min-height', 'padding'],
          // Use `properties` to define/override single property
          properties: [
            {
              // Type of the input,
              // options: integer | radio | select | color | slider | file | composite | stack
              type: 'integer',
              name: 'The width', // Label for the property
              property: 'width', // CSS property (if buildProps contains it will be extended)
              units: ['px', '%'], // Units, available only for 'integer' types
              defaults: 'auto', // Default value
              min: 0, // Min value, available only for 'integer' types
            }
          ]
        }, {
          name: 'Extra',
          open: false,
          buildProps: ['background-color', 'box-shadow', 'custom-prop'],
          properties: [
            {
              id: 'custom-prop',
              name: 'Custom Label',
              property: 'font-size',
              type: 'select',
              defaults: '32px',
              // List of options, available only for 'select' and 'radio'  types
              options: [
                { value: '12px', name: 'Tiny' },
                { value: '18px', name: 'Medium' },
                { value: '32px', name: 'Big' },
              ],
            }
          ]
        }]
      },
    });

    // Define commands
        editor.Commands.add('show-layers', {
          getRowEl(editor:any) { return editor.getContainer().closest('.editor-row'); },
          getLayersEl(row?:any) { return row?.querySelector('.layers-container') },
    
          run(editor, sender) {
            const lmEl = this.getLayersEl(this.getRowEl(editor));
            lmEl.style.display = '';
          },
          stop(editor, sender) {
            const lmEl = this.getLayersEl(this.getRowEl(editor));
            lmEl.style.display = 'none';
          },
        });
    
        editor.Commands.add('show-styles', {
          getRowEl(editor:any) { return editor.getContainer().closest('.editor-row'); },
          getStyleEl(row:any) { return row.querySelector('.styles-container') },
    
          run(editor, sender) {
            const smEl = this.getStyleEl(this.getRowEl(editor));
            smEl.style.display = '';
          },
          stop(editor, sender) {
            const smEl = this.getStyleEl(this.getRowEl(editor));
            smEl.style.display = 'none';
          },
        });

  }, [])





  return (<>
    <div className=".panel__top">
      <div className=".panel__basic-actions"></div>
      <div id='panel__switcher' className="panel__switcher"></div>
    </div>

    <div className="editor-row">
      <div className="editor-canvas">
        <div id="gjs">...</div>
      </div>
      <div className="panel__right">
        <div className="layers-container"></div>
      </div>
    </div>

    <div id="blocks" className='.gjs-block '> </div>

    <style jsx>
      {`
            
           
            `}
    </style>
  </>)


}