export function renderPreview(requirements) {
  if (!requirements) return <div>No preview available.</div>;
  const { appName, entities = [], roles = [], features = [] } = requirements;

  return (
    <div>
      <h1>{appName || "App Preview"}</h1>
      {roles.length > 0 && (
        <nav>
          <h2>Roles</h2>
          <ul>
            {roles.map((role, idx) => (
              <li key={idx}>{role}</li>
            ))}
          </ul>
        </nav>
      )}
      {entities.length > 0 && (
        <section>
          <h2>Entities</h2>
          {entities.map((entity, idx) => (
            <form key={idx} style={{ marginBottom: "1em" }}>
              <h3>{entity.name}</h3>
              {entity.fields && entity.fields.map((field, i) => (
                <div key={i}>
                  <label>
                    {field.name}: <input type="text" name={field.name} />
                  </label>
                </div>
              ))}
            </form>
          ))}
        </section>
      )}
      {features.length > 0 && (
        <section>
          <h2>Features</h2>
          <ul>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}