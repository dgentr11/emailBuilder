import { GuideSidebar } from './GuideSidebar';

export default function GuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 mt-24">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          FS Email Builder Documentation
        </h1>
        <p className="text-slate-700 dark:text-slate-300 mb-4"><a href="https://liveutk-my.sharepoint.com/:w:/r/personal/dgentr11_utk_edu/Documents/FS%20Sanity.io%20Email%20Builder%20Overview.docx?d=w7413ce98c42745c989cbc02ef55a51b4&csf=1&web=1&e=FKkFFR" target="_blank" rel="noopener noreferrer">Download this guide for Microsoft Word</a></p>
      </header>

      <div className="flex gap-12">
        <GuideSidebar />
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-12 min-w-0 flex-1 [&_[id]]:scroll-mt-28">
        {/* Overview */}
        <section id="overview">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            This guide explains how to create an Email document using an Email Builder in Sanity Studio content management system (CMS).
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            It is written for nontechnical users and focuses on what each section is for and how to fill out the form fields, not how the code works.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            In Studio, an Email document is made up of <strong>Sections</strong> that users can add, remove, and reorder. Each section has a specific layout and purpose, and together they form the final email that can be exported as HTML and sent via Outlook or any email tool that supports HTML.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            This document will walk users through creating and duplicating email content by types, as well as explaining the internal fields and section types.  Each section explanation should also have screenshots as a visual reference.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            Finally, the document instructs users on setting up Microsoft Outlook to send the HTML email.
          </p>
        </section>

        <hr className="my-12 border-slate-200 dark:border-slate-400" />

        {/* Creating a Newsletter */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Creating a Newsletter
          </h2>

          {/* Selecting Content Type and Duplicating or Creating a New Email Document */}
          <div id="creating-new-document" className="mb-10 p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
             Creating a New Email Document by Content Type
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>What it is:</strong> Creates a new email document by selecting a content type.
            </p>
            <div className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>How to use it:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li>Click the <strong>New Document (+)</strong> button in the top left corner of the Studio.
                  <img src="https://cdn.sanity.io/images/qzfk7kdf/production/1e56e5b856b81d6f4f776c8e06ce12fcf7fc7043-370x334.png" alt="New Document Button" className="w-1/2 mb-8" />
                </li>
          
                <li>Select the content type you want to create (e.g. <strong> Newsletter</strong>, <strong>Training Newsletter</strong> or <strong>Press Release</strong>).
                  <img src="https://cdn.sanity.io/images/qzfk7kdf/production/2163b806c5ed7caeef66f13187c4c29793755205-370x334.png" alt="Content Type Selection" className="w-1/2 mb-8" />
                </li>
                <li>A new email document will be created with the content type selected.</li>
                <li>You can now add details to the new email document (right hand side) such as the title, publish date, and sections.
                  <img src="https://cdn.sanity.io/images/qzfk7kdf/production/63240029d0448638900e019672de6e5959903961-1878x1009.png" alt="New Email Document Details" className="w-full my-8" />
                </li>
              </ul>
            </div>
          </div>
          </section>

        <hr className="my-12 border-slate-200 dark:border-slate-400" />

             {/* Duplicating an Existing Email Document */}
        <section id="duplicating">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Duplicating an Existing Email Document
          </h2>

          {/* Selecting Content Type and Duplicating or Creating a New Email Document */}
          <div className="mb-10 p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
             Duplicate from an existing TEMPLATE or email document
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>What it is:</strong> Creates a new email document by duplicating an existing template or email document.
              <br />
              <strong>Why use it:</strong> A user might want to create a new email document with similar or the same content as an existing template or email document.
            </p>
            <div className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>How to use it:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li>Select the template or email document to duplicate from the list of available templates or email documents.</li>
                <li>Click the Document Actions (three dots) menu item in the lower right hand corner of the Studio, then click <strong>Duplicate</strong> to create a new email document with the same content as the template or email document selected.</li>
                <img src="https://cdn.sanity.io/images/qzfk7kdf/production/b9df5afae91f9f8b5f935ba9501beec9e80595d2-1184x961.png" alt="Content Type Selection" className="w-full my-8" />
                <li>Now, edit the new email document, replacinng content as needed.</li>
                <li>Click <strong>Publish</strong> to save the new email document and make it available to export as HTML.</li>
              </ul>
            </div>
          </div>
          </section>

        <hr className="my-12 border-slate-200 dark:border-slate-400" />

          <section id="internal-fields">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Internal Email Fields Explained</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-8">
                The following three fields (title, publish date, and workflow status) are used for internal organizational purposes. They have no bearing on exporting HTML content when ready to send.
              </p>
            {/* Title */}
            <div className="mb-10 p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Title
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>What it is:</strong> An internal name for your newsletter.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>How to use it:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li>This title is only used inside Sanity Studio.</li>
                <li>Choose something that clearly identifies the issue (for example: <em>Training Newsletter | January 2026</em>).</li>
              </ul>
            </div>

            {/* Publish Date */}
            <div className="mb-10 p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Publish Date
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>What it is:</strong> The planned send date for the newsletter.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>How to use it:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li>Select the date the newsletter is intended to go out.</li>
                <li>This is mainly used internally for labeling and organization.</li>
              </ul>
            </div>

            {/* Workflow Status */}
            <div className="mb-10 p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Workflow Status
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>What it is:</strong> The current stage of the newsletter.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>Options:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
                <li><strong>Draft</strong> – Still being edited</li>
                <li><strong>Scheduled</strong> – Approved and ready to send</li>
                <li><strong>Sent</strong> – Already sent</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 mb-2">
                <strong>Best practice:</strong> Keep newsletters in Draft until content is final.
              </p>
             
            </div>
        </section>

        <hr className="my-12 border-slate-200 dark:border-slate-400" />

        {/* Adding Sections */}
        <section id="adding-sections">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Adding Sections
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The <strong>Sections</strong> area is where users build the newsletter content. Each section represents a different type of content layout. Users may add as many sections as needed and reorder them freely.
          </p>
          <p className="text-slate-600 dark:text-slate-400 italic">
            Unless noted, all fields within each section are optional. If users don&apos;t fill in content, nothing will appear on the front end of the HTML email.
          </p>
          <div className="my-10 p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Selecting a Section Type
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>What it is:</strong> A section type is a pre-defined layout for a section of the email.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>How to use it:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Select the "Add Item" button to see a list of available section types.

                <img src="https://cdn.sanity.io/images/qzfk7kdf/production/81eb5469c5252c6a1c24416cb88927e3eb67ccc9-1176x1216.png" alt="New Document Button" className="w-3/4 my-8" />
              </li>

              <li>Select the section type you want to add to the email.</li>
              <li>The section type will be added to the email in the order you selected.</li>
            </ul>
            </div>
            <div className="mb-10 p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 ">
              Arranging Sections
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>What it is:</strong> A drag and drop interface for rearranging sections in the email.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>How to use it:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Click and hold the four dots on the left hand side of the section you want to move and drag it to the new position.

                <img src="https://cdn.sanity.io/images/qzfk7kdf/production/8231cf5885800b982879de0fa09d66a342612c24-652x620.png" alt="New Document Button" className="w-3/4 my-8" />
              </li>

              <li>The section will be moved to the new position.</li>
            </ul>
          </div>
        </section>
        
        <hr className="my-12 border-slate-200 dark:border-slate-400" />

        {/* Section Types */}
        <section id="section-types">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Section Types
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-8">
            Below is a guide to each available section (including screenshots), listed by name as it appears in Sanity Studio.
          </p>

          {/* Article with Image */}
          <div id="article-with-image" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Article with Image
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Feature a main article with an accompanying image and link.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Image:</strong> Main image for the article</li>
              <li><strong>Alt text:</strong> A short description of the image (important for accessibility)</li>
              <li><strong>Image Link:</strong> Optional link if the image should be clickable</li>
              <li><strong>Eyebrow:</strong> Short label above the title (example: Research, News)</li>
              <li><strong>Title:</strong> Headline of the article</li>
              <li><strong>Make Title H1?:</strong> Toggle only if this is the primary headline of the email</li>
              <li><strong>Summary:</strong> Short description or teaser text</li>
              <li><strong>Link:</strong> Button Destination URL</li>
              <li><strong>Link Text:</strong> Text for the call-to-action Button (example: Read More)</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/c174e5744e023381037162041df5903b3fd10cf5-610x544.png" alt="Article with Image" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Keep summaries short (2–3 sentences)</li>
              <li>Use the H1 option only once per email</li>
            </ul>
          </div>

          {/* List with Image on Left */}
          <div id="list-with-image-left" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              List with Image on Left
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Display a list of related items, each with its own image.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Title:</strong> Section heading</li>
              <li><strong>Summary:</strong> Intro text for the section</li>
              <li><strong>List Items:</strong> Add one or more items
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Each item includes an image, title, summary, and optional link</li>
                </ul>
              </li>
              <li><strong>Show Divider after item?:</strong> Adds a visual divider below the item</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/f8274502e98f430f8e070a2fc8255a01836de441-595x613.png" alt="List with Image on Left" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Best for highlighting multiple articles or resources</li>
              <li>Keep item summaries brief</li>
            </ul>
          </div>

          {/* Divider */}
          <div id="divider" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Divider
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Visually separate major sections of the email.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Divider Toggle:</strong> Turn the divider on or off (default is On)</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/c0cca87b2274a1137fc778f1607009815e644ae7-602x41.png" alt="Divider" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Notes:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>This uses a predefined checkerboard divider</li>
              <li>No content entry is required</li>
            </ul>
          </div>

          {/* Header and Four Paragraphs */}
          <div id="header-four-paragraphs" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Header and Four Paragraphs
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Introduce a topic followed by up to four supporting content blocks in a two-column grid layout.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Header:</strong> Main heading</li>
              <li><strong>Header Summary:</strong> Short introduction text</li>
              <li><strong>Paragraph Items:</strong> 1–4 items
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Each item may include an image, title, and summary</li>
                  <li>Images are constrained to 48px × 48px. Intended use is for square icons</li>
                </ul>
              </li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/87361f66fa48cd8b652a6710e2d78d66972e0ecd-571x733.png" alt="Header and Four Paragraphs" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Works well for structured updates or grouped information</li>
              <li>Only use image icons that are 1:1 aspect ratio</li>
            </ul>
          </div>

          {/* Header and Three Centered Paragraphs */}
          <div id="header-three-paragraphs" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Header and Three Centered Paragraphs
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Similar to the section above, but with centered layout and fewer items.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Header Title</strong></li>
              <li><strong>Header Summary</strong></li>
              <li><strong>Paragraph Items:</strong> 1–3 items, centered visually
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Images are scoped to 50px × 50px and meant for icons with a 1:1 aspect ratio</li>
                </ul>
              </li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/4c30399ebe53b820837b6e8b29060e6725093b4f-599x329.png" alt="Header and Three Centered Paragraphs" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Use for high-level messaging or announcements</li>
              <li>Only use 1:1 aspect ratio icons as images</li>
            </ul>
          </div>

          {/* Summary with Image */}
          <div id="summary-with-image" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Summary with Image
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Present a short message paired with a single image.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Eyebrow:</strong> Optional label</li>
              <li><strong>Title:</strong> Headline</li>
              <li><strong>Summary:</strong> Descriptive text</li>
              <li><strong>Image:</strong> Supporting image with optional link</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/bd23c9149e5ffb8e5e5fd0c1567a659194237308-602x565.png" alt="Summary with Image" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              Note: This is a single image, not three. However, we can pre-design images in a grid style where needed.
            </p>
          </div>

          {/* Simple List */}
          <div id="simple-list" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Simple List
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Display a straightforward list without images.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>List Items:</strong> Each item includes a title and summary</li>
              <li><strong>Show Divider after item?:</strong> Optional visual separator</li>
              <li><strong>Link href (URL):</strong> Single link applied to the section</li>
              <li><strong>Link Text:</strong> Button or link label</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/6e70ec03f260f1fd63a26a41a58d143a4813b943-601x565.png" alt="Simple List" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Ideal for short updates or list-style information with title and short summary</li>
            </ul>
          </div>

          {/* Images on Vertical Grid */}
          <div id="images-vertical-grid" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Images on Vertical Grid
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Showcase 1–3 images in a vertical grid layout.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Eyebrow</strong></li>
              <li><strong>Title</strong></li>
              <li><strong>Summary</strong></li>
              <li><strong>Image Items:</strong> Each image can include a caption and attribution</li>
              <li><strong>Post Summary:</strong> Text shown after the image grid</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/23cf30a3c0d428251e98ffda8d71096de7eddef2-598x416.png" alt="Images on Vertical Grid" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Use high-quality images with consistent dimensions</li>
            </ul>
          </div>

          {/* Simple Image */}
          <div id="simple-image" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Simple Image
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Display a standalone image.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Image:</strong> Includes alt text and optional link</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/612a2480d3de383bf743288cc99a6f5d522064a1-631x497.png" alt="Simple Image" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              Images will span full width of the email. We can add whitespace around the image during design to achieve a smaller image appearance.
            </p>
          </div>

          {/* Image with Summary plus Two Images */}
          <div id="image-summary-two-images" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Image with Summary plus Two Images
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Feature one main image and text, followed by up to two supporting images.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Main Image</strong></li>
              <li><strong>Title</strong></li>
              <li><strong>Summary</strong></li>
              <li><strong>Two Image Items:</strong> Optional secondary images</li>
              <li><strong>Post Summary:</strong> Additional text below</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/463fe6b22c1195d1920ec744c4e9095a121bffbf-598x344.png" alt="Image with Summary plus Two Images" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              Images will span full width of the email (best practice for mobile responsiveness). One or two images can be added below the summary. One will fill 100% width. Two will split 50/50.
            </p>
          </div>

          {/* Image with Summary plus 50/50 Image/Text Blocks */}
          <div id="image-summary-50-50" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Image with Summary plus 50/50 Image/Text Blocks
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Alternate between text and image blocks in a two-column layout.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Main Image</strong></li>
              <li><strong>Title</strong></li>
              <li><strong>Summary</strong></li>
              <li><strong>Alternating Text/Image Items:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li><strong>Image on Right?:</strong> Controls image placement left/right</li>
                  <li><strong>Text Item:</strong> Rich text content</li>
                </ul>
              </li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mb-2"><em>Example Block:</em></p>
            <img src="https://cdn.sanity.io/images/qzfk7kdf/production/1cf76dabd2e2ca50523e82e7ff32dc3a13178cbb-598x365.png" alt="Image with Summary plus 50/50 Image/Text Blocks" className="w-3/4 mb-8 mr-auto" />
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Alternate image position for visual variety</li>
            </ul>
            <p className="text-slate-600 dark:text-slate-400 text-sm italic mt-4">
              Images will span full width of the email (best practice for mobile responsiveness).
            </p>
          </div>
        </section>

        {/* Rich Text */}
        <div id="rich-text" className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Rich Text
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              <strong>Purpose:</strong> Add freeform formatted text.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Fields explained:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 mb-4">
              <li><strong>Rich Text Content:</strong> Paragraphs, links, and formatting as needed</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Use sparingly to maintain readability</li>
              <li>Use bold and italic sparingly to emphasize text.</li>
              <li>Avoid using Headings (H1, H2, H3, etc.) and lists (ul, ol, li) as they are not supported in HTML emails.</li>
              
            </ul>
          </div>

        <hr className="my-12 border-slate-200 dark:border-slate-400" />

        {/* General Best Practices */}
        <section id="general-best-practices">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            General Best Practices
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            OCM Brand guidelines should be followed when building emails.<br/><br />
            <a href="https://brand.utk.edu/standards/email/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 underline">View the brand guidelines&nbsp;&rarr;</a>
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Write for scanning: short paragraphs and clear headings</li>
            <li>Link to Training Hub or other web documents/pages for additional information</li>
            <li>Always include alt text for images</li>
            <li>If images are stretched to full width, add whitespace around the image during design to achieve a smaller image appearance. Aws and Dave can help with this if needed.</li>
            <li>Avoid repeating the same section style too many times in one email</li>
            <li>Avoid using Headings (H1, H2, H3, etc.) and lists (ul, ol, li) as they are not supported in HTML emails.</li>

            <li>Use the QA Checklist for Email Creation and Sends to catch common issues</li>
          </ul>
        </section>

        <hr className="my-12 border-slate-200 dark:border-slate-400" />

        {/* QA Checklist for Email Creation and Sends */}
        <section id="qa-checklist">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            QA Checklist for Email Creation and Sends
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            Use this checklist before building and before sending to catch common issues.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Before building
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Confirm subject line is clear and on-brand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Gather all links, images, and copy (including alt text) in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Verify links point to correct URLs (Training Hub, docs, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Review OCM brand guidelines for tone and formatting</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Content and layout
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Short paragraphs and scannable structure; no unsupported HTML (e.g. H1–H3, ul/ol)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Every image has descriptive alt text</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Section styles are not overused; variety in layout where appropriate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Spelling and grammar checked; names and dates correct</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Before sending
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Preview in the Generate tab — layout and links look correct</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Preview in Outlook (new or Classic) — nothing broken or misaligned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Test all links (buttons and inline links) — they open the right pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>Recipient list and send time/schedule confirmed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 dark:text-slate-500 mt-0.5">☐</span>
                  <span>HTML inserted via add-in (Outlook new) or Insert as Text (Outlook Classic) before send</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-12 border-slate-200 dark:border-slate-400" />

        {/* Outlook Setup */}
        <section id="outlook-setup">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            How to send HTML emails from Outlook (new version)
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            To send HTML emails from Microsoft Outlook, you need to install an add-on that allows you to &quot;Insert as HTML&quot;. This will allow you to copy and paste the HTML email directly into the email body via the add-on.
          </p>
          <div className="p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg mb-6">
            <p className="text-amber-800 dark:text-amber-200 font-medium mb-2">
              Important: Make sure you are using Outlook (new version)
            </p>
            <p className="text-amber-700 dark:text-amber-300 text-sm">
              This should be default unless you have opted into &quot;Classic Outlook&quot;. If not, there is a toggle in the upper right-hand corner of Outlook to switch to the new version, or see the next section for how to set up HTML email sending in Outlook Classic.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Setup Steps (Windows):
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300">
              <li>In Outlook 365, click the <strong>More Apps</strong> button in the left side navigation bar, then click the <strong>Add apps</strong> button in the pop out window.</li>
              <li>Search for <strong>Insert HTML by Designmodo</strong>. Click the add-on and install it.</li>
              <li> Once installed, users can now copy and paste the HTML email directly into the email body via the add-on.</li>
              <li>Click new email.</li>
              <li>In the top ribbon, find the <strong>Enhance Outloock with apps</strong> button, click it, then select <strong>Insert HTML by Designmodo</strong></li>
              <li>This will open a right sidebar with the HTML text area. Now, copy and paste your html email into the text area.</li>
              <li>Click the <strong>Insert HTML</strong> button to view the HTML email in the email body.</li>
          </ol>

          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-8">
            <p className="text-green-800 dark:text-green-200">
              <strong>Done!</strong> You should now be able to copy and paste the HTML email directly into the email body via the add-in, and send it as a HTML email.
            </p>
          </div>
        </section>
        <hr className="my-12 border-slate-200 dark:border-slate-400" />

        {/* Outlook Setup */}
        <section id="outlook-setup">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            How to send HTML emails from Outlook Classic
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The easiest way to send HTML emails from Microsoft Outlook (Classic) is to install a Ribbon that allows you to &quot;Insert as Text&quot;. This will allow you to select an HTML file, insert as text, which will format the HTML email properly.
          </p>

          <div className="p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg mb-6">
            <p className="text-amber-800 dark:text-amber-200 font-medium mb-2">
              Important: Make sure you are using Outlook Classic
            </p>
            <p className="text-amber-700 dark:text-amber-300 text-sm">
              If using the new version, there is a toggle in the upper right-hand corner of Outlook to switch back to the Classic experience, or see the previous section for how to set up HTML email sending in Outlook.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Setup Steps (Windows):
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300">
            <li>Navigate to <strong>File → Options → Customize Ribbon</strong></li>
            <li>From the Main Tabs dropdown, select <strong>Developer</strong> and add a new group titled <strong>html</strong></li>
            <li>Select your newly added <strong>html</strong> group</li>
            <li>Choose Commands From: Select <strong>All Commands</strong></li>
            <li>Find the <strong>Attach File</strong> command</li>
            <li>Now <strong>Add</strong> the Attach File command to the html group</li>
            <li>Click <strong>OK</strong></li>
          </ol>

          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg mb-64">
            <p className="text-green-800 dark:text-green-200">
              <strong>Done!</strong> You should now be able to use the <strong>Attach File (Insert as text)</strong> option when creating an email, by navigating to <strong>Developer → Attach File</strong> in a New Email creation.
            </p>
          </div>
        </section>
        </div>
        </div>
    </main>
  );
}
