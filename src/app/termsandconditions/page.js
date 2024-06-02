const page = () => {
  const terms = [
    "Unless otherwise provided, when provisions of this tariff are in conflict with those published in individual contracts and/or tariffs such contracts and/or tariffs, to the extent of their application, will apply.",
    "Reissued tariffs, items or parts of items will cancel previously issued tariffs, items or parts of items or publications referenced thereto.",
    "Unless otherwise provided, when provisions of this tariff are in conflict with those published in the governing publications this tariff will apply.",
    "When this tariff provides for the application of charges, Swift Link will maintain records to verify the charges and so document on any billing or invoicing to the payer.",
    "Unless otherwise provided, charges for services shown herein will be borne by the party requesting the service or guaranteed to the satisfaction of Swift Link before services will be provided.",
    "Unless otherwise provided, charges for services shown herein will apply in addition to all other applicable charges.",
    "Unless otherwise provided, the use of decking equipment is for Swift Link’s convenience and has no application to any rules contained herein.",
    "Unless otherwise provided, requests for changes to a Bill of Lading must be in writing from the responsible party(s).",
    "Driver’s signature on the Bill of Lading only acknowledges receipt of the freight, any special requests or valuation in excess of those found within this tariff must be agreed to by Swift Link management in advance of the shipment being picked up.",
    "Swift Link reserves the right to reject a shipment when such shipment in their opinion would likely cause damage or delay to personnel, other goods being carried, or equipment.",
    "Special attention should be given to Swift Link’s rights to collect monies owed to them for overdue undisputed freight invoices.",
  ];

  return (
    <div className="flex justify-center py-8">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-teal-800">
          Terms and Conditions
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          {terms.map((term, index) => (
            <li key={index} className="flex">
              <span className="text-teal-900">{index + 1}.&nbsp;</span>
              {term}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default page;
