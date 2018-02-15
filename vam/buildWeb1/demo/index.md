---
layout: default
title: VICS Web1 Demo
---

# _Build Web 1_ Demo (February 15th, 2018)

The following demonstrates [1] the basic functionality and layout of the _VICS Client_ and [2] shows basic CPRS interaction with the Web Client. 

It employs [a] a _"nodeVISTA"_ which supports a REST interface for Patient data access and entry, [b] a Web Service which implements basic meta-data services and proxies to _nodeVISTA_ for Patient Data, [c] the VICS Web Client and [d] CPRS. These components are housed on a cloud-based VM. 

Ultimately, the Web Client will cover all the relevant functionality of CPRS in a web-friendly form and deliver modern visual motifs and features missing from CPRS such as auto-complete in search dialogs and ease of personalization. This demonstration illustrates the functionality delivered in Build 1.

__INSERT DIAGRAM__

Specifically it shows how the client allows a Physician to:
  1. Choose a facility
  2. Choose a Patient and see basic demographics
  3. Add an additional widget (Vitals) to the coversheet
  4. View summaries of a Patient's Vitals, Allergies and Problems
  5. Enter a new Allergy
     * Search Allergins
     * Enter specific allergy information
  6. Review details of the entered Allergy
  7. Login to CPRS and view this newly entered Allergy
  8. Either:
     * Return to the Web Client and remove the Allergy by marking it as _entered in error_ OR
     * Remove the allergy in CPRS and then return to the Web Client and confirm the Allergy's removal

Start by selecting a user and facility ...

![ClientLogin -width70](images/webclient/ClientLogin.png)

__Note__: the first builds of the Web Client will not support authentication. This should be addressed in the third and final build.

You will be asked to select a Patient ...

![PatientSelectionPlain -width70](images/webclient/PatientSelectionPlain.png)

Despite the small list of patients here, enter "C" in the search box to narrow the list down to one.  Select that Patient and you will immediately see a summary of his information. This, like other behaviors in this client, mimics a similar behavior in CPRS ...

![PatientSelectionSearchCSelectDCSeeDemo -width70](images/webclient/PatientSelectionSearchCSelectDCSeeDemo.png)

You will be a taken to a _Coversheet_ with widgets displaying different classes of Patient data ...

![PatientMainSummaryTitleTwoWidgets](images/webclient/PatientMainSummaryTitleTwoWidgets.png)

Let's add one more Widget, a Vitals widget ...

![ActionsAddThreeWidgets](images/webclient/ActionsAddThreeWidgets.png)

The added widget is now in the coversheet ...

![PatientMainSummaryThreeWidgets](images/webclient/PatientMainSummaryThreeWidgets.png)

The Web Client's Coversheet is a variation of the Coversheet seen in CPRS but is much easier to configure and rearrange by Physicians ...

![Coversheet -width70](images/cprs/Coversheet.png)

__Note__: the current VICS Server persists a User's CPRS preferences. In the final build of the Web Client and VICS Server, a user's Web Client preferences will also be persisted.

Note how the Patient has no allergies ...

![AllergiesWidgetEmpty -width70](images/webclient/AllergiesWidgetEmpty.png)

_Build 1_ of the Web Client let's you add one. Click on the _pencil_ icon on the title bar of the Allergy Widget and a popup will show which allows you to search for Allergins. It automatically searches once you've typed three or more letters ...

![AllergyEnterSearchChoc -width70](images/webclient/AllergyEnterSearchChoc.png)

This _autocomplete_ means you don't need to explicitly click on a _Search_ button as you would have to in CPRS ...

![CPRSAllergyEnterSearchChoc -width70](images/cprs/AllergyEnterSearchCho.png)

This approach to search will be followed throughout the Web Client and will demand appropriate support from the meta data services of the VICS Server.

Back in the Web Client, choose Chocolate and press ok. The next window let's you fill in Allergy details ...

![AllergyEnterChocolateFilled -width70](images/webclient/AllergyEnterChocolateFilled.png)

__Note__: Build 1 of the Web Client let's you enter _Historical_ Allergies. 

Back in the Coversheet, the Allergy Widget nows displays the newly entered Allergy ...

![AllergiesWidgetChocolateEntry -width70](images/webclient/AllergiesWidgetChocolateEntry.png)

Click on this entry and a popup will appear with the details you just entered ...

![AllergyDetailChocolate -width70](images/webclient/AllergyDetailChocolate.png)

The popup supports printing ...

![AllergyDetailPintButton](images/webclient/AllergyDetailPintButton.png)

And allows you to reconsider and mark the allergy as _entered in error_ ...

![AllergyDetailsEnterInErrorButton](images/webclient/AllergyDetailsEnterInErrorButton.png)

Clicking that icon leads to a dialog where you can comment on the error and confirm you want the allergy removed ...

![AllergyEnterInErrorReason -width70](images/webclient/AllergyEnterInErrorReason.png)

After you confirm removal, the Allergy Widget once again shows no active allergies ...

![AllergiesWidgetEmpty -width70](images/webclient/AllergiesWidgetEmpty.png)

The Web Client is compatible with CPRS. Start CPRS right after Allergy Entry and you'll see ...

![CPRSShowsAllergyEntered -width70](images/cprs/CPRSShowsAllergyEntered.png)

You can go on to mark that allergy as _entered in error_ ...

![CPRSEnterInError -width70](images/cprs/CPRSEnterInError.png)

a removal that will be reflected in the Web Client. You just need to hit refresh in the title bar of the Allergy widget.

__Note__: future releases of the client may support web sockets and event based updates.







