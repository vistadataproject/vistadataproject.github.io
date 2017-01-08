---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) --> GMR_Allergies-120_82 

 property | value 
--- | --- 
 id | GMR_Allergies-120_82
 fmId | 120.82
 label | GMR Allergies
 location | ^GMRD(120.82,
 description | Contains a listing of allergies from which user can select.\r \rPer VHA directive XXX, this file has been \locked down\ by Data\rStandardization (DS).  The file definition (i.e. data dictionary) shall\rnot be modified.  All additions, changes and deletions to entries in the\rfile shall be done by Enterprise Reference Terminology (ERT) using the\rMaster File Server (MFS), provided by Common Services (CS).  Creating\rand/or editing locally defined fields in the file are not permitted.  Use\rof locally defined fields that were created prior to VHA Directive XXX\rshall not be supported.

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| name | .01 | Name | The name of the allergy/adverse reaction. | STRING |  | REQUIRED, INDEXED |  | 
| allergy_type | 1 | Allergy Type | This field contains the type(s) for this allergy/adverse reaction .  The\ruser can enter the type(s) separated by commas, or the following codes:\rD=Drug, F=Food, O=Other.  If codes are used, do not use commas to separate\rmultiple codes.  Examples of valid entries are:  DRUG or DRUG, FOOD or D\ror DF or OTHER. | STRING |  | REQUIRED, INDEXED |  | 
| national_allergy | 2 | National Allergy | Indicates whether this allergy was distributed with the national release\ror is a locally added allergy. | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>NATIONAL ALLERGY</dd></dl>{:/} | 
| synonym | 3 | Synonym | A list of synonyms that can also be used to look up this allergy. | [STRING] |  |  |  | 
| drug_ingredients | 4 | Drug Ingredients | List of drug ingredients that comprise this particular allergy. | [POINTER] |  |  | [Drug_Ingredients-50_416](Drug_Ingredients-50_416.md) | 
| va_drug_classes | 5 | VA Drug Classes | List of VA Drug classes that comprise this reactant. | [POINTER] |  |  | [VA_Drug_Class-50_605](VA_Drug_Class-50_605.md) | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | This field identifies the Master entry for a VUID associated\rwith a Term/Concept. | BOOLEAN |  | REQUIRED | {false:0,true:1} | 
| vuid | 99.99 | VUID | VHA Unique ID (VUID).  A unique meaningless integer\rassigned to reference terms VHA wide. | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | Describes the pair Status and Effective Date/Time for each reference\rterm. | [OBJECT] |  |  | [Effective_Date_time-120_8299](#effective_date_time-120_8299)  | 

## Effective_Date_time-120_8299 

 property | value 
--- | --- 
 id | Effective_Date_time-120_8299
 label | Effective Date/time

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | This is the date/time when the Status of the reference term\rwas established. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'.  If\r'ACTIVE', then the term will be accessible by end-users to\rdocument a particular patient event.  If 'INACTIVE', then the term\rwill only be accessible by the application to display legacy data. | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 