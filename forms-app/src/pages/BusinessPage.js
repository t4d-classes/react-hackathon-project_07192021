import { BusinessOperationForm } from "../components/BusinessOperationForm";

import { useBusiness } from "../hooks/useBusiness";

export const BusinessPage = () => {

  const { businesses, appendBusinesses } = useBusiness();

  return (
    <div>
      <header>
        <h1>Businesses</h1>
      </header>
      <p>Manage coverages...</p>
      <BusinessOperationForm onSubmitForm={appendBusinesses} />
    </div>
  );

};