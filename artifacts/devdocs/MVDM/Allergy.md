---
layout: default
title: MVDM
---

#### [Developer Documentation](../index) &#187; [MVDM](TableOfContents) &#187; Allergy<br/>
<a name="top"></a>
# Allergy

### Patient Allergies

Contains patient allergy/adverse reaction information.

**Fileman ID:** 120.8

**Base VDM Class:** [Patient_Allergies-120_8](../VDM/Patient_Allergies-120_8)

## Property Summary

**Property Count:** 16

Type | Count
--- | ---
POINTER | 4
OBJECT | 5
ENUMERATION | 4
DATE-TIME | 1
DATE | 1
BOOLEAN | 1

**Sub-Object Count:** 5

ID | Label | Field ID
--- | --- | ---
1 | [Comment](#Comment) | Comment
2 | [Id Band Marked](#IdBandMarked) | IdBandMarked
3 | [Reactant Details](#ReactantDetails) | ReactantDetails
4 | [Reaction](#Reaction) | Reaction
5 | [Removal Details](#RemovalDetails) | RemovalDetails

[&uarr; Return to top](#top)<br/>

## Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Patient**{::nomarkdown}<pre><code>  patient</code></pre>{:/} | POINTER | patient | $PATIENTID |  | 
**Reactant**{::nomarkdown}<pre><code>  reactant</code></pre>{:/} | POINTER | *GENERATED* |  | REQUIRED | 
**Reactant Details**{::nomarkdown}<pre><code>  reactantDetails</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [ReactantDetails](#ReactantDetails)
**Allergy Type**{::nomarkdown}<pre><code>  allergyType</code></pre>{:/} | ENUMERATION | *GENERATED* |  | REQUIRED | {::nomarkdown}0: <em><strong>DRUG</strong></em><br/>1: <em><strong>DRUG, FOOD</strong></em><br/>2: <em><strong>FOOD</strong></em><br/>3: <em><strong>OTHER</strong></em>{:/}
**Mechanism**{::nomarkdown}<pre><code>  mechanism</code></pre>{:/} | ENUMERATION | mechanism |  | REQUIRED | {::nomarkdown}0: <em><strong>ALLERGY</strong></em><br/>1: <em><strong>PHARMACOLOGIC</strong></em><br/>2: <em><strong>UNKNOWN</strong></em>{:/}
**Origination Date/Time**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | origination_date_time | $NOW |  | 
**Originator**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | originator | $USERID |  | 
**Facility where entered**{::nomarkdown}<pre><code>  enteredAtFacility</code></pre>{:/} | POINTER | *GENERATED* |  |  | 
**Observed/Historical**{::nomarkdown}<pre><code>  observedOrHistorical</code></pre>{:/} | ENUMERATION | observed_historical |  | REQUIRED | {::nomarkdown}0: <em><strong>OBSERVED</strong></em><br/>1: <em><strong>HISTORICAL</strong></em>{:/}
**Reactions**{::nomarkdown}<pre><code>  reactions</code></pre>{:/} | OBJECT | reactions |  |  | [Reaction](#Reaction)
**Allergy Severity**{::nomarkdown}<pre><code>  allergySeverity</code></pre>{:/} | ENUMERATION | Adverse_Reaction_Reporting-120_85:severity |  |  | {::nomarkdown}0: <em><strong>MILD</strong></em><br/>1: <em><strong>MODERATE</strong></em><br/>2: <em><strong>SEVERE</strong></em>{:/}
**Date Occurred**{::nomarkdown}<pre><code>  dateOccurred</code></pre>{:/} | DATE | Adverse_Reaction_Reporting-120_85:date_time_of_event |  |  | 
**Id Band Marked**{::nomarkdown}<pre><code>  idBandMarked</code></pre>{:/} | OBJECT | id_band_marked |  | CREATE<br/>UPDATE | [IdBandMarked](#IdBandMarked)
**Removed**{::nomarkdown}<pre><code>  isRemoved</code></pre>{:/} | BOOLEAN | entered_in_error |  |  | 
**Removal Details**{::nomarkdown}<pre><code>  removalDetails</code></pre>{:/} | OBJECT | *GENERATED* |  |  | [RemovalDetails](#RemovalDetails)
**Comments**{::nomarkdown}<pre><code>  comments</code></pre>{:/} | OBJECT | *GENERATED* |  | CREATE<br/>UPDATE | [Comment](#Comment)

[&uarr; Return to top](#top)<br/>

## Sub-Objects
### <a name="Comment"></a>1. Comment

**Field ID:** Comment

#### Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time Comment Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | *CUSTOM* | $NOW |  | 
**User Entering**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | *CUSTOM* | $USERID |  | 
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | STRING | *CUSTOM* |  | REQUIRED<br/>UPDATE | 

[&uarr; Return to top](#top)<br/>


### <a name="IdBandMarked"></a>2. Id Band Marked

**Field ID:** IdBandMarked

#### Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | date_time | $NOW |  | 
**User Entering**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | user_entering | $USERID |  | 

[&uarr; Return to top](#top)<br/>


### <a name="ReactantDetails"></a>3. Reactant Details

**Field ID:** ReactantDetails

#### Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Drug Ingredients**{::nomarkdown}<pre><code>  drugIngredients</code></pre>{:/} | POINTER | *CUSTOM* |  |  | 
**Drug Classes**{::nomarkdown}<pre><code>  drugClasses</code></pre>{:/} | POINTER | *CUSTOM* |  |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Reaction"></a>4. Reaction

**Field ID:** Reaction

#### Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Reaction**{::nomarkdown}<pre><code>  reaction</code></pre>{:/} | POINTER | reaction |  |  | 
**Date/Time of Reaction**{::nomarkdown}<pre><code>  dateTimeOccurred</code></pre>{:/} | DATE-TIME | date_entered |  |  | 

[&uarr; Return to top](#top)<br/>


### <a name="RemovalDetails"></a>5. Removal Details

**Field ID:** RemovalDetails

#### Properties

Label/Field ID | Datatype | FromVDM | Default | Attributes | Range
--- | --- | --- | --- | --- | ---
**Date/Time Entered**{::nomarkdown}<pre><code>  dateTimeEntered</code></pre>{:/} | DATE-TIME | *CUSTOM* | $NOW |  | 
**Entered By**{::nomarkdown}<pre><code>  enteredBy</code></pre>{:/} | POINTER | *CUSTOM* | $USERID |  | 
**Comment**{::nomarkdown}<pre><code>  comment</code></pre>{:/} | STRING | *CUSTOM* |  |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}