---
layout: default
title: VICS Web1 Demo
---

# _Build Web 1_ Demo (February 15th, 2018)

The following demonstrates [1] the basic functionality and layout of the _VICS Client_ and [2] shows basic CPRS interaction with the Web Client. 

It employs [a] a _"nodeVISTA"_ which supports a REST interface for Patient data access and entry, [b] a Web Service which implements basic meta-data services and proxies to _nodeVISTA_ for Patient Data, [c] the VICS Web Client and [d] CPRS. This collection of components are housed on a cloud-based VM. 

__INSERT DIAGRAM__

Specifically it shows how the client allows a Physician to:
  1. Log in
  2. Choose a Patient and seeing basic demographics
  3. Add an additional widget (Vitals) to the coversheet
  4. View summaries of a Patient's Vitals, Allergies and Problems
  5. Enter a new Allergy
     * Search Allergins
     * Enter specific allergy information
  6. Review details of the entered Allergy
  7. Login to CPRS and view this newly entered Allergy
  8. Return to the Web Client and remove the Allergy by marking it as _entered in error_ 

Image ClientLogin ...

![ClientLogin -width70](images/webclient/ClientLogin.png)

Image PatientSelectionPlain ...

![PatientSelectionPlain -width70](images/webclient/PatientSelectionPlain.png)

Image PatientSelectionSearchCSelectDCSeeDemo ...

![PatientSelectionSearchCSelectDCSeeDemo -width70](images/webclient/PatientSelectionSearchCSelectDCSeeDemo.png)

Image PatientMainSummaryTitleTwoWidgets ...

![PatientMainSummaryTitleTwoWidgets -width70](images/webclient/PatientMainSummaryTitleTwoWidgets.png)

Image ActionsAddThreeWidgets ...

![ActionsAddThreeWidgets -width70](images/webclient/ActionsAddThreeWidgets.png)

Image PatientMainSummaryThreeWidgets ...

![PatientMainSummaryThreeWidgets -width70](images/webclient/PatientMainSummaryThreeWidgets.png)

Image AllergiesWidgetEmpty ...

![AllergiesWidgetEmpty -width70](images/webclient/AllergiesWidgetEmpty.png)

Image AllergyEnterSearchEmpty ...

![AllergyEnterSearchEmpty -width70](images/webclient/AllergyEnterSearchEmpty.png)

Image AllergyEnterSearchChoc ...

![AllergyEnterSearchChoc -width70](images/webclient/AllergyEnterSearchChoc.png)

Image AllergyEnterChocolateFilled ...

![AllergyEnterChocolateFilled -width70](images/webclient/AllergyEnterChocolateFilled.png)

Image AllergiesWidgetChocolateEntry ...

![AllergiesWidgetChocolateEntry -width70](images/webclient/AllergiesWidgetChocolateEntry.png)

Image AllergyDetailChocolate ...

![AllergyDetailChocolate -width70](images/webclient/AllergyDetailChocolate.png)

Image AllergyDetailPintButton ...

![AllergyDetailPintButton](images/webclient/AllergyDetailPintButton.png)

Image AllergyDetailsEnterInErrorButton ...

![AllergyDetailsEnterInErrorButton](images/webclient/AllergyDetailsEnterInErrorButton.png)

Image AllergyEnterInErrorReason ...

![AllergyEnterInErrorReason -width70](images/webclient/AllergyEnterInErrorReason.png)

Image AllergiesWidgetEmpty ...

![AllergiesWidgetEmpty -width70](images/webclient/AllergiesWidgetEmpty.png)


## CPRS Part (Backup)


AllergyEnterDetails ...

![AllergyEnterDetails -width70](images/cprs/AllergyEnterDetails.png)

AllergyEnterSearch ...

![AllergyEnterSearch -width70](images/cprs/AllergyEnterSearch.png)

AllergyEnterSearchCho ...

![AllergyEnterSearchCho -width70](images/cprs/AllergyEnterSearchCho.png)

AllergyEnterSearchChoEnter ...

![AllergyEnterSearchChoEnter -width70](images/cprs/AllergyEnterSearchChoEnter.png)

Coversheet ...

![Coversheet -width70](images/cprs/Coversheet.png)

CoversheetProblemWidgetThree ...

![CoversheetProblemWidgetThree -width70](images/cprs/CoversheetProblemWidgetThree.png)

CoversheetVitalsWidgetMany ...

![CoversheetVitalsWidgetMany -width70](images/cprs/CoversheetVitalsWidgetMany.png)

MainThree ...

![MainThree -width70](images/cprs/MainThree.png)

MainTwoColumns ...

![MainTwoColumns -width70](images/cprs/MainTwoColumns.png)

PatientCoversheetAllergyOptions ...

![PatientCoversheetAllergyOptions -width70](images/cprs/PatientCoversheetAllergyOptions.png)

PatientSelectionChoice ...

![PatientSelectionChoice -width70](images/cprs/PatientSelectionChoice.png)

PatientSelectionNoChoice ...

![PatientSelectionNoChoice -width70](images/cprs/PatientSelectionNoChoice.png)

ProblemDetailPopup ...

![ProblemDetailPopup -width70](images/cprs/ProblemDetailPopup.png)

VitalsAndProblemsWidgets ...

![VitalsAndProblemsWidgets -width70](images/cprs/VitalsAndProblemsWidgets.png)






