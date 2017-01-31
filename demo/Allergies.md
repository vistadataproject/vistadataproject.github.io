---
layout: default
title: MVDM Demo Allergies
---

Before running the following, follow the [MVDM Demo Introduction](https://github.com/vistadataproject/MVDM/wiki) on how to setup the MVDM management client and CPRS. 

The following shows creation, reading and removal of Patient Allergies using CPRS, VISTA's client, running over an MVDM-enabled VISTA. CPRS may think it's running over a 20 year old RPC interface but it's actually invoking RPCs through an _RPC Locker_ that runs over _MVDM_. The _MVDM Management Client_ shows not only what CPRS sends and receives but also the underlying MVDM activity.

Running the following demonstrates that re-housing the old RPC interface over a modern, CRUD-based object model provides a new level of auditing and access control for VISTA and lays bare the behavior of the system.

## Create an Allergy

Unlike other domains such as Problems or Documents, Allergies don't have their own tab in CPRS. You start Allergy creation with a right-click in the CPRS Chart's Allergy widget ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/CPRS/allergy-option-select.png" width=400px/>

Selecting _Enter a new Allergy_ takes you to a search dialog where you pick the _causative agent_ that the patient is allergic to. Here we search for and select _Chocolate_ ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/CPRS/allergy-search-chocolate.png" width=400px/>

And this takes us to the _Allergy Entry_ dialog. Allergies come in two flavors - historical and observed. We choose _Historical_ and fill in some details including the side effects and a comment ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/CPRS/allergy-create-chocolate-h.png" width=600px/>

Now switching over to the _RPC Events Tab_ of the _MVDM Management Client_, notice the **ORWDAL32 SAVE ALLERGY** entry ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-ORWDAL32-1.png" width=800px/>

Clicking on it will bring up details about this RPC. This was the call dispatched by CPRS to VISTA when you hit OK in the _Allergy Entry_ dialog above. The red box highlights a _transaction id_ assigned by MVDM and it groups all activity that arises from this one RPC call ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-ORWDAL32-SAVE-ALLERGY-h.png" width=600px/>

Now switch to the Management Client's _MVDM Events_ tab and hone in on the two create events that share the RPC call's _transaction id_ ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-list-alnas-h.png" width=600px/>

Click on the entry for _Allergy_ ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-create-allergy-h.png" width=600px/>

The RPC Locker implements the RPC call with an MVDM _createAllergy_ operation. After creating and updating appropriate information in VISTA, the MVDM will dispatch this create event. Unlike the cryptic RPC fields such as _GMRAORIG_, that event and the object that led to it have easy to understand properties such as _enteredBy_.

And the other event, the one for _AllergyAssessment_? That shows that one RPC call to create an Allergy actually leads to two objects in VISTA, one for the Allergy itself and another to record that a Patient has been assessed ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-create-assessment-h.png" width=600px/>

One RPC from CPRS is dispatched as it has been for twenty years but now MVDM renders every aspect of this activity transparent.

## Reading is locked and exposed too

Back in _CPRS_ and the cover sheet, we can click on the new allergy record and see its details ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/CPRS/allergy-cprs-detail-h.png" width=600px/>

And now the _Management Client_ shows that the query RPC, **ORQQAL DETAIL** used by this CPRS view is monitored by MVDM ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-orqqal-detail-h.png" width=600px/>

as is the underlying MVDM _DESCRIBE_ ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-describe-h.png" width=600px/>

The MVDM _DESCRIBE_ has well-structured, machine processable JSON and notice how User ("who described"), Facility ("where described") and the Patient ("for which Patient") are clearly distinguished. This level of nuance allows MVDM to offer a whole new level of auditing and access control for VISTA.

## Remove an Allergy and the Document it creates

CPRS let's a provider remove an allergy by declaring that it was _entered in error_. To do this, we press _Entered In Error_ in the Details window shown above. Up pops a dialog that let's a provider make a comment ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/CPRS/allergy-cprs-eie-h.png" width=600px/>

which leads MVDM to remove the allergy ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-mvdm-eie-h.png" width=600px/>

and in CPRS Chart, the Patient once again has no allergies ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/CPRS/allergy-cprs-empty-start.png" width=600px/>

But something else happened - a document is created that describes the error. Go to the notes tab and you'll see it ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/CPRS/allergy-cprs-document-eie-h.png" width=600px/>

and as expected, MVDM will note the creation with an event ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-eie-document-create-details-h.png" width=600px/>

As the MVDM events show, the MVDM implements the series of behaviors called for in CPRS - yes, an allergy is removed but also a specific type of document is created. In object terms, the Allergy object is removed and a Document object is created.

## No Known Allergies is not the same as No Allergies

An empty allergy list is ambiguous - does it mean a patient has no allergies or simply that her allergies have not been recorded. In CPRS and in the MVDM Allergy Model, you can explicitly note that a Patient has _no reaction_. Again right-click in the CPRS Chart's Allergy widget ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/CPRS/allergy-option-select.png" width=400px/>

but this time, select _No Known Allergies (NKA)_. When you do CPRS sends a **ORWDAL32 SAVE ALLERGY** RPC to VISTA ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-rpc-nka.png" width=600px/>

and yes you're right - that's the same RPC shown above creating a specific allergy, only this time it carries different arguments. The RPC interface works in mysterious ways. But MVDM clears up any mystery - this time an AllergyAssessment is created and it notes that the patient has "No Known Allergies" ...

<img src="https://github.com/vistadataproject/MVDM/blob/master/images/allergies/management-client/allergy-mc-allergy-assess-nka.png" width=600px/>  
