const submitQuotation = async (formData) => {
  "use server";
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    from: formData.get("address-from"),
    to: formData.get("address-to"),
    weight: formData.get("weight"),
  };
  console.log(data);
};

export default submitQuotation;
