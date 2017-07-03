---
layout: default
title: VDM
---

## [VDM](TableOfContents) &#8594; GMR_Allergies-120_82
# GMR Allergies (120.82)
Contains a listing of allergies from which user can select.   Per VHA directive XXX, this file has been "locked down" by Data Standardization (DS).  The file definition (i.e. data dictionary) shall not be modified.  All additions, changes and deletions to entries in the file shall be done by Enterprise Reference Terminology (ERT) using the Master File Server (MFS), provided by Common Services (CS).  Creating and/or editing locally defined fields in the file are not permitted.  Use of locally defined fields that were created prior to VHA Directive XXX shall not be supported.

<dl>
<dt>Global</dt><dd>^GMRD(120.82,</dd>
<dt>Domain</dt><dd>Allergies</dd>
</dl>

### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Name**{::nomarkdown}<pre><code>  name</code></pre>{:/} | .01 | The name of the allergy/adverse reaction. | STRING | INDEXED<br/>REQUIRED | 
**Allergy Type**{::nomarkdown}<pre><code>  allergy_type</code></pre>{:/} | 1 | This field contains the type(s) for this allergy/adverse reaction .  The<br/>user can enter the type(s) separated by commas, or the following codes:<br/>D=Drug, F=Food, O=Other.  If codes are used, do not use commas to separate<br/>multiple codes.  Examples of valid entries are:  DRUG or DRUG, FOOD or D<br/>or DF or OTHER. | STRING | INDEXED<br/>REQUIRED | 
**National Allergy**{::nomarkdown}<pre><code>  national_allergy</code></pre>{:/} | 2 | Indicates whether this allergy was distributed with the national release<br/>or is a locally added allergy. | ENUMERATION |  | {::nomarkdown}NATIONAL ALLERGY: <em><strong>1</strong></em>{:/}
**Synonym**{::nomarkdown}<pre><code>  synonym</code></pre>{:/} | 3 | A list of synonyms that can also be used to look up this allergy. | STRING |  | 
**Drug Ingredients**{::nomarkdown}<pre><code>  drug_ingredients</code></pre>{:/} | 4 | List of drug ingredients that comprise this particular allergy. | POINTER |  | [Drug_Ingredients-50_416](Drug_Ingredients-50_416)
**VA Drug Classes**{::nomarkdown}<pre><code>  va_drug_classes</code></pre>{:/} | 5 | List of VA Drug classes that comprise this reactant. | POINTER |  | [VA_Drug_Class-50_605](VA_Drug_Class-50_605)
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated<br/>with a Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID).  A unique meaningless integer<br/>assigned to reference terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference<br/>term. | OBJECT |  | [Effective_Date_time-120_8299](#Effective_Date_time-120_8299)

### Subfile
#### <a name="Effective_Date_time-120_8299"></a>Effective Date/time

<dl>
<dt>ID</dt><dd>Effective_Date_time-120_8299</dd>
<dt>File Type</dt><dd>120.8299</dd>
<dt>Label</dt><dd>Effective Date/time</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the reference term<br/>was established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If<br/>'ACTIVE', then the term will be accessible by end-users to<br/>document a particular patient event.  If 'INACTIVE', then the term<br/>will only be accessible by the application to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:00 pm</p>{:/}