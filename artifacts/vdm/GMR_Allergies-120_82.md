---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; GMR_Allergies-120_82 

{::nomarkdown}<dl>
<dt>id</dt><dd>GMR_Allergies-120_82</dd>
<dt>fmId</dt><dd>120.82</dd>
<dt>label</dt><dd>GMR Allergies</dd>
<dt>location</dt><dd>^GMRD(120.82,</dd>
<dt>description</dt><dd>{::nomarkdown}Contains a listing of allergies from which user can select.<br/> <br/>Per VHA directive XXX, this file has been \locked down\ by Data<br/>Standardization (DS).  The file definition (i.e. data dictionary) shall<br/>not be modified.  All additions, changes and deletions to entries in the<br/>file shall be done by Enterprise Reference Terminology (ERT) using the<br/>Master File Server (MFS), provided by Common Services (CS).  Creating<br/>and/or editing locally defined fields in the file are not permitted.  Use<br/>of locally defined fields that were created prior to VHA Directive XXX<br/>shall not be supported.{:/}</dd>
</dl>{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | {::nomarkdown}The name of the allergy/adverse reaction.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| allergy_type | 1 | Allergy Type | {::nomarkdown}This field contains the type(s) for this allergy/adverse reaction .  The<br/>user can enter the type(s) separated by commas, or the following codes:<br/>D=Drug, F=Food, O=Other.  If codes are used, do not use commas to separate<br/>multiple codes.  Examples of valid entries are:  DRUG or DRUG, FOOD or D<br/>or DF or OTHER.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| national_allergy | 2 | National Allergy | {::nomarkdown}Indicates whether this allergy was distributed with the national release<br/>or is a locally added allergy.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>NATIONAL ALLERGY</dd></dl>{:/} | 
| synonym | 3 | Synonym | {::nomarkdown}A list of synonyms that can also be used to look up this allergy.{:/} | [STRING] |  |  |  | 
| drug_ingredients | 4 | Drug Ingredients | {::nomarkdown}List of drug ingredients that comprise this particular allergy.{:/} | [POINTER] |  |  | {id:Drug_Ingredients-50_416} | 
| va_drug_classes | 5 | VA Drug Classes | {::nomarkdown}List of VA Drug classes that comprise this reactant.{:/} | [POINTER] |  |  | {id:VA_Drug_Class-50_605} | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated<br/>with a Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID).  A unique meaningless integer<br/>assigned to reference terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference<br/>term.{:/} | [OBJECT] |  |  | [Effective_Date_time-120_8299](#Effective_Date_time-120_8299)  | 

## <a name="Effective_Date_time-120_8299"></a>Effective_Date_time-120_8299 

{::nomarkdown}<dl>
<dt>id</dt><dd>Effective_Date_time-120_8299</dd>
<dt>label</dt><dd>Effective Date/time</dd>
</dl>{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the reference term<br/>was established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If<br/>'ACTIVE', then the term will be accessible by end-users to<br/>document a particular patient event.  If 'INACTIVE', then the term<br/>will only be accessible by the application to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 30th 2017, 7:58:46 pm</p>{:/}