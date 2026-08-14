export const metadata = {
  title: 'Contact — Tatiana Uklist',
};

const CONTACT_EMAIL = 'tati@theguys.io';

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[620px] px-5 pb-20 pt-12 sm:px-6 sm:pb-[140px] sm:pt-[90px]">
      <div className="border border-borderDashed bg-surface p-6 sm:p-11">
        <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
          <p className="callno uppercase tracking-[0.05em] text-green">Request Slip</p>
          <span className="callno text-muted">FORM 14-B</span>
        </div>
        <h1 className="mb-4 font-serif text-3xl font-medium text-ink sm:text-[34px]">Say hello.</h1>
        <p className="mb-9 text-base leading-relaxed text-bodyMuted">
          Speaking, writing collabs, or just want to talk about community — my inbox is open.
        </p>
        <form
          action={`mailto:${CONTACT_EMAIL}`}
          method="post"
          encType="text/plain"
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="callno text-bodyMuted">
              PATRON NAME
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="border-0 border-b-[1.5px] border-borderStrong bg-transparent px-0.5 py-2 text-[15px] font-sans"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="callno text-bodyMuted">
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border-0 border-b-[1.5px] border-borderStrong bg-transparent px-0.5 py-2 text-[15px] font-sans"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="callno text-bodyMuted">
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="resize-y border-[1.5px] border-borderStrong bg-transparent p-2.5 text-[15px] font-sans"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-fit rounded bg-borderStrong px-[26px] py-3.5 text-[15px] font-medium text-cream"
          >
            SUBMIT SLIP
          </button>
        </form>
      </div>
      <p className="mt-9 text-sm text-muted">
        Or reach me directly at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
    </section>
  );
}
