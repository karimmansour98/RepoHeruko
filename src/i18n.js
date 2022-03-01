import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Enter your email": "Enter your email",
      "Enter your password": "Enter your password",
      "Enter your fullname": "Enter your fullname",
      "Forgot Password?": "Forgot Password?",
      "email field is required": "email field is required",
      "email must be email": "email must be email",
      "password field is required": "password field is required",
      "Language": "Language",
      "English": "English",
      "password": "password",
      "Arabic": "Arabic",
      "Are you sure": "Are you sure",
      "Login": "Login",
      "Fullname": "Fullname",
      "fullname field is required": "fullname field is required",
      "year of birth": "year of birth",
      "Phone Number": "Phone Number",
      "Enter your year of birth": "Enter your year of birth",
      "Enter your postcode or home address": "Enter your postcode or home address",
      "Enter your phone number": "Enter your phone number",
      "phone field is required": "phone field is required",
      "postcode or home address": "postcode or home address",
      "year of birth field is required": "year of birth field is required",
      "postcode or home address field is required": "postcode or home address field is required",
      "franchise": "franchise",
      "phone number must start with +41": "phone number must start with +41",
      "phone number must be 9 digits": "phone number must be 9 digits",
      "CONGRATULATIONS": "CONGRATULATIONS",
      "CHF / month": "CHF / month",
      "CHF / Year": "CHF / Year",
      "COMPARE HEALTH INSURANCE": "COMPARE HEALTH INSURANCE",
      "With the comparison of health insurance premiums 2022, find the ideal health insurance.": "With the comparison of health insurance premiums 2022, find the ideal health insurance.",
      "services title": "INTERESTED?",
      "services name one": "coverage provided by compulsory basic insurance",
      "services desk one": "All health insurance companies provide the same coverage because they are required to do so by law. Find out if this is sufficient for your needs or if you also need additional insurance.",
      "services name two": "How do I change my basic insurance?",
      "services desk two": "In Switzerland, you can switch to another health insurance contract once you have terminated your current contract. You can cancel basic insurance every year by the end of November.",
      "services name three": "What is a franchise (\"franchise\")?",
      "services desk three": "Many healthy insured persons are not brave enough to choose the highest deductible, i.e. 2,500 francs. But even if you need to see a doctor once in a while, that high deductible is still a financially viable liability.",
      "works title": "HOW IT WORKS ?",
      "works name one": "health insurance for newcomers",
      "works desk one": "Basic health insurance is compulsory for anyone residing in Switzerland. After moving here, you have three months to take out compulsory health insurance. Learn more about the process here and find the right health insurance company for you.",
      "works name two": "Basic health insurance",
      "works desk two": "Basic health insurance is compulsory for anyone residing in Switzerland. The basic insurance cover is precisely defined in the Health Insurance Act (KVG) and is the same regardless of the health insurer. Health insurance providers are obliged to accept all applicants for basic insurance.",
      "works name three": "Insurance for families",
      "works desk three": "It's worth buying insurance before your baby is born, as most supplemental insurance policies can be purchased for babies without a health check. After the baby is born, you have three months to find a health insurer. By organizing these administrative tasks in advance, you will have more time to enjoy your baby after birth. You can also rest assured that coverage is in place if your child is born with an illness.",
      "works name four": "Complementary health insurance",
      "works desk four": "Unlike basic insurance, supplementary insurance coverage varies from insurer to insurer. So it is worth comparing. With supplementary insurance, insurers are free to set premiums according to risk, i.e. according to their age and gender. They can also impose reservations or refuse applicants without giving a reason.",
      "calculate": "calculate",

    }
  },

  fr: {
    translation: {
      "Enter your email": "Entrer votre Email",
      "Enter your password": "Tapez votre mot de passe",
      "Enter your fullname": "Entrez votre nom complet",
      "Forgot Password?": "Forgot Password?",
      "email field is required": "Mot de passe oublié?",
      "email must be email": "l'e-mail doit être un e-mail",
      "password field is required": "le champ mot de passe est obligatoire",
      "Language": "Langue",
      "English": "Anglaise",
      "password": "le mot de passe",
      "Arabic": "Arabic",
      "Are you sure": "Êtes-vous sûr",
      "Login": "Connexion",
      "Fullname": "Nom et prénom",
      "fullname field is required": "le champ nom complet est obligatoire",
      "year of birth": "année de naissance",
      "Phone Number": "Numéro de téléphone",
      "Enter your year of birth": "Entrez votre année de naissance",
      "Enter your postcode or home address": "Entrez votre code postal ou votre adresse personnelle",
      "Enter your phone number": "Entrez votre numéro de téléphone",
      "phone field is required": "le champ téléphone est obligatoire",
      "postcode or home address": "code postal ou adresse du domicile",
      "year of birth field is required": "le champ année de naissance est obligatoire",
      "postcode or home address field is required": "le champ du code postal ou de l'adresse du domicile est obligatoire",
      "franchise": "franchise",
      "phone number must start with +41": "le numéro de téléphone doit commencer par +41",
      "phone number must be 9 digits": "le numéro de téléphone doit comporter 9 chiffres",
      "CONGRATULATIONS": "FÉLICITATIONS",
      "CHF / month": "CHF / mois",
      "CHF / Year": "CHF / an",
      "COMPARE HEALTH INSURANCE": "COMPARER LES ASSURANCES MALADIE",
      "With the comparison of health insurance premiums 2022, find the ideal health insurance.": "Avec le comparatif des primes d'assurance maladie 2022, trouvez la mutuelle idéale.",
      "services title": "INERESTED ?",
      "services name one": "couverture fournie par l'assurance de base obligatoire",
      "services desk one": "Toutes les compagnies d’assurance maladie offrent la même couverture car elles sont tenues de le faire par la loi. Découvrez si cela suffit à vos besoins ou si vous avez également besoin d'une assurance complémentaire.",
      "services name two": "Comment changer mon assurance de base?",
      "services desk two": "En Suisse, vous pouvez passer à un autre contrat d’assurance maladie une fois que vous avez résilié votre contrat actuel. Vous pouvez annuler l'assurance de base chaque année d'ici la fin novembre.",
      "services name three": "Qu'est-ce qu'une franchise (\"franchise\")?",
      "services desk three": "De nombreux assurés en bonne santé ne sont pas assez courageux pour choisir la franchise la plus élevée, soit 2 500 francs. Mais même si vous avez besoin de voir un médecin de temps en temps, cette franchise élevée reste une li financièrement viable.",
      "works title": "COMMENT ÇA FONCTIONNE ?",
      "works name one": "assurance maladie pour les nouveaux arrivants",
      "works desk one": "L'assurance maladie de base est obligatoire pour toute personne résidant en Suisse. Après avoir déménagé ici, vous avez trois mois pour souscrire une assurance maladie obligatoire. En savoir plus sur le processus ici et trouver la compagnie d’assurance maladie qui vous convient.",
      "works name two": "Assurance maladie de base",
      "works desk two": "L'assurance maladie de base est obligatoire pour toute personne résidant en Suisse. La couverture d'assurance de base est définie avec précision dans la loi sur l'assurance maladie (KVG) et est la même quel que soit l'assureur maladie. Les prestataires d’assurance maladie sont obligés d’accepter tous les candidats à l’assurance de base.",
      "works name three": "Assurance pour les familles",
      "works desk three": "Cela vaut la peine de souscrire une assurance avant la naissance de votre bébé, car la plupart des polices d’assurance complémentaire peuvent être souscrites pour les bébés sans bilan de santé. Après la naissance du bébé, vous avez trois mois pour trouver un assureur maladie. En organisant ces tâches administratives à l'avance, vous aurez plus de temps pour profiter de votre bébé après la naissance. Vous pouvez également être assuré que la couverture est en place si votre enfant est né avec une maladie.",
      "works name four": "Assurance maladie complémentaire",
      "works desk four": "Contrairement à l'assurance de base, la couverture d'assurance complémentaire varie d'un assureur à l'autre. Donc, cela vaut la peine de comparer. Avec l’assurance complémentaire, les assureurs sont libres de fixer les primes en fonction du risque, c’est-à-dire en fonction de leur âge et de leur sexe. Ils peuvent également imposer des réserves ou refuser des demandeurs sans donner de raison.",
      "calculate": "calculer",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en" ,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;