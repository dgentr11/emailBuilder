export default function GuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 mt-24">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          FS Email Builder Documentation
        </h1>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-12">
        {/* Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            This guide explains how to create a Newsletter using an Email Builder in Sanity Studio content management system (CMS).
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            It is written for nontechnical users and focuses on what each section is for and how to fill out the form fields, not how the code works.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            In the Sanity CMS, a Newsletter document is made up of <strong>Sections</strong> that you can add, remove, and reorder. Each section has a specific layout and purpose, and together they form the final email that can be exported as HTML and sent via Outlook or any email tool that supports HTML email sends.
          </p>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            You can rearrange sections at any time by dragging them up or down.
          </p>
          <p className="text-slate-700 dark:text-slate-300">
            The final section walks users through setting up Outlook for attaching files as HTML (text) documents, which is vital for sending the HTML email.
          </p>
        </section>

        {/* Creating a Newsletter */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Creating a Newsletter
          </h2>

          {/* Selecting Content Type and Duplicating or Creating a New Email Document */}
          <div className="mb-10 p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
             Creating a New Email Document by Content Type
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>What it is:</strong> Creates a new email document by selecting a content type.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>How to use it:</strong>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li>Click the <strong>New Document (+)</strong> button in the top left corner of the screen.
                  <img src="https://cdn.sanity.io/images/qzfk7kdf/production/1e56e5b856b81d6f4f776c8e06ce12fcf7fc7043-370x334.png" alt="New Document Button" className="w-1/2 mb-8" />
                </li>
          
                <li>Select the content type you want to create (e.g. <strong>Training Newsletter</strong>, <strong>Newsletter</strong> or <strong>Press Release</strong>).
                  <img src="https://cdn.sanity.io/images/qzfk7kdf/production/2163b806c5ed7caeef66f13187c4c29793755205-370x334.png" alt="Content Type Selection" className="w-1/2 mb-8" />
                </li>
                <li>A new email document will be created with the content type selected.</li>
                <li>You can now add details to the new email document (right hand side) such as the title, publish date, and sections.
                  <img src="https://cdn.sanity.io/images/qzfk7kdf/production/63240029d0448638900e019672de6e5959903961-1878x1009.png" alt="New Email Document Details" className="w-3/4 my-8" />
                </li>
              </ul>
            </p>
          </div>
          </section>
          <section>

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

        {/* Adding Sections */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            Adding Sections
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The <strong>Sections</strong> area is where you build the newsletter content. Each section represents a different type of content layout. You may add as many sections as needed and reorder them freely.
          </p>
          <p className="text-slate-600 dark:text-slate-400 italic">
            Unless noted, all fields within each section are optional. If you don&apos;t fill in content, nothing will appear on the front end of the HTML email.
          </p>
        </section>

        {/* Section Types */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
            Section Types
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-8">
            Below is a guide to each available section (including screenshots), listed by name as it appears in Sanity Studio.
          </p>

          {/* Article with Image */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Keep summaries short (2–3 sentences)</li>
              <li>Use the H1 option only once per email</li>
            </ul>
          </div>

          {/* List with Image on Left */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Best for highlighting multiple articles or resources</li>
              <li>Keep item summaries brief</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Notes:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>This uses a predefined checkerboard divider</li>
              <li>No content entry is required</li>
            </ul>
          </div>

          {/* Header and Four Paragraphs */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Works well for structured updates or grouped information</li>
              <li>Only use image icons that are 1:1 aspect ratio</li>
            </ul>
          </div>

          {/* Header and Three Centered Paragraphs */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Use for high-level messaging or announcements</li>
              <li>Only use 1:1 aspect ratio icons as images</li>
            </ul>
          </div>

          {/* Summary with Image */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              Note: This is a single image, not three. However, we can pre-design images in a grid style where needed.
            </p>
          </div>

          {/* Simple List */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Ideal for short updates or list-style information with title and short summary</li>
            </ul>
          </div>

          {/* Images on Vertical Grid */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-700 dark:text-slate-300 mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
              <li>Use high-quality images with consistent dimensions</li>
            </ul>
          </div>

          {/* Rich Text */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            </ul>
          </div>

          {/* Simple Image */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              Images will span full width of the email. We can add whitespace around the image during design to achieve a smaller image appearance.
            </p>
          </div>

          {/* Image with Summary plus Two Images */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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
            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
              Images will span full width of the email (best practice for mobile responsiveness). One or two images can be added below the summary. One will fill 100% width. Two will split 50/50.
            </p>
          </div>

          {/* Image with Summary plus 50/50 Image/Text Blocks */}
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg">
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

        {/* General Best Practices */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            General Best Practices
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>Write for scanning: short paragraphs and clear headings</li>
            <li>Link to Training Hub or other web documents/pages for additional information</li>
            <li>Always include alt text for images</li>
            <li>Avoid repeating the same section style too many times in one email</li>
            <li>Preview the email layout before scheduling in the Generate tab, and in Outlook to make sure nothing appears broken</li>
          </ul>
        </section>

        {/* Outlook Setup */}
        <section>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
            How to Set Up Developer Tab in Outlook Classic
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The easiest way to send HTML emails from Microsoft Outlook is to enable the Classic version of the app and install a Ribbon that allows you to &quot;Insert as Text&quot;. This will allow you to select an HTML file, insert as text, which will format the HTML email properly.
          </p>

          <div className="p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg mb-6">
            <p className="text-amber-800 dark:text-amber-200 font-medium mb-2">
              Important: Make sure you are using Outlook Classic
            </p>
            <p className="text-amber-700 dark:text-amber-300 text-sm">
              This should be default unless you have opted into &quot;new Outlook&quot;. If not, there is a toggle in the upper right-hand corner of Outlook to switch back to the Classic experience.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
            Setup Steps:
          </h3>
          <ol className="list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300">
            <li>Navigate to <strong>File → Options → Customize Ribbon</strong></li>
            <li>From the Main Tabs dropdown, select <strong>&quot;Developer&quot;</strong> and add a new group titled <strong>&quot;html&quot;</strong></li>
            <li>Select your newly added <strong>&quot;html&quot;</strong> group</li>
            <li>Choose Commands From: Select <strong>All Commands</strong></li>
            <li>Find the <strong>&quot;Attach File&quot;</strong> command</li>
            <li>Now <strong>&quot;Add&quot;</strong> the Attach File command to the &quot;html&quot; group</li>
            <li>Click <strong>OK</strong></li>
          </ol>

          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-800 dark:text-green-200">
              <strong>Done!</strong> You should now be able to use the <strong>Attach File (Insert as text)</strong> option when creating an email, by navigating to <strong>Developer → Attach File</strong> in a New Email creation.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
