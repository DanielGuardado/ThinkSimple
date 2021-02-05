export function checkHighRisk(surveyData = {}) {
  if (typeof surveyData !== "object") return false;

  const {
    closeContact,
    symptoms = {},
    certifySigns,
    abideHealthMeasures,
  } = surveyData;

  if (
    closeContact ||
    // symptoms.length !== 0 ||
    !symptoms.none ||
    !certifySigns ||
    !abideHealthMeasures
  )
    return true;

  return false;
}
