---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; VA_Drug_Class-50_605 

<dl>
<dt>id</dt><dd>VA_Drug_Class-50_605</dd>
<dt>fmId</dt><dd>50.605</dd>
<dt>label</dt><dd>VA Drug Class</dd>
<dt>location</dt><dd>^PS(50.605,</dd>
<dt>description</dt><dd>Per VHA Directive 2005-044, this file has been \locked down\<br/>by Data Standardization (DS). The file definition (i.e. data dictionary)<br/>shall not be modified. All additions, changes and deletions to entries in<br/>the file shall be done by Enterprise Reference Terminology (ERT) using the<br/>Master File Server (MFS), provided by Common Services (CS). Creating and/or<br/>editing locally defined fields in the file are not permitted. Use of<br/>locally defined fields that were created prior to VHA Directive<br/>2005-044 shall not be supported.<br/> <br/>This file contains the VA Drug Classifications. Each five-character<br/>alpha-numeric code specifies a broad classification and a specific<br/>type of product. The first two characters are letters and form the<br/>mnemonic for the major classification (e.g., AM for antimicrobials).<br/>Characters 3 through 5 are numbers and form the basis for subclassification.<br/>The VA Drug Classification system classifies drug products, not<br/>generic ingredients. Drug products with local effects are classified<br/>by route of administration (e.g., dermatological, ophthalmic). If a<br/>product is not classified by route of administration, it is classified<br/>in most instances under a specific chemical or pharmacological<br/>classification (e.g., beta-blockers, cephalosporins). If a product<br/>is not classified by route of administration, or chemical or<br/>pharmacological subclassification, it may be classified under a<br/>therapeutic category (e.g., antilipemic agents, antiparkinson agents).</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| code | .01 | Code | {::nomarkdown}This is the five alphanumeric character code of the classification.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| classification | 1 | Classification | {::nomarkdown}This is the name of the classification.{:/} | STRING |  |  |  | 
| parent_class | 2 | Parent Class | {::nomarkdown}This is the parent class.{:/} | POINTER |  | INDEXED | [VA_Drug_Class-50_605](VA_Drug_Class-50_605.md) | 
| type-3 | 3 | Type | {::nomarkdown}This is the type of the classification.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>0</dt><dd>MAJOR</dd><dt>2</dt><dd>SUB-CLASS</dd><dt>1</dt><dd>MINOR</dd></dl>{:/} | 
| description | 4 | Description | {::nomarkdown}This is a description of the classification.{:/} | STRING |  |  |  | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | {::nomarkdown}This field identifies the Master entry for a VUID associated with a Term/Concept.{:/} | BOOLEAN |  | REQUIRED | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| vuid | 99.99 | VUID | {::nomarkdown}VHA Unique ID (VUID). A unique meaningless integer assigned to reference terms VHA wide.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | {::nomarkdown}Describes the pair Status and Effective Date/Time for each reference term.{:/} | [OBJECT] |  |  | [Effective_Date_time-50_60509](#Effective_Date_time-50_60509)  | 

## <a name="Effective_Date_time-50_60509"></a>Effective_Date_time-50_60509 

<dl>
<dt>id</dt><dd>Effective_Date_time-50_60509</dd>
<dt>label</dt><dd>Effective Date/time</dd>
</dl>

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | {::nomarkdown}This is the date/time when the Status of the term was established.{:/} | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | {::nomarkdown}The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If the term 'ACTIVE', then the term will be accessible by end-users to document a particular  patient event. If 'INACTIVE', then the term will only be accessible by the application<br/>to display legacy data.{:/} | ENUMERATION |  | REQUIRED | {::nomarkdown}<dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl>{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 2nd 2017, 6:55:25 am</p>{:/}