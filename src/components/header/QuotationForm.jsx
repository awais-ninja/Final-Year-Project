import submitQuotation from "./actions/submitQuotation";

const QuotationForm = () => {
  return (
    <form className="" action={submitQuotation}>
      <h2 className="text-4xl text-center font-bold mb-12">
        Ask for Quotation
      </h2>
      <div className="mb-3">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="John Doe"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm border-b-4 focus:border-cyan-600"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="someone@example.com"
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm border-b-4 focus:border-cyan-600"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="address-from"
          className="block text-sm font-medium text-gray-700"
        >
          Address From:
        </label>
        <input
          id="address-from"
          type="text"
          name="address-from"
          placeholder=""
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm border-b-4 focus:border-cyan-600"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="address-to"
          className="block text-sm font-medium text-gray-700"
        >
          Address To:
        </label>
        <input
          id="address-to"
          type="text"
          name="address-to"
          placeholder=""
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm border-b-4 focus:border-cyan-600"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="weight"
          className="block text-sm font-medium text-gray-700"
        >
          Estimated Weight {`(+/- 10% allowed)`}:
        </label>
        <input
          id="weight"
          type="number"
          name="weight"
          placeholder=""
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm border-b-4 focus:border-cyan-600"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Your Message:
        </label>
        <textarea
          id="message"
          rows="5"
          name="message"
          placeholder="Hi There I want to transfer my ..."
          className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-slate-900 shadow-sm border-b-4 focus:border-cyan-600"
        />
      </div>
      <button
        type="submit"
        className="inline-block shrink-0 w-full rounded-md border border-cyan-600 bg-cyan-600 px-12 py-2 text-sm font-medium text-white transition hover:bg-transparent hover:text-cyan-600 focus:outline-none focus:ring active:text-cyan-500"
      >
        Get Quotation
      </button>
    </form>
  );
};

export default QuotationForm;
